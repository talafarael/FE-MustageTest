import { AuthForm } from '@/components/organisms/AuthForm';
import React from 'react'
import { useEffect, useState } from 'react';
export const Login = () => {
  const [user, setUser] = useState(null);



  const handleSetValue = () => {
    window.store
      .set('myKey', 'newValue')
      .then(() => console.log('Value set successfully'))
      .catch((error) => console.error('Error setting value:', error));
  };

  return (
    <div>
      <AuthForm typeAuth='login' />

    </div>
  )
}
