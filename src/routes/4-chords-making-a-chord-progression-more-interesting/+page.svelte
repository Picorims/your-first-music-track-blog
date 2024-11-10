<script lang="ts">
	/*
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { config } from '$lib/config';
	import TechTerm from '$lib/TechTerm.svelte';
	import { BlogPage, FramedTextBlock, Image, Audio, Video } from 'svelte-blogging-kit';

	import { base } from '$app/paths';
	import ExternalLink from '$lib/ExternalLink.svelte';
	import Chord from '$lib/Chord.svelte';

	import chordProgressionC3 from './3-chord_progression.png';
	import chordProgressionMusicSheetC3 from './3-chord_progression_music_sheet.png';
	import chordProgressionAudioC3 from './3-chord_progression.wav';

	import chordsAudio from './your_first_music_track_blog__chapter_3__4__chords.mp3';
	import chordsVideo from './chord_progression_improved.mp4';
	import chordsP1 from './chords_variation_p1.png';
	import chordsP2 from './chords_variation_p2.png';
	import chordsAnnotated from './chords_variation_full_annotated.png';
</script>

<BlogPage
	{config}
	postTitle="4 - Chords: Making a chord progression more interesting"
	{postContent}
	date="11/??/2024"
	categories={['Music Theory']}
	urlComments="https://your-first-music-track.weebly.com/blog/4-chords-making-a-chord-progression-more-interesting"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<p>
		In the last chapter, I tried to explain the fundamentals of writing a basic chord progression.
		In this post, I will show you how we can make it sound more interesting, by introducing all
		kinds of variations.
	</p>

	<FramedTextBlock
		title="Note"
		content="My chord progression example is based on a ternary pattern introduced optionally at chapter 2. But it works exactly the same with any grid or time signature!"
		variant="note"
	/>

	<h2>What we start from</h2>

	<p>As a reminder, here is the chord progression we ended up with in the last chapter:</p>

	<Image
		src={base + chordProgressionC3}
		alt="Chord progression as MIDI from chapter 3"
		caption="Chord progression as MIDI from chapter 3"
	/>
	<Image
		src={base + chordProgressionMusicSheetC3}
		alt="Chord progression as music sheet from chapter 3"
		caption="Chord progression as music sheet from chapter 3"
	/>
	<Audio src={base + chordProgressionAudioC3} />

	<p>
		It sounds good, and actually some songs keep things simple like that. However, it is perfectly
		possible and easy to make it slightly more sophisticated, without compromising on the simplicity
		of it.
	</p>

	<h2>Chords variations, or how to season your chords</h2>

	<p>With a bit of seasoning, this is what I personally came up with:</p>

	<Audio src={base + chordsAudio} />
	<Video src={base + chordsVideo} />
	<Image
		src={base + chordsAnnotated}
		alt="Chords variations, annotated with note names to help you. Notice that I doubled the loop length, duplicating the pattern to slightly change the second occurence."
		caption="Chords variations, annotated with note names to help you. Notice that I doubled the loop length, duplicating the pattern to slightly change the second occurence."
	/>

	<h3>Variation inside the chord progression</h3>

	<p>
		Let's first focus on the first iteration, to talk about what we can change on the chord
		progression itself.
	</p>

	<Image
		src={base + chordsP1}
		alt="Chords variations, first part"
		caption="Chords variations, first part"
	/>

	<p>
		The first useful tip is to <strong>change where chords start and stop</strong>. Notice how the
		first chord, <Chord name="C" />, ends slightly before the next bar. At the same time, the next
		chord, <Chord name="Em" />, starts slightly before as well to adjust the change. This kind of
		basic anticipation breaks the monotony a bit. I did it quite a lot here, to it sounds a bit like
		I shifted the whole pattern and only created the effect at the start. But you can do it much
		more sparingly, it will still sound good. I also shortened the two <Chord name="G" /> chords, they
		are now more transition chords, which also conveys some kind of nice melody.
	</p>

	<p>
		Another thing you can do is to <strong>alter the chords themselves</strong>. There are a
		<em>lot</em>
		of different types of chords, and I don't know most of them (<ExternalLink
			href="https://en.wikipedia.org/wiki/List_of_chords">Wikipedia</ExternalLink
		>
		and <ExternalLink href="https://hellomusictheory.com/learn/types-of-chords/"
			>this article</ExternalLink
		> alone prove it). I don't want to learn them all either. Instead, I follow those three approaches:
	</p>

	<ul>
		<li>
			<strong>Try random things:</strong> it might sound stupid, but sometimes it works. I discovered
			nice patterns that way! I will admit though that it is harder to find something that sounds good
			that way when you begin. However, I did use this from the very start, and it still helped me a
			lot!
		</li>
		<li>
			<strong>Search how to write the genre I target:</strong> Sometimes genres have chords typically
			used with them, or signature patterns that makes you immediately say: that's this genre. It can
			give you a hint at how to tweak your chords, or even give you a recipe.
		</li>
		<li>
			<strong>Keep in mind a short list of chords you love, or know what they do:</strong> basically
			make yourself a cheat-sheet. Here are some examples (I will use <Chord name="C" /> as a basis for
			the examples):
			<ul>
				<li>
					<ExternalLink href="https://en.wikipedia.org/wiki/Major_seventh_chord"
						><em>Major seventh chord</em></ExternalLink
					> (like <Chord name="CM7" />): Sounds dreamy (used in Animal Crossing music at sunset for
					example).
				</li>
				<li>
					<ExternalLink href="https://en.wikipedia.org/wiki/Minor_seventh_chord"
						><em>Minor seventh chord</em></ExternalLink
					> (like <Chord name="Cm7" />): Signature chord of blues, quite common in general, sounds
					happy and sad at the same time. I use it at bar 4 with a <Chord name="Am7" />.
				</li>
				<li>
					<ExternalLink href="https://en.wikipedia.org/wiki/Suspended_chord"
						><em>Suspended chord</em></ExternalLink
					> (like <Chord name="Csus4" /> or <Chord name="Csus2" />): Sounds happy (or dreamy/strange
					in some contexts), and like a teaser to something coming after.
				</li>
				<li>
					<ExternalLink href="https://en.wikipedia.org/wiki/Diminished_triad"
						><em>Diminished chord</em></ExternalLink
					> and <ExternalLink href="https://en.wikipedia.org/wiki/Augmented_triad"
						><em>Augmented chord</em></ExternalLink
					> (like <Chord name="Cdim" /> or <Chord name="Caug" />): Fear, stress, tension, suspense,
					you name it. You can't miss it. It sounds like you messed up, but no. Also contains the <ExternalLink
						href="https://en.wikipedia.org/wiki/Tritone">tritone</ExternalLink
					>, which was associated with the devil at some point in the Middle Age.
				</li>
			</ul>
		</li>
	</ul>

	<h3>Variation across loops</h3>

	<p>
		Another good thing to do sometimes is just to have variations of the same chord progression to
		make something bigger and less repetitive. It isn't as efficient as a 8 bars chord progression
		from the ground up, but it still make it sound less repetitive.
	</p>

	<Image
		src={base + chordsP2}
		alt="Chords variations, second part"
		caption="Chords variations, second part"
	/>

	<p>
		Here, I add a transition chord at 7.4 between <Chord name="Am" /> and <Chord name="Am7" />.
		That's an example of a random experiment I liked (it could be <ExternalLink
			href="https://www.scales-chords.com/findnotes_en.php?n1=A&n2=C&n3=F&n4=&n5=&n6=&optbass=1&strict=1"
			>a bunch of things</ExternalLink
		> but here the fact that it sounds good is enough for me, I won't make a music sheet out of it so...).
		I also turned the last <Chord name="G" /> into a <Chord name="G6" />. It makes some variation,
		ease transition with <Chord name="Am7" /> through the shared E, and creates a surprise that still
		sounds good (another randomly good finding here!).
	</p>

	<FramedTextBlock
		title="Tip"
		content="A music that is too predictable can become boring, so don't hesitate to surprise your listener! Add unexpected things here and there."
		variant="tip"
	/>

	<h2>Closing words</h2>

	<p>
		With all that said, you now have some tools to make more spicy chord progressions! It is ready
		for our next chapter: the melody and the bass line! As always, don't hesitate to ask questions,
		and do not worry if you read through it without understanding much of it. It is my fault for
		choosing such a hard blog topic after all.
	</p>

	<p>
		Anyway, now I only have to wish you a good day, afternoon, evening or night, and I see you in
		the next post! (Or in the comments!)
	</p>

	<p>~ Charly</p>

	<p>
		PS: Complain as you want, the post is shorter for the second time in a row 😉. Twice shorter
		than the last one actually.
	</p>
{/snippet}
