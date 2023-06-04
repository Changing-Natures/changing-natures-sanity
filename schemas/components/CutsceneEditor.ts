export default {
    title: 'Cut scene editor',
    type: 'object',
    name: 'CutsceneEditor',
    options: { collapsible: true, collapsed: false },
    fields: [
        {
            title: 'Story cutscene editor',
            name: 'cutscene',
            type: 'array',
            of: [{type: 'CutsceneSlide'}]
        }
    ]
}