import styled from 'styled-components';
import {Logo} from "./components/logo/Logo";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Collection} from "./layout/section/collection/Collection";


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Collection/>
        </>
    );
}

export default App;
