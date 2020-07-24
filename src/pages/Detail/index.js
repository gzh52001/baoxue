import React, { Component } from 'react';
import { getFitem } from '../../utils/request'
import { Carousel, BackTop } from 'antd';
import '../Detail/detail.css'


class Detail extends Component {

    state = {
        detailitem: [],

    }

    getfinditem = () => {
        getFitem().then(detailitem => {


            this.setState({ detailitem })
            console.log(detailitem);


        })
    };
    componentDidMount() {
        this.getfinditem();
    }




    render() {


        return (
            <div className="container1">

                {/*头部*/}
                <div className="header-container">
                    <div className="header-content">
                        <div className="banner-container"> </div>
                        <span className="title">网易暴雪周边商城</span>
                        <div className="rightContent">
                            <div className="searchBtn"></div>
                            <div className="shoppingCartBtn"> </div>
                        </div>
                    </div>
                </div>

                {/*内容区*/}
                <div className="basicInfo">
                    {/*轮播图*/}
                    <Carousel autoplay className="bnner1">
                        <img alt="" src="http://nos.netease.com/dmall-mc/77.jpg9f1c2924-d0b0-46bf-97e7-883a6c92b9e1?download=77.jpg " />
                        <img alt="" src="http://nos.netease.com/dmall-mc/77.jpg9f1c2924-d0b0-46bf-97e7-883a6c92b9e1?download=77.jpg " />
                        <img alt="" src="http://nos.netease.com/dmall-mc/77.jpg9f1c2924-d0b0-46bf-97e7-883a6c92b9e1?download=77.jpg " />

                    </Carousel>

                    {/*选择数量*/}
                    <div className="productInfo">
                        <div className="baseInfo">
                            <div className="pName">
                                <span>魔兽世界 9.0暗影国度鼠标垫</span>
                                <span className="saleLabel">新品特惠</span>
                            </div>
                            <div className="pDesc"><span>1</span> </div>

                            <div className="pSale">
                                <div className="priceTag">
                                    <span className="price">¥79.00</span>
                                    <span className="cost">¥85.00</span>
                                </div></div>
                        </div>
                        <div className="serviceInfo">
                            <div className="info">
                                <div className="title">
                                    <span>服务：</span>
                                </div>
                                <div className="services">
                                    <div className="serviceItem">
                                        <span>全场满99包邮</span></div>
                                    <div className="serviceItem">
                                        <span>部分地区无法配送</span>
                                    </div></div><i className="chooseIcon"></i>
                            </div>

                        </div>
                        <div className="specsContent">
                            <div className="selectedSpec">
                                <div className="title">
                                    <span>选择：</span>
                                </div>
                                <div> <span>已选“900*380mm”×1</span></div>

                                <i className="chooseIcon"></i></div>
                        </div>
                    </div>

                    {/*详情商品讲解*/}
                    <div className="details">
                        <div className="detailContent">
                            <div className="in-title">
                                <div className="title-line">
                                    <div className="coupon-line"></div>
                                </div>
                                <span className="title">详情</span>
                            </div>

                            {/*详情图片*/}
                            <div>
                                <span className="pic_img">
                                  <img className="img_list" alt="" src="https://yanxuan-item.nosdn.127.net/2dc377dfce86e2285772e5494e919226.jpg" _src="https://yanxuan-item.nosdn.127.net/2dc377dfce86e2285772e5494e919226.jpg"  />
                               </span>
                                <span className="pic_img">
                                  <img className="img_list" alt="" src="https://yanxuan-item.nosdn.127.net/2dc377dfce86e2285772e5494e919226.jpg" _src="https://yanxuan-item.nosdn.127.net/2dc377dfce86e2285772e5494e919226.jpg"  />
                               </span>
                                <span className="pic_img">
                                  <img className="img_list" alt="" src="https://yanxuan-item.nosdn.127.net/2dc377dfce86e2285772e5494e919226.jpg" _src="https://yanxuan-item.nosdn.127.net/2dc377dfce86e2285772e5494e919226.jpg"  />
                               </span>
                               
                               
                            </div>
                        </div>

                    </div>




                </div>








                {/*购物车*/}
                <div className="operations">
                    <div className="left"><div className="m-table">
                        <div className="tr"><div className="td"><div className="customer-service">
                            <i></i>
                            <span>客服</span>
                        </div></div>
                            <div className="td">
                                <div className="collect"><i></i>
                                    <span>收藏</span>
                                </div></div></div></div></div><div className="right">
                        <div className="m-table">
                            <div className="tr"><div className="td">
                                <div className="btn b2">加入购物车</div></div><div className="td">
                                    <div className="btn b3">立即购买</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*回到顶部*/}
                <div className="top">
                    <BackTop >
                        <i className="goToTop"></i>
                    </BackTop>
                </div>



            </div>
        )
    }
}

export default Detail;