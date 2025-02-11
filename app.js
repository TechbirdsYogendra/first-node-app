import { logMessage } from "./logger.js";

function hello(name) {
    console.log(`Hare Krishna ${name}`);
}

hello("Yogendra");
logMessage('Hare Krishna Hare Krishna Krishna Krishna Hare Hare\nHare Ram Hare Ram Ram Ram Hare Hare.');

import Logger from "./newlogger.js";
let logger = new Logger();
logger.on("messageLogged", (arg) => {
    console.log("Listener called", arg);
});
logger.log("Hare Krishna Hare Krishna Krishna Krishna Hare Hare\nHare Ram Hare Ram Ram Ram Hare Hare.");

