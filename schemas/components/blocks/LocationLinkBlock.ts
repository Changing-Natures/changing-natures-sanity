// ICONS
import {
    MdPlace
} from "react-icons/md"

export default {
    title: 'Location link',
    name: 'locationLinkBlock',
    type: 'object',
    icon: MdPlace,
    fields: [
        {
            title: 'Title',
            name: 'text',
            type: 'string'
        },
        {
            title: 'Location',
            name: 'location',
            type: 'reference',
            to: [{ type: 'location' }],
            validation: (Rule: any) => Rule.required(),
        }
    ],
}