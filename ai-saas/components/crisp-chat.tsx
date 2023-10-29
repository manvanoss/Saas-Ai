"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() =>{
        Crisp.configure("6a3ff85a-268b-4072-9abd-58683fc9fc2b");
    }, []);

    return null;
}