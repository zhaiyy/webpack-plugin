// SetScriptTimestampPlugin.js

class SetScriptTimestampPlugin {
    apply(compiler) {
        /*
        entryOption : 在 webpack 选项中的 entry 配置项 处理过之后，执行插件。
        afterPlugins : 设置完初始插件之后，执行插件。
        compilation : 编译创建之后，生成文件之前，执行插件。。
        emit : 生成资源到 output 目录之前。
        done : 编译完成。
        */
        // 我们插件应该是要在 HTML 输出之前，动态添加 script 标签，所以我们选择钩入 compilation 阶段
        compiler.hooks.compilation.tap('SetScriptTimestampPlugin',
         (compilation, callback) => {
             /*
                tap 第二个参数是个回调函数，并且这个回调函数有两个参数： compilation 和 callback 。
                compilation 继承于compiler，包含 compiler 所有内容（也有 Webpack 的 options），
                而且也有 plugin 函数接入任务点。
              */

            // 插件逻辑 调用compilation提供的plugin方法
            compilation.plugin(
                "html-webpack-plugin-before-html-processing",
                function(htmlPluginData, callback) {
                  // 获取脚本文件名称列表并清空。
                  let result = ''
                  htmlPluginData.assets.js.forEach((ele,index) => {
                    // 动态创建一个 script 标签，将其 src 值设置为上一步读取到的脚本文件名
                     // 并在后面拼接 时间戳 作为参数。
                    result = result +  `
                        let scriptDOM${index} = document.createElement("script");
                        let jsScr${index} = "${ele}";
                        scriptDOM${index}.src = jsScr${index} + "?" + new Date().getTime();
                        document.body.appendChild(scriptDOM${index})
                `;
                
                  });
                  htmlPluginData.assets.js = [];                 
                 // 替换逻辑模板
                    let resultHTML = htmlPluginData.html.replace(
                    "<!--SetScriptTimestampPlugin inset script-->", `<script>${result}</script>`
                  );
                  // 返回修改后的结果
                  htmlPluginData.html = resultHTML;
                }
            )
        });
      }
  }
  module.exports = SetScriptTimestampPlugin;
  