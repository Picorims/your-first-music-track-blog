<script lang="ts">
	/*
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { config } from '$lib/config';
	import { BlogPage, FramedTextBlock, Image, FileAttachment, Audio } from 'svelte-blogging-kit';
</script>

<BlogPage
	{config}
	postTitle="3 - Chords: Discovering Scales Theory"
	{postContent}
	date="??/??/????"
	categories={['Music Theory']}
	urlComments="https://your-first-music-track.weebly.com/blog/3-chords-discovering-scales-theory"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<p>
		In the last chapter, we learnt about how duration is represented in music. Today we are going to
		explore briefly how notes are represented. I will not cover all the fundamentals as it would
		make this post too long, but just enough to write your first chord progression!
	</p>

	<h2>Tones and semitones</h2>

	<p>
		In western music, a semitone is the smallest step between two notes. On the MIDI grid, going up
		one row is going up by a semitone in pitch. A tone is just two semitones or two steps. When we
		go up twelve semitones, we reach an octave, at which point notes just repeat themselves with a
		higher pitch.
	</p>

	<p>
		To illustrate this, let's look at the most common music scale, C Major. I won't explain the name
		here but basically it is what you learn at school: do re mi fa sol la ti do! Note that the last
		do is the octave of the first do: it is the same note but higher in pitch! Here is how it looks
		when applying those units to the C Major scale:
	</p>
{/snippet}
