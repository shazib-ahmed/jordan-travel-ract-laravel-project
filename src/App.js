import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './component/navbar/NavBar';
import Router from './router/Router';

export default class componentName extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Router/>
      </BrowserRouter>
    )
  }
}
