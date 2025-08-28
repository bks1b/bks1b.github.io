import { join } from 'path';
import { readdirSync } from 'fs';
import webpack from 'webpack';

export default [{
    mode: 'none',
    entry: Object.fromEntries(readdirSync('src').map(k => [k, join(process.cwd(), 'src', k)])),
    target: 'web',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: { presets: [['@babel/preset-react', { runtime: 'automatic' }]] },
            },
        }],
    },
    output: {
        filename: 'build/[name]',
        path: process.cwd(),
    },
    plugins: [new webpack.DefinePlugin({ 'process.env': '({})' })],
}];