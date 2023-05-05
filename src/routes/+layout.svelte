<script>
  import "../styles/app.css";
  import PageTransition from "@/components/_shared/PageTransition/PageTransition.svelte";

  export let data;
</script>

<PageTransition pathname={data.url}>
  <main>
    <slot />
  </main>
</PageTransition>
