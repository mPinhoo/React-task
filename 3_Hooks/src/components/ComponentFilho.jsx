import {useContext} from "react";
import { MeuContexto } from "../contexts/MeuContexto";

const ComponentFilho = () => {

    const {mensagem, setMensagem} = useContext(MeuContexto)


  return <div>
        <button onClick={() => setMensagem("Nova Mensagem")}> Alterar Mensagem</button>
    </div>;
};

export default ComponentFilho;
