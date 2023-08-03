/*
 * @Author: 天勇 343975805@qq.com
 * @Date: 2023-04-26 17:24:08
 * @LastEditors: 天勇 343975805@qq.com
 * @LastEditTime: 2023-04-27 14:10:35
 * @FilePath: \demo\react\react-mangement\src\main.tsx
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
/* 正确的样式引入顺序 */
/* 初始化样式放在最前面 */
import "reset-css"
/* UI框架样式 */

/* 全局样式 */
import '@/assets/styles/global.scss'
/* 组件样式 */
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'

/* 路由的使用  路由写法一*/
// import Router from './router'
/* ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
) */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
