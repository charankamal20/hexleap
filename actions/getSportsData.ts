'use server'

import { TeamData } from "@/constants/data"

/**
 * Retrieves sports data.
 * @returns {Promise<{ success: boolean, data: any }>} The result of the operation.
 */
export const getSportsData = async () => {
    if(TeamData) {
        return { success: true, data: {
            data: TeamData,
            message: "Data found!"
        }} ;
    }

    return { success: false, data: {
        message: "No data found!",
        data: null
    }} ;
}