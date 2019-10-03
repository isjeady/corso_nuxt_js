export default function ({ app,store,redirect,req }){

        console.log('isAuth : ' + store.getters.isAuth)
        
        let token,tokenExpiresIn;
        if(req){
            if(!req.headers.cookie){
                redirect('/admin/auth/logout')
            }
            token = app.$cookies.get('token')
            tokenExpiresIn = app.$cookies.get('tokenExpiresIn')
        }else{
            token = localStorage.getItem("token");
            tokenExpiresIn = localStorage.getItem("tokenExpiresIn");
        }

        //check valid expire e token
        if(new Date().getTime() > +tokenExpiresIn || !token){
            redirect('/admin/auth/logout')
        }else{
            store.commit("setToken",token);
        }

        console.log('token : ' + token)

        if(!store.getters.isAuth){
            redirect('/admin/auth')
        }

}