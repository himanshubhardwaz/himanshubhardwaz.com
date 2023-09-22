<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="container max-w-6xl px-4 min-h-screen no-scrollbar">
    <Navbar />
    <slot />
    <Footer />
</main>
