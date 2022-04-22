const auth = firebase.auth()
var user = auth.currentUser
const db = firebase.firestore()

    var submit = document.getElementById('submit')
    submit.addEventListener('click', register)


function register() {
        var username = document.getElementById('username').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        var name = document.getElementById('name').value
        var lastname = document.getElementById('lastname').value
        var old = document.getElementById('old').value
        var sex = document.getElementById('sex').value
        var submit = document.getElementById('submit').value


        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                user=userCredential.user; 
      console.log("into");
      Swal.fire({
        title: 'Loged In',
        text: "back to sign in ?",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("passed");
          window.location.href = 'index.html'
        }
                })
                console.log()
                auth.signInWithEmailAndPassword(email, password)
                console.log(user.uid)
                db.collection("User").doc(user.uid).set({
                    Username: username,
                    Email: email,
                    Password: password,
                    Name: name,
                    lastname :lastname,
                    old: old,
                    Sex: sex
                })
                console.log("Success")

            })
            .catch((error) => {
                var errorCode = error.code
                var errorMessage = error.message
                console.log("Error " + errorCode + " : " + errorMessage)
            })
        }
