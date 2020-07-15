import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, EyeOutlined ,
    ShoppingCartOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css'
//引入样式
import './css/App.css'

//引入页面组件
import Home from './pages/Home'
import Sort from './pages/Sort'
import Cart  from './pages/Cart'
import Mine from './pages/Mine'


class App extends React.Component {

    state = {
        current: '/home',
        menu: [{
            title: '首页',
            path: '/Home',
            icon: <HomeOutlined />,
            component: Home,
        }, {
            title: '分类',
            path: '/Sort',
            icon: < EyeOutlined />,
            component:Sort,
        }, {
            title: '购物车',
            path: '/Cart',
            icon: < ShoppingCartOutlined/>,
            component: Cart,
        },
        {
            title: '我的',
            path: '/Mine',
            icon: <UserOutlined/>,
            component: Mine,
        }
    ]
    }
    changeMenu = ({ key, item }) => {
        console.log('key=', key, item);
        this.goto(key);
        this.setState({
            current: key
        })

    }
    goto = (path) => {
        this.props.history.push(path);
    }
    componentDidMount() {
        const { location: { pathname } } = this.props;
        this.setState({
            current: pathname
        })
    }
    render() {
        const { menu, current } = this.state;
        return (
            <div className="container">
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            onClick={this.changeMenu}
                            className="menu"
                            selectedKeys={[current]}
                           
                        >
                            {
                                menu.map(item => (
                                    <Menu.Item title={item.title} key={item.path} icon={item.icon} className="item">{item.title }</Menu.Item>
                                ))
                            }
                        </Menu>

                <Switch>
                    {
                        menu.map(item => <Route key={item.path} path={item.path} component={item.component} />)
                    }
                 
                    <Redirect from='/' to='/home' exact />
                </Switch>
            </div>
        )
    }
}
App = withRouter(App);
export default App;

