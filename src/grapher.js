import * as two from 'grapher/dist/src/two/grapher/index.js';
import * as three from 'grapher/dist/src/three/index.js';

new two.Grapher2(cont1, [two.vectorField((x, y) => {
    const s = 5;
    const c = 2 * s * Math.floor((x + y + s) / (2 * s));
    const p = (x - y + c + Math.sqrt(s * s - (x + y - c) ** 2)) / 2;
    const l = Math.sin(x / 4) ** 2 * 9 + 3;
    return [(p - x) * l, (y - c + p) * l];
})]);
const range = [-10, 10];
new three.Grapher3(
    cont2,
    three.lineIntegral(
        (x, y) => Math.cos(x) * Math.sin(y) / (Math.hypot(x, y) + 5) * 15,
        t => [t * Math.cos(t), t * Math.sin(t)],
        [0, Math.PI * 2.5],
        {},
        { uRange: range, vRange: range },
    ),
    {},
    { xRange: range, yRange: range },
);
new two.Grapher2(cont3, [two.cartesian(x => Math.sin(x) + Math.sqrt(Math.abs(x)) * Math.sign(x))]);