
# FEDIVERSE GUIDE

![website logo](./source/img/touch/favicon-32x32.png?raw=true) A quick look into Fediverse networks

→ [https://fediverse.party](https://fediverse.party) ←

### [Goals](#goals)

1. **Road Making**: Provide links to information scattered around the internet. Make it easier for newcomers to get acquainted with the idea in general and with every federated network in particular.

2. **Team Building**: Unite all federated social networks under 'Fediverse' name. Highlight the sense and spirit of a Fediverse community.

### [Contributing](#contributing)

Read [Contributing](./CONTRIBUTING.md)

→ Check out [our Wiki](https://git.feneas.org/feneas/fediverse/-/wikis/home) ←

### [Structure](#structure)

#### Fediverse page

*Data located in*: `/source/_data/fediverse.json` file

#### Chronicles page

*Data located in*: `/source/_posts` folder

#### Knowledge page

*Data located in*: `/source/_data/knowledge.json` file

#### Each network page

*Data located in*: `/source/_data/..network.json` and `/source/_data/world.json` files

#### Portal page

Supposed to link to a page helping to choose a server on any network (just an idea, for now)

### [Theme File Structure](#theme)

- Develop styles in  `/themes/starter/assets/scss`
- Develop scripts in `/themes/starter/assets/scripts`

### [Setup](#setup)

This site uses [Hexo](https://hexo.io) static generator. Follow these steps to spin up a local development environment:

1. Run `npm install` in main project's folder
2. Run `gulp` in  `/themes/starter` folder
3. In second terminal, run `hexo server` in main folder, to start the server and preview at localhost


### [Translating](#translating)

Maintaining several website translations will require extra work. Please, read [discussion](https://git.feneas.org/feneas/fediverse/-/issues/2).
Adding another language requires additions to `_config` file and `/themes/starter/languages` folder.

Mandatory for translating:
- create lang folder (`/source/*lang*`)
- common strings (`/themes/starter/languages/en`)
- `/source/_data` folder: fediverse.json, world.json

Translating Chronicles and Knowledge page content doesn't make sense (?). They will be mostly a collection of external English articles. If you're willing to become a permanent news contributor in another language and to search for Fediverse news in that language, let's discuss it in the issue.
