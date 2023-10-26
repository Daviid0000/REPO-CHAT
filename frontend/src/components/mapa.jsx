// import mapaSVG from '../assets/formosa.svg'
import { Mapping } from '../../public/js/mapping'
import { NavBar } from './navbar'
export const Mapa = () => {

    return (


        <>

            <NavBar />

            <div style={{height:'350px'}}>
                <span className="input-group-text">Origen</span>
                <span className="input-group-text">Destino</span>
                
                <div className='container' >
                    <div id='map' style={{width:'250px', height: '250px'}}>

                    </div>
                </div>

                    {/* <picture style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', position: 'relative', top: '-70px' }}>
                        <img src={mapaSVG} alt="" />
                    </picture> */}
                
            </div>

            <script src={{Mapping}}></script>
            <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIU9huG_veXQ68gdNzVaTD5HKRfK31uWo&callback=initMap"></script>

        </>
    )
}