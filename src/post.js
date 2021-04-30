import Ionicon from "./ionicon";

export default function Post (props) {
    const ionicon = {
        acoesTopo: "ellipsis-horizontal",
        acoesTriplo: ["heart-outline","chatbubble-outline","paper-plane-outline"],
        acoesBaixo: "bookmark-outline",};
    const srcUsuario = `assets/img/${props.usuario}.svg`;
    const conteudo = `assets/img/${props.conteudo}.svg`;
    const srcCurtidas = `assets/img/${props.curtidasUsuario}.svg`;
    return(
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={srcUsuario}/>
            {props.usuario}
          </div>
          <div class="acoes">
            <Ionicon nome={ionicon.acoesTopo}/>
          </div>
        </div>

        <div class="conteudo">
          <img src={conteudo} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              {ionicon.acoesTriplo.map(n => <Ionicon nome = {n}/>)}
            </div>
            <div>
              <Ionicon nome = {ionicon.acoesBaixo}/>
            </div>
          </div>

          <div class="curtidas">
            <img src={srcCurtidas} />
            <div class="texto">
            Curtido por <strong>{props.curtidasUsuario}</strong> e <strong>outras {props.curtidasNumero} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}