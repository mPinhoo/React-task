const RenderCondicional = ({ user }) => {
  // Se houver úsuario, exiba uma mensagem de boas vindas
  return <div>{user && <h1>Bem-vindo de volta, {user}!</h1>}</div>;
};

export default RenderCondicional;
