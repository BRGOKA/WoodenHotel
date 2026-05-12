import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Heading"
import Row from "./ui/Row"


const StyledApp = styled.div`
padding: 1.6rem 1.5rem;
background-color: aquamarine;
`

function App() {
  return (
    <>
    <GlobalStyles/>
    <StyledApp>
      <Row type="horizontal">
      <Heading as="h1" >Wooden Hotel</Heading>
      <div>
      <Heading as="h2">Check In and out</Heading>
      <Button >Check-In</Button>
      <Button variation='secondary' size='small'>Check-Out</Button>
      </div>
      </Row>
<Row type='vertical'>
      <Heading as="h3">Form</Heading>
      <form>
      <Input type="number" placeholder="number of guests" />
      <Input type="number" placeholder="number of guests" />
      </form>
</Row>
    </StyledApp>
    </>
  )
}

export default App
