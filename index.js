const path = require('path');
const ic = require('rbx-icons');

ic.generate(path.join(__dirname, 'Studio Icons')).then(iconPaths => {
    console.log(iconPaths['Part']);
})
