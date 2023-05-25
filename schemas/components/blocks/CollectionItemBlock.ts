// ICONS
import {
    MdViewInAr
} from "react-icons/md"

export default {
    title: 'Collection item',
    name: 'collectionItemBlock',
    type: 'object',
    icon: MdViewInAr,
    fields: [
        {
            title: 'Title',
            name: 'text',
            type: 'string'
        },
        {
            title: 'Collection item',
            name: 'collectionItem',
            type: 'reference',
            to: [{ type: 'collectionItem' }],
            validation: (Rule: any) => Rule.required(),
        }
    ],
}