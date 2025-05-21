
const Card = ({image,title,description,tech,github,linkk}) => {
  return (
    <div className="h-120 w-100 p-5  rounded-xl shadow-md hover:shadow-2xl duration-300 ">
      <div>
        <img className="rounded-xl h-50 w-full" src={image} alt="" />
      </div>
      <h1 className=" font-sans text-xl font-bold mt-5">{title}</h1>
      <p className="font-sans mt-5">{description}</p>
      <p className="font-sans mt-5 opacity-50">{tech}</p>
      <a href={github} target="_blank"><i className="fa-brands fa-github text-2xl relative top-3"></i></a>
      <a href={linkk} target="_blank"><i className="fa-solid fa-link text-xl relative left-5 -bottom-3"></i></a>
    </div>
  )
}

export default Card
