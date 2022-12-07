import { ethers } from "ethers";
import { ABI } from "../contract";

const AddNewEvent = ( eventFilter, provider, cb ) => {
    provider.removeListener(eventFilter)
    provider.on(eventFilter, (logs) => {
        const parsedLog = (new ethers.utils.Interface(ABI)).parseLog(logs)

        cb(parsedLog)
    })
}

export const createEventListeners = () => {
    const NewPlayerEventFilter = contract.filters.NewPlayer()

    AddNewEvent(NewPlayerEventFilter, provider, ({ args }) => {
        console.log('New Player Created!', args)
    })
}