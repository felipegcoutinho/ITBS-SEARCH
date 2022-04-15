
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBr3cZfMJqnvmpQP8d1Fcm68wXjdcMU50",
    authDomain: "intricate-muse-332814.firebaseapp.com",
    databaseURL: "https://intricate-muse-332814-default-rtdb.firebaseio.com",
    projectId: "intricate-muse-332814",
    storageBucket: "intricate-muse-332814.appspot.com",
    messagingSenderId: "386475784290",
    appId: "1:386475784290:web:48e97ceddcb409a12ff93b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const modelo = document.getElementById('modelo');
const status = document.getElementById('status');
const setor = document.getElementById('setor');
const categoria = document.getElementById('categoria');
const importantes = document.getElementById('importantes');
const guia = document.getElementById('guia');
const datasheet = document.getElementById('datasheet');
const manual = document.getElementById('manual');
const pagina = document.getElementById('pagina');
const descricao = document.getElementById('descricao');

const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn'); 