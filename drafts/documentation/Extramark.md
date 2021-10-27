# Extramark

The aim of ExtraMark is to create a **well-defined** flavor of Markdown that is a **clear superset of [CommonMark](https://github.com/commonmark/commonmark)** as it is becoming more and more accepted as the de-facto standard for basic Markdown syntax. This project includes the most common syntax extensions for Markdown to have a flavor that could be used by a wide variety of projects and applications.
In order to achieve this I created this comparison. Below is the reasoning for the syntax choices for Extramark.

## Syntax extensions

### Superscript

The ability to create superscript text seems to be a common feature among the various flavors. With the execption of Redcarpet, all implementations support the `^...^` syntax. Some support the variant where the closing `^` is missing, but to keep the snytax unambiguous the closing `^` is required.

```md
The cube's surface area is 36 cm^3^.
```

### Subscript

Just as superscript, subscript is a popular syntax extension. All of the above flavors that support it has the same syntax.

```md
Tap water mainly consists of H~2~O but it has many other components as well.
```

### Strikethrough

The stikethrough syntax extension was popularized by GFM and has two syntaxes across implementations. Some variants use the `~~...~~` syntax while dialects use the syntax from CriticMarkup. Some use both. 
Using CriticMarkup seems the right choice here as it is a somewhat standarized specification for edits in text. *Adding support to the GFM style strikethroughs could increase cross compatibility with many dialects.*

```md
Markdown is a does ~~not~~ support strikethroughs.
```

### Insertion

All implementations use some form of the `+` symbol to denote insertion. Using the CriticMarkup syntax here seems reasonable as it provides specification to all text edit options.

```md
Markdown supports bold, italic{++ and insertions++}.
```

### Highlight

As with strikethrough and insertion CriticMarkup also provides solution to this syntax extension. *The `==...==` syntax is also widely used so adding support for this could increase compatibilty.*

```md
Markdown syntax {==is extended==} by many syntax extensions.
```

### Footnotes

There seems to be a concensus on how to denote footnotes in Markdown. The only difference is that while some dialects only allow numbers as the footnote indicator, others allow any text. The latter is the more universal solution.

> This syntax extension is not yet part of ExtraMark!

```md
This page is written with Markdown[^1].

[^1]: Or at least some dialect of it.
```
### Task lists

Any implementation that uses task lists uses the snytax of GFM.

> This syntax extension is not yet part of ExtraMark!

```md