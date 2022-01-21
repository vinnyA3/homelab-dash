<script>
  // TODO: mock - remove after parse yml config
  const mockedServices = [
    {
      description: 'Self-hosted, AI-powered photo application - Gawr Gura',
      imageSrc: 'images/gura-pfp.jpg',
      serviceLink: 'http://photoprism.box',
      name: 'PhotoPrism'
    },
    {
      description: 'Download eBooks from IRC Highway',
      imageSrc: 'images/calliope.pfp.jpg',
      serviceLink: 'http://openbooks.box',
      name: 'Openbooks'
    },
    {
      description: 'Client/Server media player and global streaming service',
      imageSrc: 'images/watson-pfp.jpg',
      serviceLink: 'http://plex.box/web',
      name: 'Plex Media Server'
    },
    {
      description: 'The undying Tenchou of KFP',
      imageSrc: 'images/kiara-pfp.jpg',
      name: 'Takanashi Kiara'
    },
    {
      description: 'The Ancient Ones\' star pupil',
      imageSrc: 'images/ina.png',
      name: 'Ninomae Ina\'nis'
    }
  ];
</script>

<main class="service-grid">
  {#each mockedServices as { name, imageSrc, serviceLink, description } (imageSrc)}
    <div class="service">
      {#if serviceLink}
        <a href={serviceLink} class=".service__link">
          <img src={imageSrc} alt="image of {name}" class="service__image" />
          <div class="service__content">
            <h3 class="service__name">{name}</h3>
            <p>{description}</p>
          </div>
        </a>
      {:else}
        <img src={imageSrc} alt="image of {name}" class="service__image" />
        <div class="service__content">
          <h3 class="service__name">{name}</h3>
          <p>{description}</p>
        </div>
      {/if}
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
