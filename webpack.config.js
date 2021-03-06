const path = require('path');

// Load webpack-plugins here!
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RewriteImportPlugin = require("less-plugin-rewrite-import");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Webpack = require('webpack');

// Directory-constants
const ROOT_DIR = path.resolve(__dirname);
const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

// Configure extract-text-plugin
const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {

    entry: `${SRC_DIR}/index.js`,

    output: {
        path: BUILD_DIR,
        filename: '[name].[hash].js',
    },
    
    module: {
        loaders: [

            // Loading less-files
            {
                test: /\.(less|config)/, // Loading .less or .config files
                use: extractLess.extract({ // Instructs webpack to store the style data in a seperate css-file (see plugins!)
                    use: [
                        { loader: "css-loader" },
                        {
                            loader: "less-loader",
                            options: {
                                paths: [ROOT_DIR, NODE_MODULES_DIR], // Instructs less-loader not to use the webpack resolver
                            },
                        }
                    ],
                }),
            },

            // Loading image- and font-files
            {
                test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
                use: [
                  { loader: 'file-loader' },
                ],
            },

            // Down-compile JS(ES6)/JSX-files
            {
                test: /\.jsx?$/, // Include all files which are ending with ".js" or ".jsx"
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { 
                    presets: ['es2015', 'react'] 
                },
            },
        ]
    },
    
    // Include plugins
    plugins: [

        // This setup will ...
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${SRC_DIR}/template.html`,
            
        }),

        // This plugin will extract the style data into a seperate css file
        extractLess,

        new UglifyJsPlugin(),

        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

    // Configuration of webpack-dev-server
    devServer: {
        compress: true,
        contentBase: BUILD_DIR,
        port:9000
    }
};