import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import EggItem from './components/Eggitem';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/SuperSoftBoiledEgg" component={EggItem} />
        <Route path="/SoftBoiledEgg" component={EggItem} />
        <Route path="/SuperHardBoiledEgg" component={EggItem} />
        <Route path="/HardBoiledEgg" component={EggItem} />
      </Switch>
    </div>
  );
}

export default App;
