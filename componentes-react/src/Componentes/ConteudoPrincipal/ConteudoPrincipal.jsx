import Habilidades from "../Habilidades/Habilidade";
import FormContato from "../formContato/FormContato";
import InfosPessoais from "../Infos.Pessoais/Infos-Pessoais";

function ConteudoPrincipal(){
    return(
        <main>
            <InfosPessoais/>
            <Habilidades/>
            <FormContato/>
        </main>
    )
}

export default ConteudoPrincipal