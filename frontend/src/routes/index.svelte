<script>
  // TODO: mock - remove after parse yml config
  const mockedServices = [
    {
      description: 'Default Photo for Service - Gura',
      src: 'images/gura-pfp.jpg',
      name: 'PhotoPrism'
    },
    {
      description: 'Default Photo for Service - Calliope',
      src: 'images/calliope.pfp.jpg',
      name: 'PhotoPrism'
    },
    {
      description: 'Default Photo for Service - Ame',
      src: 'images/watson-pfp.jpg',
      name: 'PhotoPrism'
    },
    {
      description: 'Default Photo for Service - Kiara',
      src: 'images/kiara-pfp.jpg',
      name: 'PhotoPrism'
    },
    {
      description: 'Default Photo for Service - Ina',
      src: 'images/ina.png',
      name: 'PhotoPrism'
    }
  ];
</script>

<main class="service-grid">
  {#each mockedServices as { name, src, description } (src)}
    <div class="service">
      <a href="http://photoprism.box" class=".service__link">
        <img {src} alt="image of {name}" class="service__image" />
        <div class="service__content">
          <h3 class="service__name">{name}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  {/each}
</main>

<style>
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 1.2em;
  }

  .service {
    display: grid;
  }

  .service__content {
    padding: 0.8em 0;
    background-color: var(--color-primary-dark);
    align-self: end;
  }

  .service__image {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
  }

  .service__name {
    display: service;
    margin-bottom: 0.6em;
  }
</style>
