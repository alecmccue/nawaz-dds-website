import { usePathname, useRouter } from "next/navigation";

const useScrollToRoute = () => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = (elementId, handleClose, to) => {
        if(!pathName.includes("/services")) {
            router.push(`${to}#${elementId}`);
        } else {
            router.replace(`${to}#${elementId}`)
        }

        handleClose();
    }

    return { handleClick }
}

export default useScrollToRoute