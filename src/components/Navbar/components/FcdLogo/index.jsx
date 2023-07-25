import { FcdLogoImage } from "../../styles";
import { useRouter } from "next/navigation";

const FcdLogo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div onClick={handleClick} >
      <FcdLogoImage src="/F&CD_logo.png" alt="FC&D Logo" />
    </div>
  );
};

export default FcdLogo;
