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
            validation: (Rule: any) => Rule.required(),
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
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: "Story (English)",
            name: 'story_en',
            type: 'text',
            readOnly: false,
            group: ["imported", "en"]
        },
        {
            title: "Story (French)",
            name: 'story_fr',
            type: 'text',
            readOnly: false,
            group: ["imported", "fr"]

        },
        {
            title: "Story (German)",
            name: 'story_de',
            type: 'text',
            readOnly: false,
            group: ["imported", "de"]
        },
        {
            title: "Collection item ID",
            name: 'collectionItemId',
            type: 'number',
            readOnly: false,
            group: ["imported"]
        },
        {
            title: "Media",
            name: 'media',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: false,
            group: ["imported"]
        },
        {
            title: "Habitat",
            name: 'habitat',
            type: 'string',
            readOnly: false,
            group: ["imported"],
        },
        {
            title: "Species",
            name: 'species',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: false,
            group: ["imported"]
        },
        {
            title: "Location",
            name: 'location',
            type: 'string',
            readOnly: false,
            group: ["imported"]
        },
        // RAW MATERIALS
        {
            title: "Raw materials (Internationalized)",
            name: 'rawMaterialsIntl',
            type: 'array',
            of: [{ type: 'TagIntl' }],
            readOnly: false,
            group: ["imported"],
        },
        {
            title: 'Raw materials',
            name: 'rawMaterials',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: false,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        // PROCESSED MATERIALS
        {
            title: "Processed materials (Internationalized)",
            name: 'processedMaterialsIntl',
            type: 'array',
            of: [{ type: 'TagIntl' }],
            readOnly: false,
            group: ["imported"],
        },
        {
            title: 'Processed materials',
            name: 'processedMaterials',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: false,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        // TOPICS
        {
            title: "Topics (Internationalized)",
            name: 'topicsIntl',
            type: 'array',
            of: [{ type: 'TagIntl' }],
            readOnly: false,
            group: ["imported"],
        },
        {
            title: "Topics",
            name: 'topics',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: false,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        // EMOTIONS
        {
            title: "Emotions (Internationalized)",
            name: 'emotionsIntl',
            type: 'array',
            of: [{ type: 'TagIntl' }],
            readOnly: false,
            group: ["imported"],
        },
        {
            title: "Emotions",
            name: 'emotions',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: false,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        // PRACTICES
        {
            title: "Practices (Internationalized)",
            name: 'practicesIntl',
            type: 'array',
            of: [{ type: 'TagIntl' }],
            readOnly: false,
            group: ["imported"],
        },
        {
            title: "Practices",
            name: 'practices',
            type: 'array',
            of: [{ type: 'string' }],
            readOnly: false,
            group: ["imported"],
            options: {
                layout: 'tags'
            }
        },
        {
            title: "Date",
            name: 'date',
            type: 'datetime',
            readOnly: false,
            group: ["imported"]
        },
        {
            title: "Uploader name",
            name: 'uploaderName',
            type: 'string',
            readOnly: false,
            group: ["imported"]
        },
        {
            title: "Events",
            name: 'events',
            type: 'array',
            of: [{ type: "CollectionItemEvent" }],
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
            title: "Available in Game World?",
            name: "isAvailable",
            type: "boolean",
            group: ["local"]
        },
        {
            title: "Story",
            name: "storycutscene",
            type: "CutsceneEditor",
            group: ["local", "en", "fr", "de"],
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Wrong Image",
            name: "wrongImage",
            type: "image",
            description: "Image to show after you approach the object. Should be wrong in an interesting way i.e. a Fan Coral made of metal.",
            group: ["local"],
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Game data EN",
            name: "gameDataEn",
            type: "GameObjectData",
            group: ["local", "en"],
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Game data DE",
            name: "gameDataDe",
            type: "GameObjectData",
            group: ["local", "de"],
            validation: (Rule: any) => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'title',
            available: 'isAvailable'
        },
        prepare: ({ title, available }) => {
            const isAvailable = available ? "In game ✅" : "❌"
            return {
                title: title,
                subtitle: isAvailable
            }
        }
    }
}