import { BrowserRouter, Route } from 'react-router-dom'

import './scss/style.scss'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Raincoat from './components/Content/Product/Raincoat/Raincoat'
import Sneakers from './components/Content/Product/Sneakers/Sneakers'
import Shirts from './components/Content/Product/Shirts/Shirts'
import Pants from './components/Content/Product/Pants/Pants'


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Navbar />
          <Route path="/all" component={Content} />
          <Route path="/raincoat" component={Raincoat} />
          <Route path="/sneakers" component={Sneakers} />
          <Route path="/shirts" component={Shirts} />
          <Route path="/pants" component={Pants} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
