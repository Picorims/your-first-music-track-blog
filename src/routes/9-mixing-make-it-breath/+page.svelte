<script lang="ts">
	/*
    Copyright (c) 2025 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { config } from '$lib/config';
	import { BlogPage, FramedTextBlock, Audio, Quote, Image } from 'svelte-blogging-kit';

	import ExternalLink from '$lib/ExternalLink.svelte';
	import TechTerm from '$lib/TechTerm.svelte';

	import songWithoutPanning from './your_first_music_track_blog__chap_6_to_9__full_song__effects_only.mp3';
	import songWithPanning from './your_first_music_track_blog__chap_6_to_9__full_song__mixing_v2.mp3';
</script>

<BlogPage
	{config}
	postTitle="9 - Mixing: Make it breath"
	{postContent}
	date="01/13/2025"
	categories={['Mixing']}
	urlComments="https://your-first-music-track.weebly.com/blog/9-mixing-make-it-breath"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<FramedTextBlock
		title="Note"
		content="Stems and songs provided in the following post are licensed under CC BY-NC-ND 4.0. For more information, see: https://creativecommons.org/licenses/by-nc-nd/4.0/"
		variant="note"
	/>

	<p>
		So far we have got a full song with effects applied to each track. But we didn't talk yet about
		the less creative part of mixing, which purpose is to make the overall song sound better. Today,
		we are going to see how we can make our mix breath more my seeing how to handle volume, panning
		and frequencies. We won't talk about <TechTerm>mastering</TechTerm> today if you are familiar about
		it. This will be covered in the next chapter.
	</p>

	<FramedTextBlock
		title="Note"
		content="This is not something I am very good at personally, but the tips I will give still stand true. Those are general guidelines, so if you are interested to dive more into this aspect of mixing, I will link a great tutorial in the resources at the end of this post."
		variant="note"
	/>

	<h2>Volume</h2>

	<p>
		Mixing can be conceived in a 3D space to help you take your decisions. The vertical axis is the
		pitch, the horizontal one is <TechTerm>panning</TechTerm> and delay between left and right ears,
		and the depth (how far something is perceived) is the volume and reverb.
	</p>

	<p>
		Managing <TechTerm>volume</TechTerm> is important to give each track its own space. You don't want
		the overall volume to be too high to not saturate the master. But you don't want it to be too low
		either to not make it hard to hear on devices without pushing the device volume to max!
	</p>

	<FramedTextBlock
		title="Tip"
		content="Keep the master volume at 0dB (as default) and adjust the individual tracks instead."
		variant="tip"
	/>

	<p>
		A good starting point is to set the drums volume at the center of the range, and to adjust other
		instruments from there using your ears. The drums, melody, chords and bass should all be easy to
		distinguish. You may use some reference tracks you like within the same genre you are writing.
		By comparing your mix to them, it helps you take your decisions on your own mix. Prefer songs
		from experienced composers, as they are more likely to have a good mix.
	</p>

	<FramedTextBlock
		title="Tip"
		content="Your ear is a muscle like any other and can be exhausted. Prefer mixing at a low volume in a calm environment, raising it only when necessary, and take frequent breaks in a silent environment. You only have one pair, so take care of them!"
		variant="tip"
	/>

	<h2>Panning</h2>

	<p>
		Panning is a very trivial concept: it defines how much you hear a track on the left and right
		channels. The lower, or the more tilted towards the left it is (on a knob), the more you hear
		your track on the left side, the less you hear it on the right side, and vice versa. On BandLab,
		it goes from -50 (full left, no right) to +50 (full right, no left).
	</p>

	<p>
		You usually want to keep the drums and bass in the center, because they are kind of a guide for
		the song. The rest however can be spread over the spectrum.
	</p>

	<p>
		If I take the example of my own mix, I have set the bass panning to -12, and the piano +25 to
		the right, so that I can put the chords to the right, while still keeping the bass somewhat
		centered (as in my case I use the piano to make the bass easier to hear). Melodies are -12 to
		the left so that they can contrast from the chords. The background organ melody in the verse is
		+12 to the right to put it somewhere between the main melody and the chords. Chord pads are also
		to the right, as after testing it sounds better this way (being reinforced with the piano
		chords). The rain and reverse cymbals are left at 0 (e.g. centered).
	</p>

	<FramedTextBlock
		title="Tip"
		content="You can use what is called a mid-side EQ to push a track to the sides without touching the panning, which is common on cymbals for instance. Unfortunately BandLab does not seem to have such feature."
		variant="tip"
	/>

	<h2>Frequencies</h2>

	<p>
		This one probably has to be the trickiest of those three topics, because it can alter the
		character of a track, as we saw in an earlier chapter. The thing is, the more frequencies
		clashes, the more muddy and hard to understand it sounds. So, how do we give room to everybody?
		Here are some guidelines:
	</p>

	<ul>
		<li>
			Pay attention to the dominant frequency of each instrument. The kick drum and the bass needs
			room in the lows, so other instruments should not have too much low frequencies, for instance.
		</li>
		<li>
			If you emphasize an area of an instrument (say, the mediums of a piano), it is best to
			compensate by reducing the mediums of one or multiple other instruments.
		</li>
		<li>
			Get rid of useless frequencies, usually lows on a track which do not produce much sound but
			interfere a lot with other instruments.
		</li>
		<li>
			Keep in mind that your song will be played on many different kind of devices. If a bass or a
			kick do not have a bit of medium and high frequencies, they won't be heard on cheap devices!
		</li>
	</ul>

	<h2>Example</h2>

	<p>
		The volume and frequencies filtering were present in the examples from previous chapters (it
		didn't make sense to remove them). You can hear below the difference between having, or not
		having panning applied:
	</p>

	<label>
		The track without panning:
		<Audio src={songWithoutPanning} />
	</label>
	<label>
		The track with panning:
		<Audio src={songWithPanning} />
	</label>

	<h2>Closing words</h2>

	<p>
		We are not so far from being done now! You are probably not happy with how your mix sounds if
		you are following along. To help you put things into perspective, It took me years personally to
		start accepting that some of mines are "okayish". There are people whose job is to mix your
		stuff, just to say that it is not trivial!
	</p>

	<p>
		The last step that I will cover in this exploration of music composition is <TechTerm
			>mastering</TechTerm
		>. But that is a subject for next time!
	</p>

	<p>For now, have a good day, afternoon, evening or night, and see you in the next post!</p>

	<p>~ Charly</p>

	<h2>Resources</h2>

	<ul>
		<li>
			A great and comic series (tutorial) on mixing from You Suck At Producing: <ExternalLink
				href="https://www.youtube.com/watch?v=YP1dSPX8doc"
				>https://www.youtube.com/watch?v=YP1dSPX8doc</ExternalLink
			>
		</li>
	</ul>
{/snippet}
