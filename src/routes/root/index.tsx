import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router'
const Root: React.FC = () => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      <body><Outlet/></body>
    </html>
  )
}

export default Root