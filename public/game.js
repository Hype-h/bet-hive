// Firebase Game Logic
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = { /* your Firebase config */ };
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

function play(gameType) {
  const playGame = httpsCallable(functions, 'playGame');
  playGame({ gameType, betAmount: 100 })
    .then(result => alert(`Result: ${result.data.result}, Payout: ${result.data.payout}`))
    .catch(err => alert(`Error: ${err.message}`));
}