<script lang="ts">
	/*
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>

    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { base } from '$app/paths';
	import { config } from '$lib/config';
	import ExternalLink from '$lib/ExternalLink.svelte';
	import TechTerm from '$lib/TechTerm.svelte';
	import { BlogPage, FramedTextBlock, Image, FileAttachment, Audio } from 'svelte-blogging-kit';

	import musicSheetDurations1 from './note_durations_1.png';
	import musicSheetDurations2 from './note_durations_2.png';
	import noteDurationsMidi from './note_durations_midi.png';
	import audioDurationExampleMp3 from './music_sheet_examples_duration.mp3';
	import audioDurationExampleMidi from './durations_example.mid';
	import bpmBandlab from './bpm_bandlab.png';
	import stepsNewDrumKit from './steps_new_drum_kit.png';
	import basicDrumLoop from './basic_drum_loop.png';
	import basicDrumPatternAudio from './basic_drum_pattern.wav';
	import ternaryExample from './ternary_example.png';
	import drumLoopVariation from './drum_loop_variation.png';
	import drumPatternVariationAudio from './drum_pattern_with_variation.wav';
</script>

<BlogPage
	{config}
	postTitle="2 - Drums: Understanding rhythm"
	{postContent}
	date="10/27/2024"
	categories={['Music Theory']}
	urlComments="https://your-first-music-track.weebly.com/blog/2-drums-understanding-rhythm"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<FramedTextBlock
		title="Note"
		variant="note"
		content="This post will be longer than usual due to all the information needed to get started. Sorry!"
	/>

	<p>
		In this chapter, we will learn about rhythm and duration in music by writing the drum loop of
		our track. But first, there are a few things that you should be aware of.
	</p>

	<h2>Before getting started</h2>

	<p>
		First, don't be too harsh on yourself. Each topic that I will cover is an entire subject by
		itself, with a lot to learn, and much practice needed to be comfortable with their concepts. If
		you are lost, it is OK! Take it as an introductory course, an overview. Don't hesitate to ask
		questions! If you plan to dive deeper into writing music, this will give you some insight into
		what resources and topics to look for.
	</p>

	<p>
		Secondly, the order of topics is arbitrary. All musicians have their own preferences when it
		come to writing music. Here, I tried to order things so that the learning process is as smooth
		as possible. If you try the whole process again later by yourself, use whatever order you wish!
	</p>

	<p>
		Lastly, we are going to use a piece of software called a
		<TechTerm>DAW</TechTerm>, which stands for <TechTerm>Digital Audio Workstation</TechTerm>
		(<ExternalLink href="https://en.wikipedia.org/wiki/Digital_audio_workstation"
			>read more on Wikipedia</ExternalLink
		>). Basically, it is a virtual studio to create and process audio files and streams.<br />
		The DAW that we will use in this course is
		<ExternalLink href="https://www.bandlab.com/creation-features">BandLab</ExternalLink>. It is
		free, available in a browser or as a web app, and beginner friendly. However, you can quickly
		get limited, and it is unstable with a bad internet connection (I lost the draft of this course
		that way, it refused to save!). So, I recommend creating "duplicates" frequently, saving your
		regions or patterns to MIDI and taking screenshots of your effects configuration. Better be safe
		than sorry!<br />
		Alternatively, free DAWs include LMMS and Ardour. You can also use a trial of some professional software,
		such as Ableton Live (90 days), Bitwig (30 days, too short!), FL Studio (cannot open saves in the
		trial), etc. There are also mobile apps of varying quality, which I would generally not recommend.
		Other than that, use what you want!
	</p>

	<p>OK, that being said, let's dive right into it!</p>

	<h2>Time measurement: beat, bars, bpm</h2>

	<p>
		In music, a unit of time is a <TechTerm>beat</TechTerm>. We group beats into
		<TechTerm>bars</TechTerm>. Bars are used to group beats and to ease areas delimitation. For
		instance, we use it to define the length of a chorus, a verse, or a bridge. We also usually
		change of chord on a bar change. If all of this is blurry, it is OK, just remember that
		commonly:
	</p>

	<p style="font-size: 1.5rem;">
		<strong>1 bar = 4 beats</strong>
	</p>

	<FramedTextBlock
		title="Note"
		variant="note"
		content="Some genres like waltz traditionally do not follow this rule. If you want to dive more into this concept, browse time signatures."
	/>

	<p>
		All note durations are measured in beats (although their names refer to duration based on bars).
		Here are the most common ones, represented in a <TechTerm>music sheet</TechTerm> and a <TechTerm
			>MIDI grid</TechTerm
		> (both represent the same melody).
	</p>

	<Image
		src={musicSheetDurations1}
		alt="Music sheet with note durations: whole = 4 beats, dotted-half = 3 beats, half = 2 beats, quarter = 1 beat, eighth = 1/2 beat, sixteenth = 1/4 beat"
		caption="There are 5 bars in the example above."
	/>

	<Image
		src={musicSheetDurations2}
		alt="MIDI grid with note durations: dotted-quarter: 1 + 1/2 beats"
		caption="A dot adds half of the duration of the symbol on which we put it. That is why a dotted-half is 3 beats (2 + (2/2) = 2+1 = 3)."
	/>

	<Image
		src={noteDurationsMidi}
		alt="MIDI grid representation of the music sheet presented above"
		caption="The equivalent melody in a MIDI grid: on the horizontal axis, in bars (written above as [bar].[beat]), we represent the time. On the vertical axis, we represent the pitch (the note we want to play). A rectangle is thus one note with a given duration."
	/>

	<FileAttachment src={audioDurationExampleMp3} />
	<Audio src={audioDurationExampleMp3} />

	<p>
		<em>Argh!</em> What are all these symbols?! Do not worry, you do not have to remember all of it.
		The music sheet is only here in case you stumble on one during your browsing. I will frequently remind
		the vocabulary and duration, and will mostly use the MIDI grid.
	</p>

	<p>
		Here, our melody lasts approximately fifteen seconds. Is it arbitrary? Of course not! The speed
		is measured in <TechTerm>beats per minute</TechTerm>, or <TechTerm>bpm</TechTerm>. Here, we use
		a bpm of 80. If you increase this number, it will play faster. You can try this out by
		downloading the MIDI file below. Create an account on BandLab, create a new project from your
		profile page (at the top right), and at the bottom of the studio pop-up, choose to import the
		midi file.
	</p>

	<FileAttachment src={audioDurationExampleMidi} />

	<p>
		To align itself to the music speed, a musician uses a <TechTerm>metronome</TechTerm>. While here
		the computer plays for us, it can be handy for reference, recording, etc. In BandLab, you can
		enable it at the top, next to the bpm option.
	</p>

	<Image
		src={bpmBandlab}
		alt="BandLab interface with the metronome and bpm options"
		caption="You can also change the time signature here if you are familiar with this concept."
	/>

	<p>OK, now that we share the same vocabulary, let's write our first drum loop!</p>

	<h2>A basic drum loop</h2>

	<p>
		If you haven't created your project at this point, create a new one and choose to start with a
		virtual instrument. You can also start from the MIDI example if you wish, in this case, click on
		the button with a "+" in the top left to add a virtual instrument track.
	</p>

	<p>
		Notice that the instrument tab is now selected at the bottom. There, above the piano, choose a
		preset in the <TechTerm>drum kits</TechTerm> or <TechTerm>drum pads</TechTerm>. I will
		personally try to write some lo-fi music, so I will choose "Lofi Hop". I will also change the
		bpm at the top to 90 as I want it to be calm.
	</p>

	<Image src={stepsNewDrumKit} alt="Steps to create a new drum kit in BandLab visualized" />

	<p>
		The most basic drum kit pattern uses three different percussions (<ExternalLink
			href="https://en.wikipedia.org/wiki/Drum_kit">a schema is available on Wikipedia</ExternalLink
		>): the <TechTerm>kick</TechTerm> or <TechTerm>bass drum</TechTerm>, the <TechTerm
			>snare drum</TechTerm
		> or just <TechTerm>snare</TechTerm>, and the <TechTerm>hi-hat</TechTerm>, which can be opened
		or closed. The kick is a deep heartbeat like sound, we will use it every beat (or <TechTerm
			>quarter</TechTerm
		>, 1 beat) as a reference. The snare is a powerful drum, we will use it to accentuate the second
		and fourth beat of each bar (using <TechTerm>half notes</TechTerm>, 2 beats). Finally, the
		hi-hat is useful for fast rhythmic. We will use <TechTerm>eighth</TechTerm> notes (1/2 beat), with
		one every four notes being an open hi-hat.
	</p>

	<p>
		Double click at the start of the drum kit track (highlighted in purple on the picture above) to
		create a new region. Place your mouse at its end and drag the border to extend it to 4 bars
		instead of 1.
	</p>

	<p>
		Let's move on to the MIDI Editor at the bottom left. Pick the pencil tool on the left to place
		notes with your mouse. Use the arrow to select notes by clicking or dragging. This allows you to
		cut, copy, paste, or delete notes. Use the magnifying glass icons to zoom the grid in or out. To
		increase the height of the grid, place your mouse on the top border of the panel and drag the
		mouse while having a double arrow cursor visible. <em
			>DO NOT FORGET TO <em>SAVE YOUR WORK</em> REGULARLY!</em
		>
	</p>

	<Image
		src={basicDrumLoop}
		alt="Basic drum loop in BandLab (MIDI grid and steps)"
		caption="Here, I chose to use the stick on a snare instead of the snare itself, just because I want to use its sound. But you can choose whatever sound you prefer!"
	/>

	<p>The result should sound similar to this:</p>

	<FileAttachment src={basicDrumPatternAudio} />
	<Audio src={basicDrumPatternAudio} loop />

	<h2>Variation: spicing things up (OPTIONAL)</h2>

	<p>
		This sounds nice, but it is a bit boring and repetitive. If you have a bit of experience in
		music (or if you are curious), we can push things a bit further.
	</p>

	<p>
		The first change that we are going to do is not that commonly heard, but is used in genres like
		blues or <ExternalLink href="https://en.wikipedia.org/wiki/Groove_(music)">jazz</ExternalLink>,
		and by artists like TheFatRat. I am talking about the <TechTerm>groove</TechTerm>. Put simply,
		we extend then shrink alternatively the length of an <TechTerm>eighth</TechTerm>
		(1/2 beat). Usually, the beat is split as 2/3 and 1/3 instead of the common 1/2 and 1/2 split.
	</p>

	<p>
		Right click on the MIDI grid, and choose 1/8T (which stands for 1/8 of a bar (= 1/2 beat),
		ternary mode). Notice that each beat now has three columns instead of two. Let's extend the
		first half of each beat to two cells, and the second half to one.
	</p>

	<FramedTextBlock
		title="Tip"
		variant="tip"
		content="You can do this on a few beats and copy it fast. Go to mouse mode, select all the notes, hold Alt and the left click on a selected note, and move your mouse to the right. Do it as many time as needed, and don't hesitate to increase the selection to be even faster!"
	/>

	<Image
		src={ternaryExample}
		alt="Ternary mode in BandLab, and Alt click shortcut example"
	/>

	<p>
		Now, let's change the pattern a bit. There is no rule here, it is mostly trying things and
		keeping what works out! However, you can get inspiration by carefully listening to your
		favourite music and paying attention to the drum pattern. It is difficult at first, but it is a
		great exercise and a great source of inspiration!
	</p>

	<p>Here are my changes:</p>
	<ul>
		<li>To mark the bar change a bit more, I add a kick at the end of the first and third bar.</li>
		<li>
			To enlighten the middle of the pattern, I create a slightly unexpected variation with the
			hi-hat.
		</li>
		<li>
			I lower the <TechTerm>velocity</TechTerm> (intensity and volume of a note) of some closed hi-hats
			coming before a beat to accentuate those beats. Not too much, we need to hear it! Around 70% is
			good. To do so, click on the V tool, and drag your mouse up and down on a note to change its velocity.
			You can also see the value and change it with the line below the velocity tool button, at the left
			of the panel.
		</li>
		<li>
			I mark the end of the loop with <TechTerm>toms</TechTerm> (percussions of varying pitch but similar
			sound). Note that I remove the snare and hi-hat, because a real drummer (almost) cannot play both
			with their hands at the same time! I also use two <TechTerm>triplets</TechTerm>, a group of
			notes where each lasts 1/3 beat. I also put a <TechTerm>ride cymbal</TechTerm> in place of the
			hi-hat at the start as a checkpoint for the start of the loop. This whole pattern is extremely
			common in pop rock music.
		</li>
	</ul>

	<p>The changes look and sound as follows:</p>

	<Image src={drumLoopVariation} alt="How all the changes look on the MIDI grid" />

	<FileAttachment src={drumPatternVariationAudio} />
	<Audio src={drumPatternVariationAudio} loop />

	<h2>Closing words</h2>

	<p>
		<em>Phew!</em> Yes, I know, this post was long (though it has a lot of images 😉). Discovering a
		new software, new vocabulary, new techniques all at once... Don't hesitate to ask questions! You
		made it until the end? Congratulations! You can share your pattern with us by
		<em><em>SAVING</em> YOUR WORK</em>
		and exiting the studio (using the hamburger menu at the top left), going to your "Library", choosing
		your project and clicking on "Share Privately". People will be able to listen, but not edit your
		work (invite them from the studio, with the button in the top right if you want so).
		<ExternalLink
			href="https://www.bandlab.com/track/85eae12d-088f-ef11-8474-6045bd375453?sharedKey=-N87tCNPVUGdpuDtLmtLHw"
			>Here is mine!</ExternalLink
		>
	</p>

	<p>
		Next time, we will talk about chords to set the mood of our song. But for now, we will stop
		there, and I only have to wish you a good day, afternoon, evening or night!
	</p>

	<p>~ Charly</p>
{/snippet}
