import '../../assets/TopBar.pcss'
import TopBarList from "./TopBarList.jsx";

const TopBar = () => {

    return (
        <div id="topBar" className="bg-green-900 marquee">
            <div className="marquee--inner">
                <ul className="flex justify-start">
                    <TopBarList />
                </ul>
                <ul className="flex justify-start">
                    <TopBarList />
                </ul>
            </div>

        </div>
    );
};

export default TopBar;