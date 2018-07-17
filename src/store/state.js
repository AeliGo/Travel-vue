let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (err) {
}

export default {
  city: defaultCity
}
