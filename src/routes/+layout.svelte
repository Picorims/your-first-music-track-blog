<slot></slot>

<footer>
	© 2024 Charly Schmidt aka Picorims <a href="mailto:picorims.contact@gmail.com"
		>picorims.contact@gmail.com</a
	><br />
	Unless otherwise specified, all content is licensed under the
	<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> license.
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

	:global(.custom-theme) {
		font-family: 'Quattrocento', Garamond, Georgia, 'Times New Roman', Times, serif;
		line-height: 1.5;
		color: #666666;
	}

	:global(.custom-theme .__sbk__blog-header) {
		background-color: rgba(35, 35, 35, 0.95);
		padding: 0.9rem 2.3rem;
	}

	:global(.custom-theme .__sbk__blog-header-title) {
		margin: 0;
		font-family: 'Dosis', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.5rem;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
		color: white;
		letter-spacing: 1.1;
	}

	:global(.custom-theme .__sbk__page-content) {
		padding: 2rem;
		padding-top: 3rem;
		gap: 2rem;
		max-width: 1010px !important;
	}

	:global(.custom-theme .__sbk__all-posts-link, .custom-theme .__sbk__comments-link) {
		display: inline-block;
		font-size: 1.2rem;
		text-decoration: none;
		color: white;
		background-color: #333;
		font-weight: bold;
		border: 1px solid #333;
		padding: 0.5rem 1rem;
		margin: 1rem 0;
		border-radius: 4px;
		transition: 0.2s;
	}
	:global(.custom-theme .__sbk__all-posts-link:hover, .custom-theme .__sbk__comments-link:hover) {
		background-color: transparent;
		color: #333;
	}

	:global(.custom-theme h1, .custom-theme h2) {
		font-family: 'Lora', Georgia, 'Times New Roman', Times, serif;
		font-size: 2rem;
		color: #333;
		font-weight: 400;
		margin-top: 0;
		margin-bottom: 0.5em;
	}

	:global(.custom-theme .__sbk__post-date) {
		font-weight: 300;
		margin: 0 8px 0 0;
		padding: 0 0 4px 0;
		font-size: 0.8rem;
	}

	:global(.custom-theme .__sbk__post-header-separator) {
		margin: 0;
		border: 0;
		border-top: 1px solid #ddd;
	}

	:global(.custom-theme .__sbk__post-content) {
		line-height: 1.5;
	}

	:global(.custom-theme .__sbk__post-content h3) {
		font-size: 1.5rem;
		font-weight: bold;
	}

	:global(.custom-theme .__sbk__post-content p) {
		text-align: justify;
	}

	:global(.custom-theme .__sbk__post-content a) {
		text-align: justify;
		color: #2372c2;
	}

	:global(.custom-theme .__sbk__post-content em > em) {
		font-weight: bold;
		text-decoration: underline;
	}

	:global(.custom-theme .__sbk__post-content ul li) {
		list-style-type: disc;
		padding-left: 0.75rem;
		margin: 0.5rem 0;
	}

	:global(.custom-theme .__sbk__post-content .__sbk__component-image) {
		margin: 2rem 0 !important;
		font-size: 0.9rem;
		max-width: 640px;
		font-weight: 300;
		font-family: 'Open Sans', Georgia, 'Times New Roman', Times, serif;
		margin: auto;
	}
	:global(.custom-theme .__sbk__post-content .__sbk__component-image figcaption) {
		border-left: 1px solid #ccc;
		padding-left: 0.5rem;
	}

	:global(.custom-theme .__sbk__post-content .__sbk__component-audio) {
		width: 100%;
		max-width: 640px;
	}

	:global(.custom-theme .__sbk__post-content .__sbk__component-file-attachment) {
		font-size: 1.2rem;
		border: 1px solid #ccc;
		padding: 0.5rem;
		margin: 1rem 0;
		display: inline-block;
		border-radius: 4px;
		text-decoration: none;
		transition: 0.1s background-color;
	}
	:global(.custom-theme .__sbk__post-content .__sbk__component-file-attachment .icon) {
		margin-right: 0.5rem;
	}
	:global(.custom-theme .__sbk__post-content .__sbk__component-file-attachment .name) {
		text-decoration: underline;
	}
	:global(.custom-theme .__sbk__post-content .__sbk__component-file-attachment:hover) {
		background-color: #f0f0f0;
	}

	:global(.custom-theme .__sbk__post-content .__sbk__component-quote) {
		font-style: italic;
		font-size: 1.5rem;
		font-family: 'Raleway', Georgia, 'Times New Roman', Times, serif;
		margin: 1rem 0;
	}

	:global(.custom-theme .__sbk__post-content .__sbk__component-framed-text-block) {
		padding: 1rem;
		border-left: 1px solid #ccc;
		margin: 1rem 0;
		background-color: #f0f0f0;
	}
	:global(.custom-theme .__sbk__post-content .__sbk__component-framed-text-block p) {
		margin: 0;
	}
	:global(.custom-theme .__sbk__post-content .__sbk__component-framed-text-block[data-variant="tip"]) {
		background-color: #b2dcf0;
		color: #041d35;
		border-color: #169cda;
	}

	:global(.custom-theme .__sbk__page-aside) {
		padding: 0;
	}

	/* ================== */

	:global(.technical-term) {
		text-decoration: underline dashed #666;
		color: #9b46ac;
		font-weight: bold;
	}

	footer {
		background-color: #333;
		color: white;
		text-align: center;
		padding: 1rem;
		font-size: 0.9rem;
	}
	footer a {
		color: white;
		text-decoration: underline;
	}
</style>
