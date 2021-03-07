GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question

-Displaying data to the page based on a timer: (../../01-Activities/10-Stu_Timers-Intervals)[10-Stu_Timers-Intervals]
-Button events triggering a function: (../../01-Activities/12-Stu_Event-Listener)[12-Stu_Event-Listener]

WHEN I answer a question
THEN I am presented with another question

-Button events triggering a function: (../../01-Activities/12-Stu_Event-Listener)[12-Stu_Event-Listener]

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

-Javascript timers: (https://www.w3schools.com/js/js_timing.asp)[JS timers explained]

WHEN all questions are answered or the timer reaches 0
THEN the game is over

-Javascript timers: (https://www.w3schools.com/js/js_timing.asp)[JS timers explained]

WHEN the game is over
THEN I can save my initials and my score

Saving a high score that persists: (../../01-Activities/24-Stu_Local-Storage-Objects)24-Stu_Local-Storage-Objects]
