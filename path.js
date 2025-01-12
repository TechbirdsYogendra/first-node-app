//// Path
import path from 'path';

function logPathProperties() {
    const filePath = '/Users/yogendrasingh/Documents/node-js/first-app/app.js';
    console.log(`Basename: ${path.basename(filePath)}`);
    console.log(`Directory Name: ${path.dirname(filePath)}`);
    console.log(`Extension: ${path.extname(filePath)}`);
    console.log(`Is Absolute: ${path.isAbsolute(filePath)}`);
    console.log(`Join: ${path.join('/Users', 'yogendrasingh', 'Documents', 'node-js', 'first-app', 'app.js')}`);
    console.log(`Normalize: ${path.normalize('/Users/yogendrasingh/Documents/../node-js/first-app/app.js')}`);
    console.log(`Parse: ${JSON.stringify(path.parse(filePath), null, 2)}`);
    console.log(`Relative: ${path.relative('/Users/yogendrasingh/Documents', '/Users/yogendrasingh/Documents/node-js/first-app/app.js')}`);
    console.log(`Resolve: ${path.resolve('app.js')}`);
}

logPathProperties();