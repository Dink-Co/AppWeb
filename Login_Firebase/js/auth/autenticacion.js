class Autenticacion {
    autEmailPass (email, password) {
      //$('#avatar').attr('src', 'imagenes/usuario_auth.png')
      //Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
      //$('.modal').modal('close')
     
    }
  
    crearCuentaEmailPass (email, password, nombres) {

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result =>{
          result.user.updatePorfile({
            displayName : nombres 
          })
          const configuracion = {
            url : 'http://localhost/Login_Firebase/user/'
          }

          result.user.sendEmailVerification(configuracion).catch(error =>{
            console.error(error)
            Materialize.toast(error.messager,4000)
          })
          firebase.auth().signOut()
          Materialize.toast(
            `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
            4000
          )
          $('.modal').modal('close')
        })
        .catch(error =>{
          console.error(error)
          Materialize.toast(error.messager,4000)
        })

        
      /*Materialize.toast(
        `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
        4000
      )
  
      $('.modal').modal('close')*/
      
    }
  
    authCuentaGoogle () {
      //$('#avatar').attr('src', result.user.photoURL)
      //$('.modal').modal('close')
      //Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
    }
  
    authCuentaFacebook () {
      //$('#avatar').attr('src', result.user.photoURL)
      //$('.modal').modal('close')
      //Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
    }
  
    authTwitter () {
      // TODO: Crear auth con twitter
    }
  }
  