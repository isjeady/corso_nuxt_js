export default function ({ app,store,redirect,req }){
    console.log('isAuth : ' + store.getters.isAuth)

    if(process.client){
        /*
        app.$cookies.set('cookie-name', 'cookie-value', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })

        const cookieRes = app.$cookies.get('cookie-name')
        */
        if(req){
            if(!req.headers.cookie){
                return;
            }
            const token = app.$cookies.get('token')
            const expiresIn = app.$cookies.get('tokenExpiresIn')
            if(!token || !expiresIn)
                return;
        }

        const token = localStorage.getItem("token");
        const tokenExpiresIn = localStorage.getItem("tokenExpiresIn");

        if(new Date().getTime() > +tokenExpiresIn || !token){
          //TODO: Logout
          return;
        }

        store.commit("setToken",token);
    }

    if(!store.getters.isAuth){
        redirect('/admin/auth')
    }
}