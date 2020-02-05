const chai = require("chai");
const expect = chai.expect;

const RoundQueue = require("./round-linked-queue");

describe("Round-Queue", () => {
  describe("When adding elements", () => {
    it("Should add an element to the end of a non-full queue", () => {
      // Queue with max length of 3
      const nonFullQueue = new RoundQueue(3);
      const originalLength = nonFullQueue.length;

      const poppedElement = nonFullQueue.add(1);

      // When the queue is not full, no popping will be done
      expect(poppedElement).to.equal(undefined);
      // Element should've been added to the end of the queue
      expect(nonFullQueue.last()).to.equal(1);
      // Length should've been increased by 1
      expect(nonFullQueue.length).to.equal(originalLength + 1);
    });

    it("Should pop the first element and add the new element to the end of a full queue", () => {
      const fullQueue = new RoundQueue(3);

      fullQueue.add(1);
      fullQueue.add(2);
      fullQueue.add(3); // Queue is now full

      const originalLength = fullQueue.length;
      const poppedElement = fullQueue.add(4);

      // The first element should've been popped
      expect(poppedElement).equal(1);
      // The second element should've been shifted to the first position
      expect(fullQueue.first()).to.equal(2);
      // The new element should've been added to the end of the queue
      expect(fullQueue.last()).to.equal(4);
      // The length shouldn't have changed
      expect(fullQueue.length).to.equal(originalLength);
    });
  });

  describe("When removing elements", () => {
    it("Should remove the first element of a non-empty queue", () => {
      const nonEmptyQueue = new RoundQueue(3);

      nonEmptyQueue.add(1);
      nonEmptyQueue.add(2);

      const originalLength = nonEmptyQueue.length;
      const poppedElement = nonEmptyQueue.remove();

      // The first elements should've been popped
      expect(poppedElement).to.equal(1);
      // The second element should've been shifted to the first position
      expect(nonEmptyQueue.first()).to.equal(2);
      // The length should've been decreased by 1
      expect(nonEmptyQueue.length).to.equal(originalLength - 1);
    });

    it("Should throw an error on an empty queue", function() {
      const emptyQueue = new RoundQueue(3);

      expect(emptyQueue.remove).to.throw(Error);
    });
  });

  describe("When iterating", () => {
    it("Should conform to the iterable spec", () => {
      const queue = new RoundQueue(3);
      queue.add(1);
      queue.add(2);
      queue.add(3);

      const actualValues = [...queue];
      const expectedValues = [1, 2, 3];

      expect(actualValues).to.deep.equal(expectedValues);
    });
  });
});
