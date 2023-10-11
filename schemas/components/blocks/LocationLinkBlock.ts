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
            weak: true,
            to: [{ type: 'location' }],
            validation: (Rule: any) => Rule.required(),
            options:{
                disableNew: true
            }
        },
        {
            title: 'Sequence',
            name: 'sequence',
            type: 'reference',
            description:'Specific sequence to send players to when they enter a location through this link',
            weak: true,
            to: [{ type: 'sequence' }],
            options: {
                // add filter here to show only seqeuences backlinked to this location 
                disableNew: true,
            }
        },
        {
            title: 'Compass Direction',
            name: 'compass',
            type: 'string',
            description: 'Show an arrow to players.',
            options:{
                list:[
                    'N','NE','E','SE','S','SW','W','NW'
                ]
            }
        }
    ],
}