import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ReactLoadable from 'react-loadable';
import Error404 from '@/pages/error/Error404';
import PageLoading from "@/layouts/page-loading";
import PageFrame from '@/layouts/frame';
import AppTabBar from '@/layouts/frame/AppTabBar.jsx'
import KeepAuthRoute from './KeepAuthRoute';
import routes, { noFrameRoutes, AuthRoutes, yesTabBarRoutes } from './routes';


// 如果项目挂载到网站的子目录下，可以配置ROUTE_BASE_NAME， 开发时拿不到 PUBLIC_URL
// export const ROUTE_BASE_NAME = '/react-admin-live';

// 直接挂载到域名根目录
export const ROUTE_BASE_NAME = '';

// 代码分割处理
const allRoutes = routes.map(item => {
    return {
        path: item.path,
        component: ReactLoadable({ loader: item.component, loading: PageLoading }),
    };
});
class AppRouter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        // const {noFrame: queryNoFrame, noAuth} = this.props.query;
        // const {systemNoFrame} = this.props;
        // allRoutes为全部路由配置，根据用户可用 菜单 和 功能 的path，对allRoutes进行过滤，可以解决越权访问页面的问题
        // commonPaths 为所有人都可以访问的路径
        // const {userPaths} = this.props;
        // const allPaths = [...userPaths, ...commonPaths];
        // const userRoutes = allRoutes.filter(item => allPaths.includes(item.path));

        const userRoutes = allRoutes;
        return (
            <BrowserRouter basename={ROUTE_BASE_NAME}>
                <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', minHeight: '100vh' }}>
                    <Route path="/" render={props => {
                        if (noFrameRoutes.includes(props.location.pathname)) return null;
                        return <PageFrame {...props} />;
                    }} />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Switch>
                        {userRoutes.map(item => {
                            const { path, component } = item;
                            let isNoAuthRoute = false;
                            // 不需要登录的页面
                            if (AuthRoutes.includes(path)) isNoAuthRoute = true;

                            return (
                                <KeepAuthRoute
                                    key={path}
                                    exact
                                    path={path}
                                    Auth={isNoAuthRoute}
                                    component={component}
                                />
                            );
                        })}
                        <Route component={Error404} />
                    </Switch>
                    <Route path="/" render={props => {
                        if (!yesTabBarRoutes.includes(props.location.pathname)) return null;
                        return <AppTabBar {...props} />;
                    }} />
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;