export const ContenedorGif = ({arregloGifs}) => {


  return (
    <>
    <div>
        <div className="d-flex flex-row justify-content-end flex-wrap gap-2 mt-4">
            {arregloGifs.map(({id, url})=>{
                return(
                    <img className="w-25" key={id} src={url}/>
                )
            })}
            </div>
    </div>
    </>
  )
}
