const px2vw=require("postcss-px-to-viewport")

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [new px2vw({
                unitToConvert: 'px',
                //设计稿的视口宽度
                viewportWidth: 375,
                unitPrecision: 5,
                propList: ['*'],
                viewportUnit: 'vw',
                fontViewportUnit: 'vw',
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: false,
                replace: true,
                //忽略某些文件夹下的文
                exclude: /node_modules/,
                include: undefined,
                landscape: false,
                landscapeUnit: 'vw',
                landscapeWidth: 568
                })]
                // 这里的选项会传递给 postcss-loader
            }
        }
    },

    //多页面配置
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '唯品会',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      lastCrazy: {
        // page 的入口
        entry: 'src/lastCrazy.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'lastCrazy.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '最后疯抢',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'lastCrazy']
      },
      sale: {
        // page 的入口
        entry: 'src/sale.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'sale.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '唯品清仓',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'sale']
      },
      quick: {
        // page 的入口
        entry: 'src/quick.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'quick.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '唯品快抢',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'quick']
      },
      aoyi: {
        // page 的入口
        entry: 'src/aoyi.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'aoyi.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '唯品奥莱',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'aoyi']
      },
    },

    devServer: {
        proxy: {
          
          '/api': {
            //目标地址
            target: 'http://localhost:3333',
            changeOrigin: true
          },
        }
      },
  }