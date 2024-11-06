import Download from '../../assets/images/download2.png'


function FloatingActionButton() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/mopawa_agreement.pdf';  
        link.download = 'mopawa_agreement.pdf';      
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div className="fixed right-5 bottom-10 hover:cursor-pointer">
        <img onClick={handleDownload} src={Download} alt="download button bottom-10" />
    </div>
  )
}

export default FloatingActionButton