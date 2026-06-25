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