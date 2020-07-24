import React, { Component } from 'react';

import '../Itemlist/itemlist.css'


class Itemlist extends Component {
    render() {

        return (
            <div className="container-item-box">

                {/*头部搜索*/}
                <div className="searchBarFocus-container">
                    <div className="searchBarFocus-content">
                        <div className="logoImg"></div>

                        <div className="search-box-content">
                            <input type="search" placeholder="请输入搜索内容" id="searchInput" />
                        </div>

                    </div>
                </div>

                {/*价格排序*/}
                <div className="tabBarContainer">
                    <div className="tabList">
                        <div className="am-flexbox am-flexbox-align-center">
                            <div className="am-flexbox-item">
                                <div className="listItem active"> <span>最新</span></div>
                            </div>
                            <div className="am-flexbox-item">
                                <div className="listItem"><span>销量</span></div>
                            </div>
                            <div className="am-flexbox-item">
                                <div className="listItem"><span><span className="price">价格</span></span></div>
                            </div>
                            <div className="am-flexbox-item">
                                <div className="listItem"><span><span className="filter">筛选</span></span></div>
                            </div>


                        </div>
                    </div>
                </div>

                {/*商品*/}
                <div className="productItem-list">
                    <div className="productItem"><div className="border">
                        <div className="productPic">
                            <img src="http://nos.netease.com/dmall-mc/%E4%B8%BB%E5%9B%BE%E5%8F%8Cpng.pngb8bcb861-7cbb-4a18-9c4e-02271ee2bdfe?download=%25E4%25B8%25BB%25E5%259B%25BE%25E5%258F%258Cpng.png&amp;Signature=4KtwJ0gXjz8PynggCGWvxihLEEUl5kg04oxFwjiDoDk%3D&amp;Expires=1595665777&amp;NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84" alt="商品" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAoCAYAAABgi917AAADnUlEQVRoQ+2by2oUQRSG/05IFoqSCLpxowYv4EaJiKIbIcGNIIj6CMkjGHwASR4heQSNAcGNZsCNoohBF7rQoHHjRsGMt41iRr4pDunp1KRneqoniakDQ6Cr6kzXN/+5VGcmETZbO6weTUoakbS7fi1aqwS+S6poRRO6miwmulc7qr96JmmgVQ9xnpdAVb06k2iudlfSlQgpCIE5gH6LYR4EJk5+ArQWzF10pAg0sAgi0Ag0MIHA7qJCI9DABAK7iwqNQB2B4QHpwy9p+c8qkZF90sJy47XAvHLdlaZQNnxop//973yS2PxgX+79iblZw++LC9KpRw6q2e3T0kJVmnqX77esGaUBvbZf4pU2AwyIyeONwIE7PChVPjeuuf587danTzqFTrxpHOPa2AFp/JUfV9Z3GVBLA5q9WYChKgChoqwBHxijT9bfJtDmz7vQXvMe/e5D8o0xN893CMClAkWFwCNs88KRuVhWdelN2odC3kTlRT+UEOCa+SgVKGqZP+egAiOrEMYG+92tMXf5d2NBGX+5qmbWo0z+ssabW3c4P5Uva7c78bo7xapUoGzLQhQ4WQhfL7kUAMiskSdRq+U94KPMmY/S9Al/nhzZ64qdT+Xdqv6lAWVjZkC9cUQCKlCozLwAOvTAXbOuwKADcGpxFSiAWY9f0sPoY3/Ik4t9hSzdXm25kCcsyZkY4QksUxohSVuD0tJAKUhUeaBhWaAGAaD4TrdLNmbpwDcGZN/10HBLU2h6k+8vSnvuuytUesuNRYGi0G1ZlOoK7ZMMqOVTg1sUKDnU17yjcN5jZsmvO4pV2SrtqkIJa0LeikYaKDmWsbyQZw5+ihhp5r8CmoWQBkrRYbOmvGY5tAjIbq7pqkLXA0puBWazKm9rUShqbsdoy9Y7MLTjK2/uhgIFDBDtYQctVP3oWHXPAfibDdF0X5u3OcYtRQw9bGV253M2FKjdvrVBwDWlku98BlDmtwqo3fmdIt1QoNav0qvSqNN82xGT0PdW8u0K1J51ErqEdlpRjHFt7KBr+O0Ele5dObcz5ntEh4rbOfmQQ1tV9KZVKCBpwOvn7yV3MjKzZ6Uo0Pcoz/pXO26m4bUbwu3O37RAO72xrbq+9By6VcEUve8ItCi5Jusi0Ag0MIHA7qJCSwAav3AbDmr9C7fxK+HhgM4lmq0dU4+exh8tdEy1qhWdTepu3C9BbvFdAEm7Ona9vRz84F9g6tVNXU7e/gNaZ8FWmjvUUgAAAABJRU5ErkJggg==" alt="预售图标" className=" presale-icon" />

                        </div>
                        <p className="productName normal">炉石传说魔兽世界 拉格纳罗斯火车王 手办</p>
                        <div className="productPrice">
                            <span className="normalPrice">￥265.00</span>
                            <span className="bargainPrice">￥289.00</span>
                        </div>
                    </div>
                    </div>
                    <div className="productItem"><div className="border">
                        <div className="productPic">
                            <img src="http://nos.netease.com/dmall-mc/%E4%B8%BB%E5%9B%BE%E5%8F%8Cpng.pngb8bcb861-7cbb-4a18-9c4e-02271ee2bdfe?download=%25E4%25B8%25BB%25E5%259B%25BE%25E5%258F%258Cpng.png&amp;Signature=4KtwJ0gXjz8PynggCGWvxihLEEUl5kg04oxFwjiDoDk%3D&amp;Expires=1595665777&amp;NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84" alt="商品" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAoCAYAAABgi917AAADnUlEQVRoQ+2by2oUQRSG/05IFoqSCLpxowYv4EaJiKIbIcGNIIj6CMkjGHwASR4heQSNAcGNZsCNoohBF7rQoHHjRsGMt41iRr4pDunp1KRneqoniakDQ6Cr6kzXN/+5VGcmETZbO6weTUoakbS7fi1aqwS+S6poRRO6miwmulc7qr96JmmgVQ9xnpdAVb06k2iudlfSlQgpCIE5gH6LYR4EJk5+ArQWzF10pAg0sAgi0Ag0MIHA7qJCI9DABAK7iwqNQB2B4QHpwy9p+c8qkZF90sJy47XAvHLdlaZQNnxop//973yS2PxgX+79iblZw++LC9KpRw6q2e3T0kJVmnqX77esGaUBvbZf4pU2AwyIyeONwIE7PChVPjeuuf587danTzqFTrxpHOPa2AFp/JUfV9Z3GVBLA5q9WYChKgChoqwBHxijT9bfJtDmz7vQXvMe/e5D8o0xN893CMClAkWFwCNs88KRuVhWdelN2odC3kTlRT+UEOCa+SgVKGqZP+egAiOrEMYG+92tMXf5d2NBGX+5qmbWo0z+ssabW3c4P5Uva7c78bo7xapUoGzLQhQ4WQhfL7kUAMiskSdRq+U94KPMmY/S9Al/nhzZ64qdT+Xdqv6lAWVjZkC9cUQCKlCozLwAOvTAXbOuwKADcGpxFSiAWY9f0sPoY3/Ik4t9hSzdXm25kCcsyZkY4QksUxohSVuD0tJAKUhUeaBhWaAGAaD4TrdLNmbpwDcGZN/10HBLU2h6k+8vSnvuuytUesuNRYGi0G1ZlOoK7ZMMqOVTg1sUKDnU17yjcN5jZsmvO4pV2SrtqkIJa0LeikYaKDmWsbyQZw5+ihhp5r8CmoWQBkrRYbOmvGY5tAjIbq7pqkLXA0puBWazKm9rUShqbsdoy9Y7MLTjK2/uhgIFDBDtYQctVP3oWHXPAfibDdF0X5u3OcYtRQw9bGV253M2FKjdvrVBwDWlku98BlDmtwqo3fmdIt1QoNav0qvSqNN82xGT0PdW8u0K1J51ErqEdlpRjHFt7KBr+O0Ele5dObcz5ntEh4rbOfmQQ1tV9KZVKCBpwOvn7yV3MjKzZ6Uo0Pcoz/pXO26m4bUbwu3O37RAO72xrbq+9By6VcEUve8ItCi5Jusi0Ag0MIHA7qJCSwAav3AbDmr9C7fxK+HhgM4lmq0dU4+exh8tdEy1qhWdTepu3C9BbvFdAEm7Ona9vRz84F9g6tVNXU7e/gNaZ8FWmjvUUgAAAABJRU5ErkJggg==" alt="预售图标" className=" presale-icon" />

                        </div>
                        <p className="productName normal">炉石传说魔兽世界 拉格纳罗斯火车王 手办</p>
                        <div className="productPrice">
                            <span className="normalPrice">￥265.00</span>
                            <span className="bargainPrice">￥289.00</span>
                        </div>
                    </div>
                    </div>
                    <div className="productItem"><div className="border">
                        <div className="productPic">
                            <img src="http://nos.netease.com/dmall-mc/%E4%B8%BB%E5%9B%BE%E5%8F%8Cpng.pngb8bcb861-7cbb-4a18-9c4e-02271ee2bdfe?download=%25E4%25B8%25BB%25E5%259B%25BE%25E5%258F%258Cpng.png&amp;Signature=4KtwJ0gXjz8PynggCGWvxihLEEUl5kg04oxFwjiDoDk%3D&amp;Expires=1595665777&amp;NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84" alt="商品" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAoCAYAAABgi917AAADnUlEQVRoQ+2by2oUQRSG/05IFoqSCLpxowYv4EaJiKIbIcGNIIj6CMkjGHwASR4heQSNAcGNZsCNoohBF7rQoHHjRsGMt41iRr4pDunp1KRneqoniakDQ6Cr6kzXN/+5VGcmETZbO6weTUoakbS7fi1aqwS+S6poRRO6miwmulc7qr96JmmgVQ9xnpdAVb06k2iudlfSlQgpCIE5gH6LYR4EJk5+ArQWzF10pAg0sAgi0Ag0MIHA7qJCI9DABAK7iwqNQB2B4QHpwy9p+c8qkZF90sJy47XAvHLdlaZQNnxop//973yS2PxgX+79iblZw++LC9KpRw6q2e3T0kJVmnqX77esGaUBvbZf4pU2AwyIyeONwIE7PChVPjeuuf587danTzqFTrxpHOPa2AFp/JUfV9Z3GVBLA5q9WYChKgChoqwBHxijT9bfJtDmz7vQXvMe/e5D8o0xN893CMClAkWFwCNs88KRuVhWdelN2odC3kTlRT+UEOCa+SgVKGqZP+egAiOrEMYG+92tMXf5d2NBGX+5qmbWo0z+ssabW3c4P5Uva7c78bo7xapUoGzLQhQ4WQhfL7kUAMiskSdRq+U94KPMmY/S9Al/nhzZ64qdT+Xdqv6lAWVjZkC9cUQCKlCozLwAOvTAXbOuwKADcGpxFSiAWY9f0sPoY3/Ik4t9hSzdXm25kCcsyZkY4QksUxohSVuD0tJAKUhUeaBhWaAGAaD4TrdLNmbpwDcGZN/10HBLU2h6k+8vSnvuuytUesuNRYGi0G1ZlOoK7ZMMqOVTg1sUKDnU17yjcN5jZsmvO4pV2SrtqkIJa0LeikYaKDmWsbyQZw5+ihhp5r8CmoWQBkrRYbOmvGY5tAjIbq7pqkLXA0puBWazKm9rUShqbsdoy9Y7MLTjK2/uhgIFDBDtYQctVP3oWHXPAfibDdF0X5u3OcYtRQw9bGV253M2FKjdvrVBwDWlku98BlDmtwqo3fmdIt1QoNav0qvSqNN82xGT0PdW8u0K1J51ErqEdlpRjHFt7KBr+O0Ele5dObcz5ntEh4rbOfmQQ1tV9KZVKCBpwOvn7yV3MjKzZ6Uo0Pcoz/pXO26m4bUbwu3O37RAO72xrbq+9By6VcEUve8ItCi5Jusi0Ag0MIHA7qJCSwAav3AbDmr9C7fxK+HhgM4lmq0dU4+exh8tdEy1qhWdTepu3C9BbvFdAEm7Ona9vRz84F9g6tVNXU7e/gNaZ8FWmjvUUgAAAABJRU5ErkJggg==" alt="预售图标" className=" presale-icon" />

                        </div>
                        <p className="productName normal">炉石传说魔兽世界 拉格纳罗斯火车王 手办</p>
                        <div className="productPrice">
                            <span className="normalPrice">￥265.00</span>
                            <span className="bargainPrice">￥289.00</span>
                        </div>
                    </div>
                    </div>
                    <div className="productItem"><div className="border">
                        <div className="productPic">
                            <img src="http://nos.netease.com/dmall-mc/%E4%B8%BB%E5%9B%BE%E5%8F%8Cpng.pngb8bcb861-7cbb-4a18-9c4e-02271ee2bdfe?download=%25E4%25B8%25BB%25E5%259B%25BE%25E5%258F%258Cpng.png&amp;Signature=4KtwJ0gXjz8PynggCGWvxihLEEUl5kg04oxFwjiDoDk%3D&amp;Expires=1595665777&amp;NOSAccessKeyId=63c3e0b0ebcf4330a6fa86a2b4a32b84" alt="商品" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAoCAYAAABgi917AAADnUlEQVRoQ+2by2oUQRSG/05IFoqSCLpxowYv4EaJiKIbIcGNIIj6CMkjGHwASR4heQSNAcGNZsCNoohBF7rQoHHjRsGMt41iRr4pDunp1KRneqoniakDQ6Cr6kzXN/+5VGcmETZbO6weTUoakbS7fi1aqwS+S6poRRO6miwmulc7qr96JmmgVQ9xnpdAVb06k2iudlfSlQgpCIE5gH6LYR4EJk5+ArQWzF10pAg0sAgi0Ag0MIHA7qJCI9DABAK7iwqNQB2B4QHpwy9p+c8qkZF90sJy47XAvHLdlaZQNnxop//973yS2PxgX+79iblZw++LC9KpRw6q2e3T0kJVmnqX77esGaUBvbZf4pU2AwyIyeONwIE7PChVPjeuuf587danTzqFTrxpHOPa2AFp/JUfV9Z3GVBLA5q9WYChKgChoqwBHxijT9bfJtDmz7vQXvMe/e5D8o0xN893CMClAkWFwCNs88KRuVhWdelN2odC3kTlRT+UEOCa+SgVKGqZP+egAiOrEMYG+92tMXf5d2NBGX+5qmbWo0z+ssabW3c4P5Uva7c78bo7xapUoGzLQhQ4WQhfL7kUAMiskSdRq+U94KPMmY/S9Al/nhzZ64qdT+Xdqv6lAWVjZkC9cUQCKlCozLwAOvTAXbOuwKADcGpxFSiAWY9f0sPoY3/Ik4t9hSzdXm25kCcsyZkY4QksUxohSVuD0tJAKUhUeaBhWaAGAaD4TrdLNmbpwDcGZN/10HBLU2h6k+8vSnvuuytUesuNRYGi0G1ZlOoK7ZMMqOVTg1sUKDnU17yjcN5jZsmvO4pV2SrtqkIJa0LeikYaKDmWsbyQZw5+ihhp5r8CmoWQBkrRYbOmvGY5tAjIbq7pqkLXA0puBWazKm9rUShqbsdoy9Y7MLTjK2/uhgIFDBDtYQctVP3oWHXPAfibDdF0X5u3OcYtRQw9bGV253M2FKjdvrVBwDWlku98BlDmtwqo3fmdIt1QoNav0qvSqNN82xGT0PdW8u0K1J51ErqEdlpRjHFt7KBr+O0Ele5dObcz5ntEh4rbOfmQQ1tV9KZVKCBpwOvn7yV3MjKzZ6Uo0Pcoz/pXO26m4bUbwu3O37RAO72xrbq+9By6VcEUve8ItCi5Jusi0Ag0MIHA7qJCSwAav3AbDmr9C7fxK+HhgM4lmq0dU4+exh8tdEy1qhWdTepu3C9BbvFdAEm7Ona9vRz84F9g6tVNXU7e/gNaZ8FWmjvUUgAAAABJRU5ErkJggg==" alt="预售图标" className=" presale-icon" />

                        </div>
                        <p className="productName normal">炉石传说魔兽世界 拉格纳罗斯火车王 手办</p>
                        <div className="productPrice">
                            <span className="normalPrice">￥265.00</span>
                            <span className="bargainPrice">￥289.00</span>
                        </div>
                    </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default Itemlist;