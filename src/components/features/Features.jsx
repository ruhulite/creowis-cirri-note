import React from 'react';
import Box from "./Box.jsx";

const Features = () => {
    return (
        <section
            id="features"
            className="bg-black md:px-[40px] md:py-40"
        >
            <div className="mb-3">
                <span className="bg-[#00bb77] text-[10px] text-black rounded-lg leading-[14px] px-2 py-[2px]">Whats the best</span>
            </div>
            <h2 className="md:text-[80px] md:leading-[88px] mb-5">Key Features</h2>
            <p className="text-[20px] leading-[28px] text-[#ffffff80] md:mb-20">We’re proud to announce with the features <br /> that empower creatives every day.</p>
            <div className="feature-wrap flex md:flex-wrap md:gap-[2px]">
                <div className="mr-[15px]"><Box /></div>
                <div className="mr-[15px] md:mt-[320px]"><Box /></div>
                <div><Box /></div>
                <div className="text-box-lg flex items-center w-[792px] h-[320px] rounded-lg p-6 mr-[15px]">
                    <p className="text-[48px] leading-[52.8px]">Creative people worldwide rely<br /> on this app to craft ideas<br /> into <span className="text-[#00bb77]">digital magic</span>.</p>
                </div>
                <div><Box /></div>
                <div className="mr-[15px]"><Box /></div>
                <div><Box /></div>
            </div>
            <p className="text-box-sm text-[#ffffff80] mt-[30px]">Creative people worldwide rely<br /> on this app to craft ideas<br /> into <span className="text-[#00bb77]">digital magic</span>.</p>
        </section>
    );
};

export default Features;