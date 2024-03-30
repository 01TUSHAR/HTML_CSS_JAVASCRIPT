Number Guessing Game - Rules and Functionality

1. Game Overview:
   - The Number Guessing Game is a web-based game where the player attempts to guess a randomly generated number within a specified range.

2. Game Elements:
   - The game consists of three containers displayed one at a time:
     a. Container 1: Start Page - Allows the player to select the game difficulty level (Easy, Medium, Hard) and start the game.
     b. Container 2: Gameplay - Displays the game interface, including chances, hints, input for guesses, and messages.
     c. Container 3: Result - Shows the result of the game, either a win or loss, and provides an option to restart.

3. Game Initialization:
   - The game starts with Container 1 displayed.
   - Player selects the difficulty level and clicks the "Play" button to initiate the game.

4. Difficulty Levels:
   a. Easy: Numbers between 1 and 50 with 10 chances.
   b. Medium: Numbers between 1 and 100 with 7 chances.
   c. Hard: Numbers between 1 and 100 with 5 chances.

5. Gameplay:
   - After selecting the difficulty level, a random target number is generated within the specified range.
   - The player inputs guesses within the allowed range and clicks "Submit" or presses Enter.
   - The game provides feedback on whether the guess is too high, too low, or correct.
   - Chances are updated, and the entered guesses are displayed.
   - The player continues guessing until they correctly identify the target number or exhaust all chances.

6. Hints:
   - The player can request a hint, which reveals whether the target number is even or odd.
   - If the target number is prime, this information is also provided.
   - Each game allows one hint, and hints are limited.

7. Game Result:
   - If the player correctly guesses the target number, a congratulatory message is displayed in Container 3.
   - If the player runs out of chances, a message indicating the loss and revealing the target number is shown in Container 3.

8. Restarting the Game:
   - The player can restart the game by clicking the "Restart" button in Container 3.
   - This resets all game parameters, allowing the player to choose a new difficulty level and start a new game.

9. Display:
   - The game uses CSS styling to present a visually appealing and responsive interface.
   - Each container is styled differently to distinguish the game phases.

10. Accessibility:
    - The game interface is designed to be user-friendly, and input validation ensures the player enters valid guesses.
