export const checkItemsPerSlide = (itemsPerSlide: number) => {
    switch (itemsPerSlide) {
        case 1:
            return "col-span-12";
        case 2:
            return "col-span-6";
        case 3:
            return "col-span-4";
        case 4:
            return "col-span-3";
        case 5:
            return "col-span-";
        default:
            break;
    }
};

export const getUserEmail = () => {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
        return ""
    }

    return userEmail
}