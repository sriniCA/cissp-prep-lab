// ─────────────────────────────────────────────────────────────────────────────
// Firebase Configuration — fill this in with YOUR Firebase project values.
//
// How to get these values:
//   1. Go to https://console.firebase.google.com
//   2. Create a project (or open an existing one)
//   3. Project Settings (gear icon) → General → "Your apps" → Web app (</>)
//   4. Register the app, then copy the firebaseConfig object values below
//   5. In Firebase console: Authentication → Sign-in method → enable "Google"
//   6. In Firebase console: Firestore Database → Create database (Start in test mode)
//   7. In Firestore: Rules → paste the security rules from the README
// ─────────────────────────────────────────────────────────────────────────────

window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// The Gmail address that will have admin access to the admin panel.
// Change this to your own Gmail address.
window.CISSP_ADMIN_EMAIL = "srini.malipeddi@gmail.com";
