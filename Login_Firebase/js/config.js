function registrar(){
var correo = document.getElementById('email').value;
var password = document.getElementById('password').value;
console.log(correo +password );
firebase.auth().createUserWithEmailAndPassword(correo, password).catch(function(error) {

  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
  // ...
});
    
}

function ingresar(){
  var email = document.getElementById('email2').value;
  var password = document.getElementById('password2').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  var password = document.getElementById('password2').value="";
  var email = document.getElementById('email2').value = "";
}

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("existe usuario")
      aparece()
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no exite usuario")
      // ...
    }
  });
}
observador();

function aparece(){
  var contenido = document.getElementById('contenido');
  contenido.innerHTML = '<button onclick="singOut()">Cerrar Sesion</button> <p>Su session esta iniciada</p>';
}

function singOut(){
  firebase.auth().signOut().then(function(){
    console.log("SALIO DE LA SESION....")
  }).catch(function(error){
    console.log(error)
  })
  var contenido = document.getElementById('contenido');
  contenido.innerHTML = '';
}