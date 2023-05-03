console.log('THIS IS THE NEW VERSION');
console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

// 2. Make a new empty array called myScrabbleTiles.
// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
let myScrabbleTiles = [];

console.log(myScrabbleTiles);

myScrabbleTiles.push(
  {tile: 'N', score: 1},
  {tile: 'K', score: 5},
  {tile: 'Z', score: 10},
  {tile: 'X', score: 8},
  {tile: 'D', score: 2},
  {tile: 'A', score: 1}
  );

  console.log('Expect initial SIX object tiles:', myScrabbleTiles);

  // 4. Remove the last tile from myScrabbleTiles.
myScrabbleTiles.pop();

console.log('Expect deletion of last object tile:', myScrabbleTiles);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/

myScrabbleTiles.push({tile: 'F', score: 4});

console.log('Expect addition of new object tile:', myScrabbleTiles);

console.log('------------------------------------------------------------');

/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/
console.log('THIS IS THE OLD VERSION');
console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

let myPrabbleTiles = [];

console.log(myPrabbleTiles);
// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
const tileN = {
  tile: 'N',
  score: 1
};
const tileK = {
  tile: 'K',
  score: 5
};
const tileZ = {
  tile: 'Z',
  score: 10
};
const tileX = {
  tile: 'X',
  score: 8
};
const tileD = {
  tile: 'D',
  score: 2
};
const tileA = {
  tile: 'A',
  score: 1
};
// ^THERE IS DEFINITELY A MORE CONCISE WAY TO DO THIS, BUT I'M JUST SPITBALLIN'
myPrabbleTiles.push(tileN, tileK, tileZ, tileX, tileD, tileA);
console.log('Expect initial SIX object tiles:', myPrabbleTiles);

// 4. Remove the last tile from myScrabbleTiles.
myPrabbleTiles.pop();
console.log('Expect deletion of last object tile:', myPrabbleTiles);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
const tileF = {
  title: 'F',
  score: 4
};
myPrabbleTiles.push(tileF);
console.log('Expect addition of new object tile:', myPrabbleTiles);

// console.log('Step 0 complete! client.js loaded!');

// let myScrabbleTiles = [];

// console.log(myScrabbleTiles);

// myScrabbleTiles.push(
//   {tile: 'N', score: 1},
//   {tile: 'K', score: 5},
//   {tile: 'Z', score: 10},
//   {tile: 'X', score: 8},
//   {tile: 'D', score: 2},
//   {tile: 'A', score: 1}
//   );

// console.log('Expect initial SIX object tiles:', myScrabbleTiles);

// myScrabbleTiles.pop();

// console.log('Expect deletion of last object tile:', myScrabbleTiles);

// myScrabbleTiles.push({tile: 'F', score: 4});

// console.log('Expect addition of new object tile:', myScrabbleTiles);

// -------------------------------------------------------------------------

// console.log('Step 0 complete! client.js loaded!');

// let myPrabbleTiles = [];

// console.log(myPrabbleTiles);

// const tileN = {
//   tile: 'N',
//   score: 1
// };
// const tileK = {
//   tile: 'K',
//   score: 5
// };
// const tileZ = {
//   tile: 'Z',
//   score: 10
// };
// const tileX = {
//   tile: 'X',
//   score: 8
// };
// const tileD = {
//   tile: 'D',
//   score: 2
// };
// const tileA = {
//   tile: 'A',
//   score: 1
// };

// myPrabbleTiles.push(tileN, tileK, tileZ, tileX, tileD, tileA);

// console.log('Expect initial SIX object tiles:', myPrabbleTiles);

// myPrabbleTiles.pop();

// console.log('Expect deletion of last object tile:', myPrabbleTiles);

// const tileF = {
//   title: 'F',
//   score: 4
// };

// myPrabbleTiles.push(tileF);

// console.log('Expect addition of new object tile:', myPrabbleTiles);