import { useEffect, useState } from "react";

const PerfilDeUsuario = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    //função para buscar dados
    const buscarUsuario = async () => {
      //resposta assincrona
      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`
      );

      const dadosUsuario = await resposta.json();

      setUsuario(dadosUsuario);
    };

    if (usuarioId) {
      buscarUsuario();
    }
  }, [usuarioId]);

  return (
    <div>
      {usuario ? (
        <div>
          <h2>{usuario.name}</h2>
          <h2>{usuario.email}</h2>
        </div>
      ) : (
        <p>Carregando perfil do usuário...</p>
      )}
    </div>
  );
};

export default PerfilDeUsuario;
