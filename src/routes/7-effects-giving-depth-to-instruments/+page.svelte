<script lang="ts">
	/*
    Copyright (c) 2025 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { config } from '$lib/config';
	import { BlogPage, FramedTextBlock, Audio, Quote, Image } from 'svelte-blogging-kit';
	import { base } from '$app/paths';

	import ExternalLink from '$lib/ExternalLink.svelte';
	import delayDisabled from './delay_disabled.wav';
	import delayEnabled from './delay_enabled.wav';
	import reverbDisabled from './reverb_disabled.wav';
	import reverbEnabled from './reverb_enabled.wav';
	import eqDisabled from './eq_disabled.wav';
	import eqEnabled from './eq_enabled.wav';
	import chorusDisabled from './chorus_disabled.wav';
	import chorusEnabled from './chorus_enabled.wav';
	import sidechainDisabled from './sidechain_disabled.mp3';
	import sidechainEnabled from './sidechain_enabled.mp3';
	import overdriveDisabled from './overdrive_disabled.wav';
	import overdriveEnabled from './overdrive_enabled.wav';
	import compressionDisabled from './compression_disabled.wav';
	import compressionEnabled from './compression_enabled.wav';

	import graphicEqPiano from './graphic_eq_piano.png';
</script>

<BlogPage
	{config}
	postTitle="7 - Effects: Giving Depth to Instruments"
	{postContent}
	date="01/09/2025"
	categories={['Mixing']}
	urlComments="https://your-first-music-track.weebly.com/blog/7-effects-giving-depth-to-instruments"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<p>
		In the last chapter we saw how to turn a loop into a full song. However we didn't cover yet the
		sound processing aspect: mixing. Mixing is an important step both in defining the
		characteristics of instruments (giving them personality), and in trying to make them sound good
		together. It is also an integral part of making sure that our song sounds good on all devices,
		from the hi-fi setup to the old car speakers.
	</p>
	<FramedTextBlock
		title="Note"
		content="Mixing is a complicated aspect of sound processing that I myself do not master well, even after years of trying. While I will try my best to introduce the topic, I encourage you to dig the subject by yourself if it is something you are interested in!"
		variant="note"
	/>
	<p>
		Today I will only present a handful list of common effects, while in the next chapter I will
		show how to put them into practice. Note that I will intentionally stay a lot in surface to keep
		it concise and simple. That being said, let's get started!
	</p>

	<h2>Some common sound effects</h2>

	<h3>Delay or echo</h3>
	<p>
		Delay is a very common musical effect to give more depth to a sound. It is a natural effect
		occurring when sound bounces on distant surfaces, you know, the famous "echo, echo, echo...". It
		is usually subtle, but here is an exaggerated example:
	</p>
	<label>
		Without delay:
		<Audio src={delayDisabled} />
	</label>
	<label>
		With delay:
		<Audio src={delayEnabled} />
	</label>

	<h3>Reverberation</h3>
	<p>
		Reverberation is just a very fast delay, and is present in pretty much every single environment.
		Hence, it is also an extremely common effect. Churches, halls, theaters, tunnels, caves, or even
		basic rooms all have it. Thus, it is a great effect to reproduce such environments in the
		listener's brain! The following example could be an announcement jingle heard in an airport:
	</p>
	<label>
		Without reverb:
		<Audio src={reverbDisabled} />
	</label>
	<label>
		With reverb:
		<Audio src={reverbEnabled} />
	</label>

	<h3>Equalizer</h3>
	<p>
		The equalizer, or EQ, is part of the family of filters. In fact, it is usually a combination of
		low-pass, high-pass, and band-pass filters. It allows you to boost or reduce (or even mute) some
		frequencies. It is both useful for making the mix breathe more, and for coloring the sound.
	</p>
	<p>Here is an example of a muted piano achieved using an EQ:</p>
	<label>
		Without EQ:
		<Audio src={eqDisabled} />
	</label>
	<label>
		With EQ:
		<Audio src={eqEnabled} />
	</label>

	<Image
		src={graphicEqPiano}
		alt="The equalizer applied to the piano (dB level modification based on the frequency)."
		caption="The equalizer applied to the piano (dB level modification based on the frequency)."
	/>

	<FramedTextBlock
		title="Note"
		content="Equalizer is a generic term, in practice there are many different kinds of EQs!"
		variant="note"
	/>

	<h3>Chorus</h3>
	<p>
		The chorus creates a subtle delay between the left and right channels. It can be used either as
		an aesthetic effect, or to give more depth to a sound by simulating a stereo effect. Here is
		below an example of an aesthetic use:
	</p>
	<label>
		Without chorus:
		<Audio src={chorusDisabled} />
	</label>
	<label>
		With chorus:
		<Audio src={chorusEnabled} />
	</label>

	<h3>Side chain - pumping effect</h3>
	<p>
		The side chain effect or pumping effect can be simply described as a muting effect applied
		periodically, or when another sound is playing (for example, every time the kick drum is
		played). It is a very common effect in electronic music to give more space, or even to reinforce
		the kick drum depending of the intensity of the effect. In some DAWs or plugins, it is part of
		the compressor as a setting.
	</p>
	<label>
		Without side chain:
		<Audio src={sidechainDisabled} loop />
	</label>
	<label>
		With side chain:
		<Audio src={sidechainEnabled} loop />
	</label>

	<h3>Distortion and other damaging effects</h3>
	<p>
		Characteristic of some genres like rock or metal, distortion is a very common effect. Simply
		put, it kinds of "destroy" the sound to make it more aggressive. Within the family of "damaging"
		effects, we can also find the overdrive, saturation, or bit crusher for instance. Here is an
		overdrive example:
	</p>
	<label>
		Without overdrive:
		<Audio src={overdriveDisabled} />
	</label>
	<label>
		With overdrive:
		<Audio src={overdriveEnabled} />
	</label>

	<h3>Compressor and limiter</h3>
	<p>
		This one has to be one of the hardest to master, and to be honest I still struggle a lot with
		it. Though even though it may be hard to use, the theory is quite simple. Basically, it lowers
		the volume of the sound when it is too loud, more specifically when it crosses a certain
		threshold. Now the difference between those two effects is a bit of a debate, but I like <ExternalLink
			href="https://www.izotope.com/en/learn/compressor-vs-limiter.html#difference"
			>the explanation provided by iZotope</ExternalLink
		>:
	</p>
	<Quote
		quote="compressors are for shaping dynamic range, and limiters are for catching peaks while preserving sonic integrity."
	/>
	<p>
		Here is an example of a compressed sound (notice how the notes with a low volume sound louder
		due to peaks being lowered and overall volume being increased; notice also that loud notes remain impactful):
	</p>
	<label>
		Without compression:
		<Audio src={compressionDisabled} loop />
	</label>
	<label>
		With compression:
		<Audio src={compressionEnabled} loop />
	</label>

	<h2>Closing words</h2>

	<p>
		I could go on for a long while with many effects, but this post is already way too long (yes I
		know, it is hard, ok? I try, I promise). So I will instead tell you that we will see how some of
		them can be put into practice in the next chapter, because as you can see it can truly make a
		big difference.
	</p>
	<p>
		And I will wish you a good day, afternoon, evening or night... and see you in the next post...
		right? ... right? (🥺)
	</p>
	<p>~ Charly</p>

	<h2>Resources</h2>
	<ul>
		<li>
			Some equalizer examples: <ExternalLink href="https://emastered.com/blog/types-of-eq"
				>https://emastered.com/blog/types-of-eq</ExternalLink
			>
		</li>
		<li>
			In depth comparison of compressor and limiter: <ExternalLink
				href="https://www.izotope.com/en/learn/compressor-vs-limiter.html"
				>https://www.izotope.com/en/learn/compressor-vs-limiter.html</ExternalLink
			>
		</li>
	</ul>
{/snippet}
