import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { useNavigate } from 'react-router-dom';

function Game() {
    const navigate = useNavigate();
    const [game, setGame] = useState(new Chess());
    const [playerColor, setPlayerColor] = useState(Math.random() < 0.5 ? 'white' : 'black');

    useEffect(() => {
        if (game.isGameOver() || game.isDraw()) return;

        function makeRandomMove() {
            const possibleMoves = game.moves();
            if (possibleMoves.length === 0) return;
            const randomIndex = Math.floor(Math.random() * possibleMoves.length);
            
            const gameCopy = new Chess(game.fen());
            try {
                gameCopy.move(possibleMoves[randomIndex]);
                setGame(gameCopy);
            } catch (e) {
                console.log(e);
            }
        }

        const isAiTurn = (game.turn() === 'w' && playerColor === 'black') || (game.turn() === 'b' && playerColor === 'white');

        if (isAiTurn) {
            const timer = setTimeout(makeRandomMove, 300);
            return () => clearTimeout(timer);
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

    function onDrop(sourceSquare, targetSquare) {
        if (game.turn() !== playerColor[0]) return false;

        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q',
        });

        if (move === null) return false;

        return true;
    }

    function restartGame() {
        setGame(new Chess());
        setPlayerColor(Math.random() < 0.5 ? 'white' : 'black');
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

    return (
        <div style={mainDivStyle}>
            <h2 style={titleStyle}>Chess Game</h2>
            <div style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>
                You are playing as: <strong>{playerColor.charAt(0).toUpperCase() + playerColor.slice(1)}</strong>
            </div>
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
                <button onClick={() => navigate('/')} style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer', marginRight: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>
                    Back to Menu
                </button>
                <button onClick={restartGame} style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer', backgroundColor: '#dfc223ff', color: '#000', border: 'none', borderRadius: '5px' }}>
                    Restart Game
                </button>
            </div>
        </div>
    );
}

export default Game;
