const jetpack = require('fs-jetpack');
let helperJP = jetpack.cwd(`${base_dir}/helpers`);
// get the config directory

// read every file
let helpers = {};
let tree = helperJP.inspectTree('', {relativePath: true});
let stack = tree.children;
while(stack.length > 0) {
    // get the item
    let item = stack.shift();
    // push to back of stack
    if (item.children) {
        stack = stack.concat(item.children);
    }
    if(item.type === 'file') {
        let temp = item.relativePath.split('/');
        let name = temp[temp.length - 2]
        if (name !== '.' && item.name === 'index.js') {
            global[name] = require('../helpers/' + item.relativePath);
        }
    }
}