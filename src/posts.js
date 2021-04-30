import Post from "./post";


export default function Posts (){
    const publicacoes =[{usuario: "meowed",
    conteudo: "gato-telefone",
    curtidasUsuario: "respondeai",
    curtidasNumero: "101.523"},
    {usuario: "barked",
    conteudo: "dog",
    curtidasUsuario: "adorable_animals",
    curtidasNumero: "99.159"}]
    return (
        <div class="posts">
            {publicacoes.map(p=><Post 
                usuario = {p.usuario}
                conteudo = {p.conteudo}
                curtidasUsuario = {p.curtidasUsuario}
                curtidasNumero = {p.curtidasNumero}/>)}
      </div>
    )
}
