import Sugestao from "./sugestao"
import Usuario from "./usuario"

export default function Sidebar() {
    return(
        
        <div class="sidebar">
            <Usuario usuario="catanacomics" nome="Catana"/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Sugestao usuario="bad.vibes.memes" razao="Segue você"/>
            <Sugestao usuario="chibirdart" razao="Segue você"/>
            <Sugestao usuario="razoesparaacreditar" razao="Novo no Instagram"/>
            <Sugestao usuario="adorable_animals" razao="Segue você"/>
            <Sugestao usuario="smallcutecats" razao="Segue você"/>

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