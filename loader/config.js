const jetpack = require('fs-jetpack');
let configJP;
// get the config directory
switch(process.env.NODE_ENV) {
    case 'PRODUCTION': 
        configJP = jetpack.cwd(`${base_dir}/config/production`);
    break;
    case 'DEVELOPMENT': 
        configJP = jetpack.cwd(`${base_dir}/config/development`);
    break;
    case 'STAGING': 
        configJP = jetpack.cwd(`${base_dir}/config/staging`);
    break;
    default: 
        configJP = jetpack.cwd(`${base_dir}/config/development`);
    break;
}
// read every file
let config = {};
configJP.list().forEach(filename => {
    config[filename.split('.')[0]] = require(configJP.path(filename));
})

module.exports = config;