const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const MerkleTree = require('./MerkleTree');

  // Create a Merkle Tree with some example leaves
  const leaves = ["Jean Crona","Gerald McGlynn","Eula Dietrich","Kristie Zieme","Dave Medhurst"];
  const merkleTree = new MerkleTree(leaves);

  // Get the Merkle Root
  const MerkleRoot = merkleTree.getRoot();
  console.log('Merkle Root:', MerkleRoot);

  // Get a Merkle proof for a specific element (e.g., 'Bob' at index 1)
  const elementIndex = 5;
  const proof = merkleTree.getProof(elementIndex);
  console.log('Merkle Proof for Dave Medhurst:', proof);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    nameHash,
  });

  console.log({ gift });
}

main();