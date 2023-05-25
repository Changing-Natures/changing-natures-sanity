import { TipDecorator } from "./decorators/TipDecorator"

export default {
    title: 'Slide editor',
    type: 'object',
    name: 'slideEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Slide editor',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        {
                            title: 'Tip', value: 'tip', component: TipDecorator
                        },
                    ],
                    lists: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'strong'
                            },
                            {
                                title: 'Emphasis',
                                value: 'em'
                            },
                        ],
                        annotations: []
                    },
                },
                {
                    type: 'collectionItemBlock'
                },
                {
                    type: 'sequenceLinkBlock'
                },
                {
                    type: 'locationLinkBlock'
                },
            ]
        }
    ]
}