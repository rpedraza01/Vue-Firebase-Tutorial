import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD9V_iF8bV6X-XojsH4mXoWutgAGHeJXN8",
    authDomain: "vuefirebasetutorial-6e374.firebaseapp.com",
    databaseURL: "https://vuefirebasetutorial-6e374.firebaseio.com",
    projectId: "vuefirebasetutorial-6e374",
    storageBucket: "vuefirebasetutorial-6e374.appspot.com",
    messagingSenderId: "48884225554",
}
firebase.initializeApp(config)

// firebase utilities
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyD9V_iF8bV6X-XojsH4mXoWutgAGHeJXN8",
//     authDomain: "vuefirebasetutorial-6e374.firebaseapp.com",
//     databaseURL: "https://vuefirebasetutorial-6e374.firebaseio.com",
//     projectId: "vuefirebasetutorial-6e374",
//     storageBucket: "vuefirebasetutorial-6e374.appspot.com",
//     messagingSenderId: "48884225554",
//     appId: "1:48884225554:web:5665ba9082828fbaa16acb",
//     measurementId: "G-GHFSK5NC2B"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>