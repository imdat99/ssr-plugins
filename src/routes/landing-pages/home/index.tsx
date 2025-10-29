import React, { lazy, Suspense } from 'react'
import HomeHeroSection from './Home-hero'
import HomeCTA from './Home-CTA'
const HomeFeatures = lazy(() => import('./Home-features'))
const HomeCourses = lazy(() => import('./Home-Courses'))
const HomeTestimonials = lazy(() => import('./Home-Testimonials'))
const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <HomeCourses />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeFeatures />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeTestimonials />
      </Suspense>
      <HomeCTA />
    </>
  )
}
const SectionSkeleton = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white border border-gray-300 p-6 rounded-xl animate-pulse">
              <div className="h-14 bg-gray-300 rounded mb-4"></div>
              <div className="h-6 bg-gray-300 rounded mb-3"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home