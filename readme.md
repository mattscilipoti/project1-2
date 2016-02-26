# Overview

For this project, I chose to do create a trivia game. I had in mind meeting our project deliverables and keeping the code very simple. I also considered the flow of the game from the point of view of the user and wanted to create a fun game.

The gameplay rules are simple (and I added a "Rules" page to outline them): there is only one category, right now: Science Fiction. The player will be asked 4 questions. Two incorrect answers lose the game, while three correct answers win it.

Visually, I created a "Start" button that the user clicks to begin the game. A popup appears to welcome the player to the game. It was my intention to have the Science Fiction category be hidden until the popup is closed. I am still working on that.
The game then takes the player through a series of popup prompts that tracks their answers. The game ends with an announcement based on winning or losing.

I wanted to use concepts that were within a technological scope I could visualize readily.  I made use of javascript objects and methods, event handlers and selectors, and several conditional if/else statements for the trivia questions.  I also separated the categories into div containers so I can access them as panels on the main page in future iterations.  I would like to hide the category divs until the player is ready to start the game and presses the "Start" button.

User Stories:

I considered how, as a user, I would want to have the ability to click and enter text in the game.  I also considered having the ability to see the page change dynamically (elements that are hidden showing up when I click).  Another important user experience is the ability to make choices about how the game will proceed (choosing the question category, for example).  I wanted to make sure the user understands the rules well and created a separate Rules page.  The overall aesthetic of the page is important, so I gave the pages some very basic color schemes.

Issues:
I want to put question bank answers into an array to make them easier to access for counting correct/incorrect answers

Look into how to hide and show div in the page so game can all be on same page
