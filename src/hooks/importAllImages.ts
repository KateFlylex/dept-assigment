export function importAllImages(r: any) {
  let images: any = {};
  r.keys().forEach((item: any, index: any) => { images[item.replace('./', '')] = r(item); });
  return images
}
