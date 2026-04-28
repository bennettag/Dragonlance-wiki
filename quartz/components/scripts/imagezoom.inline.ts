let zoom: any = null

document.addEventListener("nav", () => {
  if (zoom) zoom.detach()
  const mz = (window as any).mediumZoom
  if (mz) {
    zoom = mz("article img", { background: "var(--light)" })
  }
})
