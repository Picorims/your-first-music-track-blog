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
	import { BlogPage, Quote, Image } from 'svelte-blogging-kit';

	import thumbnail from './pexels-javierdiazg-89625.jpg';
</script>

<BlogPage
	{config}
	postTitle="1 - Welcome aboard!"
	{postContent}
	date="10/11/2024"
	categories={['Introduction']}
	urlComments="https://your-first-music-track.weebly.com/blog/welcome-aboard"
/>
<!--american date mm-dd-yyyy-->

{#snippet postContent()}
	<Image
		src={thumbnail}
		alt="pencils above a paper sketch"
		caption="'Used Pen Lot on Paper' by Javier Gonzalez, https://www.pexels.com/photo/used-pen-lot-on-paper-89625/"
	/>
	<p>
		Music composition might sound like something completely unreachable to the average person. You
		might think that you need expensive software and hardware, and years of knowledge in music
		theory, sound design, mixing and mastering. But the truth is: it is no harder to pick than
		learning to draw. Drawing can get extremely complex with advanced theory requiring many tools.
		Still, any child can start drawing given a paper and a pencil. And, like drawing, it can be an
		enjoyable activity no matter how experienced you are. After a bit of basic knowledge in place,
		you can then, in the same way, explore many styles, which in music we call
		<span class="technical-term">genres</span>. And that's what make it so interesting. There is
		always room for exploration, for learning new things, for <em>trying</em> new things.
		<br /> That's why I picked this subject: to make it more accessible, and because you can easily adjust
		it to your taste.
	</p>

	<Quote quote="The truth is: it is no harder to pick than learning to draw." />

	<p>
		This is the challenge that I want you to try. Even if you never did music, or have no knowledge
		about music theory. Because while everyone knows what music is, music composition is no more
		complicated. Pick instruments, write a rhythm, a melody, a chord progression or a bass line for
		each of them, mix and match, and voilà! No seriously, it is hardly more complicated than that,
		it just takes some time, but for a starting point that is pretty much it.
	</p>

	<p>So, ready to get started? Then see you on the first chapter!</p>

	<p>
		PS: You can head over to
		<ExternalLink href="https://hackmusictheory.com">hackmusictheory.com</ExternalLink>
		to find additional resources. They have a great free tutorial to get started with music theory.
	</p>
{/snippet}
