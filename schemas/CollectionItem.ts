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
        {
            name: 'en',
            title: 'English',
        },
        {
            name: 'fr',
            title: 'French',
        },
        {
            name: 'de',
            title: 'German',
        },
    ],
    fields: [
        {
            title: "Title (English)",
            name: "title",
            type: "string",
            group: ["imported", "en"],
        },
        {
            title: "Title (French)",
            name: "title_fr",
            type: "string",
            group: ["imported", "fr"],
        },
        {
            title: "Title (German)",
            name: "title_de",
            type: "string",
            group: ["imported", "de"],
        },
        {
            title: "Story (English)",
            name: 'story_en',
            type: 'text',
            readOnly: true,
            group: ["imported", "en"]
        },
        {
            title: "Story (French)",
            name: 'story_fr',
            type: 'text',
            readOnly: true,
            group: ["imported", "fr"]

        },
        {
            title: "Story (German)",
            name: 'story_de',
            type: 'text',
            readOnly: true,
            group: ["imported", "de"]
        },
        {
            title: "Media",
            name: 'media',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"]
        },
        {
            title: "Habitat",
            name: 'habitat',
            type: 'string',
            readOnly: true,
            group: ["imported"],
        },
        {
            title: "Species",
            name: 'species',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"]
        },
        {
            title: 'Raw materials',
            name: 'rawMaterials',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        {
            title: 'Processed materials',
            name: 'processedMaterials',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        {
            title: "Location",
            name: 'location',
            type: 'string',
            readOnly: true,
            group: ["imported"]
        },
        {
            title: "Topics",
            name: 'topics',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        {
            title: "Emotions",
            name: 'emotions',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: true,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        {
            title: "Date",
            name: 'date',
            type: 'datetime',
            readOnly: true,
            group: ["imported"]
        },
        {
            title: "Uploader name",
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
        },
        {
            title: "Pick up prompt",
            name: "prompt",
            type: "string",
            description: "You see X on the ground. Max 80 characters",
            validation: (Rule: any) => Rule.max(80),
            group: ["local", "en"]
        }
    ],
}