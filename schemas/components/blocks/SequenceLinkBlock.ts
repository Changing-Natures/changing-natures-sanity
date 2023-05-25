// ICONS
import {
    MdListAlt
} from "react-icons/md"

export default {
    title: 'Sequence link',
    name: 'sequenceLinkBlock',
    type: 'object',
    icon: MdListAlt,
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
            to: [{ type: 'sequence' }],
            validation: (Rule: any) => Rule.required(),
        }
    ],
    // preview: {
    //     select: {
    //         audio: 'audio',
    //         backgroundColor: 'backgroundColor'
    //     },
    //     component: AudioPreview
    // }
}