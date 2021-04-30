import Sugestao from "./sugestao"
import Usuario from "./usuario"

export default function Sidebar() {
  const sugestao = [{usuario: "bad.vibes.memes", razao: "Segue você"},
  {usuario: "chibirdart", razao: "Segue você"},
  {usuario: "razoesparaacreditar", razao: "Novo no Instagram"},
  {usuario: "adorable_animals", razao: "Segue você"},
  {usuario: "smallcutecats", razao: "Segue você"}]
    return(
        
        <div class="sidebar">
            <Usuario usuario="catanacomics" nome="Catana"/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestao.map(s=><Sugestao usuario={s.usuario} razao={s.razao}/>)}

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
        </div>
    );    
}