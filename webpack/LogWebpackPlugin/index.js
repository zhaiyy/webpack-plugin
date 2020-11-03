class LogWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('LogWebpackPlugin', () => {
            // 在 emit 事件中回调 emitCallback
            console.log('emit 事件发生啦，所有模块的转换和代码块对应的文件已经生成好~')
          });
          compiler.hooks.done.tap('LogWebpackPlugin', (err) => {
            // 在 done 事件中回调 doneCallback
            console.log('done 事件发生啦，成功构建完成~')
         });
          compiler.hooks.compilation.tap('LogWebpackPlugin', () => {
            // compilation（'编译器'对'编译ing'这个事件的监听）
            console.log("The compiler is starting a new compilation...")
          });
          compiler.hooks.compile.tap('LogWebpackPlugin', () => {
            // compile（'编译器'对'开始编译'这个事件的监听）
            console.log("The compiler is starting to compile...")
          });
    }
}

module.exports = LogWebpackPlugin;