import { useGetUserQuery } from "@/api/userApi/user"
import { useUserStore } from "@/store/userStore"
import { useEffect } from "react"



export const useGetUser = () => {
  const { data, error, isLoading, isSuccess } = useGetUserQuery()
  const { setUser, setLoading, setError } = useUserStore()

  useEffect(() => {
    setLoading(isLoading)

    if (isSuccess && data) {
      setUser(data.data)
      setError(null)
    }

    if (error) {
      setError("Failed to load user")
    }
  }, [isLoading, isSuccess, data, error, setUser, setLoading, setError])

  return { error, isLoading }
}
