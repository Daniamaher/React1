import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Header';
import MainPage from './MainPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Features from './Features';
import Support from './Support';
import Enterprise from './Enterprise';
function App() {


  return(
     <>

          <Router>

          <Header/>

            <Routes>

                <Route index element={<MainPage/>}/>
                <Route path="support" element={<Support/>}/>
                <Route path="enterprise" element={<Enterprise/>}/>
                <Route path="features" element={<Features/>}/>


            </Routes>
          
       


          </Router>
     











      


       
     
     </>

  )

}

export default App;
