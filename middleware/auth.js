export default function ({ store, redirect }){
    console.log('isAuth : ' + store.getters.isAuth)
    if(!store.getters.isAuth){
        redirect('/admin/auth')
    }
}