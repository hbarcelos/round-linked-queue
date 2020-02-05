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

  describe("When adding elements", () => {
    it("Should add an element to an empty queue", () => {
      const queue = new RoundQueue(3);
      const originalLength = queue.length;
      const elementToAdd = 1;

      queue.add(elementToAdd);

      // Element should've been added to the end of the queue
      expect(queue.last).to.equal(elementToAdd);
      // But since it is now the only element, it should also be the at beginning as well
      expect(queue.first).to.equal(elementToAdd);
      // Length should've been increased by 1
      expect(queue.length).to.equal(originalLength + 1);
    });
  });
});
