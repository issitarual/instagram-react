import Ionicon from "./ionicon";
import IoniconEDiv from "./ioniconEDiv";

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
          <IoniconEDiv classe="acoes" nome={ionicon.acoesTopo}/>
        </div>

        <div class="conteudo">
          <img src={conteudo} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              {ionicon.acoesTriplo.map(n => <Ionicon nome = {n}/>)}
            </div>
            <IoniconEDiv classe = "" nome = {ionicon.acoesBaixo}/>
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