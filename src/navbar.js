import Ionicon from "./ionicon";

export default function Navbar(){
    const ionIcon = {
            logo: "logo-instagram",
            logoMobile: "logo-instagram",
            icones: ["paper-plane-outline","compass-outline","heart-outline","person-outline"],
            iconesMobile: "paper-plane-outline"};
    return(
        <div class="navbar">
        <div class="container">
          <div class="logo">
            <Ionicon nome = {ionIcon.logo} />
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div class="logo-mobile">
            <Ionicon nome = {ionIcon.logoMobile} />
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
              {ionIcon.icones.map(n => <Ionicon nome = {n}/>)}
          </div>

          <div class="icones-mobile">
            <Ionicon nome = {ionIcon.iconesMobile} />
          </div>
        </div>
      </div>
    );
}
