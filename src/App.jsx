import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import "./index.css"

function App() {
  return (
    <div className="parrent">
      <Navbar />
      <h1 className="title">Dark Mode foydalanildi: useReduser va Context !</h1>
      <Footer />
    </div>
  )
}

export default App