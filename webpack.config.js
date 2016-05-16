var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: __dirname + "/src/Public/Components/RootComponent.jsx",
    output: {
        path: __dirname + "/build",
        filename: "/Public/Components/RootComponent.js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json"
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    "plugins": [
                        "transform-runtime"
                    ]
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/Public/index.html', to: './Public'},
            {from: './src/Public/Resume.json', to: './Public'},
            {from: './src/Public/Images', to: './Public/Images', toType: 'dir'},
            {from: './src/Public/lib', to: './Public/lib', toType: 'dir'}
        ])
        //new webpack.optimize.UglifyJsPlugin()
    ]
};