<script lang="ts">
	import type { Snippet } from 'svelte';

	/*
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>
    
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	interface Props {
		href: string;
		children?: Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	{#if children}
		{@render children()}
	{:else}
		{href}
	{/if}
</a>
