import React,{Component} from 'react';
import {withRouter,Switch,Route,Redirect} from 'react-router-dom'
import './css/App.css';


//引入页面
import Home from './pages/Home';
import Sort from './pages/Sort';
import Cart from './pages/Cart';
import Mine from './pages/Mine';
import Detail from './pages/Detail';


class App extends Component{
  render(){
  return (
    <div className="App">
    
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/mine' component={Mine}></Route>
        <Route path='/sort' component={Sort}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/detail' component={Detail}></Route>
   
        <Redirect from='/' to='/home' exact></Redirect>
      </Switch>
    </div>
  );
}
}
App = withRouter(App)
export default App;