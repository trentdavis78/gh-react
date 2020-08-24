import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAZv9jNlXmTj2XsYR3VVw8FEvBddOAQATQ",
    authDomain: "fir-demo-a1ab2.firebaseapp.com",
    databaseURL: "https://fir-demo-a1ab2.firebaseio.com",
    projectId: "fir-demo-a1ab2",
    storageBucket: "fir-demo-a1ab2.appspot.com",
    messagingSenderId: "632643762973",
    appId: "1:632643762973:web:24fcf70228049a834dfff4",
    measurementId: "G-3BPBJH61QC"
  };


  firebase.initializeApp(config);

  export const database = firebase.database();

// database.ref().push({
//     code: '42',
//     imgSrc: 'https://m.media-amazon.com/images/I/61uKflIpsdL.jpg'
// }).then(() => {
//     console.log('Data is saved')
// }).catch((err) => {
//     console.log(`error: ${err}`)
// });

