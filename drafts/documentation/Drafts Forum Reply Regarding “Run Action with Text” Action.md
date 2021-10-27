# Drafts Forum Reply Regarding “Run Action with Text” Action
[quote="agiletortoise, post:10, topic:7319"]
There are many ways to get a result back to Shortcuts. The Drafts action could put text in the cllpboard, as @sylumer mentioned, but also write to files, or store results in a draft which could be fetched. Lots of options.
[/quote]

(Hopefully I’m reviving this thread in a way that might prove useful to others.)

I understand that the task the OP was hoping to accomplish can be done without Drafts, but regarding this quote about the “Run Action with Text” Shortcuts action, I’d just ask: *how*?

As in, how exactly would I go about getting the action’s output into the clipboard/a file/a fetchable draft/etc?

Apologies if I’m missing something here… and thank you!

Do you have a point A and point B in mind? It’s often a lot easier to suggest the right approach with a specific goal.

For the clipboard? There is the “clipboard” action step that can place text in the clipboard, but also clipboard scripting methods.

For Files? Similar. There are “File” action steps that can write text to files, but also ways to script writing files.

Etc

***

Specifically, I was hoping to add a function to my “[Collect References](https://routinehub.co/shortcut/8913/)” Shortcut (which outputs all hyperlinks from a given article/webpage as a list of raw URLs) which grabs titles for each respective URL and formats them as proper Markdown links ([title](url)) using this “[Replace URLS by MD Links](https://actions.getdrafts.com/a/1be)” Drafts action from the action directory.

As per the screenshot below, I suppose I’m looking for the correct action in place of “Copy to Clipboard” which handles the result of said Drafts action, if possible. 

![Collect References Shortcut](https://i.snap.as/kwxrw8Kf.png)