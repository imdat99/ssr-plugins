import { client } from 'api/rpcclient'
import { Link } from 'react-router'
import useSWR from 'swr'
import { useTranslation } from 'react-i18next'

const HomeCourses = () => {
    const { t } = useTranslation('home')
    const {data, isLoading, error} = useSWR("getHomeCourses", client.getHomeCourses)
  return (
    <section id="courses" className="py-16 bg-white -mt-16" suppressHydrationWarning>
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">{t('courses_title')}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{t('courses_desc')}</p>
            </div>
            {isLoading && (
                <div className="text-center">{t('courses_loading')}</div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    data?.map((course) => (
                        <Link to={course.slug} key={course.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:(shadow-[.25rem_.25rem_0] shadow-primary-dark/60 border-primary) transition duration-300">
                            <img src={course.bgImg} alt={course.title} className="h-48 w-full object-cover" />
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-xl">{course.category}</span>
                                    <span className="text-gray-500 text-sm">{course.rating} <i className="fas fa-star text-yellow-400"></i></span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                                <div className="flex justify-between items-center">
                                    {/* <span className="text-primary font-semibold">{course.price}</span> */}
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        console.log("click: ", course.slug)
                                    }} className="text-primary cursor-pointer">{t('courses_detail')}</button>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            
            <div className="text-center mt-12">
                <Link to="/courses" className="btn btn-lg btn-outline-primary transition ease-linear hover:scale-105">{t('courses_all')}</Link>
            </div>
        </div>
    </section>
  )
}

export default HomeCourses