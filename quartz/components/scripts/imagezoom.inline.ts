let viewer: any = null

// Initialize Viewer.js on the article element. Any existing instance is
// destroyed first to avoid duplicate viewers across SPA navigations.
const init = (Viewer: any) => {
  const article = document.querySelector("article")
  if (!article) return
  if (viewer) viewer.destroy()
  viewer = new Viewer(article, {
    // Show only the controls relevant to zooming and panning
    toolbar: {
      zoomIn: true,
      zoomOut: true,
      oneToOne: true,
      reset: true,
    },
    navbar: false, // hide the thumbnail strip
    title: false,  // hide the image filename
    zoomRatio: 0.3, // zoom 30% per scroll tick (default is 10%)
    // Exclude images that are already links — clicking them should
    // navigate, not open the viewer
    filter(image: HTMLImageElement) {
      return image.closest("a") === null
    },
  })
}

// Quartz fires "nav" on every SPA page transition. We reinitialize the
// viewer each time so it picks up images on the new page.
document.addEventListener("nav", () => {
  const Viewer = (window as any).Viewer
  if (Viewer) {
    // Script already loaded (e.g. subsequent navigations) — initialize immediately
    init(Viewer)
  } else {
    // Script still in flight on first page load — wait for it to finish,
    // then read window.Viewer which will be defined by that point
    const script = document.querySelector('script[src*="viewerjs"]') as HTMLScriptElement | null
    if (script) {
      script.addEventListener("load", () => init((window as any).Viewer), { once: true })
    }
  }
})
