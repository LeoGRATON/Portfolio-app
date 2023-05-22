import Button from '../Button';
import './style.scss'

const FormContact = () => {

    return (
        <div className='form section-padding' id="contact">
            <form action="">
                <div className='form-input'>
                    <label htmlFor="">Nom:*</label>
                    <input type="text" placeholder='Indiquez votre nom' required/>
                </div>
                <div className='form-input'>
                    <label htmlFor="">Prénom:*</label>
                    <input type="text" placeholder='Indiquez votre prénom' required/>
                </div>
                <div className='form-input'>
                    <label htmlFor="">Nom de votre entreprise:</label>
                    <input type="text" placeholder='Indiquez le nom de votre entreprise'/>
                </div>
                <div className='form-input'>
                    <label htmlFor="">Sujets / Demande :*</label>
                    <select name="select-subject" id="select-subject" required>
                        <option value="default">-- Selectionner un sujet --</option>
                        <option value="website">Création de site web</option>
                        <option value="design">Création graphique</option>
                        <option value="react">Application React</option>
                        <option value="autres">Autres</option>
                    </select>
                </div>
                <div className='form-input'>
                    <label htmlFor="">Votre message:*</label>
                    <textarea placeholder='Hésite pas a m’en dire plus sur votre projet'/>
                </div>
                <div className='checkbox'>
                    <input type="checkbox" placeholder='Indiquez le nom de votre entreprise'/>
                    <label for="">Vos données seront traitées de manière confidentielle et sécurisée selon les normes de protection des données en vigueur.</label>
                </div>
                <Button className='btn-contact' type='submit' children='Valider'/>
            </form>
        </div>
    )
};

export default FormContact;