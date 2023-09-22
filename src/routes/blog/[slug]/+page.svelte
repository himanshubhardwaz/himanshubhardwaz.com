<script lang="ts">
	import type { PageData } from "./$types";
    import {marked} from "marked";

    export let data: PageData
</script>

<section>
   {@html marked(data.content)}
</section>