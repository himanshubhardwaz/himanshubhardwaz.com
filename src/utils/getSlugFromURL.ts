export function getSlugFromURL() {
  const path = window.location.pathname;
  const segments = path.split("/");
  return segments.filter(Boolean).pop();
}
