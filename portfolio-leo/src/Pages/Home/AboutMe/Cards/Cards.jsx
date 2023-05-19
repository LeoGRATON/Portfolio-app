import Card from './Card';

import '../../../../styles/index.scss'

const Cards = () => {

    return (
        <div className='cards'>
            <Card 
            number='01.'
            title='UI Design'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. '
            />
            <Card 
            number='02.'
            title='Web developement'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. '
            />
            <Card 
            number='03.'
            title='UX Design'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. '
            />
        </div>
    )
};

export default Cards;