import React, { useState, useEffect } from 'react';

const useIsAdmin = ({ dataRecived, dataAuth }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (dataRecived === dataAuth) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [dataRecived, dataAuth]);

    return isAdmin;
};

export default useIsAdmin;