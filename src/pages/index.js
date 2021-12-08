import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>ramon.dev</h1>
    <ul>
      <li>
        <Link to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about'>
          About
        </Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
