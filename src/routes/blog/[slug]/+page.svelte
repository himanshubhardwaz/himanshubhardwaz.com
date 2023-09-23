<script lang="ts">
	import type { PageData } from "./$types";
    import {marked} from "marked";

    export let data: PageData
</script>

<svelte:head>
	<title>{data.title} by Himanshu</title>
     <meta name="description" content={`Blog: ${data.title} by Himanshu`}>
</svelte:head>

<section>
   {@html marked(data.content)}
</section>