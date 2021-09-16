import "./AmazingNumberButton.css";

const AmazingNumberButton = ({number, color, handleClick}) => {
    return (
    <div 
    onClick={() => handleClick(number)}
    className="button-wrapper" 
    style={{ 
        backgroundColor: color
        }}>
            {number} 

    </div>)
}

export default AmazingNumberButton;