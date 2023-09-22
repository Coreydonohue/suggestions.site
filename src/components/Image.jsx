import Image from "react-bootstrap/Image";

function FluidImage() {
  return (
    <Image
      src="https://picsum.photos/900/400" 
      fluid
      rounded
      className=""
    />
  );
}

export default FluidImage;
