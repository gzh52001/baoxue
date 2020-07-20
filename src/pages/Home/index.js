import React, { Component } from 'react';
import { Carousel } from 'antd';
import { getList } from '../../utils/request'
import Tabbar from '../../components/Tabbar'
//引入样式
import '../Home/sy.css'


class Home extends Component {
    state = {
        list: []
    };

    getData = () => {
        getList().then(res => {
            console.log(res)

            this.setState({
                list: []

            })
        })
    }


    componentDidMount() {
        this.getData()

    }


    render() {

        const { list } = this.state;
        console.log(list);
        return (
            <div className="container">
                {/* 搜索框 */}
                <div className="header-container">
                    <div className="searchBar clear_fix">
                        <div className="logoImg"></div>
                        <div className="search-box">
                            <input type="search" placeholder="搜索商品，共235款好物" />


                        </div>
                    </div>
                    {/* 列表*/}
                    <div className="game-list ">



                        <ul >
                            <li >
                                <div className="game-item">
                                    <div className="game-icon">
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="game-item">
                                    <div className="game-icon">
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="game-item">
                                    <div className="game-icon">
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="game-item">
                                    <div className="game-icon">
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="game-item">
                                    <div className="game-icon">
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="game-item">
                                    <div className="game-icon">
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="game-item">
                                    <div className="game-icon">
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                    </div>
                                </div>
                            </li>
                        </ul>






                    </div>

                </div>

                {/*轮播图*/}
                <Carousel autoplay className="lunbo">
                    <div>
                        <img alt="" src="http://dmall-mc.nosdn.127.net/750x380.jpga94aa68f-6571-4fcb-ae27-4b9298984871"></img>
                    </div>
                    <div>
                        <img alt="" src="http://dmall-mc.nosdn.127.net/750x380.jpga94aa68f-6571-4fcb-ae27-4b9298984871"></img>
                    </div>
                    <div>
                        <img alt="" src="http://dmall-mc.nosdn.127.net/750x380.jpga94aa68f-6571-4fcb-ae27-4b9298984871"></img>
                    </div>
                    <div>
                        <img alt="" src="http://dmall-mc.nosdn.127.net/750x380.jpga94aa68f-6571-4fcb-ae27-4b9298984871"></img>
                    </div>


                </Carousel>
                {/*item*/}
                <div className="am-flexbox">

                    <div className="note-item">
                        <span>七天无理由退货</span>
                    </div>

                    <div className="note-item-netease">
                        <span>网易品质保证</span>

                    </div>
                </div>
                {/*类别*/}
                <div className="category-container">
                    <div className="flexbox">

                        <li className="flexbox-item">
                            <img className="icon" alt="" src="http://nos.netease.com/dmall-mc/1-%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BB.png4a3ef1f5-c862-4754-9a0f-017a80cc0a4f?download=1-%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BB.png" />
                            <span className="text">居家生活</span>
                        </li>
                        <li className="flexbox-item">
                            <img className="icon" alt="" src="http://nos.netease.com/dmall-mc/1-%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BB.png4a3ef1f5-c862-4754-9a0f-017a80cc0a4f?download=1-%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BB.png" />
                            <span className="text">居家生活</span>
                        </li>
                        <li className="flexbox-item">
                            <img className="icon" alt="" src="http://nos.netease.com/dmall-mc/1-%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BB.png4a3ef1f5-c862-4754-9a0f-017a80cc0a4f?download=1-%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BB.png" />
                            <span className="text">居家生活</span>
                        </li>
                        <li className="flexbox-item">
                            <img className="icon" alt="" src="http://nos.netease.com/dmall-mc/1-%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BB.png4a3ef1f5-c862-4754-9a0f-017a80cc0a4f?download=1-%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BB.png" />
                            <span className="text">居家生活</span>
                        </li>

                    </div>
                    <div className="flexbox">

                        <li className="flexbox-item">
                            <img className="icon" alt="" src="http://nos.netease.com/dmall-mc/1-%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BB.png4a3ef1f5-c862-4754-9a0f-017a80cc0a4f?download=1-%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BB.png" />
                            <span className="text">居家生活</span>
                        </li>
                        <li className="flexbox-item">
                            <img className="icon" alt="" src="http://nos.netease.com/dmall-mc/1-%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BB.png4a3ef1f5-c862-4754-9a0f-017a80cc0a4f?download=1-%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BB.png" />
                            <span className="text">居家生活</span>
                        </li>
                        <li className="flexbox-item">
                            <img className="icon" alt="" src="http://nos.netease.com/dmall-mc/1-%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BB.png4a3ef1f5-c862-4754-9a0f-017a80cc0a4f?download=1-%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BB.png" />
                            <span className="text">居家生活</span>
                        </li>
                        <li className="flexbox-item">
                            <img className="icon" alt="" src="http://nos.netease.com/dmall-mc/1-%E5%B1%85%E5%AE%B6%E7%94%9F%E6%B4%BB.png4a3ef1f5-c862-4754-9a0f-017a80cc0a4f?download=1-%25E5%25B1%2585%25E5%25AE%25B6%25E7%2594%259F%25E6%25B4%25BB.png" />
                            <span className="text">居家生活</span>
                        </li>

                    </div>


                </div>

                {/*人气推荐*/}
                <div className="home-hot-items">
                    <div className="section-header">人气推荐 <span >更多</span>  </div>
                    <div className="hot-item" >
                        <span>魔兽世界 希尔瓦娜斯无线充</span>
                    </div>
                    <div className="hot-item" >
                        <span>魔兽世界 希尔瓦娜斯无线充</span>
                    </div>


                </div>




               <Tabbar/>

            </div>
        )
    }
}

export default Home;