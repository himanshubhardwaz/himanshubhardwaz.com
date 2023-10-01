<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="container max-w-6xl px-4 min-h-screen no-scrollbar">
    <Navbar />
    <section class="min-h-[calc(100vh-210px)] sm:min-h-[calc(100vh-270px)]">
      <slot />
    </section>
    <Footer />
</main>
