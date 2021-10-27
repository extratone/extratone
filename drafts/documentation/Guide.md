# Guide

So! For those of you currently running the latest iOS 15 Beta and those in the future running the full release, **what follows is a guide on how you can use my own shortcuts and methods to generate, metadate, and embed Siri-powered audio text-to-speech files relatively quickly without having to use desktop-class (or any other) hardware**.

To begin, you should install two brand new shortcuts of mine: [**Make Audio from Article Body**](https://routinehub.co/shortcut/9953/) and (if you intend to stick with me to the embed stage, anyway,) my [< audio > Embed Tool](https://routinehub.co/shortcut/9948/). Both should function out of the box, but I would highly encourage that you try building your own shortcut around the `Make Audio From Text` action, even if you've never worked with Shortcuts (or any sort of automation, for that matter) before, *especially* if you plan to be using Siri as a text-to-speech generator with any frequency. 

### Intended Result

Throughout this guide, I'm going to be using [a five-year-old ramble of mine](https://bilge.world/johnny-tsunami-smart-house-slavery) about the oddly-perceptive bits found in early-oughts Disney movies as example text. Earlier today, I used my own personalized version of my new shortcut to generate an example of in which the process we're about to explore should result. The ~6000 words of text took just over 3 minutes, 30 seconds to render consistently in three consecutive timed attempts. You can listen to it [on Whyp](https://whyp.it/t/johnny-tsunami-vi-separate-but-equal-siri-voice-2-tts-74752) and/or inspect [the actual file](https://github.com/extratone/bilge/raw/main/audio/TTS/JohnnyTsunami.m4a) yourself, if you'd like.

![Plain Text Parsed by Safari](https://i.snap.as/dktmGQQb.png)

### Input Format

If we were trying to do this using any other available method in 2021 - even the expensive ones - our first task would be scrubbing our subject text of any special formatting (Word,) symbols, embed, hyperlinks, and any other data Siri doesn't understand (roman numerals, for example.) As a Windows user who's not at all new to free ways to automate accessibility improvements to web content, I envy both you and my new self for the magic available to us in the form of Safari's abilities to parse complex web content. In my experience, there's nothing like it (at least nothing available to regular consumers.) 

The screenshot embedded above shows the result of a `Quick Look` action inserted just after the `Text` action produced by the public version of my shortcut when run on our example. There are three immediately problematic issues:

1. Siri doesn't understand roman numerals, so she will read "Johnny Tsunami VI" as *Johnny Tsunami vee eye*.
2. "The Psalms" is not my name, though it is what this blog currently returns when asked for a byline. In my experience, this generally isn't an issue with most mainstream media CMSs.
3. The shortcut appears to have failed to retrieve any data for the `Published Date` variable from my blog. (Also a relatively specific consideration.)

If you'll note in the *previous* embedded image comparing my custom version of the shortcut (left) to the published version (right,) you'll note that my chosen solution is to manually input all metadata before actually starting the shortcut. What's not shown is my corresponding manual inputs in the `Encode Trimmed Media` action, which includes attaching a retrieved image file (in the Working Copy action you *can* see) as album art. For my intended use - exclusively generating text-to-speech audio of Posts on this blog - this makes more sense than unnecessarily automating metadata retrieval.

The extraordinary thing about the screenshot, though, is that it doesn't contain any of the other crap (as described above) found in the original page. (Beforehand, it looked more [like this](https://raw.githubusercontent.com/extratone/bilge/main/posts/johnny-tsunami-smart-house-slavery.md).) It's especially reliable at parsing WordPress-bound content, which still makes up [s̵͕̈́͊c̶̥̏̚r̶̥͈̃è̴̙͌å̴̹m̵̛̅ͅi̶̦̾͘n̸͎̟̎̃g̶͎͛] percent of the whole web. **Treasure this power**, folks.

![Simpler TTS Examples](https://i.snap.as/OMwKdOUI.png)

If all you need read aloud is the body text, things become even simpler. In the right example above, I've simply deleted the `Text` action and replaced it with `Get text from [the Safari Web Article's body]`. Theoretically, one could omit that action, even, and simply use the direct output of `Get Body from Article` as input for the `Make spoken audio from text` action, but I say keep the extra step unless it becomes an issue.

**If you're actually *beginning* with clean plain text** and don't care about metadata in your final audio file and/or if you're planning on passing the result through other audio/metadata editing software, anyway, the left, three-action shortcut is all you need. It will result in a [Core Audio Format (.caf)](https://www.wikiwand.com/en/Core_Audio_Format) file (like [this one](https://github.com/extratone/bilge/blob/main/audio/egg.caf),) which I know absolutely nothing about except that Audacity and GarageBand support it by default.

### Sharing/Embedding

Whichever route you traveled, you should have some sort of audio file, at this point, and if you intend to share and/or embed it, you’ll need to upload said audio to some sort of Web Server which allows direct playback/download of the raw file from external sources. Unless you’ve been skimming, you know by now that I’ve been using [*The Psalms* GitHub Repository](https://github.com/extratone/bilge) to do this thus far, though one isn’t really supposed to. Every few months, someone on Stack Overflow figures out how to construct or discover the raw link to a given Google Drive file before Google notices and alters it, and I’m afraid you’ll find just about every other cloud/file sharing service in a similarly unreliable situation. If it’s going to be done at scale, I’m afraid it’s ultimately going to require you rent regular, vanilla space on an FTP-enabled fileserver, if one can still do that sort of thing. (I will update this post if/when I find a more ideal solution.)

Within my current system, the raw URL to our example file looks like this:
```
https://github.com/extratone/bilge/raw/main/audio/TTS/JohnnyTsunami.m4a
```

Using my aforelinked, ultra rudimentary [< audio > element Siri Shortcut tool](https://routinehub.co/shortcut/9948/) (which I’ve kept on my homescreen with good results for a few months,) we can very quickly turn said raw URL into a properly-formatted HTML5 audio player:
```
<audio controls>