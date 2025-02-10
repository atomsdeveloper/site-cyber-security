import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";


// Components
import { NotFound } from "./Pages/NotFound"
import { Loading } from "./components/helpers/Loading"

// Lazy Components
const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound text="Página não encontrada." />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
