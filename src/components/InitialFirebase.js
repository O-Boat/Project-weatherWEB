import * as firebase from 'firebase/app';

export default function InitailFirebase(){
    var config = {
        apiKey: "AIzaSyD5N6lO2HAWfWVPnRsqqcm-wDWbEkNnljs",
        authDomain: "weather-checker-web.firebaseapp.com",
        databaseURL: "https://weather-checker-web.firebaseio.com",
        projectId: "weather-checker-web",
        storageBucket: "weather-checker-web.appspot.com",
        messagingSenderId: "373813395448",
        appId: "1:373813395448:web:acf66f58c13f481363600d",
        measurementId: "G-E3BH7FNM0R"
    }
    firebase.initializeApp(config);
}