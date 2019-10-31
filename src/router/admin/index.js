export default {
    path :'/admin',
    name: 'admin',
    component : ()=> import('@/views/admin/Admin'),
    children :[
        {
            path: 'users',
            name: 'users',
            component : ()=> import('@/views/admin/users')
        },
        {
            path: 'movie',
            name: 'movie',
            component : ()=> import('@/views/admin/move')
        },
        {
            path: 'cinema',
            name: 'cinema',
            component : ()=> import('@/views/admin/cinema')
        },
        {
            path: '/admin',
            redirect:'users'
        }
    ]
}