const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1234');
const topic = 'RAGHAV';

client.on('message', (topic, message) => {
  let msg = message.toString();
  console.log(msg);
});

client.on('connect', () => {
  client.subscribe(topic);
});
