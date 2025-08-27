import { join } from 'path';
import { readdirSync } from 'fs';

export default [{
    entry: Object.fromEntries(readdirSync('src').map(k => [k, join(process.cwd(), 'src', k)])),
    target: 'web',
    output: {
        filename: 'build/[name]',
        path: process.cwd(),
    },
}];