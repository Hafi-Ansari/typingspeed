import React from "react"
import "../../styles.css"

export const DashboardButton = ({handleStartActivity}) => {
    return (
        <button className="button" onClick={handleStartActivity}>Go To Activity</button>
    )
}