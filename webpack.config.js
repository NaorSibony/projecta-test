const HtmlWepackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main.ts',
    rsolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader'],
            },
            {
                test: /\.(html|css)$/,
                use: 'raw-loader',
            },
        ],    
    },
    plugins: [
        new HtmlWepackPlugin({ template: '.src/index.html' })
    ]
}