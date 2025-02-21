import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Persons } from "./pages/Persons";
import { Courses } from "./pages/Courses";
import { Styleguide } from "./pages/Styleguide";
import { Navigation } from "./components/common/Navigation";
import { Stack } from "react-bootstrap";

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Stack className="min-vh-100 flex-md-row">
          <Navigation />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Persons />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/styleguide" element={<Styleguide />} />
            </Routes>
          </main>
        </Stack>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
