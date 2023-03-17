//@ts-nocheck
import { Writable, writable, get } from "svelte/store";
import { Octokit } from "@octokit/rest";
import { PackageFile, Repository } from "@/classes/package_file";
import { languages, currentEditorFile, currentEditorLanguage, totalFiles } from "./editor";
import flatc from "../../packages/flatbuffers_wasm/dist/flatc.mjs";
import localForage from "localforage";

export let sTimeout = 1000 * 60 * 60 * 30;
let storageKey = "Standards";
let timeStampKey = "Standards:timestamp";
export let last: Writable<any> = writable(0);
export const octokit = new Octokit();

export const ownerObject: Repository = new Repository();

export const standards: Writable<Array<PackageFile>> = writable([]);

export const getStandards = async (): Promise<void> => {
    let data: any = await localForage.getItem(storageKey);
    last.set(await localForage.getItem(timeStampKey));
    let _last = get(last);
    if (!data?.length || !_last || Date.now() > sTimeout / 10 + _last) {
        data = (await octokit.rest.repos.getContent(ownerObject)).data;
        localForage.setItem(storageKey, data);
        localForage.setItem(timeStampKey, Date.now());
    }
    standards.set(data);
}



export let mFS: any;

export const en = { encoding: "utf8" };

export const getCode = async (repoData) => {

    if (!repoData?.IDL) return;
    flatc({
        noInitialRun: true,
    }).then((m) => {
        let _idl = repoData.IDL;
        if (get(currentEditorLanguage) !== 7) {
            _idl = _idl.replace(/\s{0,}=\s{0,}null/g, "");
        }
        mFS = m.FS;
        m.FS.writeFile("/main.fbs", _idl);
        let args = languages[get(currentEditorLanguage)][0];
        if (!Array.isArray(args)) {
            args = [args];
        }
        args = [...args, "/main.fbs"];
        m.main(args);
        totalFiles.set(m.FS.readdir("/").filter((a) => {
            return !~[
                ".",
                "..",
                "tmp",
                "home",
                "dev",
                "proc",
                "main.fbs",
            ].indexOf(a);
        }));
        currentEditorFile.set(get(totalFiles)[0]);
    });
};