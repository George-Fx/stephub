import React, {useEffect} from 'react';
import {IonContent, IonButton, IonPage, IonRouterLink} from '@ionic/react';

import {utils} from '../utils';
import {components} from '../components';

export const SignIn: React.FC = () => {
  useEffect(() => {
    utils.setThemeColor('#fff');
    utils.setBackgroundColor('#fff');
  }, []);

  const renderHeader = () => {
    return <components.Header title='Sign in' />;
  };

  const renderContent = () => {
    return (
      <IonContent
        style={
          {
            // '--ion-safe-area-top': '20px',
            // '--ion-safe-area-bottom': '20px',
            // '--ion-safe-area-left': '20px',
            // '--ion-safe-area-right': '20px',
            // paddingTop: 'var(--ion-safe-area-top)',
            // paddingBottom: 'var(--ion-safe-area-bottom)',
            // paddingLeft: 'var(--ion-safe-area-left)',
            // paddingRight: 'var(--ion-safe-area-right)',
            // '--background': 'transparent',
          }
        }
      >
        {/* <IonInput
          placeholder='Enter your email'
          type='email'
          style={{
            margin: '10px 0',
            padding: '10px',
            border: '1px solid var(--main-color)',
            borderRadius: '8px',
          }}
        /> */}
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
        <components.Button title='Sign in' />
        <div
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
        >
          <span>Don’t have an account?</span>{' '}
          <IonRouterLink
            href='/sign-up'
            style={{marginLeft: '5px', color: 'var(--main-color)'}}
          >
            Sign up.
          </IonRouterLink>
        </div>
        <IonButton
          routerLink='/sign-up'
          style={{
            '--background': 'red',
            color: 'black',
            fontSize: '10px',
            height: '50px',
          }}
        >
          Go to About
        </IonButton>
      </IonContent>
    );
  };

  return (
    <IonPage>
      {renderHeader()}
      {renderContent()}
    </IonPage>
  );
};
