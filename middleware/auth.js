export default function ({ store, redirect }){
    console.log('isAuth : ' + store.getters.isAuth)
    
    if(process.client){
        store.dispatch('verifyAuth');
    }

    if(!store.getters.isAuth){
        redirect('/admin/auth')
    }
}