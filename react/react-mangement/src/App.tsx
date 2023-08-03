/*
 * @Author: 天勇 343975805@qq.com
 * @Date: 2023-04-26 18:34:29
 * @LastEditors: 天勇 343975805@qq.com
 * @LastEditTime: 2023-04-28 09:52:40
 * @FilePath: \demo\react\react-mangement\src\App.tsx
 * @Description: 
 */
import { useState } from 'react'
/* import Comp1 from "@/components/Comp1"
import Comp2 from '@/components/Comp2'
import {Button} from 'antd'
import {StepForwardOutlined} from "@ant-design/icons" */
import {useRoutes,Link} from 'react-router-dom'
/* antd注意版本不一样可能导入的样式方式不一样 antd @5不在支持 */
// import 'antd/dist/antd.css' /* 全部组件的样式都引入了 */
import router from './router'

function App() {
  const [count, setCount] = useState(0)
  const Outlet= useRoutes(router)
  return (
    <div className='App'>
      {/* 使用标签进行跳转 */}
     {/* <Link to='/home'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/user'>user</Link> */}
     

     {/*  顶级组件
      <Comp1/>
      <Comp2/>
      <Button type="primary">测试</Button>
      <StepForwardOutlined  style={{fontSize:'40px'}}/> */}
      {/* Outlet占位符组件 用来展示组件*/}
      {/* <Outlet></Outlet> */}
      {Outlet}
    </div>
  )
}

export default App
