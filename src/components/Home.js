import React from 'react';
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom';
import cover1 from '../assets/images/cover1.webp'
import cover2 from '../assets/images/cover2.webp'
import cover3 from '../assets/images/cover3.webp'
import cover4 from '../assets/images/cover4.webp'



import step1 from '../assets/images/step1.png'
import step2 from '../assets/images/step2.png'

import hashnodeLogo from '../assets/images/hashnode-logo.png'
import devLogo from '../assets/images/dev-logo.png'

import WallOfLove from './walloflove';
const Home = () => {


    return (
        <div className="bg-gray-50">

            <div className="text-xl  flex border-b border-gray-100  p-2 md:w-10/12 mx-auto">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-8 h-8 mx-2" />
                    <h1 className="font-semibold md:text-xl text-lg font-Inter">Coverview</h1>
                </div>

                <a href="https://github.com/Rainvice/CoverView" target="_blank" rel="noreferrer" className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl md:px-4 text-white md:text-sm text-xs ml-auto mr-4 font-Inter font-semibold p-2">
                    <span className="text-sm">⭐ Star on Github</span>
                </a>
            </div>

            <div className="  mx-auto md:px-20 py-6   flex flex-col items-center">
                <h1 className="md:w-7/12 m-10 text-center md:text-5xl text-3xl font-extrabold text-gray-700 font-Anek">
                    为您的博客创建封面图片现在非常容易
                    <p/>
                    <span className="text-2xl md:text-left text-center text-gray-700">本页基于<a href="https://github.com/rutikwankhade/CoverView" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">rutikwankhade/CoverView</a>修改，修复下载Bug，添加复制图片功能，并翻译为中文网页</span>
                </h1>
                <Link to="/editor" className="hover:translate-x-2 duration-300 bg-gray-700 hover:bg-gray-800 group rounded-full px-4 md:px-8 text-white md:text-2xl text-lg mx-auto font-Inter font-semibold md:p-4 p-2">
                    <span className="md:text-2xl text-lg">打开编辑器 &rarr;</span>
                </Link>
            </div>




            <div className=" temple flex flex-row items-center justify-center mx-auto md:w-10/12">

                <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:-rotate-3  rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
                    <img src={cover2} className="border border-gray-100 rounded mb-2" alt="cover1" />
                    <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-5 h-2 rounded mb-2"></p>

                </div>

                <div className="m-4 transform hover:scale-105 hover:rotate-3 -rotate-2  duration-300 bg-white p-4 shadow-sm w-1/3 rounded-lg flex flex-col ">
                    <img src={cover1} className="rounded border border-gray-100 mb-2" alt="cover-2" />
                    <p className="animate animate-pulse bg-gray-50 md:h-6 h-3 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-6 h-3 rounded mb-2"></p>

                </div>

                <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:rotate-3 -rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
                    <img src={cover3} className="rounded border border-gray-100 mb-2" alt="cover3" />
                    <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:odd:h-5 h-2 rounded mb-2"></p>

                </div>

            </div>





            <div className="md:my-32  my-10 mx-auto">

                <div className="md:w-10/12 mx-auto flex flex-col ">
                    <div className="md:w-9/12 text-center mx-auto ">
                        <h2 className="text-5xl py-4 font-bold font-Anek text-gray-700">为什么封面图像比你想象的更重要？</h2>

                    </div>

                    <div className="flex md:flex-row flex-col mx-auto justify-center my-10 mx-auto">

                        <div className="m-10 p-10 bg-white rounded-xl shadow-xl shadow-gray-100 flex flex-col  md:w-4/12 ">
                            <div className=" my-2 bg-purple-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                                <svg className="text-white w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                            </div>
                            <p className="text-2xl md:text-left text-center text-gray-700">每天约有<span className="font-bold"> 700 万篇 </span>博文被发表,随着新时代博客工具的兴起，这一数字还会继续上升</p>
                        </div>

                        <div className="m-10 p-10 bg-white rounded-xl shadow-xl shadow-gray-100 flex  flex-col  md:w-4/12 ">
                            <div className=" my-2 bg-green-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                                <svg className="text-white w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            <p className="text-2xl md:text-left text-center text-gray-700">一张好的封面图片比一张随意的封面图能带来<span className="font-bold"> 更高 </span>的观看数量</p>
                        </div>

                    </div>



                </div>


                <h2 className="md:text-5xl text-3xl md:w-1/2 mx-auto mt-32 font-bold font-Anek text-center text-gray-700">使用 Coverview可以在<span className="text-indigo-400"> 几秒钟 </span>内创建封面图像</h2>
                <div className="md:w-8/12 my-20 flex md:flex-row flex-col mx-auto">

                    <div className="md:w-1/3 flex flex-col mx-10">

                        <div className="text-center">
                            <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">1</div>

                            <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">添加博客文章的标题和作者</p>
                        </div>
                        <img src={step1} alt="preview" className="mt-2 rounded-lg shadow-sm" />

                    </div>

                    <div className="flex items-center font-bold text-3xl text-center mx-auto">--------&rarr;</div>

                    <div className="flex flex-col md:w-1/3 mx-10">

                        <div className="text-center">
                            <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">2</div>

                            <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">使用颜色、字体、图标和图案进行自定义</p>
                        </div>
                        <img src={step2} alt="preview" className="mt-2 rounded-lg shadow-sm" />

                    </div>
                </div>



                <div className="md:w-8/12  flex md:flex-row flex-col justify-center items-center mx-auto">

                    <div className="text-center md:w-1/3 m-4">
                        <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">3</div>

                        <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">选择不同的主题</p>
                        <p className="text-xl">Unsplash 集成、个人品牌定制图标等</p>
                    </div>

                    <div className="flex md:w-8/12 hideout p-6">
                        <div className="flex flex-col w-1/2 ">
                            <img src={cover1} alt="preview" className=" hover:scale-105 duration-300 m-2 rounded-lg shadow-sm" />
                            <img src={cover2} alt="preview" className="hover:scale-105 duration-300  m-2 rounded-lg shadow-sm" />

                        </div>


                        <div className="flex flex-col mt-4 w-1/2">
                            <img src={cover3} alt="preview" className="hover:scale-105 duration-300   m-2 rounded-lg shadow-sm" />
                            <img src={cover4} alt="preview" className="hover:scale-105 duration-300  m-2 rounded-lg shadow-sm" />

                        </div>

                    </div>

                </div>


                <div className="md:w-6/12 my-20 mx-auto">

                    <div className="text-center m-4">

                        <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">支持 Hashnode 或 Dev.to 等平台</p>
                    </div>
                    <div className="flex mx-auto justify-center">
                        <img src={hashnodeLogo} className="w-20 m-2" alt="hashnode" />
                        <img src={devLogo} className="w-20 m-2" alt="dev" />
                    </div>
                </div>


                <WallOfLove />

                <div className="md:w-8/12 mx-auto pt-24 p-4">
                    <h2 className="text-6xl text-center font-Anek font-bold text-gray-700 mx-auto">简单、快捷、易于使用</h2>
                    <p className="text-2xl text-center py-4 md:w-8/12 mx-auto">这样，你就可以专注于撰写博客，再也不用担心封面图片的问题了。</p>
                    <Link to="/editor" >
                        <button className="flex mx-auto my-4 hover:translate-x-2 duration-300 bg-gray-700  rounded-full px-6 text-white text-xl font-Inter font-semibold p-4">它是免费的！立即试用 &rarr;</button>
                    </Link>
                </div>

            </div>




            <footer className="bg-white p-10 flex md:flex-row flex-col font-Inter md:px-20 justify-center items-center">
                <div className="md:w-1/2 flex flex-col">
                    <span className="text-lg">Made with 💛 by <a href="https://twitter.com/WankhadeRutik" className="font-semibold" target="_blank" rel="noreferrer">Rutik Wankhade</a></span>
                    <span className="text-lg">Translated  💛 by <a href="https://twitter.com/Rainvice" className="font-semibold" target="_blank" rel="noreferrer">Rainvice</a></span>
                    <span className="text-lg font-Nunito">查看我的 <a href="https://rutikwankhade.dev" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-pink-400">其他作品</a></span>
                </div>

                <div className="md:text-lg text-sm flex flex-wrap  ">
                    <Link to="/faq" className="m-2 hover:font-semibold">📌 怎么使用</Link>
                    <a href="https://github.com/Rainvice/CoverView" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">⭐ Star on Github</a>
                    <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">🥤 Buy @rutikwankhade a coffee</a>
                </div>
            </footer>

        </div>
    );
}

export default Home;