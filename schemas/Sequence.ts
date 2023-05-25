import {
    MdListAlt
} from "react-icons/md"

export default {
    title: "Sequence",
    icon: MdListAlt,
    name: "sequence",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: "Images",
            type: "array",
            name: "images",
            of: [
                {
                    title: "Image",
                    type: "image"
                }
            ]
        },
        {
            title: "Slides",
            type: "array",
            name: "slides",
            of: [
                {
                    title: "Slide",
                    type: "reference",
                    to: [
                        {
                            type: "slide"
                        }
                    ]
                }
            ]
        },
    ],
}


