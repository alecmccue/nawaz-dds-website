import { usePathname, useRouter } from "next/navigation";

const useServicesScrollIntoView = () => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = async (elementId, handleClose, to) => {
        if(pathName !== "/services") {
            router.push(to);
        }

        handleClose();
    };

    return { handleClick }
}

export default useServicesScrollIntoView