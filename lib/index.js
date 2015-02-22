var getskeletonProcessor = require("./skeleton-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginskeleton(options) {
    this.options = options;
};

LessPluginskeleton.prototype = {
    install: function(less, pluginManager) {
        var skeletonProcessor = getskeletonProcessor();
        pluginManager.addPreProcessor(new skeletonProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 4, 0]
};

module.exports = LessPluginskeleton;

