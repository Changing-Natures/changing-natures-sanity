import {
    MdPlace
} from "react-icons/md"

export default {
    title: "Location",
    icon: MdPlace,
    name: "location",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Sequences",
            type: "array",
            name: "sequences",
            of: [
                {
                    title: "Sequence",
                    type: "reference",
                    to: [
                        {
                            type: "sequence"
                        }
                    ]
                }
            ]
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