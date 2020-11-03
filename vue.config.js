const MyExampleWebpackPlugin = require('./webpack/MyExampleWebpackPlugin.js')
const HelloAsyncPlugin = require('./webpack/HelloAsyncPlugin.js')
const LogWebpackPlugin = require('./webpack/LogWebpackPlugin/index')
const SetScriptTimestampPlugin = require('./webpack/SetScriptTimestampPlugin/index')


module.exports = {
    configureWebpack() {
        return {
            plugins: [
                // new MyExampleWebpackPlugin(),
                new HelloAsyncPlugin(),
                new LogWebpackPlugin(),
                // new SetScriptTimestampPlugin()
            ]
        }
    }
    
}
    