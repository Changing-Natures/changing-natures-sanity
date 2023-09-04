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
            title: "Habitats",
            name: 'habitats',
            type: 'array',
            description:'Populate this location with entries from these habitat(s)',
            of: [
                {
                    title: 'Habitat',
                    name: 'habitat',
                    type: 'string',
                    options: {
                      list: [
                        'changing-natures.habitats.forest',
                        'changing-natures.habitats.tropical-forest',
                        'changing-natures.habitats.mountains,-rocky-area',
                        'changing-natures.habitats.desert',
                        'changing-natures.habitats.grassland',
                        'changing-natures.habitats.shrubland-/-savannah',
                        'changing-natures.habitats.agricultural-and-pasture-land',
                        'changing-natures.habitats.ocean',
                        'changing-natures.habitats.coastal-zone',
                        'changing-natures.habitats.lake,-pond',
                        'changing-natures.habitats.river',
                        'changing-natures.habitats.wetland',
                        'changing-natures.habitats.human-made-waterbody',
                        'changing-natures.habitats.village',
                        'changing-natures.habitats.city',
                        'changing-natures.habitats.industrial-area',
                        'changing-natures.habitats.park',
                        'changing-natures.habitats.private-or-community-garden',
                        'changing-natures.habitats.home-/-interior'
                      ], 
                    }
                },
            ],
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
        },
        {
            title: "Location description",
            name: "promptDescription",
            description:'Used for A.I prompts only and not seen by players.',
            type: "text",
            validation: (Rule: any) => Rule.required()
        },
    ],
}