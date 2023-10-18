import mapaSVG from '../assets/formosa.svg'
import { NavBar } from './navbar'
export const Mapa = () => {

    return (

        
        <>

            <NavBar />
            
                <div>
                    <input className='form-control me-2 m-2 border-0 border-bottom' type="text" placeholder='Write message...'/>
                    <input className='form-control me-2 m-2 border-0 border-bottom' type="text" placeholder='Write message...'/>
                    <div>
                        <picture style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', position: 'relative', top: '-20px' }}>
                            <img src={mapaSVG} alt="" />
                        </picture>
                    </div>
                </div>

                </>
                )
}