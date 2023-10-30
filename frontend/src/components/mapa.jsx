import mapaSVG from "../assets/formosa.svg";
import { NavBar } from "./navbar";
export const Mapa = () => {
    return (
        <>
            <NavBar />

            <span className="input-group-text">Origen</span>
                <span className="input-group-text">Destino</span>

                

                <div className="container">
                    <div
                        className=" border border-warning"
                        style={{width: "250px", height: "250px", margin:'auto'}}
                        id="map"
                    ></div>
                </div>
                <p>
                    Distancia: <span id="distance">-</span>
                </p>
                <p>
                    Total: <span id="cost">-</span>
                </p>
            {/* <div style={{ height: "350px" }}>
                <picture style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', position: 'relative', top: '-70px' }}>
                        <img src={mapaSVG} alt="" />
                    </picture>
            </div> */}
        </>
    );
};
