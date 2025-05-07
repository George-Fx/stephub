import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import {svg} from '../svg';

type Props = {
  title?: string;
  showGoBack?: boolean;
};

export const Header: React.FC<Props> = ({showGoBack, title}) => {
  const renderGoBack = () => {
    // if (!showGoBack) return null;
    return (
      <button
        // onClick={() => router.back()}
        style={{
          left: '0px',
          padding: '0 20px',
          position: 'absolute',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        <svg.GoBackSvg />
      </button>
    );
  };

  const renderTitle = () => {
    if (!title) return null;

    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h4 style={{fontFamily: 'var(--mulish)'}}>{title}</h4>
      </div>
    );
  };

  return (
    <IonHeader
      translucent={true}
      // collapse='condense'
      mode='ios'
      style={{
        boxShadow: '0 0 0',
      }}
    >
      <header
        style={{
          height: '48px',
          // background: '#222',
          display: 'flex',
          alignItems: 'center',
          // border: '1px solid red',
          // padding: '0 16px',
        }}
      >
        {renderGoBack()}
        {renderTitle()}
      </header>
    </IonHeader>
  );
};
