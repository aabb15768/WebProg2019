import React from 'react';
import logo1 from '../img/1.jpeg'
import logo2 from '../img/2.jpeg'
import logo3 from '../img/3.jpeg'
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Post from '../containers/Post';
import Search from '../components/Search';
import Category from '../components/Category';
import SideWidget from '../components/SideWidget';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";


const initialState = {
    postID: 0,
};

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    navItems = [
        {
            name: "About",
            url: "#",
        },
        {
            name: "Services",
            url: "#",
        },
        {
            name: "Contact",
            url: "#",
        },
    ];

    postItems = [
        {
            image: {
                src: logo2,
                alt: "Taiwan",
            },
            title: "台灣的日常",
            carText: "這張照片是我在台灣拍的喔",
            date: "04 14, 2019",
            author: " Lee Zhi Yi",
            content: <p className="card-text">這張照片是我在台灣拍的喔<br/>旁邊是我最喜歡的公園<br/>還有...<br/>我最愛騎的腳踏車！</p>,
        },
        {
            image: {
                src: logo3,
                alt: "Tokyo",
            },
            title: "東京旅遊",
            carText: "第一次去日本",
            date: "04 14, 2019",
            author: " Lee Zhi Yi",
            content: <p className="card-text">這張照片是我第一次去日本拍的<br/>這裡是淺草的雷門喔！<br/>日本真的很好玩<br/>我們還遇到暴風雪欸！</p>,
        },
        
    ]

    setPostNumber = (postNumber) => {
        this.setState({postID: postNumber});
    };

    render() {
        return(
            <BrowserRouter>
                <div>
                    {/* Navigation */}
                    <Navbar navItems={this.navItems}></Navbar>

                    {/* Page Content */}
                    <div className="container">
                        <div className="row">
                            {/* <!-- Blog Entries Column --> */}
                            <div className="col-md-8">

                                <Switch>
                                    <Route exact path="/">
                                        <h1 className="my-4">Posts
                                            <br/><small>wellcome to Lee Zhi Yi's Posts</small>
                                        </h1>
                                        {/* <!-- Blog Post --> */}
                                        {this.postItems.map((ele, key) => (
                                            <Post setNumber={this.setPostNumber} key={key} index={key} image={ele.image} title={ele.title} carText={ele.carText} date={ele.date} author={ele.author}></Post>
                                        ))}
                                    </Route>
                                    <Route path={"/posts/"+this.state.postID}>
                                        <h1 className="my-4">Lee Zhi Yi's Post</h1>
                                        <Post key={this.state.postID} index={this.state.postID} image={this.postItems[this.state.postID].image} title={this.postItems[this.state.postID].title} carText={this.postItems[this.state.postID].carText} date={this.postItems[this.state.postID].date} author={this.postItems[this.state.postID].author} content={this.postItems[this.state.postID].content}></Post>
                                    </Route>
                                    <Route path="/About">
                                    <h1 className="my-4">About
                                        <br/><small>About 正在施工！</small>
                                    </h1>
                                    </Route>
                                    <Route path="/Services">
                                    <h1 className="my-4">About
                                        <br/><small>Services 正在施工！</small>
                                    </h1>
                                    </Route>
                                    <Route path="/Contact">
                                    <h1 className="my-4">About
                                        <br/><small>Contact 正在施工！</small>
                                    </h1>
                                    </Route>
                                </Switch>

                                {/* <!-- Pagination --> */}
                                <Pagination></Pagination>

                            </div>

                            {/* <!-- Sidebar Widgets Column --> */}
                            <div className="col-md-4">
                                {/* <!-- Search Widget --> */}
                                <Search></Search>
                                {/* <!-- Categories Widget --> */}
                                <Category setNumber={this.setPostNumber}></Category>
                                {/* <!-- Side Widget --> */}
                                <SideWidget></SideWidget>
                            </div>
                        </div>
                        {/* <!-- /.row --> */}
                    </div>     
                    {/* <!-- /.container --> */}

                    {/* <!-- Footer --> */}
                    <Footer></Footer>
                </div>            
            </BrowserRouter>
        );
    }
}

export default Blog;