import { logMessage } from "./logger.js";
import os from "node:os";
import { URL, URLSearchParams, fileURLToPath, pathToFileURL } from 'url';

function hello(name) {
    console.log(`Hare Krishna ${name}`);
}

hello("Yogendra");

// URL properties
function logURLProperties() {
    // Create a new URL object
    const myURL = new URL('https://example.com:8000/path/name?query=string#hash');
    console.log(`Href: ${myURL.href}`);
    console.log(`Origin: ${myURL.origin}`);
    console.log(`Protocol: ${myURL.protocol}`);
    console.log(`Host: ${myURL.host}`);
    console.log(`Hostname: ${myURL.hostname}`);
    console.log(`Port: ${myURL.port}`);
    console.log(`Pathname: ${myURL.pathname}`);
    console.log(`Search: ${myURL.search}`);
    console.log(`Hash: ${myURL.hash}`);
    
    // URLSearchParams
    const params = new URLSearchParams(myURL.search);
    params.append('newParam', 'value');
    console.log(`Updated Search Params: ${params.toString()}`);
    
    // Convert file URL to path
    const filePath = fileURLToPath(new URL('file:///tmp/hello'));
    console.log(`File Path: ${filePath}`);
    
    // Convert path to file URL
    const fileURL = pathToFileURL('/tmp/hello');
    console.log(`File URL: ${fileURL.href}`); 
}

// logURLProperties()

// OS properties
function logOSProperties() {
    console.log(`Architecture: ${os.arch()}`);
    console.log(`Platform: ${os.platform()}`);
    console.log(`CPU Info: ${JSON.stringify(os.cpus(), null, 2)}`);
    console.log(`Free Memory: ${os.freemem()}`);
    console.log(`Total Memory: ${os.totalmem()}`);
    console.log(`Home Directory: ${os.homedir()}`);
    console.log(`Hostname: ${os.hostname()}`);
    console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces(), null, 2)}`);
    console.log(`OS Release: ${os.release()}`);
    console.log(`Temporary Directory: ${os.tmpdir()}`);
    console.log(`Uptime: ${os.uptime()} seconds`);
    console.log(`User Info: ${JSON.stringify(os.userInfo(), null, 2)}`);
    console.log(`OS Version: ${os.version()}`);
}

// logOSProperties();

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

