export default{
  changecity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (err) {
    }
  }
}
