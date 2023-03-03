import Home from "@/lib/Pages/Home.svelte";
import Standards from "@/lib/Pages/Standards.svelte";
import Standard from "@/lib/Pages/Standard.svelte";
import Code from "@/lib/Pages/Code.svelte";
import Playground from "@/lib/Pages/Playground.svelte";
//@ts-ignore
import { Writable, writable } from "svelte/store";

export const routes = {
    // Exact path
    "/": Home,
    "/Standards": Standards,
    "/Code": Code,
    "/Standard/:name?/:subpage?": Standard
};

export const subMenu: Writable<number> = writable(0)