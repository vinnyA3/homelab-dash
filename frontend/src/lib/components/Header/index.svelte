<script>
  export let title = 'Gawr Gura';
  export let intro = 'Testing';
</script>

<header class="header">
  <h1>{title}</h1>
  <p>{intro}</p>
</header>

<style>
  .header {
    text-align: center;
    width: min(100%, 720px);
    margin-inline: auto;
    margin-bottom: 3.14em;
  }

  .header h1 {
    margin-bottom: 0.755em;
  }
</style>
