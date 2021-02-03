const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    devServer: {

        // Serve index.html as the base
        //if we build to dist, we can comment this if we build it in memory via web-pack-server script
        contentBase: path.resolve(__dirname, 'dist'),
        //contentBase: './',
    
        // Enable compression
        //compress: true,
    
        // Enable hot reloading, changes on save 
        hot: true,
        inline:true,
    
        
    
        //port: 3000,
    
        // Public path is root of content base
        //publicPath: '/'
        
    
      },
    
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    devtool: 'source-map',
    //used for webpack build not webpack-server
    output: {
        
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        

    },
    //looks for the index.html file and copies it to the place where the dev bundle or prod bundle is made (dist or in memory)
    //will automatically add script tag to add the bundle for you
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
}