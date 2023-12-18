import React from 'react'

const Home = React.lazy( ()=> import('./Views/Home'))
const View2 = React.lazy( ()=> import('./Views/View2'))
const View3 = React.lazy( ()=> import('./Views/View3'))
const View4 = React.lazy( ()=> import('./Views/View4'))
const View5 = React.lazy( ()=> import('./Views/View5'))
const CartPage = React.lazy( ()=> import('./Views/CartPage'))
const FavoriteItemsPage = React.lazy( ()=> import('./Views/FavoriteItemsPage'))
const ProductPage = React.lazy( ()=> import('./Views/ProductPage'))
const SignUp = React.lazy( ()=> import('./Views/SignUp'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    {path: 'Home', name: 'Home', element: Home},
    {path: 'view2', name: 'View2', element: View2},
    {path: 'view3', name: 'View3', element: View3},
    {path: 'view4', name: 'View4', element: View4},
    {path: 'view5', name: 'View5', element: View5},
    {path: 'cart', name: 'CartPage', element: CartPage},
    {path: 'favorite', name: 'FavoriteItemsPage', element: FavoriteItemsPage},
    {path: 'SignUp', name: 'SignUp', element: SignUp},
    {path: 'product/:id', name: 'ProductPage ', element: ProductPage}
]
export default routes;