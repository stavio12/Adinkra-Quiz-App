import React, {Component} from 'react';
import App from '../App';

export default class Score extends Component{
    
render(){
    var App = <App />
    return(
        <div className='container home p-5'>
          <h1 className="text-white text-center font-weight-bolder"> Welcome To Adinkra symbols <br/> Quiz Game </h1> 
     <div className="row greet justify-content-center text-center p-2">
       <div className="col-12 col-sm-12 adinkra">
    <p className="col-12 lead text-white ">
    <a className="text-white font-weight-bolder" target="_blank" href="http://www.adinkrasymbols.org/"> <strong>Adinkra</strong> </a> 
    are visual symbols with historical and philosophical significance originally 
    printed on cloth which Asante royals wore to important ceremonies.
     Originating from the Asantes of Ghana, the symbols have assumed global importance and 
     are now found on objects like furniture, sculpture, earthenware pots and casual wear.
</p>

  <button className="btn"> <a className="btn btn-lg btn-warning" href={App} > Try Quiz </a> </button>
         </div>
       <div className="row p-5">
        <div className="col-12  col-lg-4 images ">
        <img src={require("./akoben.png")} alt="..." className="img-thumbnail figure-img" />
        </div>
        <div className="col-12  col-lg-4 images">
        <img src={require("./lol.jpg")} alt="..." className="img-thumbnail figure-img" />
        </div>
        <div className="col-12  col-lg-4 images">
        <img src={require("./Bay.jpg")} alt="..." className="img-thumbnail figure-img" />
        </div>
        </div>

         </div>
         </div>

    )

}


}