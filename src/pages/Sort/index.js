import React, { Component } from 'react';
import '../Sort/sort.css'

class Sort extends Component {
    render() {

        return (
            <div className="app-wrapper-container">
                <div className="header-container">
                    {/* 搜索栏 */}
                    <div className="searchBar-container">
                        <div className="logoImg"></div>
                        <div className=" search-box">
                            <span class="placeHolder">请输入搜索内容</span>
                            <input type="search"></input>
                        </div>
                        {/* 内容 */}
                        <div className="container"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort;