const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './src'),
        },
        port: 9010,
    },
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        game: path.resolve(__dirname, './src/game.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: false,
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/game.html'),
            filename: 'game.html',
            minify: false,
            chunks: ['game'],
            inject: 'head'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/images'),
                    to: path.resolve(__dirname, './dist/images'),
                    noErrorOnMissing: true,
                },
            ]
        }),
        new MiniCssExtractPlugin({
            filename: './style/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    }
}