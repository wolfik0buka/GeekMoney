/********************************************************************
* Includes															*
*********************************************************************/
/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/ 
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/*Import user components*/

import Navtop from 'components/Navtop';
import Header from 'components/Header';
import Footer from 'components/Footer';
//import 'react-holder-component';

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
                    <Header />
                    <main className="main">
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                        </Switch>
                    </main>
                </div>
                <Footer className="footer" />
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
