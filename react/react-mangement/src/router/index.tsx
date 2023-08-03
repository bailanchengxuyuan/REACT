/* react18之前路由写法 */
/* import App from '../App'
import Home from '../views/home/home'
import About from '../views/about/about'
import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom' */

/* 路由的两种模式
BrowserRouter HisTory模式
HashRouter    hash模式
区别
样式区别:#
*/

/* const baseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} */
/* 没有逻辑的时候代码简写 */
// const baseRouter = () => (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<App/>}>
//                     {/* 配置用户访问/的时候，重定向到 /home*/}
//                     <Route path='/' element={<Navigate to='/home'/>}></Route>
//                     <Route path='/home' element={<Home/>}></Route>
//                     <Route path='/about' element={<About/>}></Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
// )

// export default baseRouter


/* 组件式路由写法 */
import React, { lazy } from 'react' /* 路由懒加载 */
import Home from '@/views/home/home'
/* const About = lazy(() => import('@/views/about/about'))
const User = lazy(() => import('@/views/user/user')) */
const Page1 = lazy(() => import('@/views/Page1'))
const Page2 = lazy(() => import('@/views/Page2'))


import { Navigate } from 'react-router-dom'

// 报错解决 component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
/* 路由懒加载需要用一下方法包裹 */
const withLoadingComponent = (comp:JSX.Element) => (
<React.Suspense fallback={<div>Loading...</div>}>
  {comp}
</React.Suspense>)

const routes = [
    /* 路由的默认跳转位置 */
    {
        path: "/",
        element: <Navigate to='/page1'></Navigate>
    },
    {
        path:'/',
        element:<Home></Home>,
        /* 嵌套路由 */
        children: [
            {
                path: "/page1",
                element:withLoadingComponent(<Page1/>)
            },
            {
                path: "/page2",
                element:withLoadingComponent(<Page2/>)
            }
        ]
    }
   /*  {
        path: "/home",
        element: <Home></Home>
    },
    {
        path: "/about",
        element:withLoadingComponent(<About/>)
          
    },
    {
        path: "/user",
        element:withLoadingComponent(<User/>)
            
    } */

]

export default routes