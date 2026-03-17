import { Heading } from './components/Heading/Heading'
import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Heading level={1}>Welcome to the Component Library</Heading>
      <Heading level={2}>Getting Started</Heading>
      
      <Card>
        <Heading level={3}>Card Component</Heading>
        <p>This is a simple card component with content inside.</p>
        <Button variant="primary" onClick={() => console.log('Clicked!')}>
          Click Me
        </Button>
      </Card>

      <div style={{ marginTop: '1rem' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  )
}

export default App
