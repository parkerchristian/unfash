import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './banners/Header';
import Footer from './banners/Footer';
import Home from './Home';
import ThumbnailByUrl from '../containers/ThumbnailByUrl';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/:id" component={ThumbnailByUrl}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}
