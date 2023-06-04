export default {
  title: 'Cut scene slide',
  type: 'object',
  name: 'CutsceneSlide',
  options: { collapsible: false, collapsed: false },
  fields: [
    {
      title: 'Story scene image',
      name: 'cutsceneImage',
      type: 'image'
    },
    {
      title: 'Subtitle EN',
      name: 'cutsceneSubtitleEN',
      type: 'string'
    },
    {
      title: 'Subtitle FR',
      name: 'cutsceneSubtitleFR',
      type: 'string'
    },
    {
      title: 'Subtitle DE',
      name: 'cutsceneSubtitleDE',
      type: 'string'
    }
  ]
}