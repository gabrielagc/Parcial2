import React from "react";
import { Link } from "react-router-dom";
import BandaDetail from "./bandaDetail";

function detail(props){
    
    return(<BandaDetail banda = {props.banda}/>);
    
}

const Banda = (props) => {

    return(
        

        <tr className="bandas">
            <td className= "line">{props.banda.id}</td>
            <td>{props.banda.name}</td>
            <td>{props.banda.country}</td>
            <td>{props.banda.genre}</td>
            <td>{props.banda.foundation_year}</td>
            <td><button onClick={detail(props)}>Detail</button></td>
            {/* <Link onClick={detail(props)}>Link</Link> */}
      
        </tr>

        

        
    );

};
export default Banda;