const chai = require("chai");
const expect = chai.expect;

const RoundQueue = require("./round-linked-queue");

describe("Round-Queue", () => {
  describe("When creating an instance", () => {
    it("Should properly set the maxLength property", () => {
      const queueLength = 3;

      const queue = new RoundQueue(queueLength);

      expect(queue.maxLength).to.equal(queueLength);
    });

    it("Should initially set the length to zero", () => {
      const queueLength = 3;

      const queue = new RoundQueue(queueLength);

      expect(queue.length).to.equal(0);
    });
  });
});
