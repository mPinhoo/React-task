import { useState, useEffect, useMemo } from "react";

const Exercicio1 = ({ userInfo }) => {
  useEffect(() => {
    document.userInfo = `Sejá bem vindo ${userInfo}!`;
  }, [userInfo]);

  return (
    <div>
      <p>Nome Profissional: {userInfo.name}</p>
      <p>Profissão: {userInfo.jobTitle}</p>
    </div>
  );
};

const fibonnaci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

// Exercicio 2 Calcuo de Fibonacci com useMimo
const FibCalculator = ({ num }) => {
  const fibResult = useMemo(() => fibonnaci(num), [num]);

  return (
    <div>
      <p>
        Fibonacci de {num} é {fibResult}
      </p>
    </div>
  );
};

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    //limpeza
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

const OnlineStatusIndicator = () => {

  const isOnline = useOnlineStatus();

return(

  <div>
    <p>
        Você está atualmente: {isOnline? "Online" : "Offline"}
    </p>
  </div>

)

  }

const Exercises = () => {
  const userInfo = { name: "Matheus", jobTitle: "Desenvolvedor" };

  return (
    <div>
      <h2>Exercicio 1</h2>
      <Exercicio1 userInfo={userInfo} />
      <h2>Exercicio 2</h2>
      <FibCalculator num={10} />
      <h2>Exercico 3</h2>
      <OnlineStatusIndicator />
    </div>
  );
};

export default Exercises;
