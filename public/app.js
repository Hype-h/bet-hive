// Firebase App + Functions SDK init
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = { /* your config */ };
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
const auth = getAuth(app);

function playDiceGame() {
  const playDice = httpsCallable(functions, 'playDiceGame');
  playDice({ betAmount: 100 }).then(res => {
    alert(`You ${res.data.result}! Payout: ${res.data.payout}`);
  });
}

onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById('wallet-balance').textContent = 'Wallet: $1000';
  }
});