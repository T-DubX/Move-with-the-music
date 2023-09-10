import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Collection} from "./layout/section/collection/Collection";
import {Сharacteristics} from "./layout/section/characteristics/Сharacteristics";
import {LatestProducts} from "./layout/section/latestProducts/LatestProducts";
import {HeadphoneСomponents} from "./layout/section/headphoneСomponents/HeadphoneСomponents";
import {Subscription} from "./layout/section/ subscription/Subscription";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Collection/>
            <Сharacteristics/>
            <LatestProducts/>
            <HeadphoneСomponents/>
            <Subscription/>
            <Footer/>
        </>
    );
}

export default App;
