import Ionicon from "./ionicon";

export default function FundoMobile (){
    const ionIconName = [
        "home",
        "search-outline",
        "add-circle-outline",
        "heart-outline",
        "person-outline"];
    return (
    <div class="fundo-mobile">
        {ionIconName.map(name => <Ionicon nome={name}/>)}
    </div>);
}