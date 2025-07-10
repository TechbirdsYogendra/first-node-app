import EventEmitter from "events";
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit("messageLogged", { message });
    }
}

export default Logger;
export const logger = new Logger();