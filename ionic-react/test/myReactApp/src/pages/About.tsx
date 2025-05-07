import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        {/* <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id='container'>
          <strong>About this app</strong>
          <p>This is a sample Ionic app.</p>
        </div> */}
        <p>This is a sample Ionic app.</p>
      </IonContent>
    </IonPage>
  );
};

export default About;
