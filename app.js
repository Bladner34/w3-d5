const tags = ["js", "week3"];
const scores = [10, 25, 18, 30]; 

let totalScore = 0;

for (let index = 0; index < scores.length; index++) {
    totalScore += scores[index];
    
}
console.log(totalScore); 

const doubledScores = scores.map((score)=> {
    return score * 2
});
console.log(doubledScores);