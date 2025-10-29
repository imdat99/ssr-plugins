import React from 'react'

const HomeCTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Sẵn sàng bắt đầu hành trình học tập của bạn?</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-8">Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và bắt đầu nâng cao kỹ năng của bạn.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="btn btn-light btn-lg">Đăng ký ngay</button>
                <button className="btn btn-outline-light btn-lg">Liên hệ tư vấn</button>
            </div>
        </div>
    </section>
  )
}

export default HomeCTA