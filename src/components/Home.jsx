import React from "react";
import logo from "../assets/logo-grande-D.png";
import { Link } from "react-router-dom";

import fondo from "../assets/fond1.jpg";
import Contacto from "./Contacto";
import VideosGrid from "./VideosGrid";
import LogoGrid from "./LogoGrid";

function Home({ items }) {
  console.log("items en home ", items);
  return (
    <>
      <p></p>
      <section className="section">
        <div className="container-banner">
          <img className="home-img-banner" src={fondo} alt="Snow" />
          <img src={logo} className=" logo-home" alt="4x4 sin limite logo" />

          {/* <h1 className='centered-date'>4x4 Sin Límite</h1> */}
        </div>

        <p className="subtitulo-home">
          Recorriendo todo el país desde hace 25 años. <br></br>
          Viví una travesía 4x4 con amigos o en familia, ¡sumate!
        </p>
      </section>

      <section className="section">
        <h1 style={{ textAlign: "center" }}>NOS REENCONTRAMOS EN 2026</h1>
        {/* <h1 className='titulo-home'>Próximas Salidas</h1>
                <div className='salidas-container'>
                    {items.map((item, index) =>
                        item.data[0].realizada === 'no' ? (
                            <div
                                key={item.data[0].url}
                                className='salidas-item'>
                                <Link to={`/${item.data[0].url}`}>
                                    <img
                                        src={item.data[0].imagen_home}
                                        alt={
                                            item.data[0].url ||
                                            `Logo ${index + 1}`
                                        }
                                        className='img-x'
                                    />
                                    <h3 className='salidas-titulo'>
                                        {item.data[0].nombre}{' '}
                                    </h3>
                                    <span className='salidas-subtitulo'>
                                        {item.data[0].subnombre}
                                    </span>
                                </Link>
                            </div>
                        ) : (
                            <></>
                        )
                    )}
                </div> */}
      </section>

      <section className="section">
        <h4 className="titulo-seccion">¿Qué es una travesía?</h4>
        <p>
          Es un evento organizado donde cada participante viene con su propio
          vehículo 4×4 y en grupo recorremos y desafiamos distintos terrenos
          naturales. Nuestro servicio te va a incluir el hospedaje, todas las
          comidas y la guía. Durante el año hacemos travesías en la costa
          atlántica, la nieve, dunas y montañas. Te vas a encontrar con un
          ambiente familiar y de camaradería. Si tenés experiencia en 4×4 vas a
          descubrir desafíos muy divertidos, si no tenés experiencia, no te
          preocupes, nosotros vamos a ir guiando y ayudándote en todo lo que
          necesites.{" "}
        </p>
      </section>

      <section className="section">
        <h4 className="titulo-seccion">Cronograma Anual</h4>
        <ul>
          {items.map((item) => (
            <li key={item.data[0].url}>
              <h4 className="crono-fecha">{item.data[0].fecha}</h4>
              <p className="crono-desc">
                <Link to={item.data[0].url} className="crono-nombre">
                  {item.data[0].nombre} -{" "}
                </Link>
                {item.data[0].descripcion}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h4 className="titulo-seccion">Nuevos videos</h4>
        <VideosGrid></VideosGrid>
      </section>

      <section className="section">
        <Contacto></Contacto>
      </section>

      <section className="section">
        <h4 className="titulo-seccion">Agradecimientos</h4>
        <LogoGrid />
      </section>
    </>
  );
}

export default Home;
