# Make Audio from Document Text

## Creates an audio file of text identified in a document read aloud by Siri (Text to Speech.)

* [**RoutineHub Page**](https://routinehub.co/shortcut/10028/)
* [iCloud Share Link](https://www.icloud.com/shortcuts/16031e0438254cff80a9156b04b766aa)
***

![Siri TTS](https://i.snap.as/13BtYmx0.png)

## About

**Note: this shortcut requires iOS 15 Developer or Public Beta 6**

This shortcut utilizes 4 new Actions coming with iOS 15. The first - “**Extract Text From Image**” - is used to transcribe the text present in a given file/document via OCR. 

According to the Action’s description, it is capable of reading text from the following input types:

> Evernote notes, App Store apps, Bar codes, Images, Podcasts, Rich text, iTunes products, Giphy items, Podcast episodes, PDFs, iTunes media, Media, Contacts, Photo media, Shazam media, Locations, iTunes artists

This shortcut is primarily configured for PDF input, but obviously, your particular needs should be customized for.

Because the output of `Extract Text From Image` is a list of single lines, this shortcut uses `Combine Text` to convert them to single spaces, the result of which is particularly suited for Siri to read.

The plain text result is then passed to “Make Audio From Text”  (the second) action arriving in iOS 15 (which has finally been fixed as of Developer Beta 6) to generate an .m4a audio file of Siri Voice 2 (by default) reading the document’s text aloud (rather than just speaking it aloud on your handset/iPad, as the original does.)

The 3rd and 4th new actions are used to capture and crop a 1000 x 1000 thumbnail image of the inputted document for use as the output file’s cover art.

After the raw audio has been synthesized, it is passed to an `Encode Media` action, which converts it to an .m4a file with metadata (that I highly encourage you customize.)

By default, the shortcut is configured to save the .m4a file to iCloud Drive in /audio/TTS/ as [the original file’s name].m4a.

A full explanation/detailed guide can be found [**on my blog**](https://bilge.world/siri-tts), and the full text of the latter portion (in first draft form) has been posted beneath the contact details in [the description of a sister shortcut](https://routinehub.co/shortcut/9953).

***

## Contact

* [Contact Card](https://bit.ly/whoisdavidblue)
* [Email](mailto:davidblue@extratone.com) 
* [Twitter](https://twitter.com/NeoYokel)
* [Mastodon](https://mastodon.social/@DavidBlue)
* [Discord](https://discord.gg/0b9KQUKP858b0iZF)
* [*Everywhere*](https://www.notion.so/rotund/9fdc8e9610b34b8f991ebc148b760055?v=c170b58650c04fbdb7adc551a73d16a7)...