Homelab Reverse Proxy
===

A reverse proxy for my local :house:-lab.

## Installation and Setup

Before you start, make sure you have both [Docker]() and [Docker-Compose]()
installed.

Steps:
1. clone the repo: `git clone https://github.com/vinnyA3/homelab-dash.git`
2. in the root of the project, run: `docker-compose up -d` 
3. crack open a brew, you're done :beers:


> :warning: The service Photoprism is provisioned separately -- if you're
> playing with this setup make sure you get an instance running first.  You can
> find setup instructions here: https://docs.photoprism.app/getting-started/docker-compose/

> :warning: x2 - Local service domain names are registered via a local DNS
> server.  I'm using PiHole's DNS settings to set this up easily.  If you're not
> using PiHole, you can probably modify your router's local DNS.  Worse comes to
> worse, you can modify nginx config to point to the service's ip address. 


## Services 

* **nginx** - reverse proxy
* **photoprism** - self-hosted, AI-powered photo application

More information on individual services can be found below.

## Nginx

Nginx serves as reverse proxy in the homelab architecture.  Each individually
configured web service is associated with a doman specified in my local network's
DNS settings.

The index route points to the main `home` dashboard.

## Photoprism

**local domain**: `photoprism.box`

I'm using Photoprism for extra images and photos that I'd rather not pollute my
cloud storage with ie. wallpapers, arbitrary screenshots, pictures of cats etc.

Checkout out Photoprism on Github: https://github.com/photoprism/photoprism 
