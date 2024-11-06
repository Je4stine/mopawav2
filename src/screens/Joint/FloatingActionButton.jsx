import Download from '../../assets/images/download2.png'
import { useEffect, useState } from 'react';


function FloatingActionButton() {
    const [isScrolled, setIsScrolled] =useState(false)

    useEffect(() => {
        function handleScroll() {
          setIsScrolled(window.scrollY > 0);
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Mopawa Agreement M2V3.pdf';  
        link.download = 'mopawa_agreement.pdf';      
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      
  return (
    <div className="fixed right-5 bottom-5 z-[22] hover:cursor-pointer flex items-center  ">
        {isScrolled?<div/>:<h1 className=' mr-5 font-bold'>Download the agreement</h1>}
        <img onClick={handleDownload} src={Download} alt="download button bottom-10 h-[100px] w-[100px] animate-bounce" />
    </div>
  )
}

export default FloatingActionButton