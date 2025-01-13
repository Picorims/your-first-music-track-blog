<script lang="ts">
	/*
    Copyright (c) 2025 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { config } from '$lib/config';
	import { BlogPage, FramedTextBlock, Audio } from 'svelte-blogging-kit';
	import { base } from '$app/paths';

	import songNoMixingNoMastering from './full_song_no_mixing_no_mastering.mp3';
	import ExternalLink from '$lib/ExternalLink.svelte';
	import TechTerm from '$lib/TechTerm.svelte';
</script>

<BlogPage
	{config}
	postTitle="6 - Arrangement: From a Loop to a Song"
	{postContent}
	date="01/07/2025"
	categories={['Music Theory']}
	urlComments="https://your-first-music-track.weebly.com/blog/6-arrangement-from-a-loop-to-a-song"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<p>First things first, happy new year! 🎉</p>
	<p>
		Today, we are going to talk about the Nemesis of song writers: turning a loop into a song (which
		could be a new year resolution!). Not because it is complicated, but because it can be time
		consuming, and most importantly requires inspiration. Which is one of the reasons why most of
		what musicians produce never leave their studio, by the way. So let's try to, hopefully, turn
		our loop from last chapter into a full track!
	</p>

	<h2>The different parts of a song</h2>
	<p>
		In popular and radio music, there are a few distinctive parts that are regularly put together in
		predefined patterns. And they all play a specific role in the song:
	</p>
	<ul>
		<li>
			<strong>The <TechTerm>intro</TechTerm>:</strong> it sets the mood of the track, introduce the player
			to the ambiance and dynamics of it. It is also what leaves the first impression, and so should
			not be neglected!
		</li>
		<li>
			<strong>The <TechTerm>chorus</TechTerm>:</strong> it is usually the most memorable part, the one
			everyone will sing along. It is repeated multiple times as a point of reference for the listener,
			and if lyrics are included, it reflects the core of the story.
		</li>
		<li>
			<strong>The <TechTerm>verse</TechTerm>:</strong> it is what tells the story and where variation
			will usually lie, if any. It is common that the melody and chord progression stay almost the same,
			but the lyrics change. Eventually, the melody is adapted to fit the lyrics.
		</li>
		<li>
			<strong>The <TechTerm>bridge</TechTerm>:</strong> it breaks the monotony of the song and can serve
			either as an interlude, or as a transition to another phase of the song. You will commonly find
			improvised solos in this part (such as from a guitar, a piano, etc.).
		</li>
		<li>
			<strong>The <TechTerm>outro</TechTerm>:</strong> it closes the story, either abruptly or softly.
			It sometimes even is omitted if the song stops out of nowhere.
		</li>
	</ul>
	<p>
		A track using the radio format will usually last around 3'30", which as usual is not an absolute
		rule, but rather an average. One of the most common patterns is as follows:
	</p>
	<p>
		<strong>Intro - Verse - Chorus - Verse - Chorus - Bridge - Chorus - Outro</strong>
	</p>
	<p>
		It is up to you to decide if your loop will be the <TechTerm>chorus</TechTerm>, the <TechTerm
			>verse</TechTerm
		>, etc. depending of how you are inspired. But that's where it gets hard, because you have to
		write all those parts, and they have to fit together! I have done it to showcase it but you are
		not obligated to do it, the rest of the chapters can be done with only a loop. Or you can do
		some parts, as you wish (that is, if you are actually following along of course).
	</p>
	<p>
		There is no order in the whole process of writing all of them, it is all very organic, based on
		your inspiration, and that include <TechTerm>transitions</TechTerm> (which I'll explain right after).
	</p>
	<p>
		The only thing to note when you start thinking about chaining them together is the attention
		span of the listener. If it gets too repetitive, they might skip the music. You also want to
		balance the overall energy so that the drop doesn't sound bland and disappointing.
	</p>

	<h2>Transitions</h2>
	<p>
		While you want to try to make the different parts go well together, usually the transition
		between two parts will be quite abrupt. That's where (actual) <TechTerm>transitions</TechTerm> come
		in. Their goal is to tease or smoothen the passing from one part to another. It can be simple, such
		as a noise <TechTerm>sweep up</TechTerm> or <TechTerm>sweep down</TechTerm>, an entire <TechTerm
			>pre-drop</TechTerm
		>
		part full of <TechTerm>automation</TechTerm> in EDM music, a simple <TechTerm
			>reversed cymbal</TechTerm
		>, etc. It can even be a silence!
	</p>

	<h2>Embellishment</h2>
	<p>
		Towards the end, you can also add details such as an ambiance background in the intro, sound
		effects or isolated short instrument tracks along the parts to spice things up a bit more, and
		reduce repetition. There is no science here, just experiment!
	</p>

	<h2>Example</h2>
	<p>
		Here is my own try on the loop we worked on during the last chapters. Can you figure out the
		structure and the parts of it?
	</p>

	<FramedTextBlock
		title="Note"
		content="The effects, mixing and mastering are disabled here! We will discuss these topics in the coming chapters. Only volume and some automation are kept. So, it is still somewhat of a draft!"
		variant="note"
	/>

	<Audio src={songNoMixingNoMastering} />
	<p>
		License of the track: <ExternalLink href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
			>CC BY-NC-ND 4.0</ExternalLink
		>.
	</p>

	<h2>Closing words</h2>

	<p>
		While we start to have something that resemble to a song, we are still far from done! Next time,
		we will talk about <TechTerm>effects</TechTerm>, which give more personality to the instruments,
		and help making it more immersive and polished.
	</p>

	<p>
		In the meantime, have a good day, afternoon, evening or night, and see you in the next post!
	</p>
	<p>~ Charly</p>
{/snippet}
