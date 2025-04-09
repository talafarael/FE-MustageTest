import { useTokenStore } from "@/store/authTokenStore";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { setToken } = useTokenStore();
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState<boolean | null>(null);

  useEffect(() => {
    window.store.get('token').then((result) => {
      if (!result) {
        setHasToken(false);
      } else {
        setToken(result);
        setHasToken(true);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hasToken) {
    return <Navigate to="/login" />;
  }

  return children;
};
