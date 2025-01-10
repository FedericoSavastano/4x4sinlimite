import { useParams } from 'react-router-dom';
import Map from './Map';
import fondo from '../assets/fond1.jpg';
import Form from './Form';

function Travesia({ items }) {
    const { id } = useParams();
    console.log('travesia', items);
    const [item] = items.filter((item) => item.url === id);
    const data = item.data[0];

    return (
        <>
            <p></p>
            <div className='container-banner'>
                <img className='img-banner' src={fondo} alt='Snow' />
                <h1 className='centered'>{data.nombre}</h1>
                <h1 className='centered-date'>{data.fecha}</h1>
            </div>
            <h2 className='titulo-travesia'>{data.subnombre}</h2>
            <h3 className='titulo-travesia'>
                {data.nombre} - {data.fecha}
            </h3>
            <p>{data.descripcion}</p>
            {/* <div>foto - foto</div> */}
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
                <li> Debés contar con vehículo 4x4 con alta y baja, propio.</li>
                <li>Radio VHF (Si no tenés, te prestamos)</li>
                <li>Pala, Eslinga, Medidor de presión de cubiertas</li>
            </ul>
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
            <h4 className='titulo-seccion'>Contacto</h4>
            Para mas consultas, información o si ya querés inscribirte.
            <ul>
                <li>(011) 4251-2103</li>
                <li>154-447-0027</li>
                <li>116-503-6451</li>
                <li>info@4x4sinlimite.com.ar</li>
            </ul>
            <Form name-travesia={data.nombre}></Form>
            <h4 className='titulo-seccion'>Agradecimientos</h4>
            <h4 className='titulo-seccion'>fecha de cierre : {data.cierre}</h4>
        </>
    );
}

export default Travesia;
