let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 43, 55, 61, 51, 44,];

let output;

let highScore = 0;

let bestSolution = [];
// let i = 0;

// while(i < scores.length) {
//     output = `Bubbles Solution # ${i} score: ${scores[i]}`;

//     console.log(output);

//     i = i + 1;
// }

for (let i=0; i<scores.length; i++) {
    output = `Bubbles Solution # ${i} score: ${scores[i]}`;

    console.log(output);

    if (scores[i]>highScore) {
        highScore = scores[i];
    }
}

for (let i=0; i<scores.length; i++) {
    if (scores[i]==highScore) {
        bestSolution.push(scores[i]);
    }
}

console.log(`Bubbles tests: ${scores.length}`);

console.log(`Highest bubble score: ${bestSolution}`);
