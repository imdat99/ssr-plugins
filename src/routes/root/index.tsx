import React, { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router'
const Root: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <html lang={i18n.language} dir={i18n.dir(i18n.language)}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      <body className="font-sans bg-gray-50 text-gray-800 antialiased flex flex-col min-h-screen">
        <Outlet />
      </body>
    </html>
  )
}
export { ErrorBoundary } from "./ErrorBoundary";
export { Root as Component }
export default Root