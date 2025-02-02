import React, { useState } from 'react';

const PreviewTheme = ({ config , readClipboard}) => {
    const { bgColor, platform, title, font } = config;

    const [image, setImage] = useState()

    return (
        <div className="p-4 bg-white">


            <div className={`overflow-y-hidden flex flex-col rounded px-4 pt-4 ${platform}`}
                style={{ backgroundColor: bgColor }}
            >


                <h1 className={`${font} text-2xl md:text-3xl p-10 text-white font-bold text-center`}>{title}</h1>

                <div className="w-10/12 group mx-auto mt-auto mb-0 shadow-lg  flex flex-col bg-white rounded-t-xl border-white">
                    <div className="bg-gray-800 h-8 w-full p-2 flex items-center rounded-t-xl">
                        <div className="bg-red-400 h-3 w-3 rounded-full mx-1"></div>
                        <div className="bg-yellow-400 h-3 w-3 rounded-full mx-1"></div>
                        <div className="bg-green-400 h-3 w-3 rounded-full mx-1"></div>
                        <button
                            onClick={() => setImage('')}
                            className="ml-auto mr-4 cursor-pointer">
                            <svg className="group-hover:inline-block hidden w-4 h-4 text-white rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                        </button>
                    </div>



                    {image ?
                        <div className="">
                            <img src={image && image} className="object-cover " alt="preview" />

                        </div>
                        :
                        <div className="flex flex-col p-20 py-28 bg-white items-center justify-center">
                            <input type="file"
                                className="text-xl cursor-pointer mb-2 bg-white rounded border"
                                onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                            />
                            <span className=" text-center italic">点击上传截图</span>
                            <button
                                className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
                                onClick={() => {
                                    readClipboard().then(clipboard => {
                                        setImage(clipboard); // 处理返回的 Blob URL
                                    }).catch(error => {
                                        console.error('读取剪贴板失败：', error);
                                    })
                                }}>

                                <span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                                </span>

                                <span className="mx-2">剪贴板</span>
                            </button>
                        </div>

                    }
                </div>





            </div>


        </div>
    );
}

export default PreviewTheme;