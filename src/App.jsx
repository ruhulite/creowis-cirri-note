import './App.css'
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import About from "./components/About.jsx";
import Banner from "./components/Banner.jsx";
import Features from "./components/features/Features.jsx";
import TopBar from "./components/topBar/TopBar.jsx";

function App() {

  return (
      <div className="wrapper w-7xl mx-auto">
          <TopBar />
          <Header />
          <main className="App">
              <Banner />
              <About />
              <Features />
          </main>
          <Footer />
      </div>
  )
}

export default App
