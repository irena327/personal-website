import React from "react";
import { Route, Switch } from "react-router-dom";

// imports
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Painting from "../pages/Painting";
import Drawing from "../pages/Drawing";
import MixedMedia from "../pages/MixedMedia";
import Design from "../pages/Design";
import Baking from "../pages/Baking";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound/NotFound";

const Router = () => {
   return (
   <Switch>
      <Layout>
         <Switch>
         <Route exact path='/projects' component={Projects} />
         <Route exact path='/portfolio/painting' component={Painting} />
         <Route exact path='/portfolio/drawing' component={Drawing} />
         <Route exact path='/portfolio/mixedmedia' component={MixedMedia} />
         <Route exact path='/portfolio/design' component={Design} />
         <Route exact path='/baking' component={Baking} />
         <Route exact path='/home' component={Home} />
         <Route component={NotFound} />
         </Switch>
      </Layout>
   </Switch>
   );
}
export default Router;