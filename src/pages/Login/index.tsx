import { AuthForm } from '@/components/organisms/AuthForm';
import { Link } from "react-router";
export const Login = () => {



  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <AuthForm typeAuth="login" />
        <p className="mt-6 text-center text-sm text-gray-600">
          You dont have account
          <Link to="/registration" className="text-blue-600 hover:underline font-medium">
            Registration
          </Link>
        </p>
      </div>
    </div>

  )
}
