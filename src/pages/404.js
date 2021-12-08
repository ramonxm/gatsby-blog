import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Ops! Essa página não existe!</p>
  </Layout>
)

export default NotFoundPage
