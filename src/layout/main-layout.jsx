import { Stack } from '@mui/material'
import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router'


 
export default function  MainLayout () {
  return (
    <Stack justifyContent={"space-between"} height={"100vh"}>
        <div>
            <div>
                <Header />
            </div>
            <div>
               <Outlet/>
            </div>
            <div>
               
                <Footer/>
            </div>
        </div>
    </Stack>
  )
}


