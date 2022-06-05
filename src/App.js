import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';
import {makeStyles} from "@material-ui/core";
import Helmet from 'react-helmet';

function App() {
  const useStyles = makeStyles (() => ({
    App: {
      backgroundColor:'#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  })); 

  const classes = useStyles()

return (
  
    <BrowserRouter>
      <div className={classes.App}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crypto App</title>
        <meta name="description" content="Crypto Currency, Bitcoin, Digital Assets, Top 100 Crypto, Elon Musk, Yogesh Mundhra, Mundhra Yogesh PawanKumar, Bhiwandi" />
      </Helmet>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact/>
          <Route path="/coins/:id" element={ <Coinpage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
