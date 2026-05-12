import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"

const H1=styled.h1`font-size:30px;
font-weight:600;
`
const Button = styled.button`
font-size: 1.4rem;
padding: 1.2rem 1.6rem;
font-weight: 500;
border: none;
border-radius: 7px;
background-color: blueviolet;
color: wheat;
`

const StyledApp = styled.div`
padding: 1.6rem 1.5rem;
background-color: aquamarine;
`

function App() {
  return (
    <>
    <GlobalStyles/>
    
    <StyledApp>
      <H1>The Wiled oasis</H1>
      <Button>Check-In</Button>
    </StyledApp>
    </>
  )
}

export default App
