/********************************************************************
* Includes															*
*********************************************************************/
/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/ 
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

/*Import user components*/

/********************************************************************
* Main															*
*********************************************************************/
class App extends Component{
    render(){
        return(
            <h1> Hello GeekMoney</h1>
        );
    }
}
/*Запуск отрисовки*/
ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById('web-page'));
