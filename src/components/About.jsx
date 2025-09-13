
const About = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-center w-full bg-[#444444] md:py-57 text-center">
            <h2 className="text-[48px] leading-[52.8px] mb-[50px]">An extraordinary note <br /> for <span className="text-[#00bb77]">makers, creators..</span></h2>
            <div className="mb-[50px]">
                <svg
                    width={160}
                    height={160}
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M85.8668 46.78L117.693 55.2533M79.0534 72.0866L94.9601 76.3267M79.8468 119.773L86.2068 121.473C104.207 126.273 113.207 128.667 120.3 124.593C127.387 120.527 129.8 111.573 134.62 93.68L141.44 68.3666C146.267 50.4667 148.673 41.52 144.58 34.4666C140.487 27.4133 131.493 25.02 113.487 20.2266L107.127 18.5266C89.1268 13.7266 80.1268 11.3333 73.0401 15.4066C65.9468 19.4733 63.5334 28.4266 58.7068 46.32L51.8934 71.6333C47.0668 89.5333 44.6534 98.48 48.7534 105.533C52.8468 112.58 61.8468 114.98 79.8468 119.773Z"
                        stroke="#00BB77"
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                    <path
                        d="M79.9999 139.64L73.6532 141.373C55.6932 146.26 46.7199 148.707 39.6399 144.553C32.5732 140.407 30.1599 131.28 25.3532 113.033L18.5465 87.2199C13.7332 68.9732 11.3265 59.8466 15.4132 52.6599C18.9465 46.4399 26.6665 46.6666 36.6665 46.6666"
                        stroke="#00BB77"
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <p className="text-[20px] leading-[28px]">Creators around the planet use this app <br /> for creating <span className="text-[#00bb77]">magic</span></p>
        </section>
    );
};

export default About;