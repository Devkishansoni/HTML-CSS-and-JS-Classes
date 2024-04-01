import React from "react";
import UseCustomhook from "./UseCustomhook";

export default function Demo() {

    let value = UseCustomhook("king kong what's up")

    return (
        <>
            Demo {value}
        </>
    )

}