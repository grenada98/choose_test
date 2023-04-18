import logo from './logo.svg';
import './App.scss';
import {Header} from './components/Header'
import {MobileMenu} from './components/MobileMenu'
import { SwiperWrapper } from './components/SwiperWrapper';
import {useState} from 'react'
import {ReactComponent as Apple} from './svg/apple.svg'
import {ReactComponent as Android} from './svg/android.svg'

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
        <Header  active={active} setActive={setActive}/>
        <MobileMenu active={active} setActive={setActive}/>
        <section className='section-apparel'>
          <div className='section-apparel__line-img'>
            <img src={process.env.PUBLIC_URL + '/img/line.png'} alt="line"/>
          </div>
          <div className='section-apparel__information'>
            <div className='app'>
              <div className='app__list'>
                <a className='app__item' href="#">
                  <Apple className="app__svg" width="27" height="27"/>
                </a>
                <a className='app__item' href="#">
                  <Android className="app__svg" width="28.5" height="28.5"/>
                </a>
              </div>
              <div className='app_information'>
                App available
              </div>
            </div>
            <div className='section-apparel__title'>
            CHOOSE YOUR
            WINTER 
            <div className='section-apparel__look'>
                LOOK
                <div className='section-apparel__look-star'>*</div>
              </div>
            APPAREL
            </div>
          </div>
          <div className='section-apparel__mask'>
            <div className='section-apparel__img-wrapper' style={{backgroundImage: "url(" + process.env.PUBLIC_URL + '/img/example1.jpg' + ")"}}>
              create
            </div>
          </div>
        </section>
        <section className='section-moreabout'>
          <h2 className='section-moreabout__title'>Choose looks</h2>
          <SwiperWrapper/>
          <h2 className='section-moreabout__title'>More about us</h2>
          <p className='section-moreabout__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum.
          </p>
          <p className='section-moreabout__text'>Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst.</p>
        </section>
    </div>
  );
}

export default App;
