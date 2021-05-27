const { Producer, KafkaClient, Consumer } = require("kafka-node");

const client = new KafkaClient({
  kafkaHost: "192.168.178.109:9092",
  //  sasl: { mechanism: "plain", username: "user", password: "pWty0z4ip9k4" },
});

const options = {
  // Configuration for when to consider a message as acknowledged, default 1
  requireAcks: 1,
  // The amount of time in milliseconds to wait for all acks before considered, default 100ms
  ackTimeoutMs: 100,
  // Partitioner type (default = 0, random = 1, cyclic = 2, keyed = 3, custom = 4), default 0
  partitionerType: 2,
};

const producer = new Producer(client, options);

const payloads = [{ topic: "test", messages: ["Hello"] }];

producer.on("ready", function () {
  console.log("Ready.");
  client.refreshMetadata(["test"], (err, res) => {
    //    console.log(res);
  });
  producer.send(payloads, function (err, data) {
    console.log(err);
    console.log(data);
  });
});

producer.on("error", function (err) {
  console.log(err);
});

var topicsToCreate = [
  {
    topic: "topic1",
    partitions: 1,
    replicationFactor: 1,
  },
];

client.createTopics(topicsToCreate, (error, result) => {
  // result is an array of any errors if a given topic could not be created
  console.log(error);
  console.log(result);
});

const consClient = new KafkaClient({
  kafkaHost: "192.168.178.109:9092",
  //  sasl: { mechanism: "plain", username: "user", password: "pWty0z4ip9k4" },
});

const consumer = new Consumer(consClient, [{ topic: "test", partition: 0 }]);

consumer.on("message", function (message) {
  console.log(message);
});

consumer.on("error", function (err) {
  console.log(err);
});
