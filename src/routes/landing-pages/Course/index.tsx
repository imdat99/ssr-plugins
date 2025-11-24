import Header from 'components/Header'
import React from 'react'
import { Outlet } from 'react-router'

export const Component = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Component