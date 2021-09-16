import "./BeautifulScreen.css";

const BeautifulScreen = ({Num, result}) => {
    return <div className="input-wrapper">
       <div className="result">
          <h1> {result}</h1>
       </div>
       
       <div className="Num">
           <h3>{Num}</h3>
       </div>

       
        
    </div>
}

export default BeautifulScreen;