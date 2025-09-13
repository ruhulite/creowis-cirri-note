import octopas from '../assets/images/octopas.png'

const Banner = () => {
    return (
        <section id="banner" className="bg-black items-center relative">
            <svg
                width={1280}
                height={900}
                viewBox="0 0 1280 900"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_3_512)">
                    <path
                        d="M-257.5 791C-239.667 871.667 -28.8 466.3 246 363.5C589.5 235 415 320 817.5 528C1220 736 1456 201.5 1578.5 103"
                        stroke="white"
                        strokeWidth={32}
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_3_512"
                        x="-513.123"
                        y="-149.469"
                        width="2341.65"
                        height="1207.02"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation={120}
                            result="effect1_foregroundBlur_3_512"
                        />
                    </filter>
                </defs>
            </svg>

            <div className="w-full h-full absolute top-[0px] left-[0px] flex justify-center items-center">
                <span className="text-span md:text-[80px] md:leading-[88px] absolute md:top-[358px] md:left-[104px]">Note Taking</span>
                <span className="text-span last md:text-[80px] md:leading-[88px] text-[#00bb77] absolute md:top-[461px] md:right-[123px]">Redefined</span>
                <span className="md:max-h-[100%]">
                    <img src={octopas} alt="Octopas Taking Note" />
                </span>
            </div>

        </section>
    );
};

export default Banner;