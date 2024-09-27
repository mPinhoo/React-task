import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import TaskDetails from "./pages/TaskDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* 1- Setup e Configuração inicial */}
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contatos</Link>
          </li>
          {/* 2- NavLink */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contact"
            >
              {" "}
              Contatos{" "}
            </NavLink>
          </li>
          {/* 3- useNavigate */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* 4 - rotas aninhadas */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* 5 - rotas dinamicas */}
          <div>
            <h2>Tarefas</h2>
            <Link to="/tasks/1"> Tarefa 1 </Link>
            <Link to="/tasks/2"> Tarefa 2 </Link>
            <Link to="/tasks/3"> Tarefa 3 </Link>
          </div>

          {/* 6 - rotas 404 */}
          <div>
            <h2>Items</h2>
            <Link to="/items/1"> Item </Link>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* 3- useNavigate */}
        <Route path="/login" element={<Login />}></Route>
        {/* 4 - rotas aninhadas */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* 5 - rotas dinamicas */}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        {/* 6 - rotas 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
