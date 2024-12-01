<script lang="ts">
	/*
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { config } from '$lib/config';
	import TechTerm from '$lib/TechTerm.svelte';
	import { BlogPage, FramedTextBlock, Image, Audio } from 'svelte-blogging-kit';
	import { base } from '$app/paths';

	import melody from './melody_only.wav';
	import bass from './bass_only.mp3';
	import bassLineAnnotated from './bass_line_annotated.png';
	import fullSong from './your_first_music_track_blog__chapter_5__melody__bass.mp3';
	import fullSongPic from './full_song_midi.png';
	import melodyAnalysis from './melody_analysis_v2.png';
	import Chord from '$lib/Chord.svelte';
</script>

<BlogPage
	{config}
	postTitle="5 - Melody and Bass: Making the Song Memorable"
	{postContent}
	date="12/01/2024"
	categories={['Music Theory']}
	urlComments="https://your-first-music-track.weebly.com/blog/5-melody-and-bass-making-the-song-memorable"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<p>
		In the last chapter, we improved our chord progression to make it sound more interesting. Today
		is the time to give it a story!
	</p>
	<h2>The melody</h2>
	<p>
		A melody tells a story, even without lyrics, and even if it is just emotions. It is also what
		the listener remembers and sing along, so it plays an important role in your song.
	</p>
	<p>
		Melody is all about experimenting until we find something that sounds nice (a lot of what
		musicians write never leave their studio!). But it can be hard for beginners especially if you
		never played an instrument.
	</p>
	<p>
		Thankfully, we can use a simple scale that all instrument players know for improvising: the <TechTerm
			>pentatonic scale</TechTerm
		>. In our <TechTerm>C Major scale</TechTerm> (hint: school), the pentatonic (major) scale are the
		notes
		<strong>C, D, E, G and A</strong> (the 1st, 2nd, 3rd, 5th and 6th notes of the scale). You know what
		is nice with these five notes? Whatever you play, it always sounds good! Try it out if you don't
		trust me.
	</p>
	<p>Okay, that's cool, but how do we use them? Well, here are some tips to guide you:</p>
	<ol>
		<li>
			Use patterns (rhythm and/or notes) that you repeat to make it easier to remember (think about
			film themes, say Harry Potter or Star Wars).
		</li>
		<li>
			Don't stick to three or four notes in the same <TechTerm>octave</TechTerm>, don't hesitate to
			go higher or lower. But not too much, you don't want it to be eaten by another instrument's
			frequencies! Make it high enough in pitch so it is easy to hear and recognize.
		</li>
		<li>
			Have the chords playing in the background to guide you. You can reuse the notes of the chord
			in your melody too if you want to.
		</li>
		<li>
			Make use of silence for emphasis. Think about it as punctuation in a text, it can help
			structure your melodic sentences.
		</li>
		<li>As explained in a previous chapter, add a bit of surprise!</li>
	</ol>
	<p>
		Now it is your turn! And as always don't be too harsh on yourself! Here is mine for example:
	</p>

	<Audio src={base + melody} loop />
	<Image src={base + melodyAnalysis} alt="Melody analysis." caption="Melody analysis." />

	<p>
		And here is the melody together with the rest of the song (The bass line discussed below is
		included, and the chord at the end of the 7th bar was slightly changed):
	</p>
	<Audio src={base + fullSong} loop />

	<Image
		src={base + fullSongPic}
		alt="Full song MIDI tracks."
		caption="Full song MIDI tracks. The bass is made stronger by combining a piano and a bass."
	/>

	<FramedTextBlock
		title="Tip"
		content="As I said, this is a great scale for improvisation, you can use it to try playing any instrument even if you never learnt a music on it! All those tips could be applied to improvisation as well, although you tend to go a bit crazier in complexity."
		variant="tip"
	/>
	<h2>The bass</h2>
	<p>You know what? Writing the bass line is almost like writing a melody, except that:</p>
	<ol>
		<li>It can be much simpler, or be as complex.</li>
		<li>
			It emphasize much more the chords by playing a lot their <TechTerm>fundamentals</TechTerm>.
			For instance, you usually want to play a G on top of a <Chord name="G" /> chord. It helps to solve
			ambiguous situations for the brain by telling it: "this is my fundamental, so please hear my chord
			like this". It does not always work, but it definitely has an impact on their interpretation.
		</li>
		<li>It is very low in pitch.</li>
		<li>
			It is much more subtle to hear, and depending of the mixing can be hard to hear on some
			devices. (The fix here is on the mixing side, where the bass needs some high frequencies as
			well to be heard on all devices. But that's for another chapter!)
		</li>
	</ol>

	<Audio src={base + bass} loop />
	<Image
		src={base + bassLineAnnotated}
		alt="Bass line annotated."
		caption="Bass line annotated. The red lines represent notes highlighting the chords (the last G anticipates the following G6 chord)."
	/>

	<h2>Closing words</h2>

	<p>
		There is nothing fundamentally hard technically in writing a melody or a bass line. The hardest
		is making it sound good, because it is much more based on feelings than rules. Your brain also
		has to be compliant by giving you inspiration! (I hate when my best ideas pop up at work or in
		the metro!) At the end of the day, it is a lot of trial and error. Practice do help a lot. If it
		is really hard though, listening to other songs and taking inspiration by analyzing it can help
		a lot. I listened to a dozen of songs and improvised for a good thirty minutes before figuring
		out a melody I liked for this song.
	</p>

	<p>
		Anyway, that's it for today! And remember to not put too much pressure on yourself, enjoying the
		process and having fun is the most important! Next time, we will learn how to make a fully
		fledged song by thinking about the different parts of it.
	</p>

	<p>
		In the meantime, have a good day, afternoon, evening or night, and see you in the next post!
	</p>

	<p>~ Charly</p>

	<p>PS: Yup, still shorter than the last one! 😉</p>
{/snippet}
