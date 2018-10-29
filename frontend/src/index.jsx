/********************************************************************
* Includes															*
*********************************************************************/
/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/ 
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

/*Import user components*/

import Navtop from 'components/Navtop';
/*
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'react-holder-component';
*/
import routes from './routes';

/********************************************************************
* Main															*
*********************************************************************/
class App extends Component{
    render(){
        return(
            <Fragment>
                <div className="container">
                    <Navtop />
                    <header>
                        <h1>Hello GeekMoney!</h1>
                    </header>
                    <main className="main">
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                        </Switch>
                    </main>
                </div>
                <footer className="footer"></footer>
            </Fragment>
        );
    }
}
/*Запуск отрисовки*/
ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById('web-page'));
