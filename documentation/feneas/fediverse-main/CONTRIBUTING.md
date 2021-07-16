
# CONTRIBUTING

Don't hesitate to send a merge request or to open an issue.

Also, check out our [Wiki pages](https://git.feneas.org/feneas/fediverse/-/wikis/home)

### [Submitting software](#submitting-software)

**Software** here is "a) project that can be installed on a server and self-hosted b) project that may be interesting to the general public, independent of their technical knowledge".

If your project targets mainly *developers*, tech-savvy users or is a helper (reference library, bot, relay, etc), please, submit it to **TOOLS** page (see below).

Software submitted to **ALL APPS** website page **must be**:
* Fully open source (please, consider showcasing your closed source apps on https://the-federation.info)
* Supporting or planning to support one of the following protocols: OStatus, diaspora, Zot, ActivityPub (please, consider showcasing your apps federating via other protocols on https://the-federation.info)

Fork this repository. Add your project data to `./source/_data/miscellaneous.json` file.

A project **must have** *title, source, protocols (1 string, comma separated), license, categories* and appropriate protocol classes marked as `true`. Project's description (`about`) shouldn't excede 200 characters limit.

Please, choose no more than **3 categories** (array of strings) for the software. The ones it was initially designed for.

#### Software categories (WIP, may change in the future)
* `SN-ma` (social network: macroblogging)
* `SN-mi` (social network: microblogging)
* `Blog-Pub` (blog and publishing software)
* `Media` (media sharing: images, audio, video, etc)
* `Links` (link sharing)
* `Ev-Meet` (events, meetups, calendars)
* `Files` (file hosting software)
* `Econ` (economic activities)
* `Open data` (dataset / corpora exchange)
* `Reviews` (networks whose main purpose is reviewing stuff)
* `Games` (gaming servers and apps)
* `Develop` (software development applications: version control services, pastebins, etc)
* `Extention` (services and tools extending Fediverse functionality: adding groups, etc)
* `Forum` (forums and forum-like software, boards, etc)
* `Other` (everything that doesn't quite fit into the above categories)

A project may have a logo / image (45x45px), placed in `./source/img/misc` folder.

### [Submitting tools](#submitting-tools)
Fork this repository. Add your project data to `./source/_data/tools.json` file.

A project **must have** *title, source, protocols (1 string, comma separated), license, categories* and appropriate protocol classes marked as `true`. Project's description (`about`) shouldn't excede 200 characters limit.

Please, choose no more than **2 categories** (array of strings) for the software. The ones it was initially designed for.

#### Tools categories (WIP, may change in the future)
* `Libs` (frameworks, libraries, reference implementations in particular code language)
* `Specs` (Fediverse protocol specifications)
* `Utils` (Utilities: daemons, bots, resharers)
* `Relays` (Fediverse relays)
* `Bridges` (bridging other stuff to fediverse networks)
* `Tests` (any kind of test tools)
* `Plugins` (CMS plugins, apps to be installed inside other systems connecting to Fediverse)
* `Other` (everything that doesn't quite fit into the above categories)

A project may have a logo / image (45x45px), placed in `./source/img/misc` folder.

### [Submitting news](#submitting-news)

Please, read our [guidelines](./GUIDELINES.md) for guest authors.

**Data located in**: `/source/_posts` folder

**[Chronicles](https://fediverse.party/en/chronicles)** page aggregates latest news about federating software, interviews with developers, first-person narratives, Fediverse related research and analysis.

Posts are available via [RSS](https://fediverse.party/atom.xml) subscription.
`Preview` is rendered on Chronicles page (limited ammount), text after metadata is shown in RSS (unlimited) and on post's page (see [Tags](https://fediverse.party/tags) ).

Every post **must have** the following __metadata__:

```
layout: "post"
title: "some title"
date: 2222-01-25
tags:
    - pleroma
preview:
  "short gist..."
url: "https://pleroma.social/link-to-news-source"
lang: en
authors: [{"name": "John Snow", "url": "https://ggg.social", "network": "socialhome"}]
```

`Tags`
A tag is either "fediverse" for general articles or the title of a particular Fediverse project.

A post may have one of these tags: actorscafe, anfora, commonspub, diaspora, distbin, dokieli, dolphin, epicyon, fediblog, fediverse, forgefed, friendica, funkwhale, gancio, gnusocial, groundpolis, guppe, honk, hubzilla, kanzaki, kibou, kroeg, lemmy, mastodon, microblogpub, misskey, mobilizon, moontree, nautilus, peertube, pixelfed, pleroma, plume, prismo, p3k, reel2bits, rustodon, social (for NextCloud Social), smithereen, socialhome, writefreely, zap.

`Preview`
Limit 150 characters - for "regular" and "wanted" posts, limit 350 characters - for "featured" post.
Please, stay within the limits in preview, otherwise it gets truncated half-sentence and will be posted that way on the Chronicles front page. Not good.

__Optional metadata__:

```
wanted: true
featured: true
banner: "pic.jpg"
```

`Wanted`
Add this metadata to a post that you wish to show in the upper visible part of the Chronicles page. Calls for contribution, calls for donations, calls for help should be posted with this metadata.

`Featured`
Add this metadata to a guest post, long-form article, to show the post in a prominent part of the Chronicles page.

`Wanted` and `featured` can't be mixed and are temporary. This metadata must be removed from an older post when creating a new "featured" or "wanted" post.

`Banner`
Required for "featured" posts only, an image wide enough to be used as a fullscreen background (~1920px), should be placed in `/source/_posts/exact-post-file-name` folder. Any other images used in this article may be placed there as well. See [example](https://git.feneas.org/feneas/fediverse/tree/master/source/_posts/fediverse-saves-from-pickup-artists-and-7-more-reasons-to-join).

`Authors`
Required. Add an array of object(s): name you wish to be shown as the author, and one website link (preferably link to your Fediverse profile). If it's the link to your account on Fediverse, specify network name - lower case, without spaces.

**Thanks!**
