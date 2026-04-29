import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore: inline scripts are not typed modules
import imagezoomScript from "./scripts/imagezoom.inline"
import styles from "./styles/imagezoom.scss"

// Version is defined once here so both the CSS and JS CDN URLs stay in sync
const VIEWER_VERSION = "1.11.7"
const VIEWER_BASE = `https://cdnjs.cloudflare.com/ajax/libs/viewerjs/${VIEWER_VERSION}`

// Renders the Viewer.js CDN assets into the page. The inline script handles
// initialization after the DOM is ready.
const ImageZoom: QuartzComponent = () => {
  return (
    <>
      <link rel="stylesheet" href={`${VIEWER_BASE}/viewer.min.css`} />
      <script src={`${VIEWER_BASE}/viewer.min.js`} />
    </>
  )
}

ImageZoom.afterDOMLoaded = imagezoomScript
ImageZoom.css = styles

export default (() => ImageZoom) satisfies QuartzComponentConstructor
