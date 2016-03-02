//Guess What?! Trivia Game
console.log("Script is running.");

//add 3 question bank categories (use div containers)
//write 5 questions per category
//allow player to choose category at the end of each loop
  //function chooseCategory();
//player wins after answering 5 correct questions in a row
  //keep track of correct answers (see hangman solution)
//player loses after answering 3 questions incorrectly
  //keep track of incorrect answers
  //add warning when reach 2 incorrect???
//incorportate user stories
//add in STOP functionality
//styling on separate css sheet
  //background color is orange...


/********************

### Technical Requirements

Your app must:

* **Render in the browser**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Javascript or jQuery** for **DOM manipulation**
* **Deploy online**, using [Github **Project** pages](https://pages.github.com).
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables

* A **hosted copy of your game or app, built by you**, hosted on Github Pages
  * Your HTML/CSS should pass the [HTML5 Validator](https://html5.validator.nu) and [CSS Validator](https://jigsaw.w3.org/css-validator/)
* A **git repository hosted on Github** with frequent commits dating back to the very beginning of the project
  * A **link to your hosted project** in the URL section of your Github repo
  * **A ``readme.md`` file**, including
    * Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
    * At least 5 [user stories](https://github.com/ga-dc/curriculum/tree/master/02-intermediate-front-end/process-stories-wireframes).

********************/

//********************************
//Should add STOP functionality...
//********************************
window.onload=function()
//program would not load without this global function...why??? (lots of hair pulling)
  {
    var button = document.querySelector("button");
    button.addEventListener("click", startGame);
    function startGame()
      {
        alert("Welcome to Guess What?!");
        chooseCategory();
      }
  };
//********************************
//Player must choose which category s/he will play: Animals, Art, History, Science or Science Fiction.
function chooseCategory()
  {
    // mms: were you expecting to retrieve an element with the class of "scifi"?  I don't see one in your html and neither did this javascript.
    var scifiCategory = document.querySelector(".scifi");
    scifiCategory.addEventListener("click", startGameSciFi);
  }
    // mms: invalid function syntax, you needed the opening curly brace before the comments.  I recommend using this format.
    function startGameSciFi(){
      //keep track of correct and incorrect answers!
      //two wrong loses
      //three correct wins

        //Dune

        // mms: how can we display this on a web page, using forms and inputs, rather than a prompt.
        var Q1 = prompt("What is the name given to the planet that would later be known informally as 'Dune'? (Caladan, Arrakis or Geidi Prime)");
           if (Q1 === "Arrakis")
            {
              alert("Correct!");
              //move to next question
            }
           else
            {
              alert("Incorrect");
            //next question
           }
          // }
        // mms: commenting out the rest, so I could have something to test.
        //2010
        // var Q2 = prompt("On which of Jupiter's moons is landing forbidden? (Ganymede, Io or Europa)")
        //    if (Q2 === "Europa")
        //     {
        //       alert("Correct!");
        //       //move to next question
        //     }
        //    else
        //     {
        //       alert("Incorrect");
        //     //next question
        //    }
        //   }
        //DTESS
        // var Q3 = prompt("What is the phrase character Helen Benson tells Gort to stop him from destroying Earth?" /n/n("Klaatu barada nikto", "Stop, Gort!" or "Humans will evolve"));
        //    if (Q3 === "Klaatu barada nikto")
        //     {
        //       alert("Correct!");
        //       //move to next question
        //     }
        //    else
        //     {
        //       alert("Incorrect");
        //     //next question
        //    }
        //   }
        //BvS
        // var Q4 = prompt("Who will win in a fight to the death?" ("Batman", "Superman" or "Who cares?"));
        //      if (typeof Q3 = "string")
        //       {
        //         alert("Correct!");
        //         //final score
        //       }
        //      else
        //       {
        //         alert("Incorrect");
        //       //final score
        //     }
        //   }

      /*if (choice === "A")
        {
          //function to pass Animal questions
          animals();
        }
/*      else if (choice === "SF")
          {
            //function to pass scifi questions
            scifi();
          }
        else if (choice === "H")
          {
            //function to pass History questions
            history();
          }
        else if (choice === "SF")
          {
            //function to pass Science Fiction questions
            animals();
          }
        else
          {
            //wrong entry; go back to choosing catergory
            chooseCategory();
          }
*/
  }

//****************************************
/*function animals()
  {
    var answers = [1,2,3];
      if (i[0])
        {
          //add click event here to denote user has chosen an answer
        }
      else if (i[1])
        {
          //write code here about what to do if there is a wrong answer
        }
  }
/*
//****************************************
function history()
  {
    var answers = [1,2,3]
      {

      }
    else if
      {
        //write code here about what to do if there is a wrong answer
      }
  }
//****************************************
function startGameSciFi()
  {
    var answers = [1,2,3]
      {

      }
    else if
      {
        //write code here about what to do if there is a wrong answer
      }
  }
*/
