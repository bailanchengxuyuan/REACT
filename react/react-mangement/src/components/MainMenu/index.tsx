/*
 * @Author: 天勇 343975805@qq.com
 * @Date: 2023-05-04 11:03:30
 * @LastEditors: 天勇 343975805@qq.com
 * @LastEditTime: 2023-05-04 11:26:48
 * @FilePath: \demo\react\react-mangement\src\components\MainMenu\index.tsx
 * @Description: 
 */
import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

/* function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'page3', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
]; */
/*登录请求之后对菜单进行操作 */
const items: MenuItem[] = [
  {
    label: '菜单1',
    key: '/page1',
    icon: <PieChartOutlined />,

  },
  {
    label: '菜单2',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: '菜单3',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '菜单3-1',
        key: '/page3/page3-1',
      },
      {
        label: '菜单3-2',
        key: '/page3/page3-2',
      },
      {
        label: '菜单3-3',
        key: '/page3/page3-3',
      }

    ]
  },
  {
    label: '菜单4',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: '菜单4-1',
        key: '/page4/page4-1',
      },
      {
        label: '菜单4-2',
        key: '/page4/page4-2',
      }
    ]
  },
  {
    label: '菜单5',
    key: 'page5',
    icon: <FileOutlined />,
    children: [
      {
        label: '菜单5-1',
        key: '/page5/page5-1',
      },
      {
        label: '菜单5-2',
        key: '/page5/page5-2',
      }

    ]
  }
]

const CompMainMenu: React.Fc = () => {
  const [openKeys, setOpenKeys] = useState(['']);
  const NavigateTo = useNavigate()

  /* 
  路由点击事件:点击之后跳转到对应路由
  编程式导航的跳转
  利用hook
   */
  const menuClick = (e: { key: string }) => {
    /* console.log(e.key); */
    NavigateTo(e.key)

  }

  /* 左边菜单的点击收缩与展开的问题 */
  const handleOpenChange = (keys: string[]) => {
    /* 
    keys是一个数组，记录了当前哪一项是展开的(用key记录)
    展开和回收执行这里的代码
     */
    console.log(keys);
    // 设置成获取数组的最后一项
    setOpenKeys([keys[keys.length - 1]])


  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/page1']}
      mode="inline"
      /* 菜单项数据 */
      items={items}
      onClick={menuClick}
      /*某项菜单的展开和回收事件 */
      onOpenChange={handleOpenChange}
      /* 当前菜单项的key数组 */
      openKeys={openKeys} />
  )
}
export default CompMainMenu