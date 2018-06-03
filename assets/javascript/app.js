//Questions and Answers
var Questions = {
    GameQuestions: ["What is the name of the direwolf belonging to Jon Snow", "What does the Hound fear", "How many dragons does Danerys own", "Who guards The Wall",
        "Who is the brother of Jamie Lannister", "Who eventually gets trained by one of the faceless", "What is the name of the house who oversees the northern lands",
        "What kind of business does Peter Baelish run", "What is the name of the Red Priestess with Stannis", "What is the name for bastards in the land of Dorne"],
    CorrectAnswers: ["Ghost", 'Fire', '3', "The Night's Watch", "Tyrion", "Arya Stark", "The Starks", "Brothel Owner", "Melisandre", "Sand"],
    IncorrectAnswers: {
        Question0: ["Lady",'Shaggydog','Nymeria'],
        Question1: ['Ice','His Brother','Sharp Objects'],
        Question2: ['2','4',"Dragons aren't real"],
        Question3: ['Stannis Baratheon','House Tully','Wildlings'],
        Question4: ['Tywin','Joffery','Jerry Gergich'],
        Question5: ['Davos Seaworth','Brandon Stark','Reek'],
        Question6: ['The Lannisters', 'The Greyjoys', 'The Clauses'],
        Question7: ['Mercenaries for hire','Slave Trader','Vendor of oysters, clams, and cockles'],
        Question8: ['Missandei', 'Shae', 'Alexa'],
        Question9: ['Ash','Grass','Trash']    
    }
}
var TimeLeft = 20;

//Start Screen Function

//Question Selection


$('#QuestionChoice').text(Questions.GameQuestions[0]);
$('.1').text(Questions.IncorrectAnswers.Question0[1]);
$('.2').text(Questions.IncorrectAnswers.Question0[2]);
$('.3').text(Questions.CorrectAnswers[0]);
$('.4').text(Questions.IncorrectAnswers.Question0[0]);


//Click function selecting answers

function PlayerChoice() {

    $('.AnswerChoices').on('click', function() {
        
        //Correct Answer
        
        //Wrong Answer

    });
}

//Countdown Timer
function Timer(){

$("#Timer").append(TimeLeft);
if (TimeLeft > 0) {
    TimeLeft--;
    Timer();
    } else {
    //Time is up screen (3 second delay until next question)
    }
}

//Reset function
function Reset() {

}

//Scores
var Correct = 0;
var Wrong = 0;
var Unanswered = 0;

