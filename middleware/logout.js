export default function ({ app,store,redirect,req }){
        console.log('Logout');
        store.commit("clearToken");
        app.$cookies.removeAll();
        if(process.client){
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExpiresIn");
        }

        redirect('/admin/auth')
}