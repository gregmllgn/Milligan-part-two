let userName = prompt("Welcome to GC mini golf! What is your name");
let roundCount = prompt("Hi "+ userName +", Would you like to play 3 or 6 holes today?");
let total = 0;

for (let i = 1; i <= roundCount; i++ ) {
    totalPutts = Number(prompt("How many putts for hole " + i + "? (par is 3)"));
    total += totalPutts;
    console.log(total);   
}

  if (total ==9 && roundCount == 3) {
    console.log("Good game, " + userName + ". Your total par was: 0"); 
  
} else if (total > 9 && roundCount == 3) {
    console.log("Nice try, " + userName + ". Your total par was +" + (total-9) +"." );
} else if (total < 9 && roundCount == 3) {
    console.log("Great Job, "+ userName + ". Your total par was -"+ (9-total) + ".");
} else if (total ==18 && roundCount == 6) {
    console.log("Good game, " + userName + ". Your total par was: 0");   
} else if (total > 18 && roundCount == 6) {
    console.log("Nice try, " + userName + ". Your total par was +" + (total-18) +"." );
} else if (total < 18 && roundCount == 6) {
    console.log("Great Job, "+ userName + ". Your total par was -"+ (18-total) + ".");
}