export function randomizer() {
  const r = Math.floor(Math.random() * 256).toString();
  const g = Math.floor(Math.random() * 256).toString();
  const b = Math.floor(Math.random() * 256).toString();
  return `${r},${g},${b}`;
}
