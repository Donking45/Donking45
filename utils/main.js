const MerkleTree = require('./MerkleTree'); // Import your MerkleTree implementation
const niceList = require('./niceList'); // Import your nice list data

// Create a Merkle Tree with the nice list data
const merkleTree = new MerkleTree(niceList);

// Calculate the Merkle Root
const merkleRoot = merkleTree.getRoot();
console.log('Merkle Root:', merkleRoot);
