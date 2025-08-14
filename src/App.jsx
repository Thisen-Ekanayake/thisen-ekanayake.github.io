import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BlogPage } from "./pages/Blog";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import BuildingSinhalaNLPTools from "./pages/blog/BuildingSinhalaNLPTools";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/building-sinhala-nlp-tools" element={<BuildingSinhalaNLPTools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
