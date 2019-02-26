const jetpack = require('fs-jetpack');

module.exports = {
    config: function() {
        return jetpack.dir(`${base_dir}/config`)
    },
    public: function() {
        return jetpack.dir(`${base_dir}/public`)
    },
    views: function() {
        return jetpack.dir(`${base_dir}/config`)
    },
    storage: function() {
        return jetpack.dir(`${base_dir}/storage`)
    },
    assets: function() {
        return jetpack.dir(`${base_dir}/assets`)
    },
}