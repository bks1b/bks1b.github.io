const { join } = require('path');

module.exports = [{
    mode: 'none',
    entry: join(process.cwd(), '_grapher.js'),
    target: 'web',
    resolve: { extensions: ['.js'] },
    output: {
        filename: 'index.js',
        path: process.cwd(),
    },
}];