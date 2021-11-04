<template>
  <div class="about">
    <h1>Register</h1>
    <form @submit.prevent="register">
            <label for="">Enter your Email</label> <br>
            <input type="email" v-model="email" placeholder="enter your email" required> <br> <br>
            <label for="">Enter your password</label>  <br>
            <input type="password" v-model="password" placeholder="enter your password" required> <br> <br>
            <button type="submit">Register</button>
        </form>
  </div>
</template>


<script>
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
/*
Firebase Auth has a method called createuserWithEmailAndPassword. 
You need to pass in the user’s email and password. 
This method will either register the user and return a user object or it will return an error message. 
Let’s implement this method now.
*/
export default {
  
    data(){
      return {
      email :  '',
      password  : ''
    };
    },

    methods:  {
      /*
        If the user was successfully registered you should get an alert and be redirected to the login page.
        If the registration fails you should get an alert with an error message
      */
      register(){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then( ( ) => {
          alert('Successfully registered !  please Login')
          this.$router.push('/')
          // go  to authentication to view the registered  email
        })
        .catch( error  => {
          alert(error.message)
        })

      }
    }

}
</script>






