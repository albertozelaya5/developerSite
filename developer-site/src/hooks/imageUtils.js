// src/utils/imageUtils.js
export function getImageUrl(basePath, relativePath) {
  return new URL(relativePath, basePath).href;
}
