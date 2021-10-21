# "My Obsidian Setup, Part 1: Sync, Core Plugins, Workspaces, and Other Settings"

*21-10-2021 13:29* 

> Exploring topics beyond our day-to-day coverage.
Exploring topics beyond our day-to-day coverage.

![](https://cdn.macstories.net/fbc2fe95-1564-416e-a83f-5a987472b414-1626445785332.png)

My Dashboard workspace in Obsidian for iPad.

Earlier this week, after a long beta period I’ve participated in for the past few months, the official [Obsidian app for iPhone and iPad](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442) launched on the App Store. I’ve covered Obsidian and my approach to writing my annual iOS review in it on both [AppStories](https://appstories.net/episodes/228/) and [Connected](https://www.relay.fm/connected/353); because I’m busy with that massive project and an upcoming major relaunch of the Club (*hint hint*), I don’t have time right now to work on a proper standalone, in-depth review of Obsidian for MacStories. So, given my time constraints, I thought it’d be fun to do a multi-part series for Club members on how I’ve set up and have been using Obsidian as my Markdown text editor and note-taking app of choice.

[Obsidian](https://obsidian.md/) has a steep learning curve on all platforms: there are *a lot* of settings to choose from, and there’s an incredible [third-party developer community](https://help.obsidian.md/Advanced+topics/Third-party+plugins) responsible for hundreds of plugins that can fundamentally alter the functionality of the app. The recently-launched iOS and iPadOS also matches all the core functionalities of the desktop app, including the ability to install custom plugins, themes, and [CSS snippets](https://help.obsidian.md/Advanced+topics/Customizing+CSS) to customize the app’s behavior and look. As a result, it can be quite challenging to get started with Obsidian and know what to tweak in the app’s preferences.

I don’t know how long this series will take me to complete, but my hope is that by sharing practical examples of how I set up the app on my end, I can make it easier for Club members to get started with Obsidian and personalize it to their needs. What I *do* know is that Obsidian already is one of the most impressive app launches of 2021, and I have high hopes for this product as an extensible, completely customizable Markdown text editor based on plain text files. I haven’t felt this way about a text editor since [Editorial’s first beta in 2012](https://www.macstories.net/stories/editorial-for-ipad-review/), and I’m going to have a lot of fun sharing my techniques, custom plugins, and tips for Obsidian.

Let’s dive in.

### Sync and Plain Text Files

The basic truth you should know about Obsidian is the following: it’s a front-end for a folder full of plain text files, which can be stored anywhere on your filesystem, including any location of the Files app for iPhone and iPad. Obsidian creates a ‘[vault](https://help.obsidian.md/How+to/Working+with+multiple+vaults)’ (a database) that is a folder containing your plain text files. At a basic level, Obsidian doesn’t require you to customize anything; you can get started by pointing it to a folder of Markdown files, which the app will index and let you edit in-place. This is an important piece of knowledge to keep in mind since, for data portability purposes, Obsidian lets you export your documents by simply **copying and pasting them from the Finder of Files app**. There’s no hidden database format and no proprietary sharing features to worry about: ultimately, the vault is just a folder you can freely access at any point via your computer’s file manager.

When you create a vault in Obsidian for iPhone and iPad, you can choose to create it in iCloud Drive or your device’s local storage – the ‘On My iPhone’ or ‘On My iPad’ default file provider of the Files app. Now, I know plenty of people who have decided to store their Obsidian vaults in iCloud Drive and use Apple’s service for sync between devices, which has the advantage of seamless integration with the Files app and background sync privileges. I did that too initially, but, personally, I prefer using Obsidian’s custom [Sync](https://help.obsidian.md/Licenses+%26+add-on+services/Obsidian+Sync) service, a $4/month (when billed annually) [paid add-on](https://obsidian.md/sync) that is enabled via one of the app’s built-in ‘core’ plugins. There are a few reasons why I like Obsidian Sync as an alternative to iCloud Drive or other syncing solutions on iOS:

-   **It’s end-to-end encrypted by default.** You set a passphrase for sync, and data that leaves your device is always encrypted with it, so it can only be decrypted on other devices via your passphrase. It’s an additional layer of security that makes me feel safe about syncing sensitive article drafts between devices.
-   **Obsidian Sync can work with local storage on iPhone and iPad.** If you use Obsidian Sync, you can store your vault in the Files app’s local storage, then rely on the Sync service to keep your vault synchronized between multiple instances of the app. No need to keep the vault in iCloud Drive, causing a redundant sync to occur and run into potential sync conflicts caused by iCloud Drive (which, unfortunately, are still far too common).
-   **It comes with a built-in 1-year version history.** While iCloud Drive is an “invisible” service that doesn’t let you look at what’s going on behind the scenes, with Obsidian Sync you can inspect the full sync activity, which is a log of all the changes pushed to and fetched from Obsidian’s servers. The log lets you see all individual changes to files and understand if a specific file caused a sync error or conflict; it’s available in Options ⇾ Sync, which you can access by pressing ⌘, or by tapping the gear icon in Obsidian’s left sidebar. Additionally, you can view the full version history for individual documents and restore previous versions with a single tap. You can find this in each document’s ‘More Options’ panel (the vertical three-dot button in the upper right corner) under ‘View version history’.

![](https://cdn.macstories.net/717163d4-1cc8-42bc-aaaa-82f18419d786-1626445723116.png)

Obsidian Sync and per-document version history.

In my experience over the past few months, Obsidian Sync has been rock-solid and, more importantly, *blazing fast*. Plain text files have the benefit of being extremely lightweight, so the combination of speedy sync and being able to view a raw sync log has given me the peace of mind I never really had with iCloud Drive. It’s similar to Dropbox in this regard, but it’s end-to-end encrypted, and it can work as a layer on top of local storage on both iPhone and iPad. I highly recommend signing up for this additional service if you’re interested in these sync features.

As I’ll explore in a future installment of this series, choosing to go with the local storage + Obsidian Sync route creates additional complications for accessing Obsidian’s hidden metadata and configuration files. I’ve come up with a Shortcuts-based solution for this as well, which I’m going to explain later on.

### Core Plugins

Obsidian can be best described as a modular note-taking app and text editor based on an extensible plugin architecture. There’s an [open API for developers of plugins](https://github.com/obsidianmd/obsidian-api), which are based on web technologies (HTML, JS, and CSS) and tap into Obsidian’s hybrid nature as an Electron app. The app’s web-based nature is obvious enough: the UI is odd and non-standard in a lot of places; in the Mac version, you can inspect the app’s whole interface with a web inspector reminiscent of developer tools found in Safari and Chrome:

![](https://cdn.macstories.net/screen-shot-2021-07-16-at-4-58-01-pm-1626447521610.png)

Yeah, it’s essentially a web app.

This is, I believe, the most important trade-off to understand right away about Obsidian: what it lacks in native, [HIG](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)\-compliant interactions and design conventions, it makes up for with a fully customizable editing environment that lets anyone make plugins, themes, and even CSS snippets to modify the app’s appearance and functionalities. If Obsidian doesn’t have something you want, you can make it yourself – or found someone else’s plugin that does the job for you. From this standpoint, it’s reminiscent of [Sublime Text](https://www.sublimetext.com/), which never came to iOS and iPadOS.

Cleverly enough, the Obsidian creators themselves based key functionalities of the app on this plugin architecture and made certain features ‘core plugins’ you can enable in the app’s settings. Core plugins are different from third-party plugins, which are called ‘community plugins’ and are the ones you can browse inside the built-in gallery in Obsidian (for those that have been vetted by the Obsidian community) or manually install as files. You’d be surprised to see how many “obvious” features of Obsidian are actually core plugins you can optionally disable. Here’s a list of the highlights:

**[File explorer](https://help.obsidian.md/Plugins/File+explorer).** If you want to browse the file and folder structure in your vault, you can enable the file explorer as a plugin in the left sidebar. I paired this with the ⌘⇧E hotkey on my iPad.

![](https://cdn.macstories.net/047ce951-e36a-4d4a-8fee-a9c3b3d7db59-1626446197780.png)

Obsidian’s file explorer plugin as a pinned sidebar.

**[Search](https://help.obsidian.md/Plugins/Search).** The ability to search for text across all text files in your vault is also a core plugin that adds a new item to the left sidebar. I gave this the ⌘⇧F hotkey.

![](https://cdn.macstories.net/c702e51d-9fcd-4430-8cf9-ccd5723913c5-1626446198102.png)

Full-text search in Obsidian.

**[Quick switcher](https://help.obsidian.md/Plugins/Quick+switcher).** In my opinion, this is one of Obsidian’s best features and one of the many reasons why I’m struggling with other note-taking apps, including Apple’s own Notes app, now that I’m used to it. The quick switcher lets you, well, quickly switch between files by just typing a few letters of their file names with support for fuzzy search. It’s incredibly fast – especially if you combine it with a keyboard shortcut (mine is ⌘O) – and it makes navigation across multiple documents in Obsidian ridiculously easy. With fuzzy search, I can type ‘dsh’ and the switcher will find my ‘Dashboard’ note. This is an absolute must-have.

![](https://cdn.macstories.net/d28ab1fd-44a0-4d56-9eea-9525f8c38e27-1626446198612.png)

Opening documents with the quick switcher.

**[Backlinks](https://help.obsidian.md/Plugins/Backlinks).** In Obsidian, you can link to any other note in your vault by typing double square brackets and searching for the note you want to link. You may have seen this feature being called ‘wiki-style links’ in other apps, and it’s nothing new. What’s great about the implementation in Obsidian, however, is that the app creates an underlying map of all the notes that are linking to each other. With backlinks, you can see which notes are linking to the note you’re currently editing, which can be useful in large research or writing projects where keeping track of these references can be essential. For instance, when I took notes for WWDC sessions, I linked each session note to a chapter of my iOS review; now when I open the chapter file to start writing it, I can see which session notes are linking to it, right-click them, and open them in new panes next to the chapter so I have a reference right there. I gave the backlinks plugin the ⌘⇧B hotkey, and it’s one of the Obsidian features I use the most.

![](https://cdn.macstories.net/1b00849a-b50e-4280-86dc-87fc0cbbcb05-1626446198743.png)

The backlinks pane for a chapter of the iOS review.

**[Page preview](https://help.obsidian.md/Plugins/Page+preview).** You may have seen this feature in [Craft](https://www.craft.do/) before: with the page preview plugin, when you hover with the pointer over a `[[Linked Note]]` and hold the ⌘ key, you’ll see a floating popup with a preview of the linked item. I find this a great addition for those times when I don’t fully remember what a linked note is about.

![](https://cdn.macstories.net/22b7be60-865f-4179-833a-0f87df833ca3-1626446703450.png)

Page previews are shown when you hover over an internal link and hold the ⌘ key.

**[Command palette](https://help.obsidian.md/Plugins/Command+palette).** One of the (many) unique features of Obsidian is the fact that each plugin, in addition to visual modifications, can also install one or multiple commands you can search and trigger with the keyboard. For instance, the backlinks core plugin I covered above installs two commands – ‘Show backlinks pane’ and ‘Open backlinks for the current file’. When you hear people like me say that they’ve assigned keyboard shortcuts to features in Obsidian, it’s because those features are commands you can find in two places: under Options ⇾ Hotkeys in settings, and in the command palette.

![](https://cdn.macstories.net/b5a3b141-7cdd-4d01-9f6c-81dfe7cbcd19-1626446554900.png)

Pinned commands and hotkeys in the command palette.

![](https://cdn.macstories.net/5fa55e08-4b98-4af0-9e6c-ba78ba8864fc-1626446444340.png)

The command palette lets you search for commands by name.

The command palette is the quick switcher, but for commands: it lets you search for any available command by name with fuzzy search, and when you’ve found the one you’re looking for, you can press Enter to trigger it. I assigned ⌘P to the palette, which I use dozens of times each day to activate different features of Obsidian. The command palette shows you hotkeys you’ve assigned to commands, and, even better, lets you pin frequently used commands to the top of the list for fast access. You can pin *any* command by visiting Options ⇾ Command palette and searching for any command available in the app. I think pinned commands are especially handy on iPhone, where the lack of a hardware keyboard makes searching for commands by name slower.

**[Open in default app](https://help.obsidian.md/Plugins/Open+in+default+app).** The ability to share the current document via the share sheet in Obsidian is itself a core plugin called ‘Open in default app’. Once triggered (my hotkey for it is ⌘D), the plugin will share the current note as a Markdown file with any compatible extension in the share sheet, including contact suggestions for iMessage and other communication apps.

As I mentioned above, these are just *highlights* from the list of core plugins; there are many more core features of the app that can be optionally enabled/disabled such as a [tag pane](https://help.obsidian.md/Plugins/Tag+pane), [daily notes](https://help.obsidian.md/Plugins/Daily+notes) and [Zettelkasten prefixes](https://help.obsidian.md/Plugins/Zettelkasten+prefixer), a [word count](https://help.obsidian.md/Plugins/Word+count), an [outline](https://help.obsidian.md/Plugins/Outline) sidebar, and more. I don’t use all of them, and there are others I plan to cover more in depth in future installments of the series. Overall, however, I find this modular approach (unsurprisingly) fascinating since it allows different users to build deeply different setups in the same app, which is something I’ve never seen done before in any other Markdown text editor for iPhone and iPad.

### Workspaces for Notes

There’s one core plugin in particular I want to cover today since it has had a profound impact on how I navigate Obsidian and switch between different modes in the app: [workspaces](https://help.obsidian.md/Plugins/Workspaces). With the workspaces core plugin, you can save the current layout in Obsidian – the files, panes, and sidebars you have open – and reload it at any point, restoring it *exactly* as you left it. This is not the “bookmarking” functionality you may have seen in other text editors that let you reopen frequently used files with a single keystroke: what I mean is that you can create a workspace displaying four different notes at once, each set to editor or preview mode, save it, then instantly recreate it whenever you want.

![](https://cdn.macstories.net/d52df3dc-ed77-48b7-97aa-024e43218def-1626447017621.png)

A workspace showing the same note in editor and preview mode side by side.

![](https://cdn.macstories.net/ed1abe98-2dea-4586-88e4-134218010cf8-1626447017777.png)

The same idea, but with two notes and four panes.

The ability to create workspaces for specific layouts and combinations of notes has changed how I take notes, organize research material, and write in Obsidian because I can now quickly switch between ‘templates’ without manually opening new panes and sidebars every time. The workspaces plugin installs a command called ‘Manage workspaces’ that lets you save the current layout of the app as a named workspace as well as delete existing workspaces; then, you can use the ‘Load workspace’ command to switch to a previously-created workspace, which will be instantly recreated in the UI.

![](https://cdn.macstories.net/d1e2222a-ffe2-4bf4-bc8c-2a82bac32874-1626447034164.png)

Managing workspaces in Obsidian.

I assigned the ‘Load workspace’ command to the ⌘⌥L shortcut, and it’s become second nature for me at this point to jump between different “modules” of note-taking and writing in Obsidian via this system.

![](https://cdn.macstories.net/a1e3dbdf-3856-4d2b-b34e-4643e306e95a-1626447018427.png)

Loading saved workspaces.

A good example of the flexibility of workspaces is my Table of Contents note for the iOS review. When I open this document, it’s because I want to write one of the chapters of the review; as I noted above, when I do that, I want to see backlinks for the chapter I’m working on so I don’t miss notes that mention it. To make this process easier, I created a workspace that shows the Table of Contents note in editor mode and the backlinks pane as a pinned sidebar, which is something you can do in Obsidian for iPad and Mac by clicking the pushpin icon at the top of any sidebar. This way, when I open the Table of Contents note, I can select the chapter I want, follow the link to navigate to it, and the pinned backlinks pane will update automatically to show me notes that reference the chapter I just opened. It’s research bliss, and I love it.

![](https://cdn.macstories.net/c26f658a-d9a9-4b51-8d4b-5f9b77bf81bf-1626447018313.png)

My Table of Contents workspace showing a pinned backlinks pane.

### Other Settings

There are *so many* settings in Obsidian, many of them specific to plugins (each plugin comes with its own preference pane for additional options), it’s impossible to cover them all in a single story. There are some features of the ‘Options’ screen I want to focus on more in depth in the next installment (such as the mobile quick action), but here’s a list with my recommendations for key settings you should consider right away:

-   **Editor**
    -   Spell check: enabled
    -   Readable line length: enabled
    -   Auto-pair brackets: enabled
    -   Auto-pair Markdown syntax: enabled
    -   Smart indent lists: enabled
    -   Fold heading: enabled (this lets you fold entire headings in a document, which simplifies navigation for long notes)
    -   Fold indent: disabled (this creates an outliner-like mode for lists, which I do not like in a Markdown editor)
    -   Default new pane mode: editor (so you can start writing immediately when you open a new pane)
-   **Files and Links**
    -   Automatically update internal links: enabled (with this option, if you change the name of a note you’ve linked somewhere else, the link will be automatically updated there too)
    -   Default location for new notes: Same folder as current file (this way, if you create a new note while you’re editing a note in a specific sub-folder, the new note will be created there instead of the app’s root folder)
    -   Default location for new attachments: In subfolder under current folder (in Obsidian, you can save all kinds of file attachments in your vault, including images; I prefer to keep my attachments in folders named ‘Assets’ that are automatically created inside the folder I’m currently working in when I save a new attachment for the first time)

Well, I think that’s enough material to get started with Obsidian for this first installment of the series. I have a long list of topics, writing workflows, plugins, and custom shortcuts I want to cover, and I believe this is going to be a fun journey for Club MacStories members.

In the meantime, if you have questions, doubts, and tips about Obsidian and the kind of content I should cover, I’d love to hear from you: clubfeedback@macstories.net

# "My Obsidian Setup, Part 2: Themes, Mobile Quick Action and Toolbar, and Third-Party Plugins"

*21-10-2021 13:30* 

> Exploring topics beyond our day-to-day coverage.
Exploring topics beyond our day-to-day coverage.

In the [first installment of my new Obsidian series](https://mailchi.mp/macstories/iufheagrqo8y7fqrtg3igfrqw8grqwfiogfrwqiygfrqwqq) I published last week, I covered the basics of the [app](https://obsidian.md/) to get started with its (many) settings, built-in core plugins, and different types of sync. This week, we’re taking a look at the Obsidian theme I’m using right now, options for customizing command activation on iPhone, and a collection of third-party ‘community’ plugins I’ve been using for the past few months. Let’s jump back in.

### The Theme I’m Using (and SF Mono)

I want to cover this one right away since you’re going to notice that screenshots in this story feature a new Obsidian look compared to last week. The theme I’m using right now is called [Minimal](https://github.com/kepano/obsidian-minimal); it was created by Stephan Ango with the goal of bringing Obsidian closer to Apple’s [macOS HIG](https://developer.apple.com/design/human-interface-guidelines/macos/overview/themes/) by using native system fonts, rounded corners for panels and popups, pill-shaped tags, and more. The theme was recently updated for iPhone and iPad, and it is, in my opinion, one of the best looks you can install for Obsidian on Apple platforms at the moment.

![](https://cdn.macstories.net/08f84964-ed5a-415f-a3d0-59a38d0a0a69-1627045397711.png)

Minimal on iPhone.

![](https://cdn.macstories.net/74bda7f2-0d46-41bf-953e-09c2912fbdab-1627045539121.png)

Minimal on iPad.

There are *hundreds* of Obsidian themes out there; the number skyrockets if you consider how you can further tweak themes via [CSS snippets](https://help.obsidian.md/Advanced+topics/Customizing+CSS). A lot of Obsidian themes, however, are not optimized for iPhone and iPad yet, or they don’t apply Apple’s design sensibilities to the app, or, even worse, only come with a dark mode UI, which is usually too low-contrast for me.

Minimal is the opposite. For starters, its developer has done a lot of work to make different parts of the Obsidian UI more Apple-like and palatable to iOS and iPadOS users. On iPad, the command palette is a floating popup reminiscent of the quick switchers seen in [Craft](https://apps.apple.com/us/app/craft-docs-and-notes-editor/id1487937127) and [Agenda](https://apps.apple.com/us/app/agenda/id1370289240); the preference pane is displayed as a large card raising from the bottom of the screen; sidebars (such as the file explorer or backlinks pane) have a nice floating appearance and support hover effects when moving the pointer over buttons and documents.

![](https://cdn.macstories.net/981debae-76dc-484c-b735-36e25f45f539-1627045539810.png)

Floating sidebars in Minimal.

![](https://cdn.macstories.net/31c354b9-d721-46f6-984c-ec7ca3d91228-1627045538901.png)

The floating command palette in Minimal.

I particularly appreciate the design of context menus on iPad, such as this popup you get by right-clicking a document in the file explorer sidebar:

![](https://cdn.macstories.net/90580b09-dfcc-48f8-8322-20a8b3ebb197-1627045539901.png)

Minimal’s context menus.

What also makes Minimal stand out is the availability of a companion [Minimal Theme Settings plugin](https://github.com/kepano/obsidian-minimal-settings) created by the developer to customize the theme to fit your needs and tastes better. This is where it gets interesting since most themes don’t offer this kind of personalization. Once you’ve installed Minimal and Minimal Theme Settings, head over to the plugin’s preference page and you’ll notice you can change the theme’s accent color hue and saturation. Minimal is, well, a very *minimal* theme, but it uses accent colors for elements such as hyperlinks, text selection, note links, and buttons in settings. If you want to give Obsidian a green or blue accent color, just move the two sliders until you’ve gotten the color you like. In the future, it’d be nice to be able to input a single HEX value rather than having to use manual sliders.

![](https://cdn.macstories.net/0f3ec3cf-bd87-46c9-8e24-feb61d63dc2a-1627046480474.png)

Different accent colors in Obsidian.

Minimal also comes with separate appearance modes for light and dark mode, which can be configured to follow the system’s appearance setting or not. (Personally, I prefer Obsidian to switch to dark mode when I enable dark mode in Control Center.) I’ve decided to go with all white for light mode and true black for dark mode; if the all white option is too low contrast for you, there are low and high contrast modes you can enable for the light theme setting. Unsurprisingly, true black mode looks fantastic on OLED iPhones and the M1 iPad Pro with mini-LED display:

And then we have fonts. For a few years now, I’ve been writing all my articles and newsletters using a monospaced font. I used to have iA Mono back when I was an [iA Writer](https://apps.apple.com/us/app/ia-writer/id775737172) user; in other text editors, whenever possible, I prefer to fall back to Apple’s own SF Mono font. Other Obsidian themes I’ve tested make it surprisingly difficult to switch to a different font for the text editor, and I’ve spent way too much time trying to force this change using CSS snippets found online. The Minimal theme and its associated plugin make this process incredibly easy thanks to built-in menus to switch the fonts used in the app’s UI and preview mode, the text editor, and code blocks. All you have to do is open the Minimal Theme Settings page, scroll to the font section, and pick from a list of prepackaged font selections. Assuming you have those fonts installed on your device, just reload Obsidian, and changes will take effect.

![](https://cdn.macstories.net/49270f1e-b110-4262-9190-db6e0cc24917-1627047919409.png)

Changing fonts in Minimal Theme Settings.

The only issue is – you have to install those fonts manually on your device beforehand using apps such as [AnyFont](https://apps.apple.com/us/app/anyfont/id821560738) or [Fontcase](https://apps.apple.com/us/app/fontcase-manage-your-type/id1205074470) (I prefer the latter since it lets me easily import [multiple font files at once from the Files app](https://www.macstories.net/reviews/fontcase-simplifies-custom-font-installation-on-ios-and-ipados/)). And because Apple’s SF Mono font is not pre-installed on iOS or iPadOS by default, there are some additional steps to follow. First, download the .dmg file for the SF Mono font from [Apple’s Fonts webpage](https://developer.apple.com/fonts/) on your Mac. The disk image contains an installer file that saves SF Mono’s font files somewhere on your computer, and you need to extract those **.otf files** (avoid the .ttf ones if you want to bring them over to iOS or iPadOS).

![](https://cdn.macstories.net/screen-shot-2021-07-21-at-12-05-24-pm-1626863836722.png)

The installer package for SF Mono.

Thankfully, there’s a relatively easy solution to this as well. For the past few years, I’ve been using the excellent [Pacifist app for macOS](https://www.charlessoft.com/) to inspect the contents of installer packages and extract them to the Finder. For SF Mono, all I had to was drag the installer to my desktop, open it with Pacifist, expand its directory until I found the Fonts folder stored within it, and extract it to a folder in Finder. You’ll have to use an additional desktop app for this, which isn’t ideal, but I purchased Pacifist years ago and have used it dozens of times to extract all kinds of files from installer packages, so the investment paid off. I can’t recommend this app enough.

![](https://cdn.macstories.net/screen-shot-2021-07-21-at-12-05-42-pm-1626863836748.png)

Select ‘Open’ to open an installer package with Pacifist…

![](https://cdn.macstories.net/screen-shot-2021-07-21-at-12-06-24-pm-1626863838341.png)

…find the folder containing the font files you need…

![](https://cdn.macstories.net/screen-shot-2021-07-21-at-12-06-39-pm-1626863837139.png)

…and extract them to Finder.

Once I had a folder containing SF Mono’s .otf files, I synced it to my devices using iCloud Drive, manually installed them via the profile-based method supported by Fontcase, force-quit Obsidian, and the app’s text editor started correctly using SF Mono as the monospaced font for the editor.

![](https://cdn.macstories.net/be478450-19c1-42dc-8a1b-dcc964ae8579-1627048029064.png)

Installing multiple font files at once with Fontcase.

![](https://cdn.macstories.net/4ffe81f6-0cbc-4156-bfd1-a2c0ec128601-1627048029047.png)

SF Mono and SF Pro in Obsidian.

Thanks to Minimal, I now have a beautiful theme for Obsidian that works well in the iOS and iPadOS app and which lets me use my favorite Apple typeface for the editor. If you’re looking for a different appearance for the Obsidian app, I highly recommend Minimal and its Minimal Theme Settings plugin.

### Customizing the Mobile Quick Action

One of my favorite details of Obsidian for iPhone is the mobile quick action – a handy pull-down gesture that lets you execute *any* command by swiping down anywhere in the app. The iPhone version of Obsidian is (unsurprisingly) harder to navigate than the Mac and iPad apps due to the lack of an external keyboard (unless you use a Bluetooth keyboard with your iPhone; in that case, I salute you), so the quick action can come in handy to trigger commands that would otherwise require multiple taps on the iPhone’s smaller screen.

![](https://cdn.macstories.net/a7ebe4ee-54a2-4b8a-8111-adad8dafcf7b-1627048190392.png)

Triggering the quick action on iPhone.

My recommendation for the iPhone quick action is to assign it to trigger the command palette. This way, you can quickly swipe down anywhere in the app and you’ll be instantly presented with a list of commands you can activate with one tap. The keyboard comes up as soon as the command palette is shown (so you can look for a command by name with fuzzy search, as I explained last week), and you can also pin specific commands to the top of the palette for even faster access.

The command palette should be assigned to the mobile quick action by default. If it isn’t, or if you prefer to pair any other command with the quick action, you can customize it in Options ⇾ Mobile ⇾ Configure Mobile Quick Action.

### Customizing the Mobile Toolbar and Command Palette

There’s more to customizing how commands are triggered in Obsidian for iPhone and iPad than the quick action: you can also configure the row of controls displayed above the keyboard, and, as I mentioned above, you can pin commands to the top of the command palette.

Let’s start from the command palette. Open Obsidian’s Options screen, open the Command Palette’s core plugin settings page, and you’ll be presented with a list of pinned commands. This list will likely be empty the first time you open this screen, so tap into the search bar next to ‘New Pinned Command’ and you can search for *any* command available in the app to make it a pinned one. All commands – both built-in commands and the ones exposed by plugins – will show up here, and you’re free to pin whatever you want. Once you’ve selected some, you can rearrange their order in the list of pinned commands.

![](https://cdn.macstories.net/82acfcd8-b676-41ae-9d72-823388f9e87a-1627048924769.png)

Creating pinned commands for the command palette.

I highly encourage the use of pinned commands and, more importantly, to revisit this page over time as you get a sense of the commands you use the most on your iPhone and iPad, tweaking the list accordingly. There are hundreds of commands available in Obsidian, and the list grows the more plugins you install, so it’s good to have a list of pins that evolves with your needs over time. In a nice touch, the command palette shows you the hotkey associated with each command on iPad, so it can also serve as a handy cheat sheet to memorize keyboard shortcuts.

[![](https://mcusercontent.com/9f4b80a35728f7271fe3ea6ff/images/29b67ebb-9553-2a17-5db1-246971f57962.png)](https://cdn.macstories.net/93caa481-ff92-47bc-b1f8-3532389a5fd7-1627048536557.png)

You can also customize the toolbar containing text editing controls displayed above the keyboard. By default, the toolbar comes with shortcuts related to text editing and writing, such as toggling bold and italics, indenting and outdenting list items, moving the caret, or inserting attachments into notes. You can delete default commands you don’t want, rearrange their order, and add other commands provided by default. Since I do most of my note-taking and writing on iPad and use an external keyboard, I don’t use the toolbar a lot, and I prefer to keep the list of options to a minimum. I use it more on iPhone, where it’s nice to have certain formatting controls or shortcuts that save me a few taps when I’m writing or editing a note.

![](https://cdn.macstories.net/cbe68e72-13b9-4d4e-9bc7-0848df4f7a89-1627048925382.png)

Customizing the mobile toolbar with global commands.

However, what I *really* like about the toolbar is the ability to pin any global command as a custom accessory displayed above the keyboard. This option is consistent with Obsidian’s command palette, and it allows you to add any other command from the app and show it as a button above the keyboard. To do this, open Options ⇾ Mobile, scroll to the bottom of the page, and tap into the search bar next to ‘Add Global Command’. From here, you can search for any global command you want and add it to the toolbar for fast access.

A word of caution for global commands: because not all of them are necessarily optimized for toolbar usage, you may not see dedicated icons for them above the keyboard. If that’s the case, a global command will be displayed with a generic ‘?’ icon, which can be confusing if you add a bunch of global commands that don’t have toolbar icons and can’t tell them apart. I’ve only added a couple to my iPhone, so I can remember which one is which, but I hope more plugins will start adding support for toolbar icons soon.

### Third-Party Plugins I’m Using

In case it’s not clear by now, there are hundreds of third-party plugins for Obsidian – some of which can do things you’d never expect from a text editor (how about a [Kanban board](https://github.com/mgmeyers/obsidian-kanban)? What about [mind maps](https://github.com/lynchjames/obsidian-mind-map)?). Therefore, this is by no means an exhaustive list of all the plugins I’m playing around with. However, I wanted to call out some of the community plugins I’ve been using for a while now, since I believe they’re a good place to start when it comes to exploring the many possibilities offered by Obsidian.

**[Advanced Obsidian URI](https://github.com/Vinzent03/obsidian-advanced-uri)**. Here’s a wild one: what if I told you that third-party Obsidian plugins can register URL schemes otherwise not supported by default in Obsidian? That’s what Advanced Obsidian URI does: it exposes additional commands via the Obsidian URL scheme, such as loading workspaces, appending text to files, or opening your daily notes. I mostly use this plugin to load my favorite workspaces via shortcuts on the iPhone and iPad, which can be done by opening a URL like this one:

`obsidian://advanced-uri?vault=My%20Notes&workspace=Dashboard%20Preview`

As you can see, this plugin uses the Obsidian URL scheme, but it adds an ‘advanced-uri’ command that can be set to open the ‘Dashboard Preview’ workspace in the vault called ‘My Notes’.

**[Cycle Through Panes](https://github.com/phibr0/cycle-through-panes)**. This is one of those features that should be built into Obsidian by default: with this plugin, as the name implies, you can cycle through multiple open panes via ⌃Tab. This command is so ingrained in my muscle memory now, I often forget it’s actually provided by a plugin.

**[Buttons](https://github.com/shabegom/buttons)**. This is one of the third-party plugins that will require a standalone, deeper dive in the future. With Buttons, you can, well, create buttons that perform specific features while in preview mode. In editing mode, all you see is a special code block with a proprietary syntax; as soon as you enter preview mode, the syntax becomes a colored button you can click to do something. There are several different kinds of button types: you can create buttons that run commands, open links, perform calculations, create new notes from templates, append or prepend text to notes, and more. In the screenshot below, you can see how I’ve been using this plugin to put together a button that lets me create a note with a timestamp and tag; I plan to write about this more in depth in future installments.

![](https://cdn.macstories.net/de2f526a-589d-450d-8713-121e85bce643-1627048536883.png)

A button’s syntax (left, first red code block) and the final result (right, blue button).

**[Dataview](https://github.com/blacksmithgu/obsidian-dataview)**. Dataview is, quite possibly, the most complex and incredible third-party plugin at the moment. Effectively, Dataview lets you use your Obsidian vault as a database, and there’s a special syntax to create code blocks that query from that database. Like Buttons, when you hit preview mode, that special code block becomes something else; in this case, Dataview code blocks become tables that show you the result of your query.

It can be hard to wrap your head around Dataview, which is why this plugin will also require a deeper exploration in the future. In the meantime, I suggest you check out the full documentation [here](https://blacksmithgu.github.io/obsidian-dataview/) to get a sense of the dynamic views you can create with Dataview. To give you a first example of how I’m using Dataview, I’ve put together a table that pulls in article highlights I save into Obsidian when I’m catching up on stories in Safari Reading List. These notes are saved with a specific syntax, which Dataview can query, and they’re then presented in a table which is sorted by date. Stay tuned for a future installment in which I will describe my workflow for this.

![](https://cdn.macstories.net/e881080c-4b99-4ef7-b7a4-3f429593e597-1627048537090.png)

The Dataview syntax (right) and the resulting table with queried results (left).

**[Note Refactor](https://github.com/lynchjames/note-refactor-obsidian)**. If you’ve ever found yourself working on a long document and realizing it could be split into multiple, shorter notes, allow me to introduce you to Note Refactor. This plugin lets you extract a selection from the text editor into a new note and (optionally) use the first line of text from the selection as the new note’s filename. This has been perfect for me for all those times when I’m working on a story, create a few headings for sections and start writing, then realize I’d prefer to split those sections into their own separate notes. The plugin comes with two settings I recommend enabling: you can choose to split new notes into the same folder as the current file (so you can keep files from the same project in the same folder) and you can embed a newly split note into the original one by default.

![](https://cdn.macstories.net/c2f02e72-0a1b-48e2-ba34-ca60fb5c9cb9-1627048925422.png)

Refactoring a section of a note into a separate, standalone note.

**[Workbench](https://github.com/ryanjamurphy/workbench-obsidian)**. Developed by Obsidian user extraordinaire Ryan J.A. Murphy, Workbench lets you collect working materials by appending links to specific notes or sections of notes at the bottom of a general ‘workbench’ that serves as an inbox of sorts. For me, this is the ‘Dashboard’ note I’m going to describe in the next installment of this series, which is a note where I keep all kinds of links and temporary notes for things that are on my mind at the moment. Amazingly, Workbench lets you immediately append any internal link by ⌥-clicking it, and you can also save any line of text at the bottom of your workbench by ⌘⌥-clicking it. Alternatively, you can use the ‘Link the current note in your Workbench’ command, which I’ve pinned to the top of the palette on iPhone and trigger with ⌘⌥W on my iPad Pro.

That’s it for this week. There’s still a lot to cover in Obsidian, but I feel like I’ve explained the basics of the app, and it’s time to start digging into advanced workflows, plugins, and my approach to note-taking and writing. In the meantime, if you have an interesting setup in Obsidian or have plugin suggestions for me, I’d [love to hear from you](https://twitter.com/viticci).

### Always On

When [Mark Gurman reported for Bloomberg](https://www.bloomberg.com/news/articles/2021-07-14/apple-seeks-up-to-20-increase-in-new-iphone-production-for-2021) that Apple might launch an iPhone with an always-on display, my ears perked up. That’s because I’ve been running an iPhone and iPad with the Auto-Lock feature turned off for months. If Apple goes with such a display, I expect it will be coupled with new iOS 15 features, but even without that, there’s a lot to like about leaving your screen on all the time.

I didn’t set out to test what having an always-on screen would be like. It started with my review of the [Twelve South HoverBar Duo](https://www.macstories.net/reviews/hoverbar-duo-the-macstories-review/), which is my current favorite iPad stand. I love the stand’s range of motion and ability to hold everything from my iPhone 12 Pro Max to the 12.9" iPad. Before the HoverBar Duo, I’d used iPad stands with a keyboard and trackpad for writing. What made Twelve South’s stand a little different is that its adjustability allows an iPhone or iPad to function exceptionally well as a second screen.

I set the HoverBar Duo up on my desk next to the external display I use with my 2018 Mac mini, and the two made a great pair. Sometimes I’d use Sidecar, so my iPad served as a true second display, but more often, I ran native iPadOS versions of apps like Discord, Messages, and Spark on it.

However, I quickly realized that the iPad’s maximum auto-lock timer is too short at five minutes for this kind of setup. That time period is fine if I’m actively using apps on the iPad, but when I’m just monitoring conversations and keeping an eye out for notifications, having to unlock the iPad repeatedly gets old fast.

Having your device’s screen auto-lock is a valuable security feature, but I was testing the HoverBar Duo in the dead of winter during a pandemic. I wasn’t going out much, so locking my devices wasn’t a big concern. Access to power to charge the iPad or run it connected to a power adapter wasn’t an issue either. So, I turned auto-lock off to see how it would go.

I was pleasantly surprised. My experience with the iPad was so good, in fact, that I decided to add my iPhone to the mix. My iPhone usually sits to one side of my desk on a [Belkin 3-in-1 MagSafe charger](https://www.belkin.com/us/chargers/wireless/charging-stands-docks/boost-charge-pro-3-in-1-wireless-charger-with-magsafe-15w/p/p-wiz009/), which holds it up at the perfect angle to see the screen. Keeping the screen on for stretches of the day proved useful there too. I’d run a quick shortcut, adjust lights and other HomeKit accessories from Home, monitor video cameras, and AirPlay music to my HomePods. I can do most of that on my Mac too, but for some apps, quickly dipping in and out of them on an iPhone feel more lightweight than launching an app on the Mac to do the same thing.

To my surprise, even when the iPhone 12 Pro Max wasn’t sitting on its charger, keeping the display on at all times didn’t drain the battery as fast as I expected. Over the years, Apple has fine-tuned the battery consumption of its devices, and although powering the screen is a big draw on the battery, an idle iPhone draws less power than you might expect.

Also, it’s worth noting that it’s not like I keep my iPhone and iPad on 24/7. If I don’t need either one, I turned the screen off with the side button. That helps minimize battery drain, too, although I am sure my battery calculus will continue to shift as I spend more time away from home again. Still, I’ve been pleased with how well the batteries of my devices have held up to the experiment.

The entire experience has made me wonder how Apple might pair an always-on display with the iOS 15 update. Earlier this year, [Federico and I speculated](https://appstories.net/episodes/218/) that the Today page might be removed from iOS and replaced with the App Library. That got me wondering if a version of the Today page might move to the Lock Screen. That would be the perfect spot for a weather, battery, Fitness rings, and other widgets and notifications. Widgets have already been designed to use minimal resources, so putting them on the Lock Screen and allowing users to tap them to launch directly into the corresponding app would be handy.

The always-on route seems inevitable, though I’m not sure if it will be this year or not. The battery life of Apple’s larger iPhones feels ready for the transition, but it’s hard to imagine the feature being a good fit for an iPhone mini or SE. One option that I think is likely is that Apple would allow an always-on display to be turned off when you wanted to maximize the device’s longevity. Still, having lived with the screens of my iPhone and iPad on for long stretches for the past 4-5 months, I’m excited by the prospects of what the transition could mean for the way we use our iPhones.

# "My Obsidian Setup, Part 3: My 'Dashboard' Note for Quick Links, Todoist Tasks, Saving Ideas, and Keeping Track of Current Projects"

*21-10-2021 13:31* 

> Exploring topics beyond our day-to-day coverage.
Exploring topics beyond our day-to-day coverage.

## [My Obsidian Setup, Part 3: My 'Dashboard' Note for Quick Links, Todoist Tasks, Saving Ideas, and Keeping Track of Current Projects](https://club.macstories.net/posts/extension-284)

![](https://cdn.macstories.net/png-image-92755fd26628-1-1628262079226.png)

My Dashboard note.

In previous installments of my series about [Obsidian](https://obsidian.md/), I covered the basics of the app, its core plugins and options offered by third-party developers, plus advanced settings and my approach to sync and hotkeys. Today, I want to get into the juicy part of this series and explain in detail one of my favorite aspects of my Obsidian setup: my Dashboard note, which is rapidly becoming my second brain for everything that’s on my mind and has to be archived somewhere more reliable.

While I take plenty of notes in Obsidian and am also writing my iOS and iPadOS 15 review in it, the Dashboard is the single note I keep going back to the most; over the past few months, I’ve modified it to my needs and preferences, and now I think I have something that could potentially be useful to other people too.

Let’s dig in.

## An Inbox for My Thoughts

I don’t think I’m alone in this problem: I forget things on a daily basis. By this I don’t mean that I forget to check my task manager, or that I don’t feed my dogs or ignore the article drafts I’m writing in Obsidian. It’s the *little* things that get lost in the gray area in between tasks and longform notes I’m working on. I’ve talked about this problem before on [AppStories](https://appstories.net/) and [Connected](https://www.relay.fm/connected): I tend to forget about that link John sent me over iMessage that I meant to check out in 30 minutes after I was done with an article; or perhaps it’s an idea I just had that is neither a task nor a proper “note” yet; maybe it’s a reminder for myself to investigate something that may or may not be interesting for, say, Shortcuts or Obsidian. I understand that some people like to turn these kinds of items into tasks, but personally, when I don’t consider something actionable just yet, I prefer to keep it in my brain. The only issue is that, over time, I’ve stopped trusting it as a reliable repository for these transient thoughts and ideas.

I’m also the kind of person who needs structure in his daily life. This doesn’t mean *routine*: I very often change my plans at the very last minute (John can confirm this) and upend my working schedule without much warning. I like that flexibility about my life, and it’s part of the reason why I wouldn’t be able to work for anyone else at this point. What I need, however, is a tool that lets me see, at a glance, all the things I’m currently working on and stuff that’s on my mind, allowing me to quickly jump to those things and start processing them.

What I need is, effectively, a dashboard that allows me to easily see what’s on my mind and save ideas or random things as they come in, without having to decide where to put them in a task manager or turn them into full notes. A place where I can see a reflection of my thoughts, save new ones, and jump into work projects. And that’s exactly what I’ve been building and refining in Obsidian for the past few months.

## My Dashboard Note

At a high level, my Dashboard note is split into two distinct areas: at the top, there’s a variety of sections that **preview** or link to different things in Obsidian; at the bottom, there’s a more **creation**\-focused area that lets me save quick notes.

### Quick Links and Todoist Integration

Let’s start from the top. The first item is a section called ‘Quick Links’, which I filled with internal links to notes I find myself frequently opening in Obsidian. For instance, in this section I can find links to reopen my ‘Ideas for Stories’ or ‘Unwind Picks’ note; rather than manually searching for those notes, I can tap the links at the top of my dashboard, which in this case serves as a table of contents for my professional life.

![](https://cdn.macstories.net/7e247117-7c03-47d2-ae18-526e58ea8ffc-1628211293038.png)

Quick Links at the top of my dashboard.

You’ll notice that those internal links have emoji associated with them. The actual note titles don’t have emoji; what I leveraged here is the ability to assign ‘alt text’ to links in Obsidian by separating the linked item’s title and alternative title with a pipe (‘|’) character. This way, when I open the dashboard in preview mode, those links are prettier.

The second item in the upper section of my Dashboard note is a visualization of my tasks from Todoist. In edit mode, it looks like I have two embedded notes based on internal links; when I hit the preview button, those notes turn into *interactive* Todoist widgets that show me the tasks I want to see based on [Todoist’s native filters](https://todoist.com/help/articles/introduction-to-filters):

![](https://cdn.macstories.net/png-image-49964e01b468-1-1628262079163.png)

Todoist embeds in Obsidian.

This amazing Todoist embed functionality is based on the [Obsidian x Todoist plugin](https://github.com/jamiebrynes7/obsidian-todoist-plugin) created by Jamie Brynes. The idea is genius: after providing your Todoist API token in the plugin’s settings, you can drop a special code block in a note and edit it to display a subset of tasks from your Todoist account inside Obsidian’s preview mode. As detailed in the plugin’s documentation, there is a syntax you can use to configure these code blocks; the most important part, however, is that you can use any valid Todoist filter to display specific tasks.

This plugin opens up some incredible opportunities to bring your task manager into your note-taking app and create a direct link between the two of them. What’s even more remarkable about this plugin is the fact that checkboxes for tasks are clickable: you can check things off from Obsidian as you get work done, and changes will be instantly reflected in Todoist. (This is also the advantage of web apps with open APIs, but I digress.) Furthermore, you can choose to display task metadata such as dates and projects, and you can set an auto-refresh time to automatically reload these widgets while in preview mode.

Here’s what I’ve done for my dashboard: I’ve created two blocks to display tasks due today or overdue, as well as tasks due over the next three days. In both cases, these code blocks are based on a Todoist filter that excludes a specific project from view.

Here’s the filter that shows tasks due today or overdue except those from my Calliope project:

```
{
"name": "Tasks",
"filter": "(today | overdue) & !#Calliope",
"sorting": ["date"]
}
```

And here’s the one that shows me upcoming tasks for the next three days, excluding today and the Calliope project:

```
{
"name": "My Tasks",
"filter": "3 days & !#Calliope & !today",
"sorting": ["date"]
}
```

I could have dropped these code snippets directly into the Dashboard note, but it would have looked ugly. So instead I pasted the code into separate notes and embedded both in the dashboard with Obsidian’s !\[\[embed syntax\]\]. This way, the note stays compact but I retain the plugin’s functionality.

![](https://cdn.macstories.net/ab6006ed-c92b-4e4f-b319-272aeef08d81-1628211494139.png)

Special code blocks turn into Todoist embeds.

If you’re a desktop user, you can go ahead and install the plugin in Obsidian from the list of community plugins in the app. If you’re an iPhone and iPad user though, the plugin will give you an error and tell you it’s not compatible with Obsidian’s mobile app yet.

To fix this, I’ve teamed up with [Finn Voorhees](https://twitter.com/finnvoorhees), who forked the plugin and released a version that can be manually installed on iPhone and iPad. You can find [Finn’s version of Todoist x Obsidian here](https://github.com/Finnvoor/obsidian-todoist-plugin). In addition to enabling mobile compatibility, this version also includes some stylistic updates to Todoist’s embedded widgets to make them prettier.

Now you may be wondering: how do you manually install plugins as folders on iOS and iPadOS? Manual installation of plugin files in Obsidian requires opening a hidden folder and, unfortunately, hidden folders cannot be enabled in the Files app.

Well, fear not, because I created a solution to this as well. As I discovered a while back, it is possible to save files into hidden folders on iOS by leveraging the folder bookmarks feature of [Toolbox Pro](https://apps.apple.com/us/app/toolbox-pro-for-shortcuts/id1476205977). First, create a folder bookmark in Toolbox Pro by picking the root folder of your Obsidian vault. For me, that’s the ‘My Notes’ folder stored in On My iPad ⇾ Obsidian. Then, download the plugin from GitHub, uncompress it, and save the folder named ‘obsidian-todoist-plugin’ somewhere in Files. Last, [install my shortcut](https://www.icloud.com/shortcuts/5b814aac789b4604ac1226d59f566e18) to manually save plugins on iOS.

![](https://cdn.macstories.net/a8c38691-6ff0-4213-ae15-a57c4eb1ee9f-1628211270839.png)

Create a folder bookmark for your Obsidian vault in Toolbox Pro.

![](https://cdn.macstories.net/e241b337-fa16-4c39-9e05-b9c71bf2c84a-1628211271204.png)

My shortcut to save plugin files manually.

Before running the shortcut, copy the name of the plugin’s folder to your clipboard. This way, the shortcut will auto-fill the plugin’s name in its first input prompt, so you can just continue by picking, one by one, the plugin files you want to install in the newly created folder. Repeat this process for all the files contained in the plugin folder, then switch to Obsidian, reload Community Plugins, enable the Todoist plugin, and you’re done.

![](https://cdn.macstories.net/7c01a521-4a13-4b72-8938-e733a725476f-1628211294965.png)

Running the shortcut to save plugin files.

At this point, you can visit the plugin’s settings page in Obsidian to configure your Todoist credentials, then head over to the plugin’s documentation to learn about the code blocks you can drop in Obsidian. Hopefully, the plugin’s original developer will release an official update for mobile compatibility soon; in the meantime, you can use [Finn’s version](https://github.com/Finnvoor/obsidian-todoist-plugin).

The best part about this plugin is, unsurprisingly, its customization options. Because it’s entirely based on Todoist’s filters, I can choose to create embeds that focus on specific projects I’m prioritizing at the moment or, conversely, hide others I don’t want to see. This functionality is perfect for my Dashboard note, and I appreciate the closed loop this plugin creates between Obsidian and Todoist.

### Saving Links and Ideas with QuickAdd

Things are quite different in the second half of the note, which features separate sections titled ‘Working On’ and ‘On My Mind’. The names are fairly self-explanatory: the **Working On** section contains links to notes or articles I’m actively working on at the moment; the **On My Mind** section has ideas and links that are, *well*, currently on my mind at, at least for me, unfit for a task manager at this stage. What isn’t obvious is how I’ve been able to remove friction from appending text to these sections in a way that was never possible for me in other text editors or note-taking apps.

This is where we have to talk about [QuickAdd](https://github.com/chhoumann/quickadd), an incredible third-party plugin for Obsidian developed by [Christian Bager Bach Houmann](https://bagerbach.com/). QuickAdd is packed with features – including some esoteric ones such as JavaScript and calling the Obsidian API I haven’t played with – but it’s best to think about it this way: it’s the ultimate plugin to add text to existing notes, create new notes based on templates, or run macros inside Obsidian to execute multiple commands in a row via a single hotkey or command.

It’s easy to go deep down the QuickAdd rabbit hole if you don’t know where to start or if you spend too much time looking at those fascinating, complex setups shared in the Obsidian Discord community. So I’m going to give you a very practical rundown of how I use QuickAdd as a complement to my dashboard setup, which you can hopefully reuse for your Obsidian workflow.

The first thing I wanted to create was a command that instantly appends a link to the document I’m working on to the ‘Working On’ section of my Dashboard note. For example, if I’m working on the Shortcuts chapter of my iOS 15 review, I want to be able to capture a link to that document for future reference. QuickAdd is the only plugin I’ve found that has this knowledge of **appending text to the bottom of a specific section of another note**. This is a *very* specific functionality that I’m sure other writers or serious note-takers like me will appreciate.

Here’s how you can put this together: in QuickAdd’s settings, create a ‘choice’ with a unique name and select the ‘capture’ type from the menu. Add the ‘choice,’ then click the cog icon to configure it.

![](https://cdn.macstories.net/02280a81-b3b3-4413-b4a1-4c16a37348f1-1628213585672.png)

How to create a command to save what I’m working on.

In the choice’s configuration menu, you’ll have to modify these fields if you want to grab the link of the current document and append it to a section of another note:

-   **File Name**: the name of the note you’re appending text to. In my case, it’s Dashboard.md.
-   **Insert after**: enter the title of the section you want to append text to. This needs to be a specific line – I entered ‘## Working On’ since that’s the section I’m saving links into.
-   **Insert at the end of section**: enable this so that text will be appended at the end of the section within the note.
-   **Capture format**: QuickAdd supports a custom variable syntax for placeholders that are converted into different values when a command runs. You can [check out the syntax here](https://github.com/chhoumann/quickadd/blob/master/docs/FormatSyntax.md). In this case, you have to enter `{{LINKCURRENT}}`, which is the variable to generate a link to the note you’re currently focusing on.

![](https://cdn.macstories.net/png-image-9a6d235baff1-1-1628262079160.png)

How links to other notes get appended to the dashboard.

With this command setup, all I have to do when I’m working on a document I want to save in my Dashboard is hit ⌘P to show the command palette, type ‘Working’ to find the command, and run it so that a link to the note is appended to the dashboard immediately. Better yet, I can assign a hotkey to this command so I don’t even have to search for it.

I love this command since it provides me with a one-click solution to the problem of remembering all the things I’m working on and seeing them in one place. But as I kept looking into QuickAdd, I realized I could take the same append-to-section-of-a-note approach a step further with manual text input at runtime.

QuickAdd’s syntaxsupports a `{{VALUE}}` placeholder that, when a command runs, shows a native input prompt in Obsidian to type some text. I think you can see where this is going. I created another capture ‘choice’ in QuickAdd and replicated the same settings of the one above, but I swapped the section for ‘## On My Mind’ and used the ‘value’ placeholder instead. Now when I run the ‘On My Mind’ command, an input prompt comes up, I can type some text for an idea I have, and it gets saved immediately to the bottom of the ‘On My Mind’ section of the Dashboard note.

![](https://cdn.macstories.net/b65bd4b3-1247-4b29-8d13-0dbbd5de5599-1628213586380.png)

Configuring the On My Mind command.

![](https://cdn.macstories.net/4208c52d-2bfe-499f-b45c-80e5eec7b14c-1628213299338.png)

Capturing thoughts in Obsidian.

This works from anywhere in Obsidian and doesn’t force me to leave the note I’m currently working on. QuickAdd’s prompt is, effectively, a global capture tool for Obsidian. This system removes all the friction typically involved with having an idea, closing the note you’re currently working, opening another, then going back to what you were doing. I run this command dozens of times each day, and it’s become my favorite aspect of the dashboard.

As I mentioned above, QuickAdd can also run macros, which let the plugin execute multiple Obsidian commands in succession as a single block. I’ve taken advantage of the macro functionality to automate something I found myself doing manually every time in Obsidian: switching back to the Dashboard note, splitting the UI vertically to open a second pane on the right, and toggling preview mode on that pane. The end result is the workspace at the top of this story.

This is another great thing about Obsidian: I could load this workspace via the Workspaces plugin, but I’ve also figured out how to open it as a macro, with additional control, using QuickAdd. Obsidian gives me the option to *choose* the solution that works best for me rather than forcing an “opinionated” design upon me that cannot be customized to fit my needs.

To create a QuickAdd macro, open QuickAdd’s settings, then hit ‘Manage Macros’ and create a new one. Press ‘Configure’ next to the newly created macro and you can start setting it up. In my case, all I needed to do was chain all the necessary commands together in a string of actions executed from top to bottom, kind of like Shortcuts. Here are the commands I used to create a Dashboard workspace with two panes using QuickAdd:

-   **Open starred file.** This is based on the [Hotkeys for Starred Files and Searches plugin](https://github.com/Vinzent03/obsidian-shortcuts-for-starred-files), which creates commands for files you’ve [starred](https://help.obsidian.md/Plugins/Starred+notes) in Obsidian. In the screenshot below, you can see I’m using the ‘Open starred file: 1’ command, and that’s because the Dashboard note is the first one in the list of my starred files. This functionality should really be built into Obsidian; thankfully though, QuickAdd lets us execute any command, regardless of whether it’s a third-party one or not.
-   **Split vertically.** This splits the UI vertically, creating a second pane on the right.
-   **Focus on pane to the right.** Puts the focus on the new pane.
-   **Toggle edit/preview mode.** Enables preview mode on the new pane because, by default, new panes open in edit mode for me.
-   **Focus on pane to the left.** Returns focus to the Dashboard pane on the left side, which is open in edit mode.

![](https://cdn.macstories.net/8217cba8-d147-489a-ad07-7c64bb76a6df-1628213288969.png)

Recreating my Dashboard workspace with a macro.

Similarly, I also created another version of this macro that only loads the Dashboard note on the right side, leaving the document I’m currently working on in the left pane. Here’s what the macro looks like:

![](https://cdn.macstories.net/a51d6420-9ecd-4ca0-b412-9a523cb9bdf1-1628213289370.png)

My macro to split the UI and open the Dashboard note on the right.

One important note about chaining actions in QuickAdd macros: make sure to always put ‘Wait’ actions in between steps, otherwise QuickAdd won’t be able to execute them all fast enough. You can add these actions by tapping the clock icon in the macro editing UI.

***

Thanks to QuickAdd, I’ve been able to put together commands that speed up the act of capturing links to notes I’m working on, saving ideas, and opening my dashboard. All of these commands can be triggered individually with hotkeys or via the command palette, but for my convenience, I also grouped them together in a menu in QuickAdd. I did this by adding a ‘Multi’ choice in QuickAdd and dragging each command under it until they were all contained in the menu.

![](https://cdn.macstories.net/701e73db-0de9-4b30-a3de-00325cc3161e-1628213289146.png)

Menus in QuickAdd.

Now, when I hit ⌘P, type ‘dash,’ and press Enter, this is what I see:

![](https://cdn.macstories.net/9e680929-392c-4d45-936b-37399bf64fcd-1628213298307.png)

My Dashboard Menu in QuickAdd.

I don’t have to be inside Obsidian to trigger my Dashboard Menu command. Thanks to the [Advanced URI plugin](https://github.com/Vinzent03/obsidian-advanced-uri), I created a simple shortcut that opens the menu via this URL scheme:

`obsidian://advanced-uri?vault=My%20Notes&commandname=QuickAdd%3A%20Dashboard%20Menu`

I added the shortcut as an icon to my Home Screen, so whenever I want to open my Dashboard workspace or save a thought, I can press the icon to launch Obsidian and run the command.

Speaking of Obsidian and Advanced URI, I also created another shortcut that opens my dashboard in different modes whether the shortcut is running on iPad or iPhone. This is a direct launcher that goes straight to the Dashboard note without showing a QuickAdd menu in the middle, and it’s one of the icons in my iPhone dock since I use it a lot.

When the shortcut runs on iPhone, I likely don’t want to split the UI in Obsidian in multiple panes due to the smaller screen, so the shortcut simply opens the note in full-screen; if the shortcut is being executed on iPad, however, it loads my Dashboard Preview workspace, which has two panes open side-by-side. You can see how this platform-based shortcut can be created in the screenshot below:

![](https://cdn.macstories.net/304a0ce9-8684-4a87-9710-1f5c1e60b937-1628213289454.png)

My shortcut to reopen the Dashboard workspace.

***

It’s not an exaggeration to say that my Dashboard setup has tangibly improved my life over the past few months. I forget fewer things, have a better sense of all the different things I’m working on (and, believe me, they are many), and I can more easily keep up with all my hobbies because saving ideas and links with QuickAdd’s prompts is a breeze. Obsidian’s native linking capabilities lend themselves well to this kind of workflow where I can reference documents I’m working on, turn text from the dashboard into standalone notes (thanks to [Note Refactor](https://github.com/lynchjames/note-refactor-obsidian)), and jump to frequently-used notes.

For me, the Dashboard is where all work starts now, and Obsidian is the only app that gives me the tools to make all this happen.

## Just Because You Can, Doesn’t Mean You Should

This column is a sort of [sequel to my Monthly Log story](https://mailchi.mp/macstories/gouerhig38orhgq83roghrouiuhgorigohrqu) last week about why you should delete more of your notes and not feel bad about not having a ‘system’ for taking them. I love an efficient system no matter what the workflow is, which is why I tweak mine a lot. Once you have a good system in place, though, the trick is to not go overboard.

I’ve framed today’s topic in terms of automation, but it holds true for any system really. Automation just happens to be on my mind because I’ve been taking the time to reassess a lot of the ways I work and the automations I use. Some of the ways I’ve been automating tasks are outdated, and I’m working on new projects that could benefit from changing how I work. To that end, I’ve been experimenting with Obsidian plugins, creating new shortcuts, and setting up a [Loupedeck Live](https://loupedeck.com/us/products/loupedeck-live/), a device I’ll be reviewing soon.

The process of thinking through my workflows has been rewarding. It’s not something I’d suggest doing often, but as the work you do and the apps you use evolve, understanding how and why you do things the way you do can be enlightening. I can’t say that any one insight I’ve had rethinking my workflows has led to monumental productivity gains, but together, several smaller things have made my latest efforts worthwhile.

My workflow reevaluation reminded me of a couple of areas that would be trivial to automate that I don’t. It’s not that I haven’t taken the time to automate these tasks. No, the decision was very intentional, and I suspect it will surprise some of you.

I don’t automate responses to email. If someone sends me a message, I’d rather not respond to it until I have the time than to send a canned response. I can always tell when I get a canned response, masquerading as a personal message, and I don’t want to be that guy. If someone’s message is worth responding to, the response should be tailored to the context of the message and not feel like an FAQ.

That’s why I don’t use a dedicated text expansion app on any platform. I’m a fast typist, so I feel like the time I’d save isn’t worth the cost. That’s not to say I don’t use text templates, but those are a little different. I have checklists of materials I’ll need from advertisers, for example. However, when I send those, it’s always with a note that explains that I’m pasting a checklist at the bottom of the message for reference. The main body of the message is often similar for similar situations, but it’s always unique because I feel like it’s the least I can do when someone gets in touch.

Because I get a lot of email, the system has its limits. It means I don’t respond to everyone, which I’m sure disappoints some people. However, I’d rather connect with as many people as I can and disappoint a few than send robo-responses.

Instead of using text expansion, I rely on a growing list of templates like the checklists I mentioned, which are simple text files for collecting and organizing information for things like the show notes for an AppStories episode or ensuring format and content consistency among posts that appear regularly on MacStories. [Obsidian](https://obsidian.md/) is excellent for this, but before I used it, I copied one week’s template to the next week in [iA Writer](https://ia.net/writer).

The other thing I’ve never automated is publishing articles or podcast episodes. It’s easy to schedule articles and episodes for publication. The functionality is built right into WordPress. The value of doing it manually, though, is having one last chance to catch a typo or other error and being somewhere where even if I don’t catch a problem, I can correct it quickly.

Despite my best efforts, I make mistakes in articles I publish. I’ve gotten better over time, but some errors are inevitable. Fortunately, it’s simple to edit a published post, assuming you’re aware of the problem. If I’ve just published an article with a typo manually, I’ll hear from someone on Twitter within a matter of minutes. Being in front of whatever device I used to publish the story means I can fix it quickly before many people ever see it.

Whenever I see an error on someone’s homepage that’s been there for hours, I wonder if it was a scheduled post. Whether it is or isn’t, I don’t want to ever be in the position of not knowing about an issue or being unable to correct it quickly.

The point of both of these examples isn’t to suggest that no one should automate these things. Different people have different priorities. However, I do think it pays to think before you automate. Just because something can be automated doesn’t mean it should be even if it’s easy to do so. Putting in a little time and effort into thinking about why something should or shouldn’t be automated is the difference between a nifty demo and a meaningful change in the way you get things done, which is what productivity should be all about after all.