const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on("birthDay", birthdayEventListener);

// TODO 4
myEmitter.emit("birthDay", "Ridho");
