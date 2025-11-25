import { Course } from 'lib/types'
import React from 'react'
import { Link } from 'react-router'

const CourseCard: React.FC<{ course: Course, Component?: React.ElementType }> = ({ course, Component = Link }) => {
    return (
        <Component
            to={course.slug}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-primary transition duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={course.bgImg}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {course.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-primary transition-colors">
                        {course.title}
                    </h3>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {course.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="font-semibold text-gray-900">{course.rating}</span>
                    </div>
                    <span className="text-primary font-bold">{course.price}</span>
                </div>
            </div>
        </Component>
    )
}

export default CourseCard