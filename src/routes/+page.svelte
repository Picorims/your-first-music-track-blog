<script lang="ts">
	/*
    Copyright (c) 2024 Charly Schmidt aka Picorims<picorims.contact@gmail.com>

    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at https://mozilla.org/MPL/2.0/.
    */

	import { base } from '$app/paths';
	import { config } from '$lib/config';
	import { BlogPage } from 'svelte-blogging-kit';
</script>

<BlogPage {config} postTitle="Hello World" {postContent} date="2024-01-01" />

{#snippet postContent()}
	<span>hello</span>
{/snippet}
