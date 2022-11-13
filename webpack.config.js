// HERE ARE COMING WEBPACK RULES
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin'); // This directly throws the error after save if there is lint error;

const isDevelopment = process.env.NODE_ENV !== 'production';

// DEFAULT LOOKING INTO SRC FOLDER AND INDEX.JS FILE
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: ['./src/index.tsx', './src/index.css'],
    devtool: 'inline-source-map',
    resolve: { extensions: ['.tsx', '.js', '.ts'] },
    output: {
        filename: 'myBundleWebpack.js',
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader',
                options: {
                    // presets: ['@babel/env', '@babel/preset-react'],
                    // plugins: [require.resolve('react-refresh/babel')],
                },
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    // in order not to refresh every time after we run npx webpack
    devServer: {
        port: process.env.PORT || 3000,
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,

        // Setup output directory
        static: {
            directory: path.join(__dirname, 'public'),
            watch: {
                ignored: /node_modules/,
            },
        },
    },
    plugins: [new ReactRefreshWebpackPlugin(), new EslintPlugin()],
};
