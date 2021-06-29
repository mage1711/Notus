import '../styles/tailwind.css'
import { AppProps } from 'next/app'
import Navbar from '../components/NavBar'
import Axios from 'axios'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

Axios.defaults.baseURL = 'http://localhost:8000/api'
Axios.defaults.withCredentials = true

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const noNavRoutes = ['/register', '/login']
  const isNav = !noNavRoutes.includes(pathname)

  return (
    <Fragment>
      {isNav && <Navbar />}
      <Component {...pageProps} />
    </Fragment>
  )
}


export default App