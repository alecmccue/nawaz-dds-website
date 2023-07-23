import { useRouter, usePathname } from "next/navigation";

const ScrollToMenuButton = ({ to, label, elementId }) => {
  const router = useRouter();
  const pathName = usePathname()

  const handleClick = () => {
    if(pathName != "/services") {
        router.push(to);
    }
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
  };

  return <div onClick={handleClick}>{label}</div>;
};

export default ScrollToMenuButton;
