import './app.scss'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Tabs from './Components/Tabs/Tabs';
import { useState } from 'react';
import Slidedown from './Components/Slidedown/Slidedown';
function App() {
      const [open, setopen] = useState(false)
      return (
            <div className="app" >
                  <Nav open={open} setopen={setopen} />
                  <Hero />
                  <Tabs />
                  <Slidedown open={open} setopen={setopen}/>
            </div>
      );
}

export default App;