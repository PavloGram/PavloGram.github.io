import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import GlobalStyle from "./GlobalStyle";
import { styled } from "styled-components";

const Wrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
`


function App() {
  return (
    <Wrapper >
     <Header/>
     <Main/>
     <Footer/>
     <GlobalStyle/>
     </Wrapper >
   
  )
}

export default App;


