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

    it("Should add an element to the end of a non-empty queue", () => {
      const queue = new RoundQueue(3);
      const previousElement = 1;
      const elementToAdd = 2;
      // Make the queue non-empty
      queue.add(previousElement);

      queue.add(elementToAdd);

      // Element should've been added to the end of the queue
      expect(queue.last).to.equal(elementToAdd, "last not properly set");
      // But the first pointer must remain the first element added
      expect(queue.first).to.equal(previousElement, "first not properly set");
      // Length should've been increased by 2
      expect(queue.length).to.equal(2, "length not properly set");
    });
  });
});
