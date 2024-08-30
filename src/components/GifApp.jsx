
import { useGif } from '../hooks/useGif'
import { BuscarGif } from './BuscarGif'
import { ContenedorGif } from './ContenedorGif'
 

//functional component
export const GifApp = () => {

    
    

    const {handleGetGif, arregloGifs} = useGif()
    
 
    return (
        <>
            <BuscarGif handleGetGif={handleGetGif} />
            <ContenedorGif arregloGifs={arregloGifs} />

                
                
                    


                    
        </>
    )
} 