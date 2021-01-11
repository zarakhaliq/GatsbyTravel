import React from "react"
import { Link } from "gatsby"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import smallNav from "../components/smallNav"

import Layout from "../components/layout"

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
