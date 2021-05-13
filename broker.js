const mosca = require('mosca');

const settings = { port: 1883 };
const broker = new mosca.Server();

broker.on('ready', () => {
  console.log('Broker is ready');
});

broker.on('published', (packet) => {
  console.log(packet.payload.toString());
});
