// load library and set base_dir

global._ = require('lodash');
global.base_dir = __dirname.replace('loader', '');
global.axios = require('axios');