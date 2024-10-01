import { useLocation } from "react-router-dom"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogDetails() {
  const [comment, setComment] = useState("")
  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');

  const {state} = useLocation();
  const notify = () => toast("Your comment has been posted!");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://blog.mopawa.co.ke/wp-json/wp/v2/comments';

    const commentData = {
      post: state.id,        
      author_name: author,  
      author_email: email, 
      content: comment      
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      notify()

      if (response.ok) {
        setMessage('Comment added successfully!');
        setAuthor('');
        setEmail('');
        setComment('');
      } else {
        setMessage('Failed to add comment.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };



  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}`;
    return formattedDate;
  }

  function formatMonth(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getMonth()}`;
    return formattedDate;
  }

  function formatAll(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  }


  
  return (
    <div className=" flex flex-col items-center">
       <div className=" bg-black h-[80px] w-full"></div>
      <div className=" bg-yellow-400 min:h-[80px] w-full flex flex-col items-center justify-center">
        <p className=" text-white text-center font-bold text-xl lg:text-3xl py-10">{state.title}</p>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <img src={state.image} alt="" className=" w-[70vw] h-[70vh] object-cover"/>
      </div>

      <div className=" flex flex-col items-center lg:w-[70vw] w-[100vw] my-10 px-5">
          <div className=" flex items-center justify-center">
            <div className=" border border-gray-300 h-[70px] w-[50px] mr-5 relative flex flex-col items-center">
              <p className=" font-bold">{formatDate(state.date)}</p>
            <div className=" absolute bottom-0 h-[40%] bg-yellow-400 w-full flex justify-center">
              <p className=" text-white">{formatMonth(state.date)}</p>
            </div>
            </div>
            <div> 
                <p className=" font-bold text-xl lg:text-3xl">{state.title}</p>
                <p>{formatAll(state.date)}</p>
            </div>
          </div> 
      </div>
      <div className="lg:w-[70vw] px-5" dangerouslySetInnerHTML={{ __html: state.paragraph}}> 
      </div>
      <hr className="w-full my-10"/>

      <div className=" my-10 px-5">
        <h1 className=" font-bold my-5">Post a Comment</h1>
        <div>


          <div>
                <label htmlFor="" className=" mb-5"> Comment</label>
              <textarea className="p-2 rounded-md w-full"  rows="10"cols="50" onChange={(e) => setComment(e.target.value)}/>
          </div>

          <div>
              <div>
                  <label htmlFor="" className=" mb-5"> Name*</label>
                  <input type="text" title="Email" className="p-2 rounded-md w-full" onChange={(e) => setAuthor(e.target.value)} />
                </div>

                 <div>
                  <label htmlFor="" className=" mb-5"> Email*</label>
                  <input type="text" title="Email" className="p-2 rounded-md w-full"  onChange={(e) => setEmail(e.target.value)}/>
                 </div>

                  <div>
                  <label htmlFor="" className=" mb-5"> Website</label>
                  <input type="text" title="Email" className="p-2 rounded-md w-full"  />
                </div>
                <div className=" mt-3">
                    <button onClick={handleSubmit} className=" bg-yellow-400 text-white px-5 py-3 rounded-md">
                        Submit
                    </button>
                    <ToastContainer />
                </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default BlogDetails