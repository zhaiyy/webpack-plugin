function HelloAsyncPlugin() {}

HelloAsyncPlugin.prototype.apply = function(compiler) {
  compiler.plugin("emit", function(compilation, callback) {

    // 做一些异步处理……
    setTimeout(function() {
      console.log("异步处理 Done with async work...");
      callback();
    }, 1000);

  });
};

module.exports = HelloAsyncPlugin;