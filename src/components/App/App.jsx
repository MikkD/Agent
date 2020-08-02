import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import HomePage from '../HomePage';
import AboutMe from '../AboutMe';
import Contact from '../Contact';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
const routes = [
  { path: '/', name: 'homepage', component: HomePage, id: 'id1' },
  { path: '/AboutMe', name: 'aboutMe', component: AboutMe, id: 'id2' },
  { path: '/Contact', name: 'contact', component: Contact, id: 'id3' }
]


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map(({ path, component, id }) =>
            <Route key={id} exact path={path} component={component} />)}
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
