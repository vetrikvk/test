import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import './App.css';
import history from './history';
import MainPage from './components/MainPage/MainPage';

class App extends React.Component {
   

  
  
  render(){
  return (   
     <div>
      <Router history={history}>                  
        <Switch>                    
          <Route exact path="/" exact component={MainPage}/>                  
        </Switch>            
      </Router>
     </div>
   
  );
}
}

export default App;
