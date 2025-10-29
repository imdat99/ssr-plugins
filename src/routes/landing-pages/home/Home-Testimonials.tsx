import React from 'react'

const HomeTestimonials = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Học viên nói gì về chúng tôi</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Những phản hồi tích cực từ học viên đã trải nghiệm các khóa học của EduLearn.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-light p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">TN</div>
                        <div>
                            <h4 className="font-semibold">Trần Ngọc Anh</h4>
                            <p className="text-gray-500 text-sm">Học viên khóa Lập trình Web</p>
                        </div>
                    </div>
                    <p className="text-gray-600">"Khóa học rất chi tiết và dễ hiểu. Tôi đã có thể xây dựng được website đầu tiên của mình chỉ sau 2 tháng học."</p>
                    <div className="flex mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                <div className="bg-light p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">LM</div>
                        <div>
                            <h4 className="font-semibold">Lê Minh Đức</h4>
                            <p className="text-gray-500 text-sm">Học viên khóa Phân tích dữ liệu</p>
                        </div>
                    </div>
                    <p className="text-gray-600">"Giảng viên rất nhiệt tình và có chuyên môn cao. Tôi đã ứng dụng được kiến thức từ khóa học vào công việc hiện tại."</p>
                    <div className="flex mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
                
                <div className="bg-light p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">PH</div>
                        <div>
                            <h4 className="font-semibold">Phạm Hồng Nhung</h4>
                            <p className="text-gray-500 text-sm">Học viên khóa Thiết kế UI/UX</p>
                        </div>
                    </div>
                    <p className="text-gray-600">"Tài liệu học tập phong phú và cập nhật. Tôi đặc biệt thích phần thực hành với các dự án thực tế."</p>
                    <div className="flex mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeTestimonials