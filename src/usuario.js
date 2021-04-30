export default function Usuario(props) {
    const src = `assets/img/${props.usuario}.svg`
    return(
        <div class="usuario">
        <img src={src} />
        <div class="texto">
          <strong>{props.usuario}</strong>
          {props.nome}
        </div>
      </div>
    )
}