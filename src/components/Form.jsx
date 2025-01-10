import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Form({ nametravesia }) {
    const [sendingEmailMsg, setSendingEmailMsg] = useState('');
    const [completeFormAlert, setCompleteFormAlert] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (
            form.current.from_name.value &&
            form.current.from_email.value &&
            form.current.message.value
        ) {
            setCompleteFormAlert(false);
            setSendingEmailMsg('Enviando mensaje...');

            emailjs
                .sendForm(
                    import.meta.env.VITE_REACT_APP_SERVICE_ID,
                    import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
                    form.current,
                    {
                        publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
                    }
                )
                .then(
                    () => {
                        console.log('SUCCESS!');

                        setSendingEmailMsg(
                            'Mensaje enviado exitosamente! Nos contactaremos a la brevedad'
                        );
                        setTimeout(() => {
                            setSendingEmailMsg('');
                        }, 1000);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);

                        setSendingEmailMsg(
                            'Ha ocurrido un error. Intente de nuevo en unos instantes'
                        );
                        setTimeout(() => {
                            setSendingEmailMsg('');
                        }, 1000);
                    }
                );
        } else {
            setCompleteFormAlert(true);
            setTimeout(() => {
                setCompleteFormAlert(false);
            }, 3000);
        }
    };

    return (
        <div className='contact'>
            <div className='container-contact'>
                {sendingEmailMsg ? (
                    <div className='contact-message'> {sendingEmailMsg} </div>
                ) : (
                    <form ref={form} onSubmit={sendEmail}>
                        {completeFormAlert ? (
                            <span>Complete todo el formulario</span>
                        ) : (
                            ''
                        )}
                        <input
                            type='text'
                            placeholder='Nombre'
                            name='from_name'
                            id='from_name'
                        />
                        <input
                            type='number'
                            placeholder='Teléfono'
                            name='phone_number'
                            id='phone_number'
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            name='from_email'
                            id='from_email'
                        />
                        <input
                            type='text'
                            placeholder={nametravesia}
                            name='name-travesia'
                            id='name-travesia'
                            value={nametravesia}
                            style={{ display: 'none' }}
                        />
                        <textarea
                            placeholder='Mensaje'
                            name='message'
                            id='message'></textarea>
                        <button type='submit' value='Send'>
                            Enviar
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Form;
