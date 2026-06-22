# 👑 Crown Wars

Welcome to **Crown Wars**! A super cool chess game built with React. If you're a beginner to Web development or let's say React development or you're someone who just wants to see how a classic game like Chess being brought to life in the browser, you're in for a treat!

This will be your friendly guide. I will walk you through exactly how this game works behind the scenes, focusing completely on the Frontend/client part (the part you see and interact with) and I will show you how to get it running on your own device(desktop/laptop).


## Before We Start

**NOTE**: There are some prerequisties you must know basic HTML, CSS and JavaScript.
---

## 🛠️ What We Will Use (The Tech Stack)

To build a chess game from scratch, you normally would have to write thousands of lines of code in you IDE just to teach the computer how a chess piece moves! Instead, I will show you how to use some awesome open-source tools to do the heavy lifting for you:

1. **React**: The main framework. It helps us build the user interface using reusable pieces of code called <ins>components</ins>. Alright so what do you mean by "reusable pieces"? Well it means that a block of code/ certain lines of code that we can reuse using a function. We simply call that particular function and boom we get the working/behaviour/output of that particular function. This improves the readability and maintainability of the code, making it easier to debug, update, and scale the application. Most importantly saves a lot of time as we don't have to write the same lines over and over again. 
2. **react-chessboard**: This is a a ready-made, interactive chess board component for React. Yes, you thought of it correctly, it a react library. It handles drawing the squares, the pieces, and letting you drag and drop them.
3. **chess.js**: This is a javascript library that you can say is the "brains" of the game, handling all the rules, logic and validation of a game of chess. It is more like a control center or the referee of the game.
4. **react-router-dom**: This lets us have different pages (like the Main Menu, Game, How to Play, etc.) without having to reload the browser.
5. **howler**: A javascript library for playing sounds (like background music) across different web browsers.

---

## 🧩 How It Works Behind The Scenes/ How It Looks From A Developer's Perspective

Let's imagine you're currently in the main directory, containing the client sub directory. Ok so a directory is nothing but a folder that contains sub-folders or files. Inside the main directory, there is a `client/` sub-directory. Here is how the magic happens:

### 1. The Entry Point (`src/App.js`)
This is where everything starts. It sets up the **Router** (which decides what page to show) and handles the background music so you get that locked in feeling as soon as you click the page.

### 2. The Pages (`src/pages/`)
Instead of putting all our code in one giant file, we split it up into different "pages":
- **`Main.jsx`**: Your classic Main Menu. This is the landing page of the website when the client is run (https://localhost/3000)
- **`HowToPlay.jsx`**: A rulebook page explaining how chess pieces move. This is very important specially for the young generation who are unaware of how a game of chess is played.
- **`Game.jsx`**: This is where the actual game happens. Here we are going to use our react and javascript libraries to create a responsive and functional chess board where a user can play against the computer.

### 3. The Game Logic (`Game.jsx` deep dive)
How do we actually play against the computer?
- When you open the Game page, we create a new `Chess` game using `chess.js`.
- We assign you a random color (White or Black).
- We use the `Chessboard` component to display the board.
- **When you move a piece:** The `Chessboard` tells our code, "Hey, the player dragged a piece here!" Our code asks `chess.js`, "Is this a legal move?" If yes, then the piece moves. If no, then it snaps back.
- **The "Computer" Opponent:** Right now, the computer opponent is simple but chaotic! When it's the computer's turn, it asks `chess.js` for a list of *all possible legal moves*, picks one completely at random, and plays it.

---

## 🚀 How to Run the Game Locally

Want to run this on your own computer? It's super easy! Just follow these steps. 

*(Note: You'll need to have [Node.js](https://nodejs.org/) installed on your computer first!)*

### Step 1: Install Dependencies (Not to be confused with client folder, this is for the further updates of the game when server is added to it to make a user play against AI with buffs available for both)
First, we need to download all those awesome tools (`react-chessboard`, `chess.js`, etc.) we talked about earlier. 

Open your terminal, make sure you are in the main project folder (where this README is), and run:
```bash
npm install
```
*(This might take a minute as it downloads everything from the internet into a folder called `node_modules`)*

### Step 2: Start the Client

Run this command:
```bash
npm start -w client
```
*(The `-w client` part stands for "workspace client". It tells npm to go into the `client` folder and run the start script there)*

### Step 3: Play!
Your browser should automatically open up to `http://localhost:3000`. If it doesn't, just type that into your address bar. You're now ready to play Crown Wars.

---

### Happy Coding! 🎮
I feel building games in the browser is a fantastic way to level up your React skills. Feel free to explore the code, change the board colors, or even try making the computer opponent smarter. I would be delighted to see you build this game from scratch itself based on the tutorials I have attached.