import {
    MdViewInAr
} from "react-icons/md"

export default {
    title: "Collection item",
    name: "collectionItem",
    icon: MdViewInAr,
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            fields: [
                {
                    name: 'caption',
                    type: 'string'
                },
                {
                    name: 'alt',
                    type: 'string'
                }
            ],
            readOnly: true
        },
        {
            name: 'habitat',
            type: 'string',
            readOnly: true
        },
        {
            name: 'species',
            type: 'string',
            readOnly: true
        },
        {
            name: 'story',
            type: 'text',
            readOnly: true
        },
        {
            name: 'materials',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true
        },
        {
            name: 'location',
            type: 'string',
            readOnly: true
        },
        {
            name: 'topics',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true
        },
        {
            name: 'emotions',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true
        },
        {
            name: 'date',
            type: 'datetime',
            readOnly: true
        },
        {
            name: 'uploaderName',
            type: 'string',
            readOnly: true
        },

        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }
    ],
}