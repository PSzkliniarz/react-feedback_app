import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <h1>About page</h1>  
      <p>This is App to leave feedback about product</p>
      <p>
        <Link to='/'>Back to home</Link>
      </p>
    </Card>
  )
}

export default AboutPage