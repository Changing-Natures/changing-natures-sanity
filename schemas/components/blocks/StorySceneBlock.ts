// ICONS
import {
    MdViewInAr
} from "react-icons/md"

export default {
    title: 'Story Scene',
    name: 'storySceneBlock',
    type: 'object',
    icon: MdViewInAr,
    fields: [
        {
            title: 'Title',
            name: 'text',
            type: 'string'
        },
        {
            title: 'Story Scene',
            name: 'storyScene',
            type: 'reference',
            weak: true,
            to: [{ type: 'storyScene' }],
            validation: (Rule: any) => Rule.required(),
        }
    ],

    preview: {
        select: {
            title: 'storyScene.title',
        }
    }
}