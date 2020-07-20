import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, UnorderedListOutlined ,
    ShoppingCartOutlined} from '@ant-design/icons';
 import {withRouter} from 'react-router-dom'

import 'antd/dist/antd.css'
import '../css/Tabbar.css'



//引入页面
import Home from '../pages/Home';
import Sort from '../pages/Sort';
import Cart from '../pages/Cart';
import Mine from '../pages/Mine';


class Tabbar extends React.Component {
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
            icon: < UnorderedListOutlined />,
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
      </div>
    );
  }
}

Tabbar = withRouter(Tabbar)
export default Tabbar