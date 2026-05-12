import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"

const H1=styled.h1`font-size:30px;
font-weight:600;
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
      <Input type="number" placeholder="number of guests" />
    </StyledApp>
    </>
  )
}

export default App
