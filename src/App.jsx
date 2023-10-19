import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { darkTheme,LightTheme } from './components/utils/Theme'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Video from './pages/Video'
import Home from './pages/Home'




const Container=styled.div`

display: flex;

`

const Main=styled.div`
flex: 7;
background-color: ${({theme})=>theme.bgColor};




`


const Wrapper=styled.div`

`




function App() {

  const [darkmode,setDarkMode]=useState(true)


  return (
    <BrowserRouter>
        <ThemeProvider theme={darkmode?darkTheme:LightTheme}>
          <Container>
      <Menu darkmode={darkmode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar/>
        <Wrapper>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>}></Route>
              <Route path='video'>
                <Route path=':id' element={<Video></Video>}/>
              </Route>
              
                

              </Route>

          </Routes>
        

        </Wrapper>
      </Main>



    

    </Container>
    </ThemeProvider></BrowserRouter>


  
  )
}

export default App
