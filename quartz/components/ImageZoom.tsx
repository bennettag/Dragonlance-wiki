import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import imagezoomScript from "./scripts/imagezoom.inline"

const ImageZoom: QuartzComponent = () => {
  return (
    <script src="https://cdnjs.cloudflare.com/ajax/libs/medium-zoom/1.1.0/medium-zoom.min.js" />
  )
}

ImageZoom.afterDOMLoaded = imagezoomScript

export default (() => ImageZoom) satisfies QuartzComponentConstructor
