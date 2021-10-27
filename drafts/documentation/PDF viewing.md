# PDF viewing

The Documents app has a very nice pdf viewing experience. It gives the "full-screen" experience on connected displays and can potentially be an excellent pdf viewer for showing my slides on the projector in the classroom setting.


![]({{ site.baseurl }}/images/PDF-view.png "Documents app is an excellent PDF viewer!")

Another advantage of the Documents app PDF viewer is that we can change the tone to Sepia or Dark. The following image shows the view I get when I change the tone to Dark.

![]({{ site.baseurl }}/images/PDF-view-dark.png "The dark tone with the click of a button is an amazing feature!")

When connected to an external display, the PDF viewer gives various options. In the next image, I show the view when I "focus" on a part of the slide.

![]({{ site.baseurl }}/images/PDF-view-focus.png "Focusing on parts of pdf")

Finally, the image below shows the "focused" slide on the external display.

![]({{ site.baseurl }}/images/PDF-screen-focus.jpeg "Focusing on parts of pdf on external display")

```bash
ffmpeg -i Video.MP4  -filter_complex "[0:v]  fps=12,scale=720:-1,split [a][b];[a] palettegen [p];[b][p] palette
use" CombinePDF.gif
```

Another alternative is to use the [following shortcut](https://www.icloud.com/shortcuts/f9a9c2cc6e61476abf2e35f654869553&xcust=1-1-232739-0-0-0&
) to convert the screen recorded video into a GIF