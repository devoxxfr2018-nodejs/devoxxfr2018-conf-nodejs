export default (
`// main.js
const { fork } = require('child_process');

const forked = fork('worker.js');
forked.on('message', (msg) => {
  console.log('Message from worker', msg);
});
forked.send({ hello: 'world' });


// worker.js
process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

let counter = 0;
setInterval(() => {
    process.send({ counter: counter++ });
}, 1000);

`


);