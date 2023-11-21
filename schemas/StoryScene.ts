import {
    MdViewInAr
} from "react-icons/md"

export default {
    title: "Story Scene",
    name: "storyScene",
    icon: MdViewInAr,
    type: "document",
    fields: [
        {
            title: "Title (English)",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: "Title (French)",
            name: "title_fr",
            type: "string",
        },
        {
            title: "Title (German)",
            name: "title_de",
            type: "string",
            validation: (Rule: any) => Rule.required(),
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
        },
        {
            title: "Story",
            name: "storycutscene",
            type: "CutsceneEditor",
            validation: (Rule: any) => Rule.required()
        },
    ],
}