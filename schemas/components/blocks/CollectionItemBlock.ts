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
            title: 'Collection item',
            name: 'collectionItem',
            type: 'reference',
            weak: true,
            to: [{ type: 'collectionItem' }],
            validation: (Rule: any) => Rule.required(),
        }
    ],

    preview: {
        select: {
            title: 'collectionItem.title',
        }
    }
}