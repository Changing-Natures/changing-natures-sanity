import {
    MdLabel
} from "react-icons/md"

export default {
    title: 'Tag (Internationalized)',
    icon: MdLabel,
    name: 'TagIntl',
    type: 'object',
    fields: [
        {
            title: 'English',
            name: 'en',
            type: 'string'
        },
        {
            title: 'German',
            name: 'de',
            type: 'string'
        },
        {
            title: 'French',
            name: 'fr',
            type: 'string'
        }
    ]
}