// test on auth user
export default function ({store, redirect}) {
  if(!store.getters.isAuth) {
    redirect('/login')
  }
}
