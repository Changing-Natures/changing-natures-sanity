export default {
  title: 'Game Object fields',
  type: 'object',
  name: 'GameObjectData',
  options: { collapsible: true, collapsed: false },
  fields: [
    {
        title: "Short name",
        name: "shortname",
        type: "string",
        description:"A generic, short name for the object. The lighthouse of Rubjerg Knude -> Lighthouse",
        validation: (Rule: any) => Rule.required()
    },
    {
        title: "Discovery message",
        name: "discovermsg",
        type: "string",
        description: "You see X on the ground. Max 240 characters",
        validation: (Rule: any) => Rule.required().max(240)
    },
    {
        title: "Discovery prompt",
        name: "discoverprompt",
        type: "string",
        description: "Approach x. Max 80 characters",
        validation: (Rule: any) => Rule.required().max(80),
    },
    {
        title: "Approach message",
        name: "approachmsg",
        type: "text",
        description: "The blocky shape of the lighthouse sticks out from the sand like an obelisk. Max 240 characters",
        validation: (Rule: any) => Rule.required().max(240)
    },
    {
        title: "Approach prompt",
        name: "approachprompt",
        type: "string",
        description: "Enter / Pick Up / Inspect x. Max 80 characters",
        validation: (Rule: any) => Rule.required().max(80),
    },
    {
        title: "Arrival message",
        name: "arrivemsg",
        type: "text",
        description: ". Max 240 characters",
        validation: (Rule: any) => Rule.required().max(240)
    },
    
  ]
}