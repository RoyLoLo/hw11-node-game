var inquirer = require("inquirer");
var Card = require("./BasicConstructor.js");
var cCard = require("./ClozeConstructor.js");
var cqArr = [];
var qArr = [];
var count = 0;
//(((((((((((((((((((((((((((building basic cards)))))))))))))))))))))))))))
function newCard(front,back){
  var q = new Card(front,back);
    qArr.push(q);
};

var q1 = newCard("Who won the 2018 NBA Finals?","The Warriors");
var q2 = newCard("Who won the 2017 NBA Finals?","The Warriors");
var q3 = newCard("Who won the 2016 NBA Finals?","The Cavs");
var q4 = newCard("Who won the 2015 NBA Finals?","The Warriors");
var q5 = newCard("Who won the 2014 NBA Finals?","The Spurs");
var q6 = newCard("Who won the 2013 NBA Finals?","The Heat");
var q7 = newCard("Who won the 2012 NBA Finals?","The Heat");
var q8 = newCard("Who won the 2011 NBA Finals?","The Mavericks");
var q9 = newCard("Who won the 2010 NBA Finals?","The Lakers");
var q10 = newCard("Who won the 2009 NBA Finals?","The Lakers");
//((((((((((((((((((((((((((((building cloze cards))))))))))))))))))))))))))))
function newcCard(text,cloze){
  var cq = new cCard(text,cloze)
  cqArr.push(cq);
}
var cq1 = newcCard("Michael Jordan led the Chicago Bulls to 6 Championships in the mid to late '90s.","Michael Jordan");
var cq2 = newcCard("Kareem Abdul Jabbar is formerly know as Lew Alcindor","Kareem Abdul Jabbar");
var cq3 = newcCard("Considered the greatest game ever, Ervin 'Magic' Johnson, a natural Point Guard, won an NBA Title Playing Center","Ervin 'Magic' Johnson");
var cq4 = newcCard("Kareem Abdul Jabbar won a record 6 NBA regular season MVP titles.","Kareem Abdul Jabbar");
var cq5 = newcCard("The Los Angeles Lakers appeared in a record 58 times.","Los Angeles Lakers");
var cq6 = newcCard("Kobe Bryant was Drafted by the Charlotte Hornets before being traded to the Los Angeles Lakers","Kobe Bryant");
var cq7 = newcCard("Wilt Chamberlain Scored the most points in a single game, 100points","Wilt Chamberlain");
var cq8 = newcCard("Jerry West in the Sihlouette of the NBA logo","Jerry Wesst");
var cq9 = newcCard("Paul George will be the starting two guard for the Los Angeles Lakers in 2018-2019","Paul George");
var cq10 = newcCard("LeBron James will be the starting small forward for the Los Angeles Lakers in 2018-2019","LeBron James");
//((((((((((((((((((((((((((((basic game function))))))))))))))))))))))))))))
function display(){
  if (count <qArr.length){
  inquirer.prompt([
    {
      type : "input",
      name : "response",
      message : qArr[count].front
    }
  ]).then(function(answer){
    if (answer.response.toLowerCase() === qArr[count].back.toLowerCase()){
        console.log(`\nYou Are Correct\nYour Answer: ${answer.response}\nThe Correct Anserer: ${qArr[count].back}`)
      }
      else{
        console.log(`\nYou Are Wrong\nYour Answer: ${answer.response}\nThe Correct Anserer: ${qArr[count].back}`)
      }
      count++;
      display();
  })
}//end of if conditional
}//end of function
//(((((((((((((((((((((((((((cloze game function)))))))))))))))))))))))))))
function displayc(){
  if (count <cqArr.length){
    inquirer.prompt([
      {
        type : "input",
        name : "response",
        message : cqArr[count].partial
      }
    ]).then(function(answer){
      if (answer.response.toLowerCase() === cqArr[count].partial){
        console.log(`You got it Right!`);
      }//end if
      else{
        console.log(`You got it wrong, the correct answer is: ${cqArr[count].cloze}`)
      }//end else
      count++
      displayc();
    })
  }//end if counter loop
}//displayc function end
//((((((((((((((((((((((((((Flash Card Game Start))))))))))))))))))))))))))
inquirer.prompt([
  {
    type : "list",
    name : "game",
    message : "Which game would you like to play?",
  choices : ["Basic Flash Card Game","Cloze Flash Card Game"/*,"Combo of Both"*/]
  }
]).then(function(answer){
  switch(answer.game){
  
    case "Basic Flash Card Game" : 
  display();
  break;

  case "Cloze Flash Card Game" :
  displayc();
  break;
  /*
  case "Combo of Both" :
  displayb();
  break;
    */
  };//end switch
});//end inquirer then






