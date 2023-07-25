import { useRouter, usePathname } from "next/navigation";
import { ScrollToLinkButtonWrapper } from "../styles";

const ScrollToMenuButton = ({ to, label, elementId, handleClose }) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    if (pathName != "/services") {
      router.push(to);
    }
    
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    if(handleClose) {
      handleClose();
    }
  };

  return (
    <ScrollToLinkButtonWrapper onClick={handleClick}>
      {label}
    </ScrollToLinkButtonWrapper>
  );
};

export default ScrollToMenuButton;
