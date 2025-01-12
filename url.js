import { URL, URLSearchParams, fileURLToPath, pathToFileURL } from 'url';

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

logURLProperties()