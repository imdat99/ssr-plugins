import { client } from 'api/rpcclient'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router'
import useSWR from 'swr'
import { useDebounce } from '@uidotdev/usehooks'
import CourseCard from './course-card'
import { tinyHash } from 'lib/utils'
const CATEGORIES = ["All", "Lập trình", "Phân tích dữ liệu", "Thiết kế", "AI/ML", "Marketing", "Ngoại ngữ", "Kỹ năng mềm", "Nghệ thuật", "Công nghệ"]

export const Component = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const debouncedSearch = useDebounce(search, 500)

  const { data, isLoading } = useSWR(
    tinyHash(["getCourses", page, debouncedSearch, category]),
    () => client.getCourses({ page, limit: 6, search: debouncedSearch, category })
  )
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1) // Reset to page 1 on search
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
    setPage(1) // Reset to page 1 on category change
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Courses</h1>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="w-full md:w-1/4">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            value={category}
            onChange={handleCategoryChange}
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {isLoading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data?.map((course) => (
          <Fragment key={course.id}>
            <CourseCard course={course} />
          </Fragment>
        ))}
      </div>

      {!isLoading && data?.data?.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No courses found matching your criteria.
        </div>
      )}

      {/* Pagination */}
      {!isLoading && data && data.totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>

          {[...Array(data.totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 border rounded-lg ${page === i + 1
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-300 hover:bg-gray-50'
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(p => Math.min(data.totalPages, p + 1))}
            disabled={page === data.totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default Component