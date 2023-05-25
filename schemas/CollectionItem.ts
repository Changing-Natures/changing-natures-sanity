import {
    MdViewInAr
} from "react-icons/md"

export default {
    title: "Collection item",
    name: "collectionItem",
    icon: MdViewInAr,
    type: "document",
    groups: [
        {
            name: 'local',
            title: 'Local',
        },
        {
            name: 'imported',
            title: 'Imported',
        },
    ],
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
            group: ["local"],
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
            readOnly: true,
            group: ["imported"]
        },
        {
            name: 'habitat',
            type: 'string',
            readOnly: true,
            group: ["imported"],
        },
        {
            name: 'species',
            type: 'string',
            readOnly: true,
            group: ["imported"]
        },
        {
            name: 'story',
            type: 'text',
            readOnly: true,
            group: ["imported"]
        },
        {
            name: 'materials',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"]
        },
        {
            name: 'location',
            type: 'string',
            readOnly: true,
            group: ["imported"]
        },
        {
            name: 'topics',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"]
        },
        {
            name: 'emotions',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"]
        },
        {
            name: 'date',
            type: 'datetime',
            readOnly: true,
            group: ["imported"]
        },
        {
            name: 'uploaderName',
            type: 'string',
            readOnly: true,
            group: ["imported"]
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
            group: ["local"]
        }
    ],
}