const path=require('path');
const port =process.env.PORT || 8080;
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:"main.[fullhash].js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",//inject dom
                    "css-loader", //css --main js
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader"
                    }
                ]
            },
            {
                test:/\.(svg|png|jpg)$/,

                use:{
                   loader:"file-loader",
                   options:{
                       name:'[name].[hash].[ext]',
                       outputPath:"images"
                   }
                }
            }
        ]
    },
    plugins:[
     new HtmlWebpackPlugin({
         template:"./src/index.html"
     })
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    devServer:{
        host:"localhost",
        port:port,
        historyApiFallback:true,
        open:true
    }
}