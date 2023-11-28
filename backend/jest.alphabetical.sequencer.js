const Sequencer = require('@jest/test-sequencer').default;
const path = require('path');

class CustomSequencer extends Sequencer {
  shard(test, { shardIndex, shardCount }) {
    const shardSize = Math.ceil(test.length / shardCount);
    const shardStart = shardSize * (shardIndex - 1);
    const shardEnd = shardSize * shardIndex;

    return [...test]
      .sort((a, b) => (a.path > b.path ? 1 : -1))
      .slice(shardStart, shardEnd);
  }

  sort(test) {
    const copyTest = Array.from(tests);

    return copyTest.sort((testA, testB) =>
      path.basename(testA.path) > path.basename(testB.path) ? 1 : -1,
    );
  }
}

module.exports = CustomSequencer;
