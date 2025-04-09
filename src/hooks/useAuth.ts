import { useTokenStore } from "@/store/authTokenStore";
import { useLoginMutation, useRegistrationMutation } from "../api/authApi/auth";
import { IUserCreate } from "@/types/api/IUserCreate";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";



export const useLogin = () => {

}
export const useLogOut = () => {
  const navigate = useNavigate()
  const { removeToken } = useTokenStore()
  const { removeUser } = useUserStore()
  const logOut = () => {
    window.store.delete('token')
      .then(() => console.log('Token deleted successfully'))
      .catch((error) => console.error('Error deleting token:', error));

    removeToken();
    removeUser()
    navigate('/login');
  }
  return { logOut }
}
export const useAuth = () => {
  const registrationMutation = useRegistrationMutation()
  const loginMutation = useLoginMutation();

  const { setToken } = useTokenStore()
  const navigate = useNavigate()
  const auth = async (body: IUserCreate, type: "login" | "registration") => {
    try {
      const data = type == "login" ? await loginMutation.mutateAsync(body) : await registrationMutation.mutateAsync(body)


      if (data?.data && data?.data?.token) {

        window.store.set('token', data.data.token)
          .then(() => console.log('Value set successfully'))
          .catch((error) => console.error('Error setting value:', error));
        setToken(data.data.token)
        navigate('/')

      }

      return data
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  return { auth }
}
