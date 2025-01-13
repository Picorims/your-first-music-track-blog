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

	import contextMenuMasteringImg from './context_menu_mastering.png';
	import songWithoutMastering from './your_first_music_track_blog__chap_6_to_9__full_song__mixing_v2.mp3';
	import songWithMastering from './Walking Under The Rain - Charly Schmidt aka Picorims - mastered.mp3';
</script>

<BlogPage
	{config}
	postTitle="10 - Mastering: The Last Touch"
	{postContent}
	date="01/13/2025"
	categories={['Mixing', 'Mastering']}
	urlComments="https://your-first-music-track.weebly.com/blog/10-mastering-the-last-touch"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<FramedTextBlock
		title="Note"
		content="Stems and songs provided in the following post are licensed under CC BY-NC-ND 4.0. For more information, see: https://creativecommons.org/licenses/by-nc-nd/4.0/"
		variant="note"
	/>

	<p>
		We are almost there. We wrote our song, we applied effects to our instruments, we balanced it
		all. Now is the time to add the last touch before pressing the export button!
	</p>

	<h2>Mastering the easy way: automated mastering</h2>

	<p>
		Some convenient tools exist if you do not want to bother with yet another layer of messing up
		with effects and settings. BandLab offers such an option (and that's the only option they offer
		anyway!). If you go to your library tab in BandLab, select your track, then click on the three
		dots next to the "Studio" button, you should see a "Apply Mastering" option in the contextual
		menu.
	</p>

	<Image
		src={contextMenuMasteringImg}
		alt="Context menu with the 'Apply Mastering' option highlighted"
	/>

	<p>
		You should then be presented with a handful but limited list of presets (only three of them are
		free), as well as a range input that lets you choose the intensity of the mastering applied. If
		you don't know what to pick, you can keep the default settings. And that's it, your song is
		ready for download!
	</p>

	<p>
		Some DAW plugins like <ExternalLink
			href="https://www.native-instruments.com/fr/products/izotope/ozone-11-elements/"
			>Ozone</ExternalLink
		> also offer automated mastering, but they are usually not free (sometimes you get a license when
		buying some physical devices).
	</p>

	<h2>Mastering the hard way: effects on the master channel (OPTIONAL)</h2>

	<p>
		I won't go in details here because, to be honest, I suck at mastering. I can however give you
		some generic guidelines, although there again I suggest to dive into tutorials online.
	</p>
	<p>
		The first thing you can do is apply a <TechTerm>limiter</TechTerm> on the master channel to prevent
		peaks from saturating the audio (which can sound absolutely awful on some devices, we are not talking
		about the effect here).
	</p>
	<p>
		Before the limiter (which is more harsh), you can add a <TechTerm>compressor</TechTerm> to make a
		smoother first pass and "buff" the mix (which is recommended on EDM music).
	</p>
	<p>
		You may also use an <TechTerm>equalizer</TechTerm> to adjust the overall frequencies, and give a
		particular feeling to the song.
	</p>
	<p>
		Finally, I suggest looking for mastering for a specific genre, as sometimes it is quite codified
		or characteristic of how it sounds.
	</p>

	<h2>Example</h2>

	<p>
		Here is how it sounds without and with the "clarity" BandLab mastering preset applied at 50%:
	</p>

	<label>
		Without mastering:
		<Audio src={songWithoutMastering} />
	</label>

	<label>
		With mastering:
		<Audio src={songWithMastering} />
	</label>

	<h2>That's it?</h2>

	<p>
		Well, there is one last important step to finish our song: give it a name! Something that
		defines what it is about, what it reminds you, where your inspiration comes from, whatever you
		want that represents your song. For me, that will be "walking under the rain".
	</p>

	<label>
		Walking Under The Rain - Charly Schmidt aka Picorims (CC BY-NC-ND 4.0, <ExternalLink
			href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
			>https://creativecommons.org/licenses/by-nc-nd/4.0/</ExternalLink
		>)
		<Audio src={songWithMastering} />
	</label>

	<h2>Wrapping up</h2>

	<p>
		Ok, that was quite intensive! So far we discovered the "joy" of music theory, wrote a drum loop,
		a chord progression, a melody, and a bass line. From this loop, we made a full song, where each
		instrument gets its own effects and space in the room. And we just added the last touch. Crazy,
		right?
	</p>

	<p>
		You were probably lost many times, because I went to the essentials, and because we moved fast.
		And at the same time, I wrote some lengthy posts, and I apologize again for that. But I hope
		that through this little journey, you have now a better picture at how we can make a song from
		scratch (even if you didn't follow along!). As I said, it is not complicated in itself, but like
		drawing, there is a lot to learn, and you won't make the next world masterpiece on day one. But
		everyone can master it if they pour enough time into it! It just seems inaccessible because the
		vocabulary and tools are unconventional. It is just a barrier to cross, and I hope I helped you
		to cross it (or at least have a look on the other side of the wall!).
	</p>

	<p>
		Now is the time for me to wish you for the last time a good day, afternoon, evening or night,
		and let you know that you can always contact me at <ExternalLink
			href="mailto:picorims.contact@gmail.com">picorims.contact@gmail.com</ExternalLink
		> if you have any question, feedback, or if you just want to chat about music!
	</p>

	<p>
		Wishing you the best,<br />
		~ Charly
	</p>
{/snippet}
