import { BrowserRouter } from "react-router"

function App () {
  return (
    <BrowserRouter>
      <Link to="/home" />
      <Route path="/about" element={<About />} />
    </BrowserRouter>
  );
}

export default App