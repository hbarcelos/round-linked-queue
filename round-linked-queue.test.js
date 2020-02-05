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

    it("Should remove the first element and add the new element to the end of a full queue", () => {
      const queue = new RoundQueue(3);
      queue.add(1);
      queue.add(2);
      queue.add(3);

      queue.add(4);

      // Element should've been added to the end of the queue
      expect(queue.last).to.equal(4, "last not properly set");
      // The second element should've been shifted to the first position
      expect(queue.first).to.equal(2, "first not properly set");
      // Length should still be the same
      expect(queue.length).to.equal(3, "length not properly set");
    });

    it("Should return the removed element from a full queue", () => {
      const queue = new RoundQueue(3);
      queue.add(1);
      queue.add(2);
      queue.add(3);

      const result = queue.add(4);

      expect(result).to.equal(1, "removed wrong element");
    });

    it("Should return undefined when the queue is not full", () => {
      const queue = new RoundQueue(3);

      const result = queue.add(1);

      expect(result).to.equal(undefined, "should not return an element");
    });
  });

  describe("When removing elements", () => {
    it("Should remove the first element of a non-empty queue", () => {
      const queue = new RoundQueue(3);
      queue.add(1);
      queue.add(2);
      queue.add(3);
      const lengthBefore = queue.length;

      const result = queue.remove();

      const lengthAfter = queue.length;

      expect(lengthAfter).to.equal(lengthBefore - 1, "length should decrease by 1");
      expect(result).to.equal(1, "first element should the one being removed");
      expect(queue.first).to.equal(2, "should shift the second element to the head of the queue");
      expect(queue.last).to.equal(3, "should not change the last element");
    });

    it("Should throw an error when the queue is empty", () => {
      const queue = new RoundQueue(3);

      expect(() => queue.remove()).to.throw("Cannot remove element from an empty queue");
    });
  });

  describe("When accessing elements", () => {
    it("Should throw a proper error when acessing the first element of an empty queue", () => {
      const queue = new RoundQueue(3);

      expect(() => queue.first).to.throw("Cannot access the first element of an empty queue");
    });
  });
});
