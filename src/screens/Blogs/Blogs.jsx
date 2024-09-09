import Hero from "./Hero"
import BlogCard from './BlogCard'

function Blogs() {
  return (
    <div>
      <Hero/>
      <div className=" grid lg:grid-cols-3 grid-cols-1 place-items-center gap-6 mt-10">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>

    </div>
  )
}

export default Blogs