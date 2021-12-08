/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from '../../styles/global'
import { LayoutMain, LayoutWrapper } from './styles'
import Sidebar from "../SideBar"
import MenuBar from '../MenuBar'

const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyles/>
    <Sidebar />
    <LayoutMain>{children}</LayoutMain>
    <MenuBar />
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
