import { useNavigate } from "react-router-dom";

function ListItem({children, listItemStyle}) {
    return(
        <li style={listItemStyle}>{children}</li>
    )
}

function HowToPlay() {
    const navigate = useNavigate();

    const handleBackToMenu = () => {
        navigate("/");
    };

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
        backgroundImage: 'url("/chess-board.png")',
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

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Basic Rules</h2>
                    <ul style={listStyle}>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Setup:</strong> The board is set up with white on the right side. 
                            The King and Queen are placed on the center squares (d1 & e1 for white, d8 & e8 for black).
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Turns:</strong> White always moves first. Players alternate turns, moving one piece per turn.
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Movement:</strong> Each piece has its own unique way of moving. 
                            You cannot move a piece through another piece (except the Knight).
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Capturing:</strong> To capture an opponent's piece, move your piece to the square occupied by the opponent's piece. 
                            The captured piece is removed from the board.
                        </ListItem>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Piece Movements</h2>
                    <ul style={listStyle}>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Pawn:</strong> Moves one square forward (or two on its first move). Captures diagonally forward.
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Rook:</strong> Moves any number of squares horizontally or vertically.
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Knight:</strong> Moves in an 'L' shape (two squares in one direction, then one square perpendicular). 
                            It is the only piece that can jump over other pieces.
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Bishop:</strong> Moves any number of squares diagonally.
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Queen:</strong> Combines the moves of the Rook and Bishop. 
                            Moves any number of squares horizontally, vertically, or diagonally.
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>King:</strong> Moves one square in any direction. 
                            It cannot move into check (a square where it can be captured).
                        </ListItem>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Special Moves</h2>
                    <ul style={listStyle}>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Castling:</strong> A special move involving the King and a Rook to improve king safety.
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>En Passant:</strong> A special pawn capture that can occur immediately after an opponent's pawn moves two squares forward.
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Pawn Promotion:</strong> When a pawn reaches the opposite end of the board, it can be promoted to a Queen, Rook, Bishop, or Knight.
                        </ListItem>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Ending the Game</h2>
                    <ul style={listStyle}>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Checkmate:</strong> The King is in check and cannot escape. (You Win!)
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Stalemate:</strong> The player whose turn it is has no legal moves, but their King is not in check. (It's a Draw!)
                        </ListItem>
                        <ListItem listItemStyle={listItemStyle}>
                            <strong>Draw:</strong> Can also occur by agreement, threefold repetition, or insufficient material.
                        </ListItem>
                    </ul>
                </div>

                <button onClick={handleBackToMenu} style={buttonStyle}>
                    Back to Menu
                </button>
            </div>
        </div>
    );
}

export default HowToPlay;