import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
// Your web app's Firebase configuration
const recapchaSiteKey = '6Le1pJ8rAAAAAJK7ayUUVKedCEX7G53X3mZSB1Fc'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_API_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_API_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_API_ID,
  storageBucket: `${process.env.REACT_APP_API_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_API_SENDER_ID,
  appId: process.env.REACT_APP_ID,
}
export const initFireBase = () => {
  const app = initializeApp(firebaseConfig)
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(recapchaSiteKey),
    isTokenAutoRefreshEnabled: true,
  })
  return appCheck
}

export async function getImgUrl(path: string) {
  const storage = getStorage()
  const spaceRef = ref(storage, `${path}/demo1.png`)
  let imgUrl = ''
  try {
    imgUrl = await getDownloadURL(spaceRef)
  } catch (error) {
    console.error(error)
  }
  return imgUrl
}
