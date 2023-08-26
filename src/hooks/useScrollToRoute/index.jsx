import { usePathname, useRouter } from "next/navigation";

const useScrollToRoute = () => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = (elementId, handleClose, to) => {
        if(pathName.includes("/services")) {
            router.push(`${to}?id=${elementId}`);
        } else {
            router.replace(`${to}?id=${elementId}`)
        }

        handleClose();
    }

    return { handleClick }
}

export default useScrollToRoute