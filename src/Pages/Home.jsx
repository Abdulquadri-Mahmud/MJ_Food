import React from 'react'
import Hero from '../Components/Hero'
import QuickSearch from '../Components/QuickSearch'
import Collection from '../Components/Collection'
import GetApp from '../Components/GetApp'
import Testimonials from '../Components/Testimonials'
import WhoWeAre from '../Components/WhoWeAre'

export default function Home() {
  return (
    <div>
        <Hero/>
        <QuickSearch/>
        <WhoWeAre/>
        <Collection/>
        <GetApp/>
        <Testimonials/>
    </div>
  )
}
