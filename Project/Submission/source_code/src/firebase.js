import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDuzw4g6DqkntXLVXSdqQVOJYS-khjI4yg",
    authDomain: "webfinal-7179b.firebaseapp.com",
    databaseURL: "https://webfinal-7179b.firebaseio.com",
    projectId: "webfinal-7179b",
    storageBucket: "webfinal-7179b.appspot.com",
    messagingSenderId: "760697561840",
    appId: "1:760697561840:web:5019f400c99f81f5181835"
  };


firebase.initializeApp(firebaseConfig);

export{
    firebase
}