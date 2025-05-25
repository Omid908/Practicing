export const PI = 3.14;
export function getCircumference(radius) {
  let total = 2 * PI * radius;
  console.log(total);
}
export function getArea(radius) {
  let total = PI * Math.pow(radius, 2);
  console.log(total);
}
export function getVolume(radius) {
  let total = 4 * PI * Math.pow(radius, 2);
  console.log(total);
}
