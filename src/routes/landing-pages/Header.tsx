import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-b-gray-200 bg-white">
        <div className="container mx-auto py-2 flex justify-between items-center px-4">
            <div className="">
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
                <Link to="/login" className="btn btn-outline-dark">Đăng nhập</Link>
            </div>
        </div>
    </header>
  )
}

export default Header