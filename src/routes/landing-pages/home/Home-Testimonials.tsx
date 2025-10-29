import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const HomeTestimonials = () => {
    const { t } = useTranslation('home')
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">{t('testimonials_title')}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t('testimonials_desc')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="bg-light p-6 rounded-xl">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">LM</div>
                                    <div>
                                        <h4 className="font-semibold">{t(`testimonials_${index+1}_name`)}</h4>
                                        <p className="text-gray-500 text-sm">{t(`testimonials_${index+1}_course`)}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">"{t(`testimonials_${index+1}_feedback`)}"</p>
                                <RenderRate rate={5} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
const RenderRate = memo(({ rate }: { rate: number }) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rate) {
            stars.push(<i key={i} className="fas fa-star"></i>)
        } else if (i === Math.ceil(rate) && !Number.isInteger(rate)) {
            stars.push(<i key={i} className="fas fa-star-half-alt"></i>)
        } else {
            stars.push(<i key={i} className="far fa-star"></i>)
        }
    }
    return <div className="flex mt-4 text-yellow-400">{stars}</div>
})
export default HomeTestimonials