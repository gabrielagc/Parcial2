import Banda from "./banda"


const { useEffect, useState } = require("react");
function Bandas(){

    const [bandas, setBandas] = useState([]);

    useEffect(() => {
        const URL =
          "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setBandas(data);
          });
      }, []);


      return(
        <div >
            <table style={{width:"100%", textAlign: "center"}} >
            <thead >
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Pais</th>
                <th scope="col">Genero</th>
                <th scope="col">Fundacion
                </th>

                </tr>

            </thead>

            <tbody>
                {console.log("Bandas", bandas)}
                {bandas.map((e, i) => (
                <Banda key={i} banda={e} />
                
                ))}

            </tbody>

            </table>




        </div>
        


      )



}

export default Bandas;