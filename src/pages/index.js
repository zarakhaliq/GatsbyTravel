import React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Trips heading="Our favourite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
