import { useParams, Link } from 'react-router-dom';
import Map from './Map';
import fondo from '../assets/fond1.jpg';
import Form from './Form';
import LogoGrid from './LogoGrid';
import ImagesGrid from './ImagesGrid';
import NotFound from './NotFound';

function Travesia({ items }) {
    const { id } = useParams();
    console.log('travesia', items);
    const [item] = items.filter((item) => item.url === id);
    const data = item?.data[0];

    if (data === undefined) {
        return <NotFound />;
    }

    return (
        <>
            <p></p>
            <div className='container-banner'>
                <img className='img-banner' src={fondo} alt='Snow' />
                <h1 className='centered'>{data.nombre}</h1>
                <h1 className='centered-date'>{data.fecha}</h1>
            </div>

            <ImagesGrid src1={data.imagen1} src2={data.imagen2}></ImagesGrid>
            <h2 className='titulo-travesia'>{data.subnombre}</h2>
            <h3 className='titulo-travesia'>
                {data.nombre} - {data.fecha}
            </h3>
            <p>{data.descripcion}</p>

            <h4 className='titulo-seccion'>Punto de encuentro</h4>
            <p>{data.encuentro}</p>
            <Map value={id}></Map>
            <p></p>

            <div>
                <h4 className='titulo-seccion'>Cronograma</h4>
                <div className='container-recorrido'>
                    {data.cronograma.map((dia) => (
                        <div key={dia.dia}>
                            <p className='dia-recorrido'>
                                {dia.dia.replaceAll('"', '')}
                            </p>
                            <div key={dia.recorrido}>
                                {dia.recorrido.split('.').map((e) => (
                                    <ul key={e} className='lista-recorrido'>
                                        <li className='lista-recorrido-elemento'>
                                            {e}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 className='titulo-seccion'>Incluye</h4>
            <ul>
                <li> Alojamiento en hotel</li>
                <li>
                    Desayuno, almuerzo y cena (No incluye bebidas alcoholicas)
                </li>
                <li>Guía. Ayuda y asesoramiento técnico y mecánico</li>
                <li> Vehículo de apoyo</li>
            </ul>
            <h4 className='titulo-seccion'>Elementos necesarios</h4>
            <ul>
                <li> Debés contar con vehículo 4x4 propio !</li>
                <li>Radio VHF (Si no tenés, te prestamos)</li>
                <li>Pala, Eslinga, Medidor de presión de cubiertas</li>
            </ul>

            <ImagesGrid src1={data.imagen3} src2={data.imagen4}></ImagesGrid>
            <h4 className='titulo-seccion'>¿Qué es una travesía?</h4>
            <p>
                Es un evento organizado donde cada participante viene con su
                propio vehículo 4×4 y en grupo recorremos y desafiamos distintos
                terrenos naturales. Nuestro servicio te va a incluir el
                hospedaje, todas las comidas y la guía. Durante el año hacemos
                travesías en la costa atlántica, la nieve, dunas y montañas. Te
                vas a encontrar con un ambiente familiar y de camaradería. Si
                tenés experiencia en 4×4 vas a descubrir desafíos muy
                divertidos, si no tenés experiencia, no te preocupes, nosotros
                vamos a ir guiando y ayudándote en todo lo que necesites.{' '}
            </p>

            <p>
                Podés ver una travesía como ésta que hicimos el año pasado acá:{' '}
            </p>
            <div style={{ textAlign: 'center' }}>
                <iframe
                    // width='100%'
                    className='travesia-video'
                    height='300'
                    src={item.data[0].video}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen></iframe>
            </div>
            <h4 className='titulo-seccion'>Contacto</h4>
            <div className='contact-wrapper'>
                <div>
                    <h5 style={{ marginTop: '0px' }}>
                        Para mas consultas, información o si ya querés
                        inscribirte.
                    </h5>
                    <ul className='contact-list'>
                        <li className='contact-list-element'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='28'
                                viewBox='0 0 512 512'>
                                {' '}
                                <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
                            </svg>
                            <span className='contact-list-element-number'>
                                (011) 4251-2103
                            </span>
                        </li>
                        <li className='contact-list-element'>
                            <Link
                                target='_blank'
                                className='contact-list-element-a'
                                to='https://api.whatsapp.com/send?phone=5491544470027&text=Hola%204x4%20Sin%20L%C3%ADmite%2C%20quiero%20consultar%20por%20la%20Traves%C3%ADa'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='28'
                                    viewBox='0 0 448 512'>
                                    {' '}
                                    <path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' />
                                </svg>{' '}
                                <span className='contact-list-element-number'>
                                    15-4447-0027
                                </span>
                            </Link>{' '}
                        </li>

                        <li className='contact-list-element'>
                            <Link
                                target='_blank'
                                className='contact-list-element-a'
                                to='https://api.whatsapp.com/send?phone=5491165036451&text=Hola%204x4%20Sin%20L%C3%ADmite%2C%20quiero%20consultar%20por%20la%20Traves%C3%ADa'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='28'
                                    viewBox='0 0 448 512'>
                                    {' '}
                                    <path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' />
                                </svg>{' '}
                                <span className='contact-list-element-number'>
                                    11-6503-6451
                                </span>
                            </Link>{' '}
                        </li>

                        <li className='contact-list-element'>
                            <Link
                                className='contact-list-element-a'
                                to='mailto:info@4x4sinlimite.com.ar'
                                href='mailto:info@4x4sinlimite.com.ar'
                                target='_blank'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='28'
                                    viewBox='0 0 512 512'>
                                    {' '}
                                    <path d='M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z' />
                                </svg>
                                <span className='contact-list-element-number'>
                                    info@4x4sinlimite.com.ar
                                </span>
                            </Link>{' '}
                        </li>
                        <li className='contact-list-element'>
                            <Link
                                className='contact-list-element-a'
                                to='https://www.instagram.com/4x4sinlimite'
                                target='_blank'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='28'
                                    viewBox='0 0 448 512'>
                                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                                </svg>
                                <span className='contact-list-element-number'>
                                    @4x4sinlimite
                                </span>
                            </Link>{' '}
                        </li>
                        <li className='contact-list-element'>
                            <Link
                                className='contact-list-element-a'
                                to='https://www.facebook.com/4x4SinLimite'
                                target='_blank'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='28'
                                    viewBox='0 0 512 512'>
                                    <path d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z' />
                                </svg>
                                <span className='contact-list-element-number'>
                                    4x4 Sin Limite
                                </span>
                            </Link>{' '}
                        </li>
                    </ul>
                </div>
                <span>
                    <h5 className='contact-send-message'>
                        Envianos un mensaje
                    </h5>
                    <Form nametravesia={data.nombre}></Form>
                </span>
            </div>

            <h4 className='titulo-seccion'>
                Cierre de inscripción : {data.cierre.replaceAll('"', '')}
            </h4>
            <h4 className='titulo-seccion'>Agradecimientos</h4>
            <LogoGrid />
        </>
    );
}

export default Travesia;
