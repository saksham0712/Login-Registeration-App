import { Button } from 'antd'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
  const authContext = useAuth();
  console.log('authContext in Dashboard:', authContext);

  const { logout } = authContext || {};


  return (
    <>
      <div>
        Dashboard
      </div>
      <Button onClick={logout}>Logout</Button>
    </>
  )
}

export default Dashboard
