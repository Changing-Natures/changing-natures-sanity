import { SyncDatabase } from "./components/ui/sync/sync"

import {
    MdSync
} from "react-icons/md"

export default {
    title: "Sync database",
    icon: MdSync,
    name: "SyncDatabase",
    type: "document",
    fields: [
        {
            title: "Sync database",
            name: "sync",
            type: "string",
            components: {
                input: SyncDatabase
            },
        },
    ],
}