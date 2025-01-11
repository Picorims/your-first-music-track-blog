<script lang="ts">
	import { dev } from "$app/environment";

    /*
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */
</script>

<p><a href="https://your-first-music-track.weebly.com/blog">Go to the list of blog posts (weebly)</a></p>

{#if dev}
    <p>Development mode</p>
    <ul>
        <li><a href="./welcome-aboard">post 1</a></li>
        <li><a href="./2-drums-understanding-rhythm">post 2</a></li>
        <li><a href="./3-chords-discovering-scales-theory">post 3</a></li>
        <li><a href="./4-chords-making-a-chord-progression-more-interesting">post 4</a></li>
        <li><a href="./5-melody-and-bass-making-the-song-memorable">post 5</a></li>
        <li><a href="./6-arrangement-from-a-loop-to-a-song">post 6</a></li>
        <li><a href="./7-effects-giving-depth-to-instruments">post 7</a></li>
        <li><a href="./8-effects-in-practice">post 8</a></li>
    </ul>
{/if}

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }
    p {
        text-align: center;
        font-size: 1.5rem;
    }
    ul {
        text-align: center;
        font-size: 1.2rem;
    }
</style>