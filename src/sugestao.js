export default function Sugestao (props) {

    const src = `assets/img/${props.usuario}.svg`;

    return(
        <div class="sugestao">
        <div class="usuario">
          <img src={src} />
          <div class="texto">
            <div class="nome">{props.usuario}</div>
            <div class="razao">{props.razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    )
}