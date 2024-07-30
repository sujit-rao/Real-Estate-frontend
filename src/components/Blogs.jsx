import React from 'react'
import BLOGS from '../constant/Blog.json'

const Blogs = () => {
    return (
        <section>
            <div className=' container py-16 xl:py-28 rounded-3xl'>
                <span className=' font-medium'>Stay updated with the latest news!</span>
                <h2 className=' text-3xl'>Our Expert Blogs</h2>
                {/* container */}

                <div className=' grid gap-5 grid-cols-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24'>
                    {BLOGS.map((blog) => (
                        <div key={blog.title} className="blog rounded-3xl border-8 hover:border-gray-400 duration-300 border-gray-300 shadow-sm overflow-hidden relative">
                            <img src={blog.image} alt={blog.title} />
                            {/* overlay */}
                            <div className=' absolute top-0 left-0 h-full w-full bg-black/25 '>

                            </div>
                            {/* info */}
                            <div className=' absolute bottom-3 left-3 text-white text-base '>
                                <h3 className=' font-bold text-base pr-4 leading-5'>{blog.title}</h3>
                                <h4 className=' font-medium pb-3 pt-1'>{blog.city}</h4>
                                <button className=' bg-white rounded-3xl text-black font-semibold px-2 py-1'>Read more</button>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section >
    )
}

export default Blogs
