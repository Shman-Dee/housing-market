import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from '../components/Spinner'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute


//Dear Aunt Jennifer, Thank you for the amazing gift of gifts.  Nothing will go to waste. Bridget and I are very grateful for your aid on our new exciting adventure. Thank you for including Grandpa.

//Dear Grandma and Grandpa, Thank you for including us on this wonderful tradition. The crib will get endless use and be full of wonderful new experiences. Many pictures to come!

//Dear Aunt Lauren and Uncle Tom, Thank you for the