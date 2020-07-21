import React, { Component } from 'react';
import { Carousel } from 'antd';
import { getList, getRank } from '../../utils/request'
import Tabbar from '../../components/Tabbar'
//引入样式
import '../Home/sy.css'


class Home extends Component {
    state = {


      list:[
            {
               id:1,
               icon:"http://nos.netease.com/dmall-mc/1.png2c4e32c6-0f77-47eb-b1d3-b0e2d4e654be?download=1.png&Signature=jn70AUkVvvFkmf720GOB1y%2FgsEGU3ZD08vxFIcuUerY%3D&Expires=1595397830&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84",
            },
            {
               id:2,
               icon:"http://nos.netease.com/dmall-mc/2.png4f80c069-d22f-4901-acb5-a080dd74a97b?download=2.png&Signature=fZ0Dx0eb3mDW2b3i2vkPYrIM1iVwdehEXkpNMq8zJCA%3D&Expires=1595407324&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84",
            },
            {
               id:3,
               icon:"http://nos.netease.com/dmall-mc/3.pngd56209b0-e3c0-43c5-9513-803cb2bdce0c?download=3.png&Signature=xpD4Ygl0TYqs52d8Jm1XVYNfGZR9xNwesMN54wlfL4s%3D&Expires=1595407324&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84",
            },
            {
               id:4,
               icon:"http://nos.netease.com/dmall-mc/4.png9fc98892-8cea-4e5d-b370-7e071f1aecc7?download=4.png&Signature=Eve2OMWgyKIL6Ok7qD4aHNyXdIOXJmGYVEq4kXuJJxk%3D&Expires=1595407324&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84",
            },
            {
               id:5,
               icon:"http://nos.netease.com/dmall-mc/5.pngcb65c604-c502-47e2-93cb-2758c331d037?download=5.png&Signature=k47SIgu39bLSc9hWV3Wp56PeUovlsVWCf6ztorOAud0%3D&Expires=1595407324&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84",
            },
            {
               id:6,
               icon:"http://nos.netease.com/dmall-mc/H5%E5%AE%88%E6%9C%9BLOGO.pnga0ca8550-299a-470a-8f99-967fe487250a?download=H5%25E5%25AE%2588%25E6%259C%259BLOGO.png&Signature=7puXqYgrYTnkEpPcU7MHewey1AuTjoIiR%2B8oe%2BOfKEQ%3D&Expires=1595411175&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84",
            },
            {
               id:7,
               icon:"http://nos.netease.com/dmall-mc/7.png758ddc36-96cf-4858-aec7-f1a0ecb9408a?download=7.png&Signature=GyJd%2BnFC73Cp7uqMh5hWGXLy8Imb7NvQNMvo1k0CI9I%3D&Expires=1595411175&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84",
            },
            {
               id:8,
               icon:"http://nos.netease.com/dmall-mc/90x90.png1a443729-d118-47f8-b828-eaaa64ed309e?download=90x90.png&Signature=BAd5plvkqGIs9lsAvPZaI3J%2Bukx9N%2F%2F5ucYEQ%2FVk4wU%3D&Expires=1595407348&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84",
            },

      ],
      game:[
        {
          id:1,
          icon:"data:image/png;base64,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",
          text:"超值专区"
         },
        {
          id:2,
          icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAYAAABKQCL3AAACxklEQVRoge3az6sVdRjH8deMh46EdC3RVt4yiTYVRgsvqIgSEUTC/QOif6BNKwMr1MB016J/IN3fs1EQcaGUoAtJQkgJLXMjpHmviniFmBbf73C/Z841vDMTTDJvGDjP8wzP8/3M7+fhZOYKeB2H8R5eUI9FXMLXOFE6i1my0dh+H+JLbMGwZq17OI3P8WtmrngD57G2ZsIqBT7BMSZEfIzvkbVUax4zOQ5pTwBhgd+aPMrD6G9LAGHdh3LhEirZEYvU2dbjRszzEt6pFHw3+sX9NjSotSPJ+35u/B74cQVHocptXE7sdZX4i8nvy/izQa10nWvyBok6Qy+iK/QiukIvoiv0IrpCL6Ir9CK6Qo5Hib2xYa7pxH5Qiaf2NFY1qJWu89EAF7AzOn7GtZqJ11sSUbaqKZeif4i3cF39z/HNye8LA3yBM8KRWSs0L035BgsV30L074/2tPEzV4e/sS8XGozduNowIaGB/xQHnxA/GONVgXW4il04l8VpR8kmSy3kSnkoXCKLqXOZaQfhknoNz9esdTfWAoNK8Le4/dcs4pe2klVFvGqyN35aHgoPhcfVQDE7bmcjzwk3Z90zcQe/l7lLER/gO+N3fR0WhCHcEWH+NEY2kmGvMPSaaljrmnB/nRxgG45r9twumRKeQEMcWCb+laWnU1M243g2sjMzV5yx9J6Y19574mUslJdSNjKFW1hdM/+TODvA1sTxNm7WTLYKPwkvsqEwaz2bxLdoXwBszSuJ6wogvHj+SOw1lXjVbovVz8wH4P+eXkRX6EV0hV5EV+hFdIVeRFd4ZkTcS+ztDXKtw5uJfacSv9sg97/xIBf+I1Hyg9BW1tlu45WY5y+ht0i5GP1tcyrHPqGja4sCn5kc3SxG/0Tv3YB5cXh2BTOYw/0GCR8LI9E9OLrcDsWso/go7jcxFVkB94X1zhSzrvwDhGqdWYDR4JgAAAAASUVORK5CYII=",
          text:"应用分类"
         },
    
      ],
      banner:[
             {
               id:1,
               banner:"http://dmall-mc.nosdn.127.net/750%C3%97380.jpge405ee59-06c1-4247-a307-51a45770fe5c"

             },
             {
               id:2,
               banner:"http://dmall-mc.nosdn.127.net/750x380.jpga94aa68f-6571-4fcb-ae27-4b9298984871"

             },
             {
               id:3,
               banner:"http://dmall-mc.nosdn.127.net/750x380.jpgf0208091-27ec-4a03-842e-c48078fc969b"

             },
             {
               id:4,
               banner:"http://dmall-mc.nosdn.127.net/750%C3%97380.jpg3385c462-05aa-4b83-aa19-e2ff4596b7c7"

             },
             {
               id:5,
               banner:"http://dmall-mc.nosdn.127.net/750x380.jpg25162a51-f755-4cb0-997c-ba24465fd2cc"

             },
             {
               id:6,
               banner:"http://dmall-mc.nosdn.127.net/%E8%AF%A6%E6%83%85750x380.jpg484bc1a2-347d-42bf-934a-715b76df5349"

             },
            


      ],


      data:[],
      rank:[],
    };

    getData = () => {
        getList().then(data => {
            

            this.setState({data})
            
        })
    }
    getmssj = () => {
        getRank().then(res => {
            

          const rank = res.slice(1,5).filter(item=>item.itemId);

            this.setState({rank})
            
            
        })
    }



    componentDidMount() {
        this.getData();
        this.getmssj();


    }


    render() {
        const {data ,game,rank,banner,list} = this.state;
        
       
        return (
            <div className="container">
                {/* 头部 */}
                <div className="header-container">
                    {/*搜索框*/}
                    <div className="searchBar clear_fix">
                            <div className="logoImg"></div>
                            <div className="search-box">
                                <input type="search"  />
                                 <span className="placeHolder">搜索商品，共235款好物</span>
                                 
                               

                            </div>
                        </div>

                    {/* 游戏列表*/}

                    <div className="game-list-box">
                     <div className="swiper-container">
                         <div className="swiper-list">
                             
                             {list.map((item,index)=>{
                                  return(
                                    <li className="list" key={index}>
                                    <div className="game-icon">
                                   
                                     <img src={item.icon} alt="游戏图标" />
                                   
                                    </div>
                            </li>
                                  )
                               
                             })}
                                
                         </div>
 
                     </div>


                 </div>
                </div>

                {/*轮播图*/}
                <Carousel autoplay className="lunbo">
                    
                   {banner.map((item,index)=>{
                         return(
                            <div key={index}>
                              <img alt="" src={item.banner}></img>
                            </div>

                         )


                   })}


                </Carousel>
                
                {/*七天无理由退货*/}
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

                      {data.map((item,idx)=> {
                           return(
                            <li className="flexbox-item" key={idx}>
                             <img className="icon" alt="" src={item.iconUrl} />
                           <span className="text">{item.name}</span>
                           </li>

                           )

                      })}
                      {game.map((item,idx)=> {
                           return(
                            <li className="flexbox-item" key={idx}>
                             <img className="icon" alt="" src={item.icon} />
                           <span className="text">{item.text}</span>
                           </li>

                           )

                      })}

                         
                         
                           
                     

                       
                     

                    </div>
                   


                </div>

                {/*人气推荐*/}
                <div className="home-hot-items">
                    <div className="section-header">人气推荐 <span >更多</span>  </div>
                    <div className="hot-item" >
                        <img alt="" src="http://nos.netease.com/dmall-mc/696%C3%97282.jpg8bfdb1f6-64c3-4bb8-ba0f-e1061b313a7a?download=696%25C3%2597282.jpg"/>
                        <span>魔兽世界 希尔瓦娜斯无线充</span>
                    </div>
                    
                   

                    {rank.map((item,index)=> {
                           return(
                            <div className="non-first" key={index}>
                            <img  alt="" src={item.listPicUrl}></img>
                               
                           <span>{item.name}</span>
                                
                            </div>

                           )

                      })}

                
                 
                        
                   
                 
                  
                        
                    


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
                        
                         <div className="container-swiper" >
                           <ul className="list-swiper">

                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>

                           </ul>

                         </div>
                 
                  
               </div>
                   
                {/*商品选购*/}
                 <div className="floor-list">
                    <div className="floor-container">
                    <div className="floor-banner">

                        <img src="http://nos.netease.com/dmall-mc/banner750_370%E6%9E%AD%E5%85%BD%E5%AE%9D%E5%AE%9D.jpg26fb69f4-f237-4949-a35b-db9c9fc3319f?download=banner750_370%25E6%259E%25AD%25E5%2585%25BD%25E5%25AE%259D%25E5%25AE%259D.jpg&amp;Signature=GNhKLvR2dqV3IPpCcTJlNN71XCkiag%2FDRDEPy1b9TiY%3D&amp;Expires=1595397830&amp;NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84" alt="楼层banner图"/>

                     </div>

                     <div className="floor-prods" >
                         <div className="swiper-container">
                           <ul className="list-swiper">
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>
                              <li>
                                <div className="new-product-item">
                                  <div className="img-container" >
                                      <img alt="图片" src="http://dmall-mc.nosdn.127.net/282.jpga48deb6f-6860-4c28-8ec0-7d1f870ca342"/>
                                  </div>
                                <div className="prod-name">守望先锋 D.Va可动人偶 手办模型</div>
                                <div className="prod-price">¥427.00</div></div>
                              </li>

                           </ul>

                           </div>
                         </div>
                    



                    </div>

                 </div>
                  


                <Tabbar />

                </div>
        )
    }
}


export default Home;