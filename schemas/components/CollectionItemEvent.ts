export default {
    title: 'Collection Item Event',
    type: 'object',
    name: 'CollectionItemEvent',
    options: { collapsible: true, collapsed: false },
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
            title: "Title (English)",
            name: "title_en",
            type: "string",
            group: ["en"],
            readOnly: true,
        },
        {
            title: "Title (French)",
            name: "title_fr",
            type: "string",
            group: ["fr"],
            readOnly: true,
        },
        {
            title: "Title (German)",
            name: "title_de",
            type: "string",
            group: ["de"],
            readOnly: true,
        },
        {
            title: "Start year",
            name: "startYear",
            type: "number",
            readOnly: true,
        },
        {
            title: "End year",
            name: "endYear",
            type: "number",
            readOnly: true,
        },
        // TODO: parse geodata into separate fields ??
        {
            title: "Geodata",
            name: "geodata",
            type: "text",
            readOnly: true,
        },
    ],
    preview: {
        select: {
            title: 'title_en'
        }
    }
}