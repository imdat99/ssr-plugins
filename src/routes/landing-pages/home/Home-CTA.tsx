import React from 'react'
import { useTranslation } from 'react-i18next'

const HomeCTA = () => {
  const { t } = useTranslation('home')
  return (
    <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t('cta_title')}</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-8">{t('cta_desc')}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="btn btn-light btn-lg">{t('cta_register')}</button>
                <button className="btn btn-outline-light btn-lg">{t('cta_contact')}</button>
            </div>
        </div>
    </section>
  )
}

export default HomeCTA