import Contact from "../../components/Contact"

function Privacy() {
  return (
    <div>
        <div className=" h-[80px] bg-black"></div>
        <div className=" bg-yellow-400 h-[80px] flex flex-col items-center justify-center">
            <h1 className=" text-white font-bold text-3xl">Our Privacy Policies</h1>
        </div>
        <div className=" lg:px-[100px] px-24 mb-5 bg-slate-100 pb-5">
            <p className="">
            <strong>Who we are</strong><br />
            Our website address is: https://mopawa.co.ke. Mopawa is committed to respect your privacy and to comply with applicable data protection and privacy laws. This privacy policy (“Policy”) describes how we collect and use personal data where Mopawa is the data controller or where we refer to the applicability of this Policy. “Personal data” means information relating to you or another identifiable individual.
            <br /><br />
            <strong>Comments</strong><br />
            When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
            <br /><br />
            An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Mopawa service privacy policy is available here: https://mopawa.co.ke/privacy-policy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
            <br /><br />

            <strong>Media</strong><br />
            If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
            <br /><br />

            <strong>Cookies</strong><br />
            If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
            <br /><br />
            If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
            <br /><br />
            When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
            <br /><br />
            If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
            <br /><br />
            <strong> Embedded content from other websites</strong><br />
            Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
            <br /><br />
            These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            <br /><br />
            <strong> Who we share your data with</strong><br />
            Mopawa do not sell, lease, rent or otherwise disclose your personal data to any third parties.
            <br /><br />
            <strong> How long we retain your data </strong><br />
            If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
            <br /><br />
            For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
            <br /><br />
            <strong> What rights you have over your data</strong><br />
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>
        </div>
        <Contact/>
    </div>
  )
}

export default Privacy