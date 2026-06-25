# 👑 Crown Wars

Welcome to **Crown Wars**! A super cool chess game built with React. If you're a beginner to Web development or let's say React development or you're someone who just wants to see how a classic game like Chess being brought to life in the browser, you're in for a treat!

This will be your friendly guide. I will walk you through exactly how this game works behind the scenes, focusing completely on the Frontend/client part (the part you see and interact with) and I will show you how to get it running on your own device(desktop/laptop).


## Before We Start

**NOTE**: There are some prerequisties you must know basic HTML, CSS and JavaScript. Use your own images/sounds or just take it from the repository itself.
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

## Game Coding Steps

### (`client/public/index.html`)

```html
<!-- HTML Boilerplate having a div tag conntaing id of root, inside the body tag --->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Crown Wars" />
    <title>Crown Wars</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

```

### (`client/src/index.js`)

```jsx
import React from 'react'; // Mandatory react header file/library
import ReactDOM from 'react-dom/client'; // Mandatory line of code for the same as above
import './App.css'; // App.js has a App.css file to give relevant styling such as widhth height in body
import App from './App'; // App is a component that has an App function to it, which gets exported in the App.js and later on used here, by importing it's properties/behaviours

const root = ReactDOM.createRoot(document.getElementById('root')); // root variable having datatype const(constant i.e., cannot be altered) containg the DOM manipulation(here we are getting that particular html element/tag having id of root)
root.render(
  <React.StrictMode>
    <App /> {/*rendering the root component*/}
  </React.StrictMode>
);

```

### (`client/src/App.js`)

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // importing router header file for navigation of react pages
import './App.css';
import Main from './pages/Main'; // importing Main page elements and behaviours
import Game from './pages/Game'; // importing game page elements and behaviours
import HowToPlay from './pages/HowToPlay'; // importing HowToPlay page elements and behaviours
import Credits from './pages/Credits'; // importing Credits page elements and behaviours
import Settings from './pages/Settings'; // importing Settings page elements and behaviours

function App() {

  return (
    <Router>
      <div className="App"> {/* This here defines that the Router is setted up for the entire App component */}

        <Routes> {/* This here defines the routes that are available to the client */}

          <Route path="/" element={<Main />} /> {/* Routes have multiple routes to it. Every route defines a path and the element to be rendered when that path is called */} {/* The element attribute is used to specify the component that should be rendered when the route is matched */}
          <Route path="/game" element={<Game />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Remember to export the React component/page/root component. Without exporting you cannot access the properties/elements of the same.

```

### (`client/src/App.css`)

```css
:root {
  --primary-color: #282c34;
  --text-color: #ffffff;
  --accent-color: #61dafb;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--primary-color);
  color: var(--text-color);
  min-width: 100vh;
}
```

### (`client/src/pages/Main.jsx`)

```jsx
import { useNavigate } from 'react-router-dom'; // useNavigate hook is a built-in feature of React Router (v6+) that returns a function allowing you to navigate programmatically within your browser. Basically navigation to a desired end-point of the URL.

function GameMenuList({menuItems, listStyle, handleMenuClick}) { // This is a GameMenuList component that we have to create in order to prevent repeated use of list in the Main component
    return (
        <ul className="game-menu-list" style={listStyle}>
            {menuItems.map((item, index) => ( // map function can be looked to as a for loop which iterates through all the elements of the list/array where item is the value and index is the position
                <li key={index} className="game-menu-item" style={{fontSize: '2.5rem', paddingBottom: '10px', cursor: 'pointer', width: 'fit-content', margin: '0 auto'}} onClick={() => handleMenuClick(item)}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

function Main() {
    const navigate = useNavigate();

    const handleMenuClick = (item) => { // A function that will handle the menu click having the particular item achieved via the iteration of list above
        if(item === "New Game") {
            navigate("/game");
        } else if(item === "How to Play") {
            navigate("/how-to-play");
        } else if(item === "Settings") {
            navigate("/settings");
        } else if(item === "Credits") {
            navigate("/credits");
        }
    };

    const menuItems = [ // The list that will be sent to the GameMenuItem Component as props
        "New Game",
        "How to Play",
        "Settings",
        "Credits"
    ];

    // CSS for the Main Component and its subcomponent (GameMenuList) in the react DOM Tree

    const listStyle = {
        listStyleType: "none",
        padding: 0,
        margin: 0,
        
    }

    const mainPageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        minHeight: '100vh',
        position: 'relative'
    };

    const colors = ['#dfc223ff', '#ceb235ff', '#ffdb0fff']
    const titleStyle = {
        position: 'absolute',
        top: 0,
        paddingTop: '40px',
        width: '100%',
        textAlign: 'center',
        fontSize: '3rem',
        background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginRight: '5px'
    };
    const bgStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/chess-board.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
        zIndex: -1
    };
    
    return(
        <div className="main-page" style={mainPageStyle}>
            <div style={bgStyle}></div>
            <div className="main-page-title" style={titleStyle}>
                <h1>Crown Wars</h1>
            </div>
            <div>
                <GameMenuList menuItems={menuItems} listStyle={listStyle} handleMenuClick={handleMenuClick}/> {/* Accessing the subcomponent */}
            </div>
        </div>
    );
}

export default Main;
```

### (`client/src/components/Button.jsx`)

```jsx
function Button({children, onClick, style}) { // We create a reusable button component here for the reuse of it in the Button elements throughout the application. 
    return(
        <button onClick={onClick} style={style}>{children}</button>
    );
}

export default Button;
```

### (`client/src/pages/Game.jsx`)

```jsx
// As discussed earlier, it is now time to use the libraries to make our game work
import { useState, useEffect } from 'react'; // useState hook tracks local component data that triggers a UI re-render upon changing, while useEffect hook manages side effects like data fetching, manual DOM updates, and subscriptions outside the normal render flow
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Game() {
    const navigate = useNavigate();
    const [game, setGame] = useState(new Chess()); // Initializes a piece of state to hold an instance of a Chess game engine
    const [playerColor, setPlayerColor] = useState(Math.random() < 0.5 ? 'white' : 'black'); // Math.random() will randomly pick colors so that we can assign the picked color to the player

    useEffect(() => {
        if (game.isGameOver() || game.isDraw()) return; // Checkmate/Stalemate condition

        function makeRandomMove() { // Fucntion to handle random moves by the computer/AI
            const possibleMoves = game.moves();
            if (possibleMoves.length === 0) return;
            const randomIndex = Math.floor(Math.random() * possibleMoves.length);
            
            const gameCopy = new Chess(game.fen()); // Creating a completely independent, duplicated clone of our current chess game state
            try {
                gameCopy.move(possibleMoves[randomIndex]);
                setGame(gameCopy);
            } catch (e) {
                console.log(e);
            }
        }

        const isAiTurn = (game.turn() === 'w' && playerColor === 'black') || (game.turn() === 'b' && playerColor === 'white');

        if (isAiTurn) {
            const timer = setTimeout(makeRandomMove, 300); // Important to add setTimeout since it will tell the computer/AI to wait for 300ms before moving a chess piece
            return () => clearTimeout(timer); // If we do not clearTimeout then the logic will break and wont let the user feel the smoothness of the game
        }
    }, [game, playerColor]);

    function makeAMove(move) {
        const gameCopy = new Chess(game.fen());
        try {
            const result = gameCopy.move(move);
            setGame(gameCopy);
            return result;
        } catch (e) {
            return null;
        }
    }

    function onDrop(sourceSquare, targetSquare) { // Function validates and executes a player's dragged chess move, returning true if successful or false if illegal or out of turn.

        if (game.turn() !== playerColor[0]) return false;

        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q',
        });

        if (move === null) return false;

        return true;
    }

    const restartGame = () => {
        setGame(new Chess());
        setPlayerColor(Math.random() < 0.5 ? 'white' : 'black');
    }

    const handleBackToMenu = () => {
        navigate('/');
    }

    const mainDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center'
    };

    const titleStyle = {
        fontSize: '3rem',
        color: '#ffdb0fff',
        marginBottom: '10px'
    };

    const btnStyle = {
        padding: '10px 20px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        marginRight: '10px',
        color: '#fff',
        border: 'none',
        borderRadius: '5px'
    }

    let gameStatus = null;
    if (game.isCheckmate()) {
        gameStatus = "Checkmate!";
    } else if (game.isDraw()) {
        gameStatus = "Draw!";
    }

    return (
        <div style={mainDivStyle}>
            <h2 style={titleStyle}>Chess Game</h2>
            <div style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>
                You are playing as: <strong>{playerColor.charAt(0).toUpperCase() + playerColor.slice(1)}</strong>
            </div>
            
            {gameStatus && (
                <div style={{ color: '#ff4444', fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>
                    {gameStatus}
                </div>
            )}

            <div style={{ width: '600px', maxWidth: '100%' }}>
                <Chessboard 
                    position={game.fen()} 
                    onPieceDrop={onDrop} 
                    boardOrientation={playerColor}
                    boardWidth={600} 
                    customDarkSquareStyle={{ backgroundColor: '#779556' }} 
                    customLightSquareStyle={{ backgroundColor: '#ebecd0' }} 
                />
            </div>
            <div style={{ marginTop: '30px' }}>
                <Button onClick={handleBackToMenu} style={{...btnStyle, backgroundColor: '#333'}} className='back-to-menu'>
                    Back to Menu
                </Button>
                <Button onClick={restartGame} style={{...btnStyle, backgroundColor: '#dfc223ff'}}>
                    Restart Game
                </Button>
            </div>
        </div>
    );
}

export default Game;

```

### (`client/src/pages/HowToPlay.jsx`)

```jsx
// I hope based on previous pages and its components coding, you can now make things of I want you to map down how things work in this simple HowToPlay Page. Comment down in the Codedex Monthly Challenge Post that I put up, regarding what you understood of it.

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const mainPageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
    position: 'relative'
};

const titleStyle = {
    fontSize: '3rem',
    color: '#ffdb0fff',
    marginBottom: '10px'
};

const bgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/chess-board.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    zIndex: -1
};

const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '40px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '90%',
    boxSizing: 'border-box',
    textAlign: 'left'
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginTop: '30px',
    backgroundColor: '#dfc223ff',
    color: '#000',
    border: 'none',
    borderRadius: '5px'
};

const sectionStyle = {
    marginBottom: '25px',
};

const headingStyle = {
    fontSize: '1.8rem',
    color: '#ffdb0fff',
    marginBottom: '15px',
    borderBottom: '2px solid #dfc223ff',
    paddingBottom: '10px'
};

const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '10px',
    color: '#e0e0e0'
};

const listStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    paddingLeft: '20px',
    color: '#e0e0e0'
};

const listItemStyle = {
    marginBottom: '8px',
    color: '#e0e0e0'
};

function ListItem({children}) {
    return(
        <li style={listItemStyle}>{children}</li>
    )
}

function ListSection({title, children}) {
    return (
        <div style={sectionStyle}>
            <h2 style={headingStyle}>{title}</h2>
            <ul style={listStyle}>
                {children}
            </ul>
        </div>
    );
}

function HowToPlay() {
    
    const navigate = useNavigate();

    const handleBackToMenu = () => {
        navigate("/");
    };

    return (
        <div className="how-to-play-main" style={mainPageStyle}>
            <div style={bgStyle}></div>
            <div className="how-to-play-content" style={contentStyle}>
                <h1 style={titleStyle}>How to Play</h1>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>The Objective</h2>
                    <p style={paragraphStyle}>
                        The objective of Chess is to checkmate your opponent's King. 
                        Checkmate occurs when the King is under immediate attack (in "check") 
                        and there is no legal move to escape the attack.
                    </p>
                </div>

                <ListSection title="Basic Rules">
                    <ListItem>
                        <strong>Setup:</strong> The board is set up with white on the right side. 
                        The King and Queen are placed on the center squares (d1 & e1 for white, d8 & e8 for black).
                    </ListItem>
                    <ListItem>
                        <strong>Turns:</strong> White always moves first. Players alternate turns, moving one piece per turn.
                    </ListItem>
                    <ListItem>
                        <strong>Movement:</strong> Each piece has its own unique way of moving. 
                        You cannot move a piece through another piece (except the Knight).
                    </ListItem>
                    <ListItem>
                        <strong>Capturing:</strong> To capture an opponent's piece, move your piece to the square occupied by the opponent's piece. 
                        The captured piece is removed from the board.
                    </ListItem>
                </ListSection>

                <ListSection title="Piece Movements">
                    <ListItem>
                        <strong>Pawn:</strong> Moves one square forward (or two on its first move). Captures diagonally forward.
                    </ListItem>
                    <ListItem>
                        <strong>Rook:</strong> Moves any number of squares horizontally or vertically.
                    </ListItem>
                    <ListItem>
                        <strong>Knight:</strong> Moves in an 'L' shape (two squares in one direction, then one square perpendicular). 
                        It is the only piece that can jump over other pieces.
                    </ListItem>
                    <ListItem>
                        <strong>Bishop:</strong> Moves any number of squares diagonally.
                    </ListItem>
                    <ListItem>
                        <strong>Queen:</strong> Combines the moves of the Rook and Bishop. 
                        Moves any number of squares horizontally, vertically, or diagonally.
                    </ListItem>
                    <ListItem>
                        <strong>King:</strong> Moves one square in any direction. 
                        It cannot move into check (a square where it can be captured).
                    </ListItem>
                </ListSection>

                <ListSection title="Special Moves">
                    <ListItem>
                        <strong>Castling:</strong> A special move involving the King and a Rook to improve king safety.
                    </ListItem>
                    <ListItem>
                        <strong>En Passant:</strong> A special pawn capture that can occur immediately after an opponent's pawn moves two squares forward.
                    </ListItem>
                    <ListItem>
                        <strong>Pawn Promotion:</strong> When a pawn reaches the opposite end of the board, it can be promoted to a Queen, Rook, Bishop, or Knight.
                    </ListItem>
                </ListSection>

                <ListSection title="Ending the Game">
                    <ListItem>
                        <strong>Checkmate:</strong> The King is in check and cannot escape. (You Win!)
                    </ListItem>
                    <ListItem>
                        <strong>Stalemate:</strong> The player whose turn it is has no legal moves, but their King is not in check. (It's a Draw!)
                    </ListItem>
                    <ListItem>
                        <strong>Draw:</strong> Can also occur by agreement, threefold repetition, or insufficient material.
                    </ListItem>
                </ListSection>

                <Button onClick={handleBackToMenu} style={buttonStyle}>
                    Back to Menu
                </Button>
            </div>
        </div>
    );
}

export default HowToPlay;
```

### (`client/src/utils/soundManager.js`)

```jsx
import { Howl } from 'howler'; // howler is a js library used for playing sounds.

export const sounds = {
  bgMusic: new Howl({
    src: ['/sounds/chessbg.mp3'],
    loop: true,
    volume: 0.2,
  })
};

```

### (`client/src/pages/Settings.jsx`)

```jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { sounds } from "../utils/soundManager"; // Import the utility we created

function Settings() {

    const navigate = useNavigate();
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    useEffect(() => {
        setIsMusicPlaying(sounds.bgMusic.playing()); // Sets to true when browser is loaded
    }, []);

    const toggleMusic = () => {
        if (isMusicPlaying) { // If explicitly the user toggles music off then the isMusicPlaying becomes false
            sounds.bgMusic.pause();
            setIsMusicPlaying(false);
        } else {
            sounds.bgMusic.play();
            setIsMusicPlaying(true);
        }
    };

    const handleBackToMenu = () => {
        navigate("/");
    }

    const mainPageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        minHeight: '100vh',
        position: 'relative'
    };

    const titleStyle = {
        fontSize: '3rem',
        color: '#ffdb0fff',
        marginBottom: '10px'
    };

    const bgStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/chess-board.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
        zIndex: -1
    };

    const contentStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
        width: '90%',
        boxSizing: 'border-box',
        textAlign: 'left'
    };

    const btnStyle = {
        padding: '10px 20px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        marginTop: '30px',
        backgroundColor: '#dfc223ff',
        color: '#000',
        border: 'none',
        borderRadius: '5px'
    };

    return(
        <div className="settings-main" style={mainPageStyle}>
            <div style={bgStyle}></div>
            <h2 style={titleStyle}>Crown Wars</h2>
            <div className="settings-box" style={contentStyle}>
                <h1>Settings</h1>
                <h3>Background Music</h3>
                <button onClick={toggleMusic} style={{...btnStyle, marginTop: '10px'}}>
                    {isMusicPlaying ? 'Turn Off Music' : 'Turn On Music'}
                </button>
            </div>
            <button onClick={handleBackToMenu} style={btnStyle}>
                Back to Menu
            </button>
        </div>
    )
}

