import React from 'react'
const features = [
    {
        id: 1,
        title: "Bài giảng video chất lượng cao",
        description: "Học với video chất lượng cao, rõ nét với nội dung được cập nhật thường xuyên.",
        icon: "fas fa-play-circle",
        bgColor: "#14a74b",
    },
    {
        id: 2,
        title: "Giảng viên chuyên nghiệp",
        description: "Học từ các chuyên gia hàng đầu trong lĩnh vực với nhiều năm kinh nghiệm.",
        icon: "fas fa-chalkboard-teacher",
        bgColor: "#fd7906",
    },
    {
        id: 3,
        title: "Chứng chỉ hoàn thành",
        description: "Nhận chứng chỉ sau khi hoàn thành khóa học để nâng cao giá trị hồ sơ của bạn.",
        icon: "fas fa-certificate",
        bgColor: "#14a74b",
    }
]
const HomeFeatures = () => {
  return (
    <section id="features" className="py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Tại sao chọn EduLearn?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Chúng tôi cung cấp những tính năng tốt nhất để đảm bảo trải nghiệm học tập trực tuyến hiệu quả nhất cho bạn.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    features.map((feature) => (
                        <div key={feature.id} className="bg-white border-gray-300 border p-6 rounded-xl hover:(shadow-[.25rem_.25rem_0] shadow-primary/40 border-primary) transition duration-300">
                            <div className="w-14 h-14" style={{backgroundColor: `color-mix(in srgb, ${feature.bgColor} 10%, transparent)`, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
                                <i className={`${feature.icon} text-2xl`} style={{color: feature.bgColor}}></i>
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