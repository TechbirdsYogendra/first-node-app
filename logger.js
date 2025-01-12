
const __dirname = import.meta.dirname;
console.log(__dirname);

const url = 'https://logger.io';
function log(message) {
    console.log(`logging to server ${url}`);
    console.log(message);
}

export { log as logMessage };