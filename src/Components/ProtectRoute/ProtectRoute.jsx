import { Navigate } from "react-router-dom"
import { useAuth } from '../../context/useAuth'


// eslint-disable-next-line react/prop-types
const ProtectRoute = ({ children }) => {
  const { user, isLoading } = useAuth()
  if (isLoading) {
    return null;
  }


  return <>{user ? children : <Navigate to={'/'} />}</>
}

export default ProtectRoute
