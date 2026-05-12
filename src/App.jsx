import styled from "styled-components"

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
function App() {
  return (
    <div>
      <H1>The Wiled oasis</H1>
      <Button>Check-In</Button>
    </div>
  )
}

export default App