export default Settings;
```

### (`client/src/App.js`)

```jsx
// To our previous code in App.js, we include few details regarding the utility (soundManager.js)

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Game from './pages/Game';
import HowToPlay from './pages/HowToPlay';
import Credits from './pages/Credits';
import Settings from './pages/Settings';
import { sounds } from './utils/soundManager'; // importing the utility

function App() {
  useEffect(() => { // Automatically attempts to play background music on mount and falls back to a one-time user interaction listener if browser autoplay policies block it.

    let hasInteracted = false;

    const initAudio = () => {
      if (hasInteracted) return;
      hasInteracted = true;
      
      if (!sounds.bgMusic.playing()) {
        sounds.bgMusic.play();
      }

      document.removeEventListener('click', initAudio);
      document.removeEventListener('keydown', initAudio);
    };

    if (!sounds.bgMusic.playing()) {
      sounds.bgMusic.play();
    }

    document.addEventListener('click', initAudio);
    document.addEventListener('keydown', initAudio);

    return () => {
      document.removeEventListener('click', initAudio);
      document.removeEventListener('keydown', initAudio);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game" element={<Game />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

```

### (`client/src/pages/Credits.jsx`)

```jsx
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Credits() {

    const navigate = useNavigate();

    const handleBackToMenu = () => {
        navigate("/");
    }
    const mainPageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        minHeight: '100vh',
        position: 'relative'
    };

    const titleStyle = {
        fontSize: '3rem',
        color: '#ffdb0fff',
        marginBottom: '10px'
    };

    const bgStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/chess-board.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
        zIndex: -1
    };

    const contentStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
        width: '90%',
        boxSizing: 'border-box',
        textAlign: 'left'
    };

    const btnStyle = {
        padding: '10px 20px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        marginTop: '30px',
        backgroundColor: '#dfc223ff',
        color: '#000',
        border: 'none',
        borderRadius: '5px'
    };

    return(
        <div className="credits-main" style={mainPageStyle}>
            <div style={bgStyle}></div>
            <h2 style={titleStyle}>Crown Wars</h2>
            <div style={contentStyle}>
                <h1>Credits</h1>
                <p>Made by Saransh Golash</p>
                <br></br>
                <p>Thanks to Codedex</p>
            </div>
            <Button onClick={handleBackToMenu} style={btnStyle}>
                Back to Menu
            </Button>
        </div>
    );
}

export default Credits;
```

### (`.gitignore`)

```gitignore
# We will ignore git adding server directory and its files for now since server updates will be made in near future
node_modules
package-lock.json
server
server/index.js
server/package.json
```

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