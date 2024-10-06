import React from 'react'

const FormatDateTime = ({ timeStamp }) => {
    const date = new Date(timeStamp)
    const currentDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const currentTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
    return (
        <>
            <p>{currentDate}</p>
            <p>{currentTime}</p>
        </>
    )
}

export default FormatDateTime
