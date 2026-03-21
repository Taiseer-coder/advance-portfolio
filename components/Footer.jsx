import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
   
  return ( 
    <footer className="bg-white border-t border-gray-400 py-8">
  <div className="max-w-xl mx-auto px-4 text-center flex flex-col items-center gap-4">
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <h2 className="text-xl font-bold text-gray-600">تيسير البحري</h2>
      <span className="text-gray-600 text-sm">مصممة مواقع</span>
    </div>

        {/* أيقونات التواصل */}
        <div className="flex justify-center gap-4 text-gray-600 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        
          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-red-500 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}