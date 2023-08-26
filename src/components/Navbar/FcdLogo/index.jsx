import { FcdLogoImage } from "../styles";
import { useRouter } from "next/navigation";

const FcdLogo = (props) => {
    const { width } = props
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    return (
        <div onClick={handleClick}>
            <FcdLogoImage src="/fcd-logo.png" alt="FC&D Logo" width={width} />
        </div>
    );
};

export default FcdLogo;
