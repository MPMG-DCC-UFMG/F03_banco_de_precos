import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        label: 'Login',
        type: 'label',
    },
    {
        name: 'Autenticação',
        icon: 'security',
        children: [
            {
                name: 'Login',
                iconText: 'SI',
                path: '/session/signin',
            },
            {
                name: 'Cadastre-se',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'Esqueci minha senha',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Error',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },
    
    {
        label: 'Páginas',
        type: 'label',
    },
    {
        name: 'Filtros',
        icon: 'format_list_bulleted',
        badge: { value: '1', color: 'secondary' },
        children: [
            {
                name: 'Banco de Preço',
                path: '/material/autocomplete',
                icon: 'developer_board',
            },
           
        ],
    },
   
]