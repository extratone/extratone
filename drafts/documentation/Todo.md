# Todo

- [X] Add CriticMarkup support
- [ ] Add task list support
- [ ] Add Footnotes support
```

### Tables

Tables are one of the most common feature among Markdown dialects and most use the GFM style tables (some with additions). Using the GFM style seems to be the right path.

### Abbreviation

Abbreviations are also a popular feature in Markdown dialects. There is a universal concensus on the syntax.

> This syntax extension is not yet part of ExtraMark!

```md
*[MD]: Markdown
MD is a lightweight markup language for creating documents.
```

### Definition lists

Another common syntax extension is the definition list. The syntax is the same for all dialects.

```md
Markdown
: A lightweight markup language for creating documents.
```

### Smart typo

Some Markdown dialects support transforming common symbols into single characters (e.g. `(c) or (tm)`). While not a feature that many dialects support it is a pain-free quality of life improvement for writing Markdown documents.

```md
A copyright symbol: (c)
```

### Table of contents

Generating a table of contents with a single "Markdown tag" can help you save a lot of time, but the single-tag TOC doesn't show the content that actually gets generated.
For that I believe a single-tag TOC is an antipattern in Markdown. There are wonderful tools for text editors that can generate a table of contents for any Markdown document with a press of a button.
Generating the TOC as a simple nested Markdown list helps maintaining readability and does not violate the original Markdown philosophy: *"A Markdown formatted document should be publishable as-is, as plain text..."*.

### Math

Math for Markdown is a hard question. There are many implementations and most of them use their own syntax. The two most common syntax elements are using the `$` and `$$` as delimiters for inline and block math and using LaTeX's `\\(...\\)` and `\\[...\\]` delimiters.
As it is already commonplace to use LaTeX for the actual math markup it seems logical to use LaTeX's delimiters but they are very long and hard to read. And the original Markdown philosophy says: *"Readability, however, is emphasized above all else."*. That is an argument for using the `$` sign delimiter.
There are some hard arguments for and against both methods on the CommonMark forum.

> This syntax extension is not yet part of ExtraMark!

### Mermaid

Some Markdown dialects allow the creation of diagrams using Mermaid syntax. This seems to contradict the original idea of Markdown documents as these generate some images that should be separate content. For the time being I don't see any good reasons to include Mermaid.

> This syntax extension is not part of ExtraMark!

## Conclusion

Based on these results I created the ExtraMark flavor of Markdown. It ended up being very similar to MultiMarkdown but MultiMarkdown is not based on CommonMark and doesn't have a universal JavaScript implementation.
******
okay so you know this is all I've been doing for months, now, so I've read tens of thousands of words on the iPhone 12 lineup and the 12 Mini, specifically, as the notable universal favorite among the tech media… I had heard about how pleasant it was to hold… how I *really just had to hold it* to ever truly understand what everyone has been going on about. 

thanks to my friend, I finally got the chance!

and despite it being rammed into my head, I *still* actually *felt something* just handling the little thing… 

THIS IS THE ONE. this is the recommendation: the 12 Mini is special and probably won't happen again.