import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import EggItem from './components/Eggitem';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/SurperSoftBiledEgg" component={EggItem}/>
        <Route path="/SoftBiledEgg" component={EggItem}/>
        <Route path="/SurperHardBiledEgg" component={EggItem}/>
        <Route path="/HardBiledEgg" component={EggItem}/>
      </Switch>
    </div>
  );
}

export default App;
