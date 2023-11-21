import { Index } from '../Index.jsx'
import { Empresa } from '../components/Empresa.jsx'
import { Support } from '../components/support.jsx'
import { SupportChofer } from '../components/support.chofer.jsx'
import { InicioUser } from '../components/inicioUser.jsx'
import { InicioChofer } from '../components/inicioChofer.jsx'
import { Login } from '../components/login.jsx'
import { Register } from '../components/register.jsx'
import { SigninEmpresaa } from '../components/sign.in.empresa.jsx'
import { Signinuser } from '../components/sign.in.user.jsx'
import { LoginUser } from '../components/login.user.jsx'
import { LoginEmpresa } from '../components/login.empresa.jsx'
import { createBrowserRouter} from "react-router-dom"
import ChoferAndUser from '../components/choferAndUser.jsx'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/choferuser",
        element: <ChoferAndUser />,
    },
    {
        path: "/empresa",
        element: <Empresa />,
    },
    {
        path: "/support",
        element: <Support />
    },
    {
        path: "/supportchofer",
        element: <SupportChofer />
    },
    {
        path: "/iniciouser",
        element: <InicioUser />
    },
    {
        path: "/iniciochofer",
        element: <InicioChofer />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/signingempresa",
        element: <SigninEmpresaa />
    },
    {
        path: "/signinguser",
        element: <Signinuser />
    },
    {
        path: "/loginuser",
        element: <LoginUser />
    },
    {
        path: "/loginempresa",
        element: <LoginEmpresa />
    },
]);