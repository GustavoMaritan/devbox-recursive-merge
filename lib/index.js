const Merge = require('./mergeClass');
DevMerge = null;

function init(){
    DevMerge = new Merge();    
}

module.exports = init();