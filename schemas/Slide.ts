import {
    MdNote
} from "react-icons/md"

export default {
    title: "Slide",
    icon: MdNote,
    name: "slide",
    type: "document",
    groups: [
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
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: "Content (English)",
            name: "content_en",
            type: "slideEditor",
            group: ["en"]
        },
        {
            title: "Content (French)",
            name: "content_fr",
            type: "slideEditor",
            group: ["fr"]
        },
        {
            title: "Content (German)",
            name: "content_de",
            type: "slideEditor",
            group: ["de"]
        },
    ],
    preview: {
        select: {
            title: 'title',
            body: 'content_en'
        },
        prepare({ title, body }) {
            // Flatten blocks array to string
            const plainBody = body.content
                .filter(block => block._type === 'block')
                .map(block => block.children
                    .map(child => child.text)
                    .join(''))
                .join('\n')

            const excerpt = plainBody.slice(0, 200) + (plainBody.length > 200 ? '...' : '')

            return {
                title: title,
                subtitle: excerpt
            }
        }
    }
}


