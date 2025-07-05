import { Tree } from "./tree.js";

function getRandomNumbers(count, max) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(Math.floor(Math.random() * max));
  }
  return randomNumbers;
}

const randomNumbers = getRandomNumbers(15, 100);
const bst = Tree(randomNumbers);

console.log("Initial random numbers:", randomNumbers);
console.log("\nInitial tree:");
bst.prettyPrint();

console.log("\nIs Balanced:", bst.isBalanced());

console.log("\nLevel Order:");
bst.levelOrder((node) => console.log(node.data));
console.log("\nPre Order:");
bst.preOrder((node) => console.log(node.data));
console.log("\nIn Order:");
bst.inOrder((node) => console.log(node.data));
console.log("\nPost Order:");
bst.postOrder((node) => console.log(node.data));

const unbalanceNumbers = [101, 105, 110, 115, 120];
unbalanceNumbers.forEach((num) => bst.insert(num));

console.log("\nAfter adding numbers > 100 to unbalance the tree:");
bst.prettyPrint();

console.log("\nIs Balanced after unbalancing:", bst.isBalanced());

bst.rebalance();

console.log("\nAfter rebalance:");
console.log("Is Balanced:", bst.isBalanced());

console.log("\nLevel Order after rebalance:");
bst.levelOrder((node) => console.log(node.data));
console.log("\nPre Order after rebalance:");
bst.preOrder((node) => console.log(node.data));
console.log("\nIn Order after rebalance:");
bst.inOrder((node) => console.log(node.data));
console.log("\nPost Order after rebalance:");
bst.postOrder((node) => console.log(node.data));
