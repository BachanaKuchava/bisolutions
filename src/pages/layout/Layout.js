import React from 'react'
import AppHero from '../../components/hero'
import AppAbout from '../../components/about'
import AppServices from '../../components/services'
import AppWorks from '../../components/works'
import AppPricing from '../../components/pricing'
import AppBlog from '../../components/blog'
import AppContact from '../../components/contact'

function Layout() {
  return (
    <>
      <AppHero />
      <AppAbout />
      <AppServices />
      {/* <AppWorks /> */}
      <AppPricing />
      <AppBlog />
      <AppContact />
    </>
  )
}

export default Layout
