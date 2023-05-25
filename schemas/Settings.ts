import {
    MdSettings
} from "react-icons/md"

export default {
    title: "Settings",
    icon: MdSettings,
    name: "settings",
    type: "object",
    fields: [
        {
            title: "Starting location",
            name: "startingLocation",
            type: "reference",
            to: [
                {
                    type: "location"
                }
            ]
        },
    ],
}


