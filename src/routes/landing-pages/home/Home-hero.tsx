import React from 'react'
import { useTranslation } from 'react-i18next'

const HomeHeroSection = () => {
  const { t } = useTranslation('home')
  return (
    // grid grid-cols-1 lg:grid-cols-2 items-center
    <section id="home" className="py-12 md:py-16">
        <div className="container mx-a grid grid-cols-1 lg:grid-cols-2 items-center px-4">
            <div className="col-span-1 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">{t('hero_title')}</h1>
                <p className="text-lg mb-8 text-gray-500">{t('hero_desc')}</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="btn btn-primary btn-lg justify-center">{t('hero_start')}</button>
                    <button className="btn btn-outline-secondary btn-lg justify-center">{t('hero_view_demo')}</button>
                </div>
            </div>
            <div className="col-span-1 justify-center hidden md:flex relative">
                <div className="relative">
                    <div className="w-100 h-100 bg-secondary/10 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-80 h-80 bg-secondary/20 rounded-full flex items-center justify-center">
                            <div className="w-64 h-64 bg-secondary/30 rounded-full flex items-center justify-center"></div>
                        </div>
                    </div>
                    <img src="/images/student_group.png" alt="Hero" className="object-contain relative z-1" />
                    <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-lg shadow-lg z-2">
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-sm">{t('hero_courses')}</div>
                    </div>
                    <div className="absolute bottom-4 -left-4 bg-white text-primary p-4 rounded-lg shadow-lg z-2">
                        <div className="text-2xl font-bold">50K+</div>
                        <div className="text-sm">{t('hero_students')}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHeroSection