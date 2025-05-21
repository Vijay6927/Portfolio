
const Second = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 space-y-16">
      
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-10 md:space-y-0">
        <div className="flex flex-col items-center text-center space-y-2">
          <i className="fa-brands fa-linkedin text-4xl md:text-6xl hover:text-blue-700 duration-100"></i>
          <a
            href="https://www.linkedin.com/in/vijay2709/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl hover:text-blue-600 hover:underline break-words"
          >
            linkedin.com/vijay
          </a>
          <p className="text-sm md:text-base text-gray-700">LinkedIn</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2">
          <i className="fa-brands fa-whatsapp text-4xl md:text-6xl hover:text-green-600 duration-100"></i>
          <a
            href="https://wa.me/7505527715"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl hover:text-green-600 hover:underline"
          >
            7505527715
          </a>
          <p className="text-sm md:text-base text-gray-700">WhatsApp</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2">
          <i className="fa-brands fa-github text-4xl md:text-6xl text-gray-800"></i>
          <a
            href="https://github.com/Vijay6927"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl text-gray-800 hover:underline"
          >
            github.com/Vijay
          </a>
          <p className="text-sm md:text-base text-gray-700">Github</p>
        </div>
      </div>

      <div className="text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold opacity-60 mb-4">Ready to get started? Contact me!</h2>
        <h1
          id="mail"
          className="text-xl md:text-6xl font-bold text-gray-800 break-all"
        >
          vijayjoshi2709@gmail.com
        </h1>
      </div>
    </div>
  );
};

export default Second;
