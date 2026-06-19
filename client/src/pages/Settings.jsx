import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { sounds } from "../utils/soundManager";

function Settings() {

    const navigate = useNavigate();
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    useEffect(() => {
        setIsMusicPlaying(sounds.bgMusic.playing());
    }, []);

    const toggleMusic = () => {
        if (isMusicPlaying) {
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