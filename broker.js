const mosca = require('mosca');

const settings = { post: 1234 };
const broker = new mosca.Server(settings);

broker.on('ready', () => {
  console.log('Broker is ready');
});
