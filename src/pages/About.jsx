import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. In reiciendis quisquam dignissimos?</p>
            <p>Version 1.0.0</p>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About