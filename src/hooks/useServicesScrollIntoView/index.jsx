import { usePathname, useRouter } from "next/navigation";

const useServicesScrollIntoView = () => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = async (elementId, handleClose, to) => {
        if(pathName !== "/services") {
            await router.push(to);
        }

        setTimeout(() => {
            const element = document.getElementById(elementId);
            if(element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 500)

        handleClose();
    };

    return { handleClick }
}

export default useServicesScrollIntoView