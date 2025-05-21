import { useState } from "react";

const Pic = () => {
  const [photo, setPhoto] = useState(false);

  const updatePhoto = () => {
    setPhoto(prev => !prev);
  };

  return (
    <div
      onMouseOver={updatePhoto}
      onMouseOut={updatePhoto}
      className="w-[300px] h-[300px]"
    >
      <img
        className="w-full h-full object-cover"
        src={photo ? "/pic1.png" : "/pic.png"}  
        alt="pic"
      />
    </div>
  );
};

export default Pic;
