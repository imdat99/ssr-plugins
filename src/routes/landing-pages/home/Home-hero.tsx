import React from 'react'

const HomeHeroSection = () => {
  return (
    <section id="home" className="pt-12 md:pt-16 border-b border-b-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Học tập trực tuyến hiệu quả, mọi lúc mọi nơi</h1>
                <p className="text-lg mb-8 text-gray-500">EduLearn mang đến cho bạn những khóa học chất lượng cao với các chuyên gia hàng đầu. Nâng cao kỹ năng và phát triển sự nghiệp của bạn ngay hôm nay.</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="btn btn-primary btn-lg">Bắt đầu học ngay</button>
                    <button className="btn btn-outline-secondary btn-lg">Xem khóa học</button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                    <div className="w-100 h-100 bg-secondary/10 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-80 h-80 bg-secondary/20 rounded-full flex items-center justify-center">
                            <div className="w-64 h-64 bg-secondary/30 rounded-full flex items-center justify-center"></div>
                        </div>
                    </div>
                    <img src="/images/student_group.png" alt="Hero" className="object-contain relative z-1" />
                    <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-lg shadow-lg z-2">
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-sm">Khóa học</div>
                    </div>
                    <div className="absolute bottom-4 -left-4 bg-white text-primary p-4 rounded-lg shadow-lg z-2">
                        <div className="text-2xl font-bold">50K+</div>
                        <div className="text-sm">Học viên</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHeroSection