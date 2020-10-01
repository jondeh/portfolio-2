import React from "react";
import { Switch, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Body from './Components/Body';
import Resume from './Components/Resume';
import Skills from './Components/Skills';

export default (
   <Switch>
      <Route exact path='/' component = {Body} />
      <Route exact path='/about' component = {About} />
      <Route path='/portfolio' component = {Portfolio} />
      <Route path='/resume' component = {Resume} />
      <Route path='/contact' component = {Contact} />
      <Route path='/skills' component = {Skills} />
   </Switch>
)

