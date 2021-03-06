import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assentos from "../Assentos";
import Filmes from "../Filmes";
import Header from "../Header";
import Sessoes from "../Sessoes";
import Sucesso from "../Sucesso";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/sessoes/:idFilme" element={<Sessoes />} />
          <Route path="/assentos/:idSessao" element={<Assentos />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
