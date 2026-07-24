import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Media from "./pages/Media";
import Pages from "./pages/Pages";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="/media"
            element={<Media />}
          />
          <Route
            path="/pages"
            element={<Pages />}
          />
          <Route
            path="/pages/create"
            element={<CreatePage />}
          />
          <Route
            path="/pages/edit/:id"
            element={<EditPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;