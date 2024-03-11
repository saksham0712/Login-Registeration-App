import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/AuthContext.jsx";

const useSignup = () => {
   const authContext = useAuth(); 
   const { login } = authContext || {};  // Check for existence of authContext before destructuring
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   const registerUser = async (values) => {
    if(values.password !== values.passwordConfirm){
        return setError('Passwords are not the same');
    }
    
    try {
        setError(null);
        setLoading(true);
        const res = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        });
        const data = await res.json();
        if(res.status===201){
            message.success(data.message);
            login && login(data.token, data.user);  // Check if login function exists before calling it
        }
        else if(res.status===400){
            setError(data.message);
        }
        else{
            message.error('Registration failed');
        }
    } catch (error) {
        message.error(error.message || 'An error occurred');
    } finally {
      setLoading(false);  
    }
   };
  
  return {loading, error, registerUser };
};

export default useSignup;
