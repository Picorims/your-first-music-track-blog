<script lang="ts">
	/*
    Copyright (c) 2025 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { config } from '$lib/config';
	import { BlogPage, FramedTextBlock, Audio, Image } from 'svelte-blogging-kit';

	import TechTerm from '$lib/TechTerm.svelte';
	import { base } from '$app/paths';


	import songNoEffects from './your_first_music_track_blog__chap_6_to_9__full_song__DISABLED_mixing.mp3';
	import songWithEffects from './your_first_music_track_blog__chap_6_to_9__full_song__effects_only.mp3';

	import drumNoEffects from './drum_loop_chorus.wav';
	import drumWithEffects from './drum_loop_chorus_with_effects.wav';
	import drumEffectsImg1 from './drums_effects_1.png';
	import drumEffectsImg2 from './drums_effects_2.png';

	import cymbalNoEffects from './reverse_cymbal.wav';
	import cymbalWithEffects from './reverse_cymbal_with_effects.wav';
	import cymbalEffectsImg1 from './reverse_cymbal_effects_1.png';
	import cymbalEffectsImg2 from './reverse_cymbal_effects_2.png';

	import pianoNoEffects from './piano.wav';
	import pianoWithEffects from './piano_with_effects.wav';
	import pianoEffectsImg1 from './piano_effects_1.png';
	import pianoEffectsImg2 from './piano_effects_2.png';

	import bassNoEffects from './bass.wav';
	import bassWithEffects from './bass_with_effects.wav';
	import bassEffectsImg from './bass_effects.png';

	import aggressiveElecPianoNoEffects from './agressive_electric_piano.wav';
	import aggressiveElecPianoWithEffects from './agressive_electric_piano_with_effects.wav';
	import aggressiveElecPianoEffectsImg1 from './agressive_electric_piano_effects_1.png';
	import aggressiveElecPianoEffectsImg2 from './agressive_electric_piano_effects_2.png';

	import softElecPianoNoEffects from './soft_electric_piano.wav';
	import softElecPianoWithEffects from './soft_electric_piano_with_effects.wav';
	import softElecPianoEffectsImg1 from './soft_electric_piano_effects_1.png';
	import softElecPianoEffectsImg2 from './soft_electric_piano_effects_2.png';

	import organNoEffects from './organ.wav';
	import organWithEffects from './organ_with_effects.wav';
	import organEffectsImg from './organ_effects.png';

	import rainNoEffects from './rain.wav';
	import rainWithEffects from './rain_with_effects.wav';
	import rainEffectsImg from './rain_effects.png';

	import padNoEffects from './pad.wav';
	import padWithEffects from './pad_with_effects.wav';
	import padEffectsImg from './pad_effects.png';
</script>

<BlogPage
	{config}
	postTitle="8 - Effects: In Practice"
	{postContent}
	date="01/11/2025"
	categories={['Mixing']}
	urlComments="https://your-first-music-track.weebly.com/blog/8-effects-in-practice"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<FramedTextBlock
		title="Note"
		content="Stems and songs provided in the following post are licensed under CC BY-NC-ND 4.0. For more information, see: https://creativecommons.org/licenses/by-nc-nd/4.0/"
		variant="note"
	/>

	<FramedTextBlock
		title="Note"
		content="Read the introduction entirely before complaining about the length :) ."
		variant="note"
	/>

	<FramedTextBlock
		title="Note (the last one)"
		content="Having headphones or good speakers at hand is recommended, although not mandatory. My explanations won't make much sense without listening to the examples."
		variant="note"
	/>

	<p>
		Update (01/13/2025): I added a bit more explanation about the <TechTerm>compender</TechTerm> effect,
		and bass mixing.
	</p>

	<p>
		In the last chapter, I introduced a list of common effects commonly used in music production.
		Now is the time to see how we can put them in practice! I will use the song introduced in
		chapter 5 to illustrate how I personally processed each instrument.
	</p>
	<p>
		As last time, <strong>I won't enter into the detail of each settings</strong> to keep things
		concise and accessible, but only explain the overall approach (well, "concise", but don't worry,
		it is mostly padded by images). And to be honest I cannot explain all of those settings either
		anyway 😅. <strong>Feel free to pick only the sections that spark your interest</strong>, I
		suggest though to compare the different audio examples. (The drums and piano are the most
		detailed ones.)
		<strong
			><em>At the very least</em>, I suggest listening to differences, having a quick look at the
			pictures and reading the conclusion.</strong
		>
	</p>

	<p>
		For reference, here is the full song without effects, and with all the effects (plus those on
		instruments not explained here).
	</p>

	<label>
		Full song without effects:
		<Audio src={base + songNoEffects} />
	</label>
	<label>
		Full song with effects:
		<Audio src={base + songWithEffects} />
	</label>

	<h2>Drums</h2>

	<p>
		For this track, I started off the "lofi dirt" preset, which you can find in the effects tab at
		the bottom left, and then in the dropdown menu under the preset thumbnail. To get a lo-fi vibe,
		I wanted to intentionally make it sound a bit altered in quality and warmer.
	</p>
	<p>
		To do so, the BL Driver effects slightly destroy the signal, and make the drums sound a bit
		"slobbery". Then, the <TechTerm>limiter</TechTerm> slightly reduce the dynamics amplitude ("volume
		contrast" if you want), also to get the feel of low quality. I am not sure what the preset <TechTerm
			>compender</TechTerm
		> achieve, but I believe that its goal is similar to the <TechTerm>limiter</TechTerm> while keeping
		a bit of dynamics (it seems to amplify under a given threshold). I then added an <TechTerm
			>EQ</TechTerm
		> to amplify the <TechTerm>low-mediums</TechTerm> and reduce the <TechTerm>highs</TechTerm>, so
		that it sounds warmer and comfy. Finally, the
		<TechTerm>de-esser</TechTerm> makes cymbals less shiny (I didn't talk about this effect).
	</p>

	<label>
		Drum loop without effects:
		<Audio src={base + drumNoEffects} loop />
	</label>
	<label>
		Drum loop with effects:
		<Audio src={base + drumWithEffects} loop />
	</label>

	<Image src={base + drumEffectsImg1} alt="Drum loop effects part 1" caption="Drum loop effects part 1" />
	<Image src={base + drumEffectsImg2} alt="Drum loop effects part 2" caption="Drum loop effects part 2" />

	<h2>Reverse cymbal</h2>

	<p>
		Again, I used the BL Driver effect to make the cymbal sound a bit altered. Because it is high
		pitched, I reinforced the <TechTerm>mediums</TechTerm> this time, but kept some <TechTerm
			>highs</TechTerm
		> to make it stand out in the <TechTerm>mix</TechTerm> (there aren't much highs in all the tracks).
		To give it depth, I added a subtle <TechTerm>delay</TechTerm> and a semi-long <TechTerm
			>reverb</TechTerm
		> (the delay and reverb are a common combo by the way).
	</p>

	<label>
		Reverse cymbal without effects:
		<Audio src={base + cymbalNoEffects} />
	</label>
	<label>
		Reverse cymbal with effects:
		<Audio src={base + cymbalWithEffects} />
	</label>

	<Image
		src={base + cymbalEffectsImg1}
		alt="Reverse cymbal effects part 1"
		caption="Reverse cymbal effects part 1"
	/>
	<Image
		src={base + cymbalEffectsImg2}
		alt="Reverse cymbal effects part 2"
		caption="Reverse cymbal effects part 2"
	/>

	<h2>Piano</h2>

	<p>
		This pipeline is based on the "bright reverb" preset. The <TechTerm>chorus</TechTerm> slightly color
		and reinforce the <TechTerm>stereo</TechTerm> of the piano. A subtle <TechTerm>reverb</TechTerm>
		then gives it a bit more depth. The <TechTerm>EQ</TechTerm> reinforces the mediums which is the dominant
		area of a piano, so that it stands out more. But to not make it too bright, the <TechTerm
			>highs</TechTerm
		> are slightly reduced. Then comes a <TechTerm>compressor</TechTerm> to make it a bit more energetic
		and powerful. Finally, to give it more rhythmic and make it more interesting, I added a shy <TechTerm
			>sidechain</TechTerm
		>, which reinforces the <TechTerm>kick</TechTerm> (which we don't hear in the following examples).
	</p>

	<label>
		Piano without effects:
		<Audio src={base + pianoNoEffects} loop />
	</label>
	<label>
		Piano with effects:
		<Audio src={base + pianoWithEffects} loop />
	</label>

	<Image src={base + pianoEffectsImg1} alt="Piano effects part 1" caption="Piano effects part 1" />
	<Image src={base + pianoEffectsImg2} alt="Piano effects part 2" caption="Piano effects part 2" />

	<h2>Bass</h2>

	<p>
		The bass instrument itself is mostly left untouched as it only serves as a low frequencies
		booster. Most of the dynamics comes from the superposed piano which plays the same notes at a
		very low pitch (adding medium and high frequencies for cheap devices). Hence, the <TechTerm
			>lows</TechTerm
		> are reinforced, and the <TechTerm>compressor</TechTerm> boosts the bass a bit.
	</p>

	<FramedTextBlock
		title="Note"
		content="The following example will be hard to hear without headphones, or speakers with a good bass response."
		variant="note"
	/>

	<label>
		Bass without effects:
		<Audio src={base + bassNoEffects} loop />
	</label>
	<label>
		Bass with effects:
		<Audio src={base + bassWithEffects} loop />
	</label>

	<Image src={base + bassEffectsImg} alt="Bass effects" caption="Bass effects" />

	<h2>Agressive electric piano (chorus melody)</h2>

	<p>
		I used a similar approach as the piano for the electric piano used in the melody. So I won't go
		into the details, but you can have a look at the settings below and listen to the examples to
		compare. I just use different settings or modules (space maker is a <TechTerm>reverb</TechTerm
		>).
	</p>

	<label>
		Aggressive electric piano without effects:
		<Audio src={base + aggressiveElecPianoNoEffects} loop />
	</label>
	<label>
		Aggressive electric piano with effects:
		<Audio src={base + aggressiveElecPianoWithEffects} loop />
	</label>

	<Image
		src={base + aggressiveElecPianoEffectsImg1}
		alt="Agressive electric piano effects part 1"
		caption="Agressive electric piano effects part 1"
	/>
	<Image
		src={base + aggressiveElecPianoEffectsImg2}
		alt="Agressive electric piano effects part 2"
		caption="Agressive electric piano effects part 2"
	/>

	<h2>Soft electric piano (verse melody)</h2>

	<p>
		The explanation is the same as for the aggressive electric piano. The only twist is that there
		are two chained <TechTerm>echo</TechTerm> effects, a fast, subtle one and a slower, more pronounced
		one. I could have put an <TechTerm>EQ</TechTerm>, but didn't feel the need. BandLab doesn't
		provide frequency spectrums in the free tier, so it is hard to spot silent but problematic
		frequencies.
	</p>

	<label>
		Soft electric piano without effects:
		<Audio src={base + softElecPianoNoEffects} loop />
	</label>
	<label>
		Soft electric piano with effects:
		<Audio src={base + softElecPianoWithEffects} loop />
	</label>

	<Image
		src={base + softElecPianoEffectsImg1}
		alt="Soft electric piano effects part 1"
		caption="Soft electric piano effects part 1"
	/>
	<Image
		src={base + softElecPianoEffectsImg2}
		alt="Soft electric piano effects part 2"
		caption="Soft electric piano effects part 2"
	/>

	<h2>Organ</h2>

	<p>
		The <TechTerm>chorus</TechTerm> is particularly powerful on <TechTerm>mono</TechTerm> like sounds
		(where the left and right channels sound almost the same, or exactly for true mono). The VibeToo
		is a custom effect from BandLab, which seems to be some kind of advanced <TechTerm
			>pitch shifting</TechTerm
		> effect. Here, it helps breaking the monotony, but pitch shifting can be used for many purposes,
		from weirdness to anxiety!
	</p>

	<label>
		Organ without effects:
		<Audio src={base + organNoEffects} loop />
	</label>
	<label>
		Organ with effects:
		<Audio src={base + organWithEffects} loop />
	</label>

	<Image src={base + organEffectsImg} alt="Organ effects" caption="Organ effects" />

	<h2>Rain</h2>

	<p>
		Here, the <TechTerm>lows</TechTerm> are increased to give warmth, and the <TechTerm
			>highs</TechTerm
		> to reinforce the rain effect. The <TechTerm>reverb</TechTerm> is here to improve the <TechTerm
			>stereo</TechTerm
		> and immersion of the rain.
	</p>

	<label>
		Rain without effects:
		<Audio src={base + rainNoEffects} loop />
	</label>
	<label>
		Rain with effects:
		<Audio src={base + rainWithEffects} loop />
	</label>

	<Image src={base + rainEffectsImg} alt="Rain effects" caption="Rain effects" />

	<h2>Chorus pad</h2>

	<p>I know, I know, it is the last one I showcase here.</p>
	<p>
		This one is a great example of how <TechTerm>sidechain</TechTerm> can really add to making something
		more rhythmic. Additionally, I make the <TechTerm>pad</TechTerm> shinier by increasing the <TechTerm
			>highs</TechTerm
		>, and lowering the <TechTerm>lows</TechTerm>. The <TechTerm>compressor</TechTerm> only makes it
		more powerful. There is also a <TechTerm>tremolo</TechTerm> hidden within the instrument preset (which
		I have no access to, unfortunately). This is what creates the feeling like you are speaking in front
		of a fan with your voice trembling. This one is subtle, but can be easily heard in the example with
		no effect.
	</p>

	<label>
		Pad without effects:
		<Audio src={base + padNoEffects} loop />
	</label>
	<label>
		Pad with effects:
		<Audio src={base + padWithEffects} loop />
	</label>

	<Image src={base + padEffectsImg} alt="Pad effects" caption="Pad effects" />

	<h2>Closing words</h2>

	<p>
		All of this is certainly overwhelming, especially if you are unfamiliar with signal processing.
		Mixing and effects are certainly not the most glamorous aspect of music composition (although
		you can have a lot of fun creating crazy stuff with it!). But if I make the parallel to drawing
		(again), <strong
			>remember you are your baby self right now, taking the pencil in your hand for the first time,
			and making your first drawing on a piece of paper.</strong
		>. Did you know about the importance of choosing the right colors? Probably not. Did you know
		about the difference between using a pen and a pencil? You probably didn't care. Did you know
		about shading and perspective? If you did, that's impressive, but I doubt it was the case. It
		took you time to learn all of this. And in the same way, it takes time to familiarize yourself
		with all of those effects and those settings (and music theory!). <strong>And it is OK.</strong>
		Add the parts that sparks your interest bit by bit, don't rush things, and everything will go smoothly.
	</p>

	<p>
		In the next chapter, I will talk about how to add more depth to our <TechTerm>mix</TechTerm>.
		This one will be easier, and much shorter, as I will stick to some handy tips.
	</p>

	<p>
		For now, I wish you a good day, afternoon, evening or night, and I see you in the next post!
	</p>

	<p>~ Charly</p>

	<p>
		PS: Nope, it <em>isn't</em> the longest post, not even the second longest! OK, <em>possibly</em>
		the third. But I said that you can read any part you want, so... ¯\_(ツ)_/¯
	</p>
{/snippet}
