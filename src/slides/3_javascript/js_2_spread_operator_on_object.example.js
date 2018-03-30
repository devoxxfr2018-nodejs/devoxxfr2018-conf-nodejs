export default (
`const aClone = { ...a };
const ab = { ...a, ...b };
const a = { x: 1, y: 2};
const b = { y: 3, z: 4};
const ab = { ...a, ...b };
console.log(ab);
// output: {x: 1, y: 3, z: 4}
`
);
