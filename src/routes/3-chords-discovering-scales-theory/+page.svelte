<script lang="ts">
	/*
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { config } from '$lib/config';
	import TechTerm from '$lib/TechTerm.svelte';
	import { BlogPage, FramedTextBlock, Image, FileAttachment, Audio } from 'svelte-blogging-kit';

	import cScale from './C_scale.png';
	import cSaleMidi from './C_scale_midi.png';
	import cScaleAudio from './c_scale.wav';

	import chordsExplanation from './chords_explanation.png';
	import chordsExplanationMidi from './chords_explanation_midi.png';
	import chordsExplanationAudio from './c_scale_chords.wav';
	import ExternalLink from '$lib/ExternalLink.svelte';

	import chordProgression from './chord_progression.png';
	import chordProgressionMusicSheet from './chord_progression_music_sheet.png';
	import chordProgressionAudio from './chord_progression.wav';
	import { base } from '$app/paths';
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
	<FramedTextBlock
		title="Note"
		content="I still have some important theory to explain in detail, so this post will also be a bit long. But it will be shorter than the last one, I promise! 😅"
		variant="note"
	/>

	<p>
		In the last chapter, we learnt about how duration is represented in music. Today we are going to
		explore briefly how notes are represented. I will not cover all the theory and fundamentals as
		it would make this post too long, but just enough to write your first chord progression!
	</p>

	<h2>Tones and semitones</h2>

	<p>
		In western music, a <TechTerm>semitone</TechTerm> is the smallest step between two notes. On the
		MIDI grid, going up one row is going up by a semitone in pitch. Hence, a
		<TechTerm>tone</TechTerm> is just two semitones, or two steps. When we go up twelve semitones, we
		reach an <TechTerm>octave</TechTerm>, at which point notes just repeat themselves with a higher
		pitch.
	</p>

	<p>
		To illustrate this, let's look at the most common music <TechTerm>scale</TechTerm>, C Major. I
		won't explain the name here but basically it is what you learn at school: do re mi fa sol la ti
		do! Note that the last do is the octave of the first do: it is the same note but higher in
		pitch! Here is how it looks when applying those units to the C Major scale:
	</p>

	<Image src={base + cScale} alt="C Major scale" caption="C Major scale" />

	<Image
		src={base + cSaleMidi}
		alt="C Major scale on a MIDI grid"
		caption="C Major scale on a MIDI grid. Yes, that is all the white keys on a piano! There is one tone from C to D, but one semitone from E to F."
	/>

	<Audio src={base + cScaleAudio} />

	<p>
		It is common to use letters for naming notes, I wrote the equivalent letter next to each note.
		The semitone spacing is not the same between the notes, but it is not visible on the music
		sheet, at is was invented around this scale (yes music theory has an awful syntax, not better
		than maths).
	</p>

	<FramedTextBlock
		title="Note"
		content="You might wonder how we call the black notes. To name them, we use a modifier. # means one semitone higher, whereas b means one semitone lower. Thus, the black note between C and D is either C# or Db."
		variant="note"
	/>

	<h2>From notes to chords</h2>

	<p>
		"Ok, that's cool and all, but why do I have to know all this? I am bored." Well, that's because
		the most common and basic chords can be deducted from the scale! A <TechTerm>chord</TechTerm> is
		a group of notes, as simple as that. And the spacing in semitones between each note creates a pattern
		to which we assign a name. For example, a <TechTerm>triad</TechTerm> is a chord made of three notes.
		Usually, that is: the <TechTerm>fundamental</TechTerm> (the first note, whatever you want!), coupled
		with the
		<TechTerm>third</TechTerm> and the <TechTerm>fifth</TechTerm> note when going up in the scale. Here
		is an example:
	</p>

	<Image
		src={base + chordsExplanation}
		alt="Chords explanation"
		caption="Chords explanation. For B, in orange, the first note is B, then we loop back to the start to pick D as the third note."
	/>
	<Image
		src={base + chordsExplanationMidi}
		alt="The same chords on a MIDI grid"
		caption="The same chords on a MIDI grid. Notice how the last three chords sounds the same. That is the same chord! We just move some notes 12 semitones higher, or one octave higher."
	/>

	<Audio src={base + chordsExplanationAudio} />

	<p>
		<ExternalLink href="https://muted.io/cheat-sheet/"
			>This website allows to play around this interactively.</ExternalLink
		>
	</p>

	<p>
		The letter of the chord is defined by its fundamental, hence the first chord is a C, because the
		fundamental is a C. You might have noticed that there are weird abbreviations after the chord
		letters written on the music sheet (above the patch of notes played together). This defines the
		pattern following the fundamental. Here are three examples covering all the chords above:
	</p>
	<ul>
		<li>
			The first chord, highlighted in red, is a C <TechTerm>major</TechTerm>. It can be recognized
			by the number of semitones between notes. For a major chord, we do not write anything after
			the name (at times, it is written with the suffix "maj"). It sounds happy! Can you spot the
			other major chords?
		</li>
		<li>
			The second chord, highlighted in blue, is a Dm, or D <TechTerm>minor</TechTerm>. The only
			difference with the major chord is that the middle note is moved down by a semitone. This one
			will sound sad. Can you spot the other minor chords?
		</li>
		<li>
			The second to last chord, highlighted in green, is a Bdim, or B <TechTerm>diminished</TechTerm
			>. It sounds a bit weird and scary, because frequencies do not overlap well. That's a great
			way to add tension to the music! That's the only one in this example.
		</li>
	</ul>

	<FramedTextBlock
		title="Note"
		content="I will not go into details about the other chords to keep it simple. But you can find some online resources at the bottom of this post to dig further into chords theory. I will also link at how we formally name notes within a chord if you are curious."
		variant="note"
	/>

	<p>
		Notice that I can also change the order of notes! That's handy if they are too far apart in
		pitch. This is called a <TechTerm>transposition</TechTerm>. But then, how to figure out the
		name? Well, one combination can have multiple names. If we want to ensure we talk about the same
		chord, we can indicate it like this: C/E. This means that the fundamental is a C (the chord is
		thus a C major), but the third note is the one with the lowest pitch.
	</p>

	<h2>From chords to chord progressions</h2>

	<p>
		Yes, I know, it is long, but we are almost here! Now that we have a few basic chords at hand,
		the remaining question is: how do we combine them together?
	</p>

	<p>
		I already said that but, in music, sometimes there are no rules. Just tips and experimentation.
		When it comes to chords, <em>usually</em> one chord lasts one bar or half a bar. So, if we take
		the example from the last post, we have four to eight slots available, <em>in theory</em>. We
		also
		<em>commonly</em> try to have shared notes between the chord played and the next one, to make the
		transition smoother to the ear.
	</p>

	<p>
		In the next chapter I will break them all (by still taking this as a basis, don't worry), to
		show you how to make it sound more interesting! But for now let's take a look at a simple chord
		progression I wrote (I created a new instrument track and chose "Lofi Piano" as the instrument
		preset):
	</p>

	<!-- svelte-ignore a11y_media_has_caption -->
	<Image src={base + chordProgression} alt="Chord progression" caption="The chord progression." />
	<Image
		src={base + chordProgressionMusicSheet}
		alt="Chord progression music sheet"
		caption="The chord progression music sheet."
	/>
	<Audio src={base + chordProgressionAudio} />

	<p>
		I started with a C major chord to set a happy mood, during 1 bar as a basis. Then, I play an E
		minor, as it shares two notes with C major. It sounds surprisingly happy for a sad chord, I will
		explain that in the next chapter! I want the change to be a bit faster to express a pattern, so
		it only lasts 2 beats, followed by a G major chord lasting 2 beats too. Both Em and G share a G
		note and a B note, they are just played at a different octave. I could have chosen to transpose
		G, but I like the melody created by the highest note in pitch.
	</p>
	<FramedTextBlock
		title="Tip"
		content="You can recognize the octave by noticing that the keys pattern repeat itself: 2 black notes, 3 black notes, 2, 3, etc. Bandlab helps you by indicating every C note on the piano keyboard, from which the same pattern always repeat itself."
		variant="tip"
	/>
	<p>
		After that, I create a small surprise by bringing in sadness: A minor. The change is sharp as no
		note is shared between G and Am. I give it 6 bars to let the sadness express himself, but
		quickly bring back joy with another G. It serves as a smooth transition back to the start of the
		chord progression, by using G as the common note between the chords G and C.
	</p>

	<FramedTextBlock
		title="Note"
		content="After some practice you can just put in random notes and keep what sounds good, no need to get fancy ;). Theory is a tool here to help you, not law! Here I explained it for your understanding, but at some point it will become mindless thinking!"
		variant="note"
	/>

	<h2>Wrapping things up</h2>

	<p>
		You must be hating me at this point. I don't blame you, music theory was not created to be
		intuitive unfortunately. But it starts to open interesting doors, we can now add emotions to our
		rhythm! Now, it is your turn to try! It is OK if it sounds weird!
	</p>

	<p>
		If you are really uncomfortable trying it out, well you can pick
		<ExternalLink href="https://www.hooktheory.com/theorytab/common-chord-progressions"
			>one of the popular chord progressions here</ExternalLink
		>. Feel free to combine them one after the other, and to not stick to each chord having the same
		duration!
	</p>

	<p>
		I know I am going fast and skipping things. Remember, it is just an introduction to the world of
		music composition, that's OK to be lost! Next time, we will see how to improve the example chord
		progression to make it more spicy. But for now, don't hesitate to ask questions and share your
		chord progressions in the comments!
	</p>

	<p>Have a nice day, afternoon, evening, or night!</p>

	<p>~ Charly</p>

	<p>PS: It is shorter than the last post, I counted ;). The next one will be even shorter, I swear!</p>

	<h2>Resources (for help or to dig deeper)</h2>

	<ul>
		<li>
			Popular chord progressions: <ExternalLink
				href="https://www.hooktheory.com/theorytab/common-chord-progressions"
			></ExternalLink>
		</li>
		<li>
			(advanced) Additional chord progressions theory: <ExternalLink
				href="https://mastering.com/wp-content/uploads/2019/08/CHORD-PROGRESSION-Cheat-Sheet.pdf"
			></ExternalLink>
		</li>
		<li>
			Chord identifier: <ExternalLink href="https://www.scales-chords.com/chordid.php"
			></ExternalLink>
		</li>
		<li>
			More chord types available at the top left of this cheat sheet (it also illustrate a few things we learnt in the last post regarding rhythm!): <ExternalLink
				href="https://gravitascreate.com/music-theory-cheat-sheet/"
			></ExternalLink>
		</li>
		<li>
			This article explains more in depth the intervals and scales (it is a bit long but explained
			much better than what I wrote, as it skips no detail!): <ExternalLink
				href="https://theoryandsound.com/intervals-basic-scales/"
			></ExternalLink>
		</li>
	</ul>
	<!--TODO-->

	<!-- chord palette somewhere online -->
	<!--  top left chord examples -->
	<!-- https://theoryandsound.com/intervals-basic-scales/ -->
{/snippet}
