export default (startView = new Date().getTime()) => {


return `// main.js
const { fork } = require('child_process');
const worker = fork('worker.js');
worker.on('message', (msg) => {
  console.log(
    'Message from worker', 
    msg  ${masterComment()}
  ); 
});
worker.send({ hello: 'world' });


// worker.js
process.on('message', (msg) => {
  console.log(
    'Message from parent:', 
    msg  // { hello: 'world' }
  ); 
});

let counter = 0;  ${counterString()}
setInterval(() => {
  process.send(
    { counter: counter++ } ${workerComment()}
  ); 
}, 1000);
                                                  .
`;
}

let startView;

export function startSlide() {
    startView = new Date().getTime();
}

const THRESHOLD = 30000

let counter = 0;

function workerComment() {
    console.log("startView", startView)
    if ((new Date().getTime() - startView) < THRESHOLD) {
        return "";
    }
    return `// { counter: ${counter} }`
}

function counterString() {
    if ((new Date().getTime() - startView) < THRESHOLD) {
        return "";
    }
    return `// ${++counter}`
}

function masterComment() {
    if ((new Date().getTime() - startView) < THRESHOLD) {
        return "";
    }
    return `// { counter: ${counter} }`
}
