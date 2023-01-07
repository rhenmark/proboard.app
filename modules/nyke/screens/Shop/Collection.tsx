import React from "react"
import { HorizontalCard } from "./HorizontalCard"
import { data } from "./mock_data"

export const Collection = () => {
    return (
        <HorizontalCard
            data={data.collections}
            header={{ title: "Shop By Collection" }}
        />
    )
}