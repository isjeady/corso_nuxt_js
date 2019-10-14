<template>
    <div class="admin-auth-page">
        <p class="mt-64 text-3xl">{{ isLogin ? 'Login' : 'Registrati' }}</p>
        <p class="text-2xl red">{{ error }}</p>
        <div class="bg-white shadow-md rounded px-8 pt-20 pb-8 mb-4 mt-1">
            <div class="w-64 inline-block">

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                        E-Mail
                    </label>
                    <input v-model="user.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="title" type="email" placeholder="Title">
                     <p class="text-red-500 text-xs italic">Please Email</p>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Password
                    </label>
                    <input v-model="user.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="title" type="password" placeholder="Title">
                     <p class="text-red-500 text-xs italic">Please Password</p>
                </div>


                <button v-if="!loading" @click="invia" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {{ isLogin ? 'Login' : 'Registrati' }}
                </button>
                <button v-else class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">Loading...</button>

            </div>
            <br><br><br>
            <button @click="changeLogin">Switch to {{ isLogin ? 'Registrati' : 'Login' }}</button>
        </div>
    </div>
</template>

<script>
import config from '@/config';

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
  },
  data() {
    return {
      isLogin: true,
      loading: false,
      error: '',
      user : {
          email : '',
          password : ''
      }
    }
  },
  methods :{
      changeLogin(){
          this.isLogin = !this.isLogin;
      },
      invia(){
        this.loading = true;
        var urlServer = config.firebase.urlAuth;
        if(this.isLogin){
            urlServer = urlServer + '/accounts:signInWithPassword?key=' + config.firebase.apiKey,body;
        }else{
            urlServer = urlServer + '/accounts:signUp?key=' + config.firebase.apiKey,body;
        }

        console.log(this.user);
        const body = {
                  email : this.user.email,
                  password : this.user.password,
                  returnSecureToken : true
        }

        this.$axios.post(urlServer,body)
        .then(result => {
            console.log(result.data);
            //result.data.expiresIn *
            const token = result.data.idToken;
            const expiresIn = result.data.expiresIn;
            const tokenExpiresIn = new Date().getTime() + Number.parseInt(expiresIn) * 1000;

            this.$store.commit('setToken',token);

            this.$cookies.set("token",token);
            this.$cookies.set("tokenExpiresIn",tokenExpiresIn);

            localStorage.setItem("token",token);
            localStorage.setItem("tokenExpiresIn",tokenExpiresIn);
            this.loading = false;
            this.$router.push('/admin');
        })
        .catch( e => {
            this.loading = false;
            this.error = e.response.data.error.errors[0].message;
        });

      }
  }
}
</script>
