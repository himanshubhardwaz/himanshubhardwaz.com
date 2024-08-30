export function getSlugFromURL() {
  const path = window.location.pathname;
  const segments = path.split("/");
  const slug = segments.filter(Boolean).pop();
  return slug || "";
}
