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
                <div className="game-list">
                        <div className="game-list-item">
                            
                           
                            <li className="list">
                                <div className="game-icon">
                                   
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                   
                                </div>
                            </li>
                            <li className="list">
                                <div className="game-icon">
                                   
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                   
                                </div>
                            </li>
                            <li className="list">
                                <div className="game-icon">
                                   
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                   
                                </div>
                            </li>
                            <li className="list">
                                <div className="game-icon">
                                   
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                   
                                </div>
                            </li>
                            <li className="list">
                                <div className="game-icon">
                                   
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                   
                                </div>
                            </li>
                            <li className="list">
                                <div className="game-icon">
                                   
                                        <img src="http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png" alt="游戏图标" />
                                   
                                </div>
                            </li>
                           
                            
                        </div>



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
                        <img alt="" src="http://nos.netease.com/dmall-mc/696%C3%97282.jpg8bfdb1f6-64c3-4bb8-ba0f-e1061b313a7a?download=696%25C3%2597282.jpg&Signature=%2F06CT%2Bp%2B8%2B3SfXcyI2DLQPoUdqo17B7o1lYf4%2BYGvk4%3D&Expires=1595303686&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"></img>
                        <span>魔兽世界 希尔瓦娜斯无线充</span>
                    </div>
                    
                    <div className="non-first" >
                    <img  alt="" src="http://nos.netease.com/dmall-mc/%E5%90%89%E5%AE%89%E5%A8%9C370x180.jpg56077e81-6e88-478c-9855-afc27a355c7d?download=%25E5%2590%2589%25E5%25AE%2589%25E5%25A8%259C370x180.jpg&Signature=I%2BvwuNZt6JpvNoyEqTXRp8nzGFha5FpqbOXg8zAG08s%3D&Expires=1595329527&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"></img>
                       
                        <span>炉石酒馆盖毯 炉石传说</span>
                        
                    </div>
                    <div className="non-first" >
                    <img  alt="" src="http://nos.netease.com/dmall-mc/%E5%90%89%E5%AE%89%E5%A8%9C370x180.jpg56077e81-6e88-478c-9855-afc27a355c7d?download=%25E5%2590%2589%25E5%25AE%2589%25E5%25A8%259C370x180.jpg&Signature=I%2BvwuNZt6JpvNoyEqTXRp8nzGFha5FpqbOXg8zAG08s%3D&Expires=1595329527&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"></img>
                       
                        <span>炉石酒馆盖毯 炉石传说</span>
                        
                    </div>
                    <div className="non-first" >
                    <img  alt="" src="http://nos.netease.com/dmall-mc/%E5%90%89%E5%AE%89%E5%A8%9C370x180.jpg56077e81-6e88-478c-9855-afc27a355c7d?download=%25E5%2590%2589%25E5%25AE%2589%25E5%25A8%259C370x180.jpg&Signature=I%2BvwuNZt6JpvNoyEqTXRp8nzGFha5FpqbOXg8zAG08s%3D&Expires=1595329527&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"></img>
                       
                        <span>炉石酒馆盖毯 炉石传说</span>
                        
                    </div>
                    <div className="non-first" >
                    <img  alt="" src="http://nos.netease.com/dmall-mc/%E5%90%89%E5%AE%89%E5%A8%9C370x180.jpg56077e81-6e88-478c-9855-afc27a355c7d?download=%25E5%2590%2589%25E5%25AE%2589%25E5%25A8%259C370x180.jpg&Signature=I%2BvwuNZt6JpvNoyEqTXRp8nzGFha5FpqbOXg8zAG08s%3D&Expires=1595329527&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"></img>
                       
                        <span>炉石酒馆盖毯 炉石传说</span>
                        
                    </div>
                 
                  
                        
                    


                    </div>

                {/*最新周边*/}
                <div className="home-new-items ">
                        <div className="section-header">
                            最新周边 
                        
                           <span>更多</span>
                         </div>

                         <div className="first-item">
                             <div className="pic">
                                <img alt="商品图片" src="http://dmall-mc.nosdn.127.net/未标题-1.jpg8b3ddb5a-e756-4d9b-bb0f-c0979ed024cb"/>
                                
                             </div>
                        <div className="item-info" >
                                    <img src="http://nos.netease.com/dmall-mc/4.png258b5399-e2cd-4ad5-ab2e-35017f149f8f?download=4.png" alt="游戏图标"/>
                         <div className="item-name">暗黑破坏神艺术设定集</div>
                         <div className="item-desc">以独特视角揭秘游戏诞生</div>
                             <div className="price">¥188.00</div>
                         </div>
                         </div>
                         </div>
                 
                  



                <Tabbar />

                </div>
        )
    }
}

export default Home;