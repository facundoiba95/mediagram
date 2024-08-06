<<<<<<< HEAD
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

=======
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default useIsAdmin;