import { Link } from 'assetLink'
import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router'
const Root: React.FC = () => {
  return (
    <html>
      <head>
        <Link rel="stylesheet" href="virtual:browser-entry#css" />
      </head>
      <body><Outlet/></body>
    </html>
  )
}

export default Root