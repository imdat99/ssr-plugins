import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
export const Component = () => {
    return (
        <>
            <Header />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <div
  className="ssrWaterMark"
  style={{
    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnCndpZHRoPScyNjAnIGhlaWdodD0nMjYwJwpzdHlsZT0ndHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTsgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTsnPgogIDx0ZXh0IHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycKICAgIHg9JzUwJScgeT0nNTAlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBhbGlnbm1lbnQtYmFzZWxpbmU9J21pZGRsZScKICAgIGZpbGw9J3JnYmEoMTU2LCAxNjIsIDE2OSwgMC4xKScKICAgIGZvbnQtd2VpZ2h0PSdub3JtYWwnCiAgICBzdHlsZT0nZm9udC1zaXplOiAxNHB4OycKICAgIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCAnTWljcm9zb2Z0IFlhSGVpJywKICAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmIj4KICAgICAgR3Vlc3QgVXNlciA3MTQzNgogIDwvdGV4dD4KPC9zdmc+'), url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnCndpZHRoPScyNjAnIGhlaWdodD0nMjYwJwpzdHlsZT0ndHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTsgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTsnPgogIDx0ZXh0IHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycKICAgIHg9JzUwJScgeT0nNTAlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBhbGlnbm1lbnQtYmFzZWxpbmU9J21pZGRsZScKICAgIGZpbGw9J3JnYmEoMTU2LCAxNjIsIDE2OSwgMC4xKScKICAgIGZvbnQtd2VpZ2h0PSdub3JtYWwnCiAgICBzdHlsZT0nZm9udC1zaXplOiAxNHB4OycKICAgIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCAnTWljcm9zb2Z0IFlhSGVpJywKICAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmIj4KICAgICAgR3Vlc3QgVXNlciA3MTQzNgogIDwvdGV4dD4KPC9zdmc+')",
    backgroundRepeat: "repeat, repeat",
    backgroundPosition: "130px 130px, 0 0",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 100,
  }}
/>

            <Footer />
        </>

    )
}