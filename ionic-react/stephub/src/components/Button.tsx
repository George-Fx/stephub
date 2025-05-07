import React from 'react';
import {IonButton} from '@ionic/react';

import './Button.css';

type Props = {
  title: string;
};

export const Button: React.FC<Props> = ({title}) => {
  return (
    <button
      style={{
        height: 50,
        width: '100%',
        borderRadius: 12,
        background: 'var(--main-color)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          color: 'var(--main-yellow)',
          fontFamily: 'var(--mulish)',
          fontSize: 14,
          fontWeight: 900,
          textTransform: 'capitalize',
          textAlign: 'center',
        }}
      >
        {title}
      </span>
    </button>
  );
};
