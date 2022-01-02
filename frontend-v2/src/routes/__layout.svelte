<script>
  import Header from '$lib/components/Header/index.svelte';

  import '../app.css';
</script>

<div class="wrapper">
  <Header
    title="Welcome to the greatest Homelab page on Planet Earth!"
    intro="おはようございます ❤️"
  />
  <slot />
</div>

<style>
  .wrapper {
    min-height: 100vh;
    width: min(90%, 1100px);
    margin-inline: auto;
    padding: 3.14em 0;
    background-color: var(--color-secondary-dark);
  }
</style>
