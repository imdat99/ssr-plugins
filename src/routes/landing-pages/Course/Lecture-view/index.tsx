import { client } from 'api/rpcclient'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import useSWR from 'swr'

export const Component = () => {
    const { slug } = useParams()
    const [activeLectureId, setActiveLectureId] = useState<number | null>(null)

    const { data: course } = useSWR(
        slug ? ["getCourseBySlug", slug] : null,
        () => client.getCourseBySlug({ slug: slug! })
    )

    const { data: content, isLoading } = useSWR(
        slug ? ["getCourseContent", slug] : null,
        () => client.getCourseContent({ slug: slug! })
    )

    // Set first lecture as active initially
    React.useEffect(() => {
        if (content && content.length > 0 && activeLectureId === null) {
            setActiveLectureId(content[0].id)
        }
    }, [content, activeLectureId])

    const activeLecture = content?.find(l => l.id === activeLectureId)

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (!course) return null

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
            {/* Header */}
            <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <Link to={`/courses/${slug}`} replace className="text-gray-400 hover:text-white transition">
                        <i className="fas fa-arrow-left"></i> Back
                    </Link>
                    <h1 className="font-bold text-lg truncate max-w-md">{course.title}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm">
                        US
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Main Content (Video Player) */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <div className="aspect-video bg-black relative flex items-center justify-center group">
                        {activeLecture?.type === 'video' ? (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
                                <i className="fas fa-play-circle text-7xl text-white/80 group-hover:text-primary transition duration-300 cursor-pointer transform group-hover:scale-110"></i>
                                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <div className="h-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer">
                                        <div className="h-full bg-primary w-1/3"></div>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex gap-4">
                                            <i className="fas fa-play cursor-pointer hover:text-primary"></i>
                                            <i className="fas fa-volume-up cursor-pointer hover:text-primary"></i>
                                        </div>
                                        <div className="flex gap-4">
                                            <i className="fas fa-cog cursor-pointer hover:text-primary"></i>
                                            <i className="fas fa-expand cursor-pointer hover:text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="text-center p-12">
                                <i className="fas fa-clipboard-list text-6xl text-gray-600 mb-4"></i>
                                <h3 className="text-2xl font-bold mb-2">Quiz Time!</h3>
                                <p className="text-gray-400">Complete the exercise to continue.</p>
                                <button className="mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-bold transition">
                                    Start Quiz
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="p-8 max-w-4xl mx-auto w-full">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">{activeLecture?.title}</h2>
                            <button className="text-gray-400 hover:text-primary transition">
                                <i className="fas fa-check-circle mr-2"></i> Mark as Completed
                            </button>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            In this lecture, we will dive deep into the core concepts. Make sure to take notes and follow along with the exercises.
                        </p>

                        <div className="mt-8 pt-8 border-t border-gray-800">
                            <h3 className="font-bold text-lg mb-4">Discussion</h3>
                            <div className="bg-gray-800 rounded-xl p-4">
                                <textarea
                                    className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 resize-none"
                                    placeholder="Ask a question or share your thoughts..."
                                    rows={3}
                                ></textarea>
                                <div className="flex justify-end mt-2">
                                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-bold transition">
                                        Post Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Curriculum) */}
                <div className="w-80 bg-gray-800 border-l border-gray-700 overflow-y-auto flex-shrink-0 hidden lg:block">
                    <div className="p-4 border-b border-gray-700">
                        <h3 className="font-bold text-gray-300 uppercase text-xs tracking-wider mb-2">Course Content</h3>
                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-1/4"></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">25% Completed</p>
                    </div>

                    <div className="py-2">
                        {content?.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => setActiveLectureId(item.id)}
                                className={`px-4 py-3 cursor-pointer transition flex items-start gap-3 ${activeLectureId === item.id
                                    ? 'bg-primary/10 border-r-2 border-primary'
                                    : 'hover:bg-gray-700/50'
                                    }`}
                            >
                                <div className="mt-1">
                                    {item.completed ? (
                                        <i className="fas fa-check-circle text-green-500 text-sm"></i>
                                    ) : (
                                        <div className={`w-4 h-4 rounded-full border-2 ${activeLectureId === item.id ? 'border-primary' : 'border-gray-500'} flex items-center justify-center`}>
                                            {activeLectureId === item.id && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className={`text-sm font-medium ${activeLectureId === item.id ? 'text-primary' : 'text-gray-300'}`}>
                                        {index + 1}. {item.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <i className={`fas ${item.type === 'video' ? 'fa-play-circle' : 'fa-file-alt'} text-xs text-gray-500`}></i>
                                        <span className="text-xs text-gray-500">{item.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component
