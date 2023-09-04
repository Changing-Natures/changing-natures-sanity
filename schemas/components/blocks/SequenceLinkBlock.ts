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
            title: 'Sequence',
            name: 'location',
            type: 'reference',
            weak: true,
            to: [{ type: 'sequence' }],
            validation: (Rule: any) => Rule.required(),
            options:{
                disableNew: true
            }
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