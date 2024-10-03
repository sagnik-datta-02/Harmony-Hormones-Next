import NavBar from '../components/Navbar'
import FirstPeriodDesc from '../components/FirstPeriodDesc'
import Footer from '../components/Footer'



function FirstPeriodPage() {

  return (
    <div style={{background: '#FFD8DF', margin:0, padding:0, boxSizing:'border-box', minHeight:'100vh', color:'black'}}>
    <NavBar/>
    <FirstPeriodDesc/>
    <Footer></Footer>
    </div>
  )
}

export default FirstPeriodPage