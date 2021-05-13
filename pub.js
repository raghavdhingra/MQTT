const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');
const topic = 'RAGHAV';
const message = 'YOYO';

client.on('connect', () => {
  setInterval(() => {
    client.publish(topic, message);
    console.log('Message sent! ', message);
  }, 5000);
});
