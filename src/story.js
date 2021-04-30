export default function Story (props){
    const src = `assets/img/${props.usuario}.svg`
    return(
        <div class="story">
        <div class="imagem">
          <img src={src}/>
        </div>
        <div class="usuario">
          {props.usuario}
        </div>
      </div>
    )
}