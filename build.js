import { cpSync, writeFileSync } from 'fs';
import { getAM } from 'react-documents/dist/src/server/index.js';

['static', 'node_modules/react-documents/src/client/static'].map(p => cpSync(p, 'build', { recursive: true }));
getAM().then(d => writeFileSync('build/asciimath.js', d));