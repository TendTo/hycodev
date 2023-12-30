export default function cloudinaryLoader({ src, width, quality }) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `/${normalizeSrc(src)}`;
}
function normalizeSrc(src: string): string {
  return src[0] === "/" ? src.slice(1) : src;
}
