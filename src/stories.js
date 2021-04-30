import IoniconEDiv from "./ioniconEDiv";
import Story from "./story";

export default function Stories (){
  const ion = ["9gag",
              "meowed",
              "barked",
              "nathanwpylestrangeplanet",
              "wawawicomics",
              "respondeai",
              "filomoderna",
              "memeriagourmet"]
    return (
        <div class="stories">
          {ion.map(i=><Story usuario = {i}/>)}

          <IoniconEDiv nome = "chevron-forward-circle" classe = "setinha"/>
      </div>
    )
}

