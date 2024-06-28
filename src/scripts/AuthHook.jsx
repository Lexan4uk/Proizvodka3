import { useState } from 'react';

function AuthHook() {
    const [isPersonalAreaOpen, setIsPersonalAreaOpen] = useState(false);

    /*const togglePersonalArea = () => {
        setIsPersonalAreaOpen(isPersonalAreaOpen);
    };*/

    const openPersonalArea = () => {
        setIsPersonalAreaOpen(true);
        console.log("Open Personal Area. isPersonalAreaOpen:", isPersonalAreaOpen);
    };

    const closePersonalArea = () => {
        setIsPersonalAreaOpen(false);
        console.log("Close Personal Area. isPersonalAreaOpen:", isPersonalAreaOpen);
    };

    return {
        isPersonalAreaOpen,
        //togglePersonalArea,
        openPersonalArea,
        closePersonalArea
    };
}

export default AuthHook;
