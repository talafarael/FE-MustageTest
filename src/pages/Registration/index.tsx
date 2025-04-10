import { AuthForm } from '@/components/organisms/AuthForm'
import { Link } from "react-router";


export const Registration = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Registration</h1>
        <AuthForm typeAuth="registration" />
        <p className="mt-6 text-center text-sm text-gray-600">
          You have account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>

  )
}
