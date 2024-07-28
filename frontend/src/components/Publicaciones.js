export default function Publicaciones({ publicaciones }){
    return(
        <div id="publicaciones">
            {publicaciones.map((post, index) => (
            <div key={index} className="post-extern show">
                <p className="textoPublicacion">{post.texto}</p>
                <span className="horario">
                <p className="Horario publicacion">{post.fecha}</p>
                </span>
            </div>
            ))}
        </div>);
    }