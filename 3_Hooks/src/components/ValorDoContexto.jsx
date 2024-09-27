import {useContext} from "react";
import { MeuContexto } from "../contexts/MeuContexto";

const ValorDoContexto = () => {

    const {mensagem} = useContext(MeuContexto)

  return <div>O Valor do contexto: {mensagem}</div>;
};

export default ValorDoContexto;
