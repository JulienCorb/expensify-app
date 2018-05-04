import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//     snapshot.forEach(s => {
//       expenses.push({
//         id: s.key,
//         ...s.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(s => {
//       expenses.push({
//         id: s.key,
//         ...s.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'gas bill',
//   note: 'last bill for gas',
//   amount: 12000,
//   createdAt: 234567890
// });


// database.ref('notes/-LBZjTFLqRyY3Ip4ILbB').update({
//   body: 'go to the gym'
// });

// database.ref('notes/-LBZjTFLqRyY3Ip4ILbB').remove();

// database.ref('notes').push({
//   title: 'courses',
//   body: 'React, React Native'
// });

// const onValueChange = database.ref().on('value', snapshot => {
//   console.log(snapshot.val().name, ' is ', snapshot.val().job.title, ' at ', snapshot.val().job.company);
// }, e => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10000);

// database.ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data', e)
//   });

// database.ref().set({
//   name: 'Uj Corb',
//   age: 24,
//   stressLevel: 4,
//   job: {
//     title: 'software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Lille',
//     country: 'France'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch(e => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Eze'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('data was removed.');
//   }).catch(e => {
//     console.log('counld not remove data: ', e)
//   });
