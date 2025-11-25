import { client } from 'api/rpcclient'
import { useTypeId } from 'lib/hooks/useComponentId'
import React, { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router'
import useSWR from 'swr'

export const Component = () => {
    const { slug } = useParams()
    const { data: course, isLoading, error } = useSWR(
        slug ? ["getCourseBySlug", slug] : null,
        function (...arg) {
            console.log(arg)
            return client.getCourseBySlug({ slug: slug! })
        }
    )
    const componentId = useTypeId();
    const componentId2 = useTypeId();
    console.log("componentId", componentId)
    console.log("componentId2", componentId2)
    const stack = useRef(new Error());
    console.log(stack.current.name);
    useEffect(() => {
        console.log("test")
    }, [])
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (error || !course) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h1>
                <Link to="/courses" className="text-primary hover:underline">Back to Courses</Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img
                    src={course.bgImg}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="container mx-auto px-4 py-24 relative z-20">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                                {course.category}
                            </span>
                            <span className="flex items-center gap-1 text-yellow-400">
                                <i className="fas fa-star"></i>
                                <span className="font-bold">{course.rating}</span>
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            {course.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="learn"
                                className="bg-red-400/80 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20 text-center transition transform hover:scale-105 text-center flex items-center gap-2"
                            >
                                <i className="fa-regular fa-circle-play text-4xl"></i>
                                <span>Start Learning Now</span>
                            </Link>
                            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20 text-center">
                                <span className="block text-sm text-gray-300">Price</span>
                                <span className="font-bold text-2xl">{course.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">

                        <div className="bg-white rounded-xl shadow-sm mb-6">
                            <div className="border-b border-gray-200">
                                <nav className="flex overflow-x-auto">
                                    <a href="#overview" className="px-6 py-4 border-b-2 border-primary text-primary font-medium whitespace-nowrap">Tổng quan</a>
                                    <a href="#curriculum" className="px-6 py-4 border-b-2 border-transparent text-gray-600 hover:text-primary font-medium whitespace-nowrap">Nội dung</a>
                                    <a href="#instructor" className="px-6 py-4 border-b-2 border-transparent text-gray-600 hover:text-primary font-medium whitespace-nowrap">Giảng viên</a>
                                    <a href="#reviews" className="px-6 py-4 border-b-2 border-transparent text-gray-600 hover:text-primary font-medium whitespace-nowrap">Đánh giá</a>
                                    <a href="#faq" className="px-6 py-4 border-b-2 border-transparent text-gray-600 hover:text-primary font-medium whitespace-nowrap">FAQ</a>
                                </nav>
                            </div>

                            <div id="overview" className="p-6">
                                <h2 className="text-2xl font-bold mb-4">Giới thiệu khóa học</h2>
                                <p className="text-gray-600 mb-6">Khóa học Lập trình Web Fullstack cung cấp cho bạn kiến thức toàn diện về phát triển web, từ frontend đến backend. Bạn sẽ học cách xây dựng các ứng dụng web hiện đại với các công nghệ hàng đầu như React, Node.js, Express và MongoDB.</p>

                                <h3 className="text-xl font-semibold mb-4">Bạn sẽ học được gì?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                                        <span>Xây dựng giao diện người dùng với React và Tailwind CSS</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                                        <span>Phát triển API với Node.js và Express</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                                        <span>Làm việc với cơ sở dữ liệu MongoDB</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                                        <span>Triển khai ứng dụng lên cloud server</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                                        <span>Bảo mật và xác thực người dùng</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                                        <span>Tối ưu hóa hiệu suất ứng dụng</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-4">Yêu cầu trước khi học</h3>
                                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                                    <li>Kiến thức cơ bản về HTML, CSS và JavaScript</li>
                                    <li>Máy tính kết nối Internet</li>
                                    <li>Tinh thần học hỏi và kiên nhẫn</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-4">Khóa học này dành cho ai?</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Người mới bắt đầu muốn trở thành lập trình viên Fullstack</li>
                                    <li>Lập trình viên Frontend muốn học thêm Backend</li>
                                    <li>Lập trình viên Backend muốn học thêm Frontend</li>
                                    <li>Sinh viên CNTT muốn nâng cao kỹ năng thực tế</li>
                                </ul>
                            </div>
                        </div>

                        <div id="curriculum" className="bg-white rounded-xl shadow-sm mb-6">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold mb-2">Nội dung khóa học</h2>
                                <div className="flex items-center text-gray-600">
                                    <span>128 bài học • 36 giờ nội dung</span>
                                    <span className="mx-2">•</span>
                                    <span>Hoàn thành 22%</span>
                                </div>
                                <div className="progress-bar mt-2">
                                    <div className="progress-fill" style={{ width: '22%' }}></div>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-200">
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-semibold">Phần 1: Giới thiệu và Thiết lập môi trường</h3>
                                        <span className="text-gray-600">8 bài học • 2 giờ</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-play-circle text-gray-400 mr-3"></i>
                                            <span className="flex-1">Giới thiệu về lập trình Fullstack</span>
                                            <span className="text-gray-500">15:30</span>
                                        </div>
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-play-circle text-gray-400 mr-3"></i>
                                            <span className="flex-1">Cài đặt và thiết lập môi trường phát triển</span>
                                            <span className="text-gray-500">22:15</span>
                                        </div>
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer text-white bg-info" data-active="true">
                                            <i className="fas fa-play-circle mr-3"></i>
                                            <span className="flex-1">Tạo dự án đầu tiên với React</span>
                                            <span className="text-white">18:45</span>
                                        </div>
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-file-alt text-gray-400 mr-3"></i>
                                            <span className="flex-1">Bài tập thực hành phần 1</span>
                                            <span className="text-gray-500">Bài tập</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-semibold">Phần 2: HTML, CSS và JavaScript cơ bản</h3>
                                        <span className="text-gray-600">12 bài học • 4 giờ</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-play-circle text-gray-400 mr-3"></i>
                                            <span className="flex-1">HTML5 và Semantic Elements</span>
                                            <span className="text-gray-500">25:10</span>
                                        </div>
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-play-circle text-gray-400 mr-3"></i>
                                            <span className="flex-1">CSS3 và Flexbox Layout</span>
                                            <span className="text-gray-500">32:20</span>
                                        </div>
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-play-circle text-gray-400 mr-3"></i>
                                            <span className="flex-1">JavaScript ES6+ Fundamentals</span>
                                            <span className="text-gray-500">40:15</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-semibold">Phần 3: React.js cơ bản đến nâng cao</h3>
                                        <span className="text-gray-600">20 bài học • 8 giờ</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-play-circle text-gray-400 mr-3"></i>
                                            <span className="flex-1">Components và Props</span>
                                            <span className="text-gray-500">28:30</span>
                                        </div>
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-play-circle text-gray-400 mr-3"></i>
                                            <span className="flex-1">State và Lifecycle</span>
                                            <span className="text-gray-500">35:45</span>
                                        </div>
                                        <div className="lesson-item flex items-center p-3 rounded-lg cursor-pointer">
                                            <i className="fas fa-play-circle text-gray-400 mr-3"></i>
                                            <span className="flex-1">React Hooks</span>
                                            <span className="text-gray-500">42:10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="instructor" className="bg-white rounded-xl shadow-sm mb-6">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6">Giới thiệu giảng viên</h2>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/4 flex justify-center">
                                        <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                                            <img src="https://i.pravatar.cc/150?img=11" alt="Instructor" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-semibold mb-2">Nguyễn Văn A</h3>
                                        <p className="text-gray-600 mb-4">Chuyên gia Lập trình Fullstack với 8 năm kinh nghiệm</p>
                                        <p className="text-gray-600 mb-4">Tôi đã làm việc với nhiều công ty công nghệ hàng đầu và tham gia phát triển các dự án lớn về web application. Với niềm đam mê chia sẻ kiến thức, tôi mong muốn giúp đỡ các bạn trẻ Việt Nam trở thành những lập trình viên giỏi.</p>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <p className="text-gray-600 text-sm">Đánh giá</p>
                                                <p className="font-semibold">4.9/5.0</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600 text-sm">Học viên</p>
                                                <p className="font-semibold">25.7K+</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600 text-sm">Khóa học</p>
                                                <p className="font-semibold">12</p>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <button className="text-primary hover:text-indigo-700 font-medium">Xem thêm khóa học</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="reviews" className="bg-white rounded-xl shadow-sm">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold mb-2">Đánh giá từ học viên</h2>
                                <div className="flex items-center">
                                    <div className="text-3xl font-bold mr-4">4.9</div>
                                    <div className="mr-4">
                                        <div className="flex text-yellow-400 mb-1">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <div className="text-gray-600 text-sm">1.248 đánh giá</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="pb-6 mb-6 border-b border-gray-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">TN</div>
                                        <div>
                                            <h4 className="font-semibold">Trần Ngọc Anh</h4>
                                            <div className="flex text-yellow-400 text-sm">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-2">Khóa học rất chi tiết và dễ hiểu. Giảng viên giải thích rõ ràng và có nhiều ví dụ thực tế. Tôi đã có thể xây dựng được website đầu tiên của mình chỉ sau 2 tháng học.</p>
                                    <p className="text-gray-500 text-sm">2 tuần trước</p>
                                </div>

                                <div className="pb-6 mb-6 border-b border-gray-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-3">LM</div>
                                        <div>
                                            <h4 className="font-semibold">Lê Minh Đức</h4>
                                            <div className="flex text-yellow-400 text-sm">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-2">Nội dung khóa học cập nhật và thực tế. Phần hướng dẫn deploy ứng dụng lên server rất hữu ích. Tôi đã ứng dụng được kiến thức từ khóa học vào công việc hiện tại.</p>
                                    <p className="text-gray-500 text-sm">1 tháng trước</p>
                                </div>

                                <div className="text-center">
                                    <button className="text-primary hover:text-indigo-700 font-medium">Xem tất cả đánh giá</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-sm sticky top-24 p-6 mb-6">
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-primary">1.200.000 VNĐ</span>
                                <span className="text-gray-500 line-through ml-2">1.500.000 VNĐ</span>
                                <span className="bg-secondary text-white text-sm font-medium px-2 py-1 rounded ml-2">Tiết kiệm 20%</span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center">
                                    <i className="fas fa-play-circle text-primary mr-3"></i>
                                    <span>128 bài học video</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-clock text-primary mr-3"></i>
                                    <span>36 giờ nội dung</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-file-alt text-primary mr-3"></i>
                                    <span>25 tài liệu tải về</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-infinity text-primary mr-3"></i>
                                    <span>Truy cập trọn đời</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-mobile-alt text-primary mr-3"></i>
                                    <span>Truy cập trên mọi thiết bị</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-certificate text-primary mr-3"></i>
                                    <span>Chứng chỉ hoàn thành</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">Tham gia khóa học</button>
                                <button className="w-full border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition duration-300">Thêm vào giỏ hàng</button>
                                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                                    <i className="far fa-heart mr-2"></i>
                                    Yêu thích
                                </button>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-gray-600 text-sm">Đảm bảo hoàn tiền trong 30 ngày</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component
