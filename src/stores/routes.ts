import Home from "@/lib/Pages/Home.svelte";
import Standards from "@/lib/Pages/Standards.svelte";
import Standard from "@/lib/Pages/Standard.svelte";
import Playground from "@/lib/Pages/Playground.svelte";
import Links from "@/lib/Pages/Links.svelte";
//@ts-ignore
import { Writable, writable } from "svelte/store";

export const routes = {
    // Exact path
    "/": Home,
    "/Standards": Standards,
    "/Standard/:name?/:subpage?": Standard
};

export const subMenu: Writable<number> = writable(0)