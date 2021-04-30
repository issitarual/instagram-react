import Post from "./post";


export default function Posts (){
    return (
        <div class="posts">
            <Post 
                usuario = "meowed"
                conteudo = "gato-telefone"
                curtidasUsuario = "respondeai"
                curtidasNumero = "101.523"
            />

            <Post 
                usuario = "barked"
                conteudo = "dog"
                curtidasUsuario = "adorable_animals"
                curtidasNumero = "99.159"
            />
      </div>
    )
}
