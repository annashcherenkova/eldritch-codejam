const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: { index: path.resolve(__dirname, "", "./index.js") },
    output: { path: path.resolve(__dirname, "build"), filename: "main.js" },    
    module: {
        rules: [
            {   
                exclude: "/node_modules/",
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                exclude: "/node_modules/",
                test: /\.png$/,
                use: ['file-loader'],
            },
        ]
    }
}