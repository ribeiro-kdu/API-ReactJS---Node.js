import React from "react";
import axios from "axios";
import apiNorris from "../services/api-norris";

const Norris = () => {
    const [quote, setQuote] = React.useState();
  
    React.useEffect(() => {
      axios.get(apiNorris).then((response) => {
        setQuote(response.data);
      });
    }, []);
  
    if (!quote) return null;

    return (
        <div>
        <h1>NEO was inspiredby Chuck Norris</h1>
        <br></br><br></br>
        <h1>"{quote.value}"</h1>
        </div>
      );
  }

  export default Norris;