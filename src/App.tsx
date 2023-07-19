import { useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import showcaseLogo from '/showcase-logo-temp.png'
import './App.css'
import { Button, Flex, Heading } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flex justifyContent="center">
        <img src={showcaseLogo} className="logo" alt="Showcase Logo" />
      </Flex>
      <h1>When sky meets the ocean.</h1>
      <p className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          Useless counter: {count}
        </Button>
        <p className="description">
          This has no meaning yet. Maybe next time.
        </p>
      </p>
    </>
  )
}

export default App
