import { dev } from "$app/environment";
import type { Config } from "svelte-blogging-kit";

export const config: Config = {
    title: "Your First Music Track",
    titleUrl: "https://your-first-music-track.weebly.com/",
    theme: "custom-theme",
    authorDescription: "I'm Charly - an apprentice IT engineer passionate about music. I started teaching myself music composition out of curiosity many years ago after starting to learn playing the guitar. I created this blog to share the knowledge I accumulated throughout the years and will try to give you the basis for starting this journey yourself!",
    noBodySpacing: true,
    urlAllPosts: "https://your-first-music-track.weebly.com/blog",
    devEnv: dev,
}