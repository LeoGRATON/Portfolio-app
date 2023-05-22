import FormContact from './FormContact';
import './style.scss'

const Contact = () => {

    return (
        <div className='contact'>
            <div className='contact-message'>
                <span className='contact-message-span'>LET’S MAKE YOUR WEBSITE       +++      LET’S MAKE YOUR WEBSITE       +++      LET’S MAKE YOUR WEBSITE       +++       LET’S MAKE YOUR WEBSITE       +++      LET’S MAKE YOUR WEBSITE       +++      LET’S MAKE YOUR WEBSITE       +++      LET’S MAKE YOUR WEBSITE       +++      </span>
            </div>
            <div className='contact-section'>
                <div className='taille-grille'>
                <div className='contact-section-title'>
                    <h2>Let’s make<br/><span>your website</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac.</p>
                </div>
                <div className='form'>
                    <FormContact/>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;