import EventEmitter from "events";

// Create an eventEmitter object
const eventEmitter = new EventEmitter();

// Define an event handler
const myEventHandler = () => {
  console.log("An event has occured!.");
};

// Assign the event handler to an event
eventEmitter.on("event", myEventHandler);

// Emit the event
eventEmitter.emit("event");

// Event handler with param
const sayHareKrishna = (name) => {
  console.log(`Hare Krishna dear ${name}.`);
};

// Assign Event Handler to Event
eventEmitter.on("sayHareKrishna", sayHareKrishna);

// Emit the event with arguments
eventEmitter.emit('sayHareKrishna', 'Devansh');
eventEmitter.emit('sayHareKrishna', 'Trishika');

const oneTimeEvent = 'oneTimeEvent'
const persistentEvent = 'persistentEvent'
const oneTimeHandler = () => {
    console.log('This will be logged only once');
};


// Assign a one-time event handler
eventEmitter.once(oneTimeEvent, oneTimeHandler);

// Emit the event twice
eventEmitter.emit(oneTimeEvent);
eventEmitter.emit(oneTimeEvent); // This will not trigger the handler

const persistentHandler = () => {
    console.log('This will be logged every time the event is emitted');
};

// Assign a persistent event handler
eventEmitter.on(persistentEvent, persistentHandler);

// Emit the event twice
eventEmitter.emit(persistentEvent);
eventEmitter.emit(persistentEvent);

// Remove the persistent event handler
eventEmitter.removeListener(persistentEvent, persistentHandler);

// Emit the event again
eventEmitter.emit(persistentEvent); // This will not trigger the handler

