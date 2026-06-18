import { useNavigate } from 'react-router-dom';

function GameMenuList({menuItems, listStyle, handleMenuClick}) {
    return (
        <ul className="game-menu-list" style={listStyle}>
            {menuItems.map((item, index) => (
                <li key={index} className="game-menu-item" style={{fontSize: '2.5rem', paddingBottom: '10px', cursor: 'pointer', width: 'fit-content', margin: '0 auto'}} onClick={() => handleMenuClick(item)}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

function Main() {
    const navigate = useNavigate();

    const handleMenuClick = (item) => {
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

    const menuItems = [
        "New Game",
        "How to Play",
        "Settings",
        "Credits"
    ];

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
        backgroundImage: 'url("/chess-board.png")',
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
                <GameMenuList menuItems={menuItems} listStyle={listStyle} handleMenuClick={handleMenuClick}/>
            </div>
        </div>
    );
}

export default Main;