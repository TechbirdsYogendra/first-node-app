import os from 'os';

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

logOSProperties();