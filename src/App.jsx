import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Heading"


const StyledApp = styled.div`
padding: 1.6rem 1.5rem;
background-color: aquamarine;
`

function App() {
  return (
    <>
    <GlobalStyles/>
    <StyledApp>
      <Heading as="h1" >Wooden Hotel</Heading>
      
      <Heading as="h2">Check In</Heading>
      <Button>Check-In</Button>

      <Heading as="h3">Form</Heading>
      <Input type="number" placeholder="number of guests" />
    </StyledApp>
    </>
  )
}

export default App
