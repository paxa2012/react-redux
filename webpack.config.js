const path = require('path');

module.exports = {
    mode: 'development', 
    entry: './src/index',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, './build'),
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }     
            }
        ]  
    },

}