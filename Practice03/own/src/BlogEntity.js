import React, { Component } from 'react';
import logo1 from './img/1.jpeg'
import logo2 from './img/2.jpeg'
import logo3 from './img/3.jpeg'


class BlogEntity extends React.Component {
    render() {
        return(
            <div className="d-flex flex-column">
                <div class="text-center" id="jump1">
                    <br/>
                    <h1 className="text-info">自我介紹</h1>
                    <br/>
                    <div className="text-left">
                        <img src={logo1} className="rounded" alt="self photo" height="400" />
                        <br/><br/>
                        <p class="inline-block mx-auto">大家好，我叫李芷誼，今年兩歲</p>
                        <p class="inline-block mx-auto">我很愛我的爸爸媽媽</p>
                        <p class="inline-block mx-auto">我的爸爸媽媽也很愛我</p>
                        <p class="inline-block mx-auto">還有...</p>
                        <p class="inline-block mx-auto">我是美少女戰士！</p>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="text-center">
                    <h1 className="text-info" id="jump2">台灣</h1>
                    <br/>
                    <div className="text-left">
                    <img src={logo2} className="rounded" alt="self photo" height="400" />
                    <br/><br/>
                    <p className="inline-block mx-auto" style={{paddingLeft: 200,width: 400,}}>這裡是我在台灣的生活</p>
                    <p className="inline-block mx-auto" style={{paddingLeft: 200,width: 400,}}>我最喜歡的公園</p>
                    <p className="inline-block mx-auto" style={{paddingLeft: 200,width: 400,}}>還有...</p>
                    <p className="inline-block mx-auto" style={{paddingLeft: 200,width: 400,}}>腳踏車！</p>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="text-center">
                    <h1 className="text-info" id="jump3">東京</h1>
                    <br/>
                    <div className="text-left">
                    <img src={logo3} class="rounded" alt="self photo" height="400" />
                    <br/><br/>
                    <p className="inline-block mx-auto" style={{paddingLeft: 200,width: 400,}}>第一次去日本</p>
                    <p className="inline-block mx-auto" style={{paddingLeft: 200,width: 400,}}>第一次看雪</p>
                    <p className="inline-block mx-auto" style={{paddingLeft: 200,width: 400,}}>第一次變雪人</p>
                    <p className="inline-block mx-auto" style={{paddingLeft: 200,width: 400,}}>第一次在雷門拍照...</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogEntity;
