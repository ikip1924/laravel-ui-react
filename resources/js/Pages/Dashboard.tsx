import AppLayout from '@/Layouts/app-layout'
import React from 'react'

export default function Dashboard() {
  return (
    <div>You are Log in</div>
  )
}

Dashboard.layout = (page: React.ReactNode) => <AppLayout children={page}/>
