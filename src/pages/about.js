// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>Hi there! I'm Topdollar the cat. I like to annoy my human family and fart loudly sometimes.</p>
    </Layout>
    )    
}

export const Head = () => <title>About Topdollar</title>
// Step 3: Export your component
export default AboutPage