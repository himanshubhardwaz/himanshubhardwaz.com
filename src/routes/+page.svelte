<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Experience from '$lib/components/Experience.svelte';
</script>

<Hero />
<Experience />
<Projects title="Featured Projects" onlyShowFeatured={true} />