import MyNavbar from "./components/MyNavbar"
import 'bootstrap/dist/css/bootstrap.min.css' 
import MyFooter from "./components/MyFooter"
import MainPage from "./components/MainPage"

function App() {
  

  return (
    <>
    <div className="bg-black">
     <MyNavbar/>
     <MainPage/>
     <MyFooter / >
     </div>
    </>
  )
}

export default App
