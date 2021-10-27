# Keyboard shortcuts on iPad? | Drafts Community Thread

* [Keyboard shortcuts on iPad? - General Discussion - Drafts Community](https://forums.getdrafts.com/t/keyboard-shortcuts-on-ipad/10389/3)

## Original
Hi all —

I just randomly (and happily) discovered that I can navigate between drafts on the iPad Pro keyboard using command-option-up/down. I’d love to use shortcuts like this to process my list of drafts, at least to archive or delete them. However I can’t find anywhere in the docs where keyboard shortcuts are listed (maybe due to poor searching skills). Is there such a list somewhere I can learn from?

Thanks,
Ramon

***
### @sylumer

Hold down the CMD key in any app and you should get an overlay of keyboard shortcuts.

***
### @blue
[quote="sylumer, post:2, topic:10389, full:true"]
Hold down the CMD key in any app and you should get an overlay of keyboard shortcuts.
[/quote]

This is definitely *the* place to start, but Drafts is incredibly unique on iOS in that you can pretty much customize keyboard shortcuts entirely, by way of custom shortcuts *per Action*.

The best way to illustrate this might be to simply share my current list of keyboard shortcuts, which I’ve also published in a [GitHub Gist](https://gist.github.com/extratone/2e54243a2123ccfa6a37c6e8cc1057e2).

- ` Embed <audio> Element: ⌥A `
- Strikethrough: ⌥S
- The Psalms Custom Preview: ⌘P
- TAD-Trash Note: ⌃-
- TAD-Toggle Last Two Modified Drafts: ⌃⇥
- TAD-Load Previous Workspace: ⌥⌘←
- TAD-Load Next Workspace: ⌥⌘→
- TAD-Link for Draft (Title): ⇧⌘K
- Find: ⇧⌥F
- Tasks: ⌃T
- Indent: ⌘]
- Outdent: ⌘[
- Toggle Theme: ⌥/
- Markdown Header (#): ⌃⌘H
- Markdown Bold (**): ⌘B
- Code Block (```): ⌃⌘C
- Preview: ⌥⌘P
- Markdown Emphasis (_): ⌘I
- Markdown List: ⇧⌘L
- Markdown Link: ⌘K
- Replace URLs by MD links: ⇧⌘U
- Markdown Footnote: ⌃F
- TAD-Selection Word Count: ⌥⌘W
- TAD-Show Draft Info: ⌥I
- TAD-Toggle App Theme: ⌥\
- TAD-Toggle Typewriter Mode: ⌥T
- TAD-Search Actions: ⌘/
- TAD-Fetch URL Content to New Draft: ⇧⌘D
- TAD-Copy Draft Link: ⇧⌃C
- TAD-File Import With Tags: ⌘O
- Copy: ⌥C
- Email to myself: ⇧⌥M
- Save to Files as...: ⌘S
- Send to Bear: ⇧⌘B
- Save to OneNote: ⇧⌥O
- Clipboard…: ⌥C
- TAD-Move Checked to End: ⇧⌃↓
- Switch to The Psalms’ Workplace Shortcut: ⌘2
- Switch to Documentation Workplace: ⌘3
- Workspace Shortcut ⌘4: ⌘4
- Open Keys Workspace: ⌘5

The majority of these are Actions I downloaded via the [Action Directory](https://actions.getdrafts.com/) and manually set/altered their respective keyboard shortcut as per [this documentation](https://docs.getdrafts.com/docs/actions/editing-actions).


@Felciano I would be more than happy to speak directly about this if you need further help - my big life project right now literally involves documenting Bluetooth keyboard support on iPhone, so it’s pretty darn fresh in my mind.

***

### @sylumer

@Blue, I would recommend that you don’t add shortcuts to the TAD-* actions directly. When you update the action groups (I try and release at least one update every month), the shortcuts would be wiped out (unless something has changed with the action group updating process). None of the TAD-* actions have keyboard shortcuts set. The recommendation is instead to create your own actions with the icon, name and keyboard shortcut of your choice, and then have a single action step to include the TAD-* action. This effectively gives you a customised alias to the underlying action.

You may also be interested in the TAD-Export Action Shortcut Keys/TAD-List Action Shortcuts. They output the action names along with their keyboard shortcuts for actions with keyboard shortcuts. The exports are just in slightly different formats, and honestly, I’m not sure why they are in different groups or why I ended up with the two formats. I suspect I’ll revisit that in an upcoming update.

***

### @blue
[quote="sylumer, post:4, topic:10389"]
The recommendation is instead to create your own actions with the icon, name and keyboard shortcut of your choice, and then have a single action step to include the `TAD-*` action.
[/quote]

To be honest, I had been fiddling with them so much, my plan was to just reconfigure them one-by-one if/when I ended up clearing them with an update but this solution is far too smart to ignore lol. Thank you!

[quote="sylumer, post:4, topic:10389"]
You may also be interested in the `TAD-Export Action Shortcut Keys`/`TAD-List Action Shortcuts`.
[/quote]

The list you see above was exported with the latter (`TAD-List Action Shortcuts,`) which lists the name of the action first, then the command.  `TAD-Export Action Shortcut Keys` is identical as far as can tell except it lists the commands first, then the action. I thought there was a third one which pasted the list into the current Draft instead of creating a new one, but I can’t seem to find it now. Could’ve been dreaming lol.

***