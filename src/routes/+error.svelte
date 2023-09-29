<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="min-h-[calc(100vh-210px)] sm:min-h-[calc(100vh-270px)]">
    <h1>{$page?.error?.message}</h1>
</section>

