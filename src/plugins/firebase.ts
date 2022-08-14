import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
// Your web app's Firebase configuration
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
  initializeApp(firebaseConfig)
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
