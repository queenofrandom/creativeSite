// The Cloud Functions for Firebase SDK
const functions = require('firebase-functions');

// The Firebase Admin SDK 
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://personal-blog-dffd8.firebaseio.com'
});

// List all the posts under the path /posts/
exports.posts = functions.https.onRequest((req, res) => {
  return admin.database().ref('/posts').once('value').then(function(snapshot) {
      res.status(200).send(JSON.stringify(snapshot));
  });
});