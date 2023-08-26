import { usePathname, useRouter } from "next/navigation";

const useServicesScrollIntoView = () => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = (elementId, handleClose, to) => {
        if(pathName.includes("/services")) {
            const route = `${to}?id=${elementId}`
            console.log(route)
            router.push(route);
        } else {
            router.replace(`${to}?id=${elementId}`)
        }

        handleClose();
    };

    return { handleClick }
}

export default useServicesScrollIntoView