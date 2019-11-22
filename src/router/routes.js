import pageRoutes, {Auths, yestabbar, keepAlives,noFrames} from './page-routes';

// 不需要顶部的页面配置
export const noFrameRoutes = noFrames;

// 不需要登录的页面
export const AuthRoutes = Auths;

// 需要keep alive 页面
export const keepAliveRoutes = keepAlives;

// 所有人都可以访问的页面
export const yesTabBarRoutes = yestabbar;
/*
* 非脚本抓取的路由，可以在这里编辑，脚本抓取的路由在./src/pages/page-routes.js中
* */
export default [
    // {path: '/', component: () => import('../pages/home/index')},
].concat(pageRoutes);