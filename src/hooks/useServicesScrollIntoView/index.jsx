import { usePathname, useRouter } from "next/navigation";

const useServicesScrollIntoView = () => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = (elementId, handleClose, to) => {
        if(pathName !== "/services") {
            router.push(to);
        }

        setTimeout(() => {
            const element = document.getElementById(elementId);
            if(element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);

        handleClose();
    };

    return { handleClick }
}

export default useServicesScrollIntoView