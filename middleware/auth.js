export default function ({ store, redirect }) {
    if (!store.state.user) {
      return redirect('/login');
    }
    
    // if (store.state.user.role !== 'admin') {
    //   return redirect('/login');
    // }
}