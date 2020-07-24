import React, { Component } from 'react';
import { Carousel } from 'antd';
import { getList, getRank, getHot,getGame,getItem} from '../../utils/request'
import Tabbar from '../../components/Tabbar'
//引入样式
import '../Home/sy.css'


class Home extends Component {
    state = {

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

      banner1:[
          {
            id:1,
            bannerUrl:"http://nos.netease.com/dmall-mc/banner750_370%E6%9E%AD%E5%85%BD%E5%AE%9D%E5%AE%9D.jpg26fb69f4-f237-4949-a35b-db9c9fc3319f?download=banner750_370%25E6%259E%25AD%25E5%2585%25BD%25E5%25AE%259D%25E5%25AE%259D.jpg&Signature=l9j8NRAkPF8uHpgtlGTHMaiOsMr0b3M2aPBijI2t%2BhM%3D&Expires=1595485396&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"
         
          },
          {
            id:2,
            bannerUrl:"http://nos.netease.com/dmall-mc/banner750_370%E5%AE%88%E6%9C%9B%E6%89%8B%E5%8A%9E.jpg9b1da925-fdf7-45f2-8a30-55625b5277e0?download=banner750_370%25E5%25AE%2588%25E6%259C%259B%25E6%2589%258B%25E5%258A%259E.jpg&Signature=6766UJ2W5iVF4guy%2BnGMHr7v1iVuoSNvZ7vU74ZIrJg%3D&Expires=1595485396&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"
          },
          {
            id:3,
            bannerUrl:"http://nos.netease.com/dmall-mc/banner750_370%E5%90%89%E5%AE%89%E5%A8%9C%E6%97%A0%E7%BA%BF%E5%85%85.jpg5b6a3e0c-9280-42c3-8401-30221fef23a9?download=banner750_370%25E5%2590%2589%25E5%25AE%2589%25E5%25A8%259C%25E6%2597%25A0%25E7%25BA%25BF%25E5%2585%2585.jpg&Signature=BzDSy6%2Ba9k179sHLcr9hw085TO0EGM0MofwI7dMcwKI%3D&Expires=1595485396&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"
          },
          {
            id:4,
            banner1:"http://nos.netease.com/dmall-mc/%E5%AE%88%E6%9C%9B%E5%85%88%E9%94%8B-%E9%85%8D%E9%A5%B0banner750x370.jpg3cab53b2-22c5-4951-a3b4-710b7a9ed2d9?download=%25E5%25AE%2588%25E6%259C%259B%25E5%2585%2588%25E9%2594%258B-%25E9%2585%258D%25E9%25A5%25B0banner750x370.jpg&Signature=L%2F768pWB4VpAk2b%2FKsMPMQuL5ipKCF7a50istX2OEb8%3D&Expires=1595485396&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"
          },
          {
            id:4,
            bannerUrl:"http://nos.netease.com/dmall-mc/banner750_370%E5%8D%AB%E8%A1%A3.jpg176cc9ef-7ee1-4c6e-91c1-c0bf47bb134f?download=banner750_370%25E5%258D%25AB%25E8%25A1%25A3.jpg&Signature=PyIE1A7NsDUdKzYNbLkbAP04QBP2Stu2O%2F7sTfW0114%3D&Expires=1595485396&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"
          },
          {
            id:5,
            bannerUrl:"http://nos.netease.com/dmall-mc/%E5%9B%BE%E4%B9%A6%E5%88%86%E5%8C%BAbanner750_370.jpg47203b8f-9c85-4731-a47e-2ddb64f1b5bc?download=%25E5%259B%25BE%25E4%25B9%25A6%25E5%2588%2586%25E5%258C%25BAbanner750_370.jpg&Signature=tTLGNEKijhl8FMb8Pke64gZhw95pUuKnbeNnRwu3GwU%3D&Expires=1595485396&NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84"
          },

      ],
      data:[],
      rank:[],
      pic:[],
      detail:[],
      shopping:[],
      shop:[],
      li:[],
    
    };

    getdata = () => {
        getList().then(data => {
            

            this.setState({data})
            
        })
    };
    getmssj = () => {
        getRank().then(res => {
            

          const rank = res.slice(1,5).filter(item=>item.itemId);

            this.setState({rank})
            
            
        })
    };
    gethot = () => {
        getHot().then(hot => {
            
          const pic = hot.slice(0,1).filter(item=>item.id);
          const detail = hot.slice(1,7).filter(item=>item.id);
         

            this.setState({pic ,detail})
            
        })
    };
    getgame = () => {
        getGame().then(shopping => {
            this.setState({shopping})
        })
    };
    getitem = () => {
        getItem().then(shop => {

           const li = shop[5].indexItemList;
            this.setState({shop,li})
            console.log(shop);
            console.log(li);
        })
    };

    goto = (id)=>{
      this.props.history.push('/Detail/'+id);
    }
    itemlist = (id)=>{
      this.props.history.push('/Itemlist/'+id);
    }

    componentDidMount() {
        this.getdata();
        this.getmssj(); 
        this.gethot();
        this.getgame();
        this.getitem();

    }

    render() {
        const {data ,game,rank,banner,pic,detail,shopping,shop,li} = this.state;
        
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
                             
                             {shopping.map((item,index)=>{
                                  return(
                                    <li className="list" key={index}>
                                    <div className="game-icon">
                                   
                                     <img src={item.iconUrl} alt="游戏图标" />
                                   
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
                            <div key={index} onClick={this.itemlist}>
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
                            <li className="flexbox-item" key={idx} onClick={this.itemlist}>
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
                <div className="home-hot-items" onClick={this.goto} >
                    <div className="section-header">人气推荐 <span >更多</span>  </div>
                    <div className="hot-item" onClick={this.goto}>
                        <img alt="" src="http://nos.netease.com/dmall-mc/696%C3%97282.jpg8bfdb1f6-64c3-4bb8-ba0f-e1061b313a7a?download=696%25C3%2597282.jpg"/>
                        <span>魔兽世界 希尔瓦娜斯无线充</span>
                    </div>
                    
                   

                    {rank.map((item,index)=> {
                           return(
                            <div className="non-first" key={index} onClick={this.goto}>
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


                          {pic.map((item,index)=>{
                            return(
                              <div className="first-item" key={index}>
                                      <div className="pic">
                                        <img alt="商品图片" src={item.listPicUrl}/>
                                        
                                      </div>
                                  <div className="item-info" >
                                            <img src={item.iconUrl} alt="游戏图标"/>
                                      <div className="item-name">{item.name}</div>
                                      <div className="item-desc">{item.simpleDesc}</div>
                                      <div className="price">￥{item.itemTag.price}</div>
                                 </div>
                               </div>
                            )
                          })}
                         
                        
                         <div className="container-swiper" >
                           <ul className="list-swiper">

                             {detail.map((item,index)=>{
                                  return(
                                    <li key={index}>
                                        <div className="new-product-item">
                                          <div className="img-container" >
                                              <img alt="图片" src={item.listPicUrl}/>
                                          </div>
                                  <div className="prod-name">{item.name}</div>
                                  <div className="prod-price">¥{item.itemTag.realPrice}</div></div>
                                    </li>

                                  )

                             })}

                             
                           </ul>

                         </div>
                 
                  
               </div>
                   
                {/*商品选购*/}
                  {shop.map((item,index)=>{
                    return(
                      <div className="floor-list" key={index}>
                      <div className="floor-container">
                      <div className="floor-banner">
  
                      <img src={item.itemCategoryVO.bannerUrlH5} alt="楼层banner图"/>
  
                       </div>
  
                       <div className="floor-prods" >
                           <div className="swiper-container">
                             <ul className="list-swiper">
                                
                               {li.map((item,index)=>{
                                   return(
                                    <li key={index}>
                                      <div className="new-product-item">
                                        <div className="img-container" >
                                            <img alt="图片" src={item.listPicUrl}/>
                                        </div>
                                   <div className="prod-name">{item.name}</div>
                                   <div className="prod-price">￥{item.itemTag.realPrice}</div></div>
                                  </li>
                                   )


                               })}
                               
  
                             </ul>
  
                             </div>
                           </div>
                      </div>
  
                   </div>
                    )

                  })}
                  

                <Tabbar />

                </div>
        )
    }
}


export default Home;