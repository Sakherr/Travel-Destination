import { useState } from "react";
import { useParams } from "react-router-dom";
const toursData = require('../../data/data.json');

export default function TourDetails (){
    const { id } = useParams();
    
    const [showLines, setShowLines] = useState(false);
    


    function renderTourDetails(id) {
        for (let i = 0; i < toursData.length; i++) {
          if (toursData[i].id.toString() === id) {
            return toursData[i];
          }
        }
      }
      
    
    function toggleLinesHandler() {
        setShowLines(!showLines);
    }

    function getTourInfo() {
        const { info } = renderTourDetails(id);
        return showLines ? info : info.substring(1, 200);
    }

    function getLinesState() {
        if (showLines) {
          return " See less";
        } else {
          return " See more...";
        }
      }
      
      return (
       
        <div>
  <h2>City: {renderTourDetails(id).name}</h2>
  <p>About: {getTourInfo()} <button className="more-info" onClick={toggleLinesHandler}>{getLinesState()}</button></p>
  <img src={renderTourDetails(id).image} alt="City_Image" />
</div>

      );
    }
