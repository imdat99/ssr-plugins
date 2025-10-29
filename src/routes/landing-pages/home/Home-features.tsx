import { cn } from 'lib/utils'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HomeFeatures = () => {
  const { t } = useTranslation('home')
  const features = [
    {
      id: 1,
      title: t('features_1_title'),
      description: t('features_1_desc'),
      icon: "fa-regular fa-circle-play",
    },
    {
      id: 2,
      title: t('features_2_title'),
      description: t('features_2_desc'),
      icon: "fa-brands fa-creative-commons-nc",
    },
    {
      id: 3,
      title: t('features_3_title'),
      description: t('features_3_desc'),
      icon: "fa-solid fa-arrows-rotate",
    }
  ]
  return (
    <section id="features" className="py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">{t('features_title')}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{t('features_desc')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    features.map((feature) => (
                        <div key={feature.id} className=":uno: text-center md:text-left bg-white border-gray-300 border p-6 rounded-xl hover:(shadow-[.25rem_.25rem_0] shadow-secondary/40 border-secondary) transition duration-300 group">
                            <div className=":uno: mx-a md:mx-0 w-14 h-14 border border-gray-300 text-gray-600 rounded-xl flex items-center justify-center mb-4 group-hover:(border-secondary text-secondary) transition duration-300" 
                            >
                                <i className={cn("text-2xl", feature.icon)} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default HomeFeatures