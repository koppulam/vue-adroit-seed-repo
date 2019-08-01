const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function getRules(options) {
    let rules;

    if (!options.globalComps) {
        rules = [
            // ES-Lint on continuous build
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                options: {
                    cache: false
                }
            },
            // Vuew loader
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // Our Javascript/JSX (bundle into one)
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            // HandleBar Loaders
            {
                test: /\.(hbs)$/,
                use: [
                    {
                        // loader: 'assemble-hbs-loader'
                        loader: 'assemble-webpack'
                    }
                ]
            },
            // SCSS-CSS extract to seperate file
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            hmr: process.env.NODE_ENV === 'development',

                            // if hmr does not work, this is a forceful method.
                            reloadAll: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            // url: false,
                            minimize: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            data: "@import '~stylesheets/_imports';@import '~stylesheets/_keyframes';"
                        }
                    }
                ]
            }
        ];
    } else {
        rules = [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // ES-Lint on continuous build
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                options: {
                    cache: false
                }
            },
            // Our Javascript/JSX (bundle into one)
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            // HandleBar Loaders
            {
                test: /\.(hbs)$/,
                use: [
                    {
                        // loader: 'assemble-hbs-loader'
                        loader: 'assemble-webpack'
                    }
                ]
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader'
                ]
            },

            // SCSS-CSS extract to seperate file
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            hmr: process.env.NODE_ENV === 'development',

                            // if hmr does not work, this is a forceful method.
                            reloadAll: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            // url: false,
                            minimize: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: path.resolve(__dirname, '../src/lib/vendor/namespace-css-module-loader.js'),
                        options: {
                            id: 'root',
                            rootClass: 'aem'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            data: "@import '~stylesheets/globals';@import '~stylesheets/_keyframes';"
                        }
                    }
                ]
            }
        ];
    }

    return rules;
};
