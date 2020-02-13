import React from 'react';
import { Parallax } from "react-parallax";
import MenuComponent from './components/MenuComponent'
import { menuTop } from "./data/data"
import SliderComponent from "./components/SliderComponent"
import Footer from "./components/FooterComponents"

function App() {
  return (
    <div className="App">
      <header className="header">
        <MenuComponent elements={menuTop} />
      </header>
      <SliderComponent images={['header.png']} />
      <main>
        <section className="container">
          <article className="row">
            <div className="col-md-6">
              <header><h2>Star Wars, The Force Awakens</h2></header>
              <div class="article__content">
                <p>Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ».</p>
                <p>Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.</p>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <img src={require('./assets/images/ad.jpg')} alt="Star wars" />
            </div>
          </article>
        </section>
        <section>
          <Parallax style={{ height: 250 }} bgImage={require('./assets/images/stormtroopers-2x.jpg')} strength={250}>
            <div style={{ height: 250 }}>
            </div>
          </Parallax>
        </section>
        <section id="section2"><SliderComponent images={["kiloren.jpg"]} /></section>
        <section className="container" >
          <article>
            <div className="article__image float-left mr-4">
              <img src={require('./assets/images/r2d2_c3p0.jpg')} alt="Star wars" />
            </div>
            <div class="article__content is-light">
              <p><strong>La Guerre des étoiles</strong> (titre original <strong>Star Wars</strong>, soit littéralement <i>Guerres Stellaires</i> ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (<strong>l'Épisode IV - Un nouvel espoir</strong>) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans.
Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus) :	</p>
              <p>- Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée, westerns, péplums, contes de fées et même <strong>le Seigneur des Anneaux</strong> de J.R.R. Tolkien ; cette œuvre n'apparaît pas comme de la science-fiction au sens strict mais plutôt comme du space fantasy.
  - Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la participation de John Dykstra (qui a également participé au premier film de <strong>Star Trek</strong>), qui avait développé une nouvelle manière d'animer les maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex).
                                                                        - Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d'une ambiance que l'action proprement dite.
- La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédé classique mais renforçant la cohérence).</p>
            </div>
          </article>
        </section>
        <section>
          <Parallax style={{ height: 250 }} bgImage={require('./assets/images/stormtroopers.jpg')} strength={250}>
            <div style={{ height: 250 }}>
            </div>
          </Parallax>
        </section>
      </main>
      <Footer />
    </div >
  );
}

export default App;
