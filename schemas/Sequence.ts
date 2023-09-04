import {
    MdListAlt
} from "react-icons/md"

export default {
    title: "Sequence",
    icon: MdListAlt,
    name: "sequence",
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
            title: "Populate with game objects",
            type: "boolean",
            name: "hasObjects",
            description:"disable this to prevent objects from appearing in this sequence"
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
        
    ],
    initialValue: {
        hasObjects: true
    },
    preview: {
        select: {
            title: 'title',
            body: 'content_en'
        },
        prepare({ title, body }) {
            let excerpt = ''
            console.log(body)
            if (body && body.content && body.content.length > 0) {            // Flatten blocks array to string
                const plainBody = body.content
                    .filter(block => block._type === 'block')
                    .map(block => block.children
                        .map(child => child.text)
                        .join(''))
                    .join('\n')

                excerpt = plainBody.slice(0, 200) + (plainBody.length > 200 ? '...' : '')
            }

            return {
                title: title,
                subtitle: excerpt
            }
        }
    }
}


