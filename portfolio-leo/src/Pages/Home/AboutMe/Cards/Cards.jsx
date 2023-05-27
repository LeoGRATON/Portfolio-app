import Card from './Card';
import SlideUpFadeIn from '../../../../Components/Animation/SlidenUpFadeIn';

import '../../../../styles/index.scss'

const Cards = () => {

    return (
        <div className='cards'>
            <SlideUpFadeIn height='1450'>
            <Card 
            number='01.'
            title='UI Design'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. '
            url='/ui-design'
            />
            </SlideUpFadeIn>
            <SlideUpFadeIn height='1450'>
            <Card 
            number='02.'
            title='Web developement'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. '
            url='/developpement'
            />
            </SlideUpFadeIn>
            <SlideUpFadeIn height='1450'>
            <Card 
            number='03.'
            title='UX Design'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sem. Proin turpis est, lobortis in nisl ac, vehicula lobortis erat. Etiam varius urna sit amet lectus feugiat viverra. '
            url='/ux-design'
            />
            </SlideUpFadeIn>
        </div>
    )
};

export default Cards;