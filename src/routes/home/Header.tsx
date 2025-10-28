import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b">
        <div className="container mx-auto py-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">EZ-Lms</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-primary">Trang chủ</a>
                <a href="#courses" className="hover:text-primary">Khóa học</a>
                <a href="#features" className="hover:text-primary">Tính năng</a>
                <a href="#pricing" className="hover:text-primary">Giá cả</a>
                <a href="#contact" className="hover:text-primary">Liên hệ</a>
            </nav>
            
            <div className="flex items-center space-x-4">
                <button className="btn btn-outline-dark">Đăng nhập</button>
            </div>
        </div>
    </header>
  )
}

export default Header