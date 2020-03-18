const path = require('path');
function resolve(dir) {
    //此处使用path.resolve 或path.join 可自行调整
    return path.join(__dirname, dir)
}

module.exports = {

    devServer: {
        //设置端口号
        port: 9999,
        //设置静态目录
        contentBase: "static"
    },
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    filenameHashing: true, //文件hash


    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '&': resolve('src/components')
    //         }
    //     }
    // },
    // chainWebpack: config => {
    //     config.resolve.alias
    //         // key,value自行定义，比如.set('@assets', resolve('src/assets'))
    //         .set('&', resolve('src/components'))
    // }
}