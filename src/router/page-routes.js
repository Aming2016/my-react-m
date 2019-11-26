// 此文件是通过脚本生成的，直接编辑无效！！！

// 不需要顶部导航框架的页面路径
export const noFrames = [
    '/login'
];

//需要底部按钮的
export const yestabbar = [
    '/home',
    '/mine'
];

//需要登录才可以访问的页面路径
export const Auths = [
    '/mine'
];
// 需要keep alive 页面
export const keepAlives = [
    {
        path: '/home',
        keepAlive: true,
    },
  
];

// 页面路由配置
export default [
    {
        path: '/login',
        component: () => import('@/pages/login'),
    },
    {
        path: '/home',
        titleName:'首页',
        component: () => import('@/pages/home'),
    },
    {
        path: '/mine',
        titleName:'我的',
        component: () => import('@/pages/mine'),
        authquery:true,
    },
];
