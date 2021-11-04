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