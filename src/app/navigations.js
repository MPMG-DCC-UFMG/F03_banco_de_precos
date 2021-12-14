import { authRoles } from './auth/authRoles'

export const navigations = [
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
