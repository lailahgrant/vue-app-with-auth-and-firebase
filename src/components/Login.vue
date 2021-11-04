<template>
    
    <div>
        <form @submit.prevent="login">
            <label for="">Enter your Email</label> <br>
            <input type="email" v-model="email" placeholder="enter your email" required> <br> <br>
            <label for="">Enter your password</label> <br>
            <input type="password" v-model="password" placeholder="enter your password" required> <br> <br>
            <button type="submit">Login</button>
        </form>
    </div>

</template>


<script>
import { getAuth, signInWithEmailAndPassword} from  'firebase/auth'
/**
 * Firebase provides sample code to log in a user with an email address and password. 
 * The Firebase auth method we will use is signInWithEmailAndPassword.
 */

    export default {
        methods: {
            login(){
                const auth  = getAuth();
                signInWithEmailAndPassword(auth,  this.email,  this.password)
                .then( () =>  {
                    alert("Successfully logged in")
                    this.$router.push('/dashboard')
                })
                .catch( error => {
                    alert(error.message)
                })
            }
        }
    }

</script>






