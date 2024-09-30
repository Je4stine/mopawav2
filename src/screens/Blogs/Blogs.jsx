import Hero from "./Hero"
import BlogCard from './BlogCard'
import { useState, useEffect } from "react"
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const BaseUrl = "https://blog.mopawa.co.ke/"
  const [allBlogs, setAllBlogs] = useState([])
  const navigate = useNavigate()


  const handleNavigate =(id,image, title, date, paragraph)=> {
    navigate(`/blog/${id}/${title}`, {state:{ image, title, date, paragraph}})
}

  const getBlogs = async()=>{
      try{
        const response = await fetch(`${BaseUrl}/wp-json/wp/v2/posts`);
        const blogData = await response.json();
        setAllBlogs(blogData)
        console.log(blogData[0].content)
      }catch(error){
        console.log(error)
      }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  }

  useEffect(()=>{
    getBlogs()
  },[])



  return (
    <div>
      <Hero/>
      {/* <div className=" grid lg:grid-cols-3 grid-cols-1 place-items-center gap-6 mt-10"> */}
      <div className=" grid lg:grid-cols-3 grid-cols-1 place-items-center gap-[6px] mt-10">
        {
          allBlogs.length == 0 ?
          <div className="flex justify-center items-center w-full h-[300px]">
            <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
          </div>
      :
          allBlogs.map((item, index)=>{
            return(
              <BlogCard key={index} 
              handleNavigate={()=>handleNavigate(item.id, item.featured_media_src_url, item.title.rendered, item.date,item.content.rendered )}
              tittle={item.title.rendered} 
              body={item.content.rendered} 
              date={formatDate(item.date)}
              image={item.featured_media_src_url}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Blogs