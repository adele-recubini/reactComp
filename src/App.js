import Main from "./components/Jumbotron";
import ItemsContainer from "./components/ItemsContainer";
import Blog from "./components/Cards";
import { articoli } from './utils/list';
import React from 'react';

import Accordion from './components/Accordion';
import { accordionData } from './utils/content';


function App() {

  return (
    <>
      <Main title="Infrastutture e tecnologia dietro alle emozioni"
        descrizio="Atrraverso la nostra infrastruttura,soluzioni tecnologiche avanzate
          e risorse dedicate portiamo ogni giorno i segnali della televisione e della radio nelle case dei cittadini"
        textbtn="APPROFONDISCI"
        link="Infrastrutture e tecnologie dietro alle emozioni" />

      <hr />
      <ItemsContainer
        title="I nostri valori"
        descrizio="I nostri valori, parte integrante della cultura e della professionalità delle nostre risorse sono impegno per la comunità,salvaguardia dell'ambiente
       ,qualità eccellente del servizio,sicurezza,valorizzazione delle persone,tensione verso l' innovazione"/>
      <hr />
      <div className="all-container">
        <Blog articoli={articoli} />
        <div className="ctnbtn"> <a className="btn btn-primary btn-lg" href="#" role="button" style={{ backgroundColor: "#FED605", border: "#FED605", padding: "20px", marginTop: "50px", color: "black", fontWeight: "bold" }}> Vedi tutto</a></div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
          <div className="row">
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-left">
              <Accordion data={accordionData} />
            </div>
          </div>
        </div>
      </div>
      <hr />


    </>
  );
}

export default App;
