import MyNavbar from "./components/MyNavbar"
import 'bootstrap/dist/css/bootstrap.min.css' 
import MyFooter from "./components/MyFooter"
import MainPage from "./components/MainPage"
// import EditProfile from "./components/EditProfile"
// import Settings from "./components/Settings"

function App() {
  

  return (
    <>
    <div className="bg-black">
     <MyNavbar/>
     <MainPage/>
     {/* <EditProfile/> */}
     {/* <Settings/> */}

     <MyFooter / >
     </div>
    </>
  )
}

export default App
