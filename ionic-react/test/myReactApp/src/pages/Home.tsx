import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  IonBackButton,
  IonButtons,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useHistory} from 'react-router-dom';
import React from 'react';
import {useIonViewWillEnter} from '@ionic/react';
import {useEffect} from 'react';

import {utils} from '../utils';

const Home: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    // document.body.style.backgroundColor = '#A16F6F';
    // let meta = document.querySelector('meta[name=theme-color]');
    // if (!meta) {
    //   meta = document.createElement('meta');
    //   meta.setAttribute('name', 'theme-color');
    //   document.head.appendChild(meta);
    // }
    // meta.setAttribute('content', '#A16F6F');
    utils.setThemeColor('#3A48E2');
    utils.setBackgroundColor('#C02D2F');
    // document.body.style.backgroundColor = '#3A48E2';
  }, []);

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      {/* <IonButton
        routerLink='/about'
        style={{
          '--background': 'red',
          color: 'black',
          fontSize: '10px',
          height: '50px',
        }}
      >
        Go to About
      </IonButton> */}
      {/* <IonBackButton defaultHref='/about'></IonBackButton> */}
      <IonHeader>
        {/* <IonToolbar
          style={{
            height: '80px',
            display: 'flex',
            padding: '0px',
            margin: '0px',
            '--padding-start': '0px',
            '--padding-end': '0px',
            '--min-height': '0px',
            '--background': '#222',
          }}
        >
          <IonButtons slot='start'>
           
            <IonButton
              fill='clear'
              onClick={() => history.goBack()}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 18L9 12L15 6'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </IonButton>
          </IonButtons>
          <IonTitle style={{color: '#fff'}}>Custom Height</IonTitle>
        </IonToolbar> */}
        <div
          style={{
            height: '80px',
            background: '#222',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid red',
            // padding: '0 16px',
          }}
        >
          <button
            onClick={() => history.goBack()}
            style={{background: 'none', border: 'none'}}
          >
            {/* svg */}1
          </button>
          <h1 style={{color: 'white', marginLeft: '16px'}}>Custom Header</h1>
        </div>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
        <p>
          Here's a small text description for the content. Nothing more, nothing
          less.
        </p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
