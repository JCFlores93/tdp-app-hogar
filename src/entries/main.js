import React from 'react';
import { render } from 'react-dom';
import Home from '../menu/containers/home'

const homeContainer = document.getElementById('home-container')
const elemento = <h1>Hola Mundo</h1>
render(
  //elemento
  <Home/>
  , homeContainer)
