import { store } from 'react-easy-state'

export const appStore = store({
  currentProfile: {
    email: '',
    password: ''
  },
  registrations: [],
  favorites: [],
  logged: false,
  set profile (object) {
    appStore.currentProfile = object
    localStorage.setItem('profile', JSON.stringify(object))
  },
  get profile () {
    const currentProfile = localStorage.getItem('profile')
    appStore.currentProfile = JSON.parse(currentProfile) || appStore.currentProfile
    return appStore.currentProfile
  },
  set register (obj) {
    appStore.registrations = [...appStore.registrations, obj]
    localStorage.setItem('registrations', JSON.stringify(appStore.registrations))
  },
  get register () {
    const registrations = localStorage.getItem('registrations')
    appStore.registrations = JSON.parse(registrations) || appStore.registrations
    return appStore.registrations
  },
  set login (state) {
    appStore.logged = state
    localStorage.setItem('logged', state)
  },
  get login () {
    const logged = localStorage.getItem('logged')
    appStore.logged = logged || appStore.logged
    return appStore.logged
  },
  set favoritesSaved (array) {
    appStore.favorites = array
    localStorage.setItem('favorites', JSON.stringify(appStore.favorites))
  },
  get favoritesSaved () {
    const favorites = localStorage.getItem('favorites')
    appStore.favorites = JSON.parse(favorites) || appStore.favorites
    return appStore.favorites
  }
})

export default appStore
