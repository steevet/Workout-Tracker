//Install 'npm install react-router-dom'

//Imported component
//BrowswerRouter: wraps everywhere we want to use the router
//Routes: routes all of our individual routes
//Route: to create a single route
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

//Pages and Components
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* This is where all of our different pages will be located  */}
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
