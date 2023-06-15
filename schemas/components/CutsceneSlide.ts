export default {
  title: 'Cut scene slide',
  type: 'object',
  name: 'CutsceneSlide',
  options: { collapsible: true, collapsed: false },
  fields: [
    {
      title: 'Story scene image',
      name: 'cutsceneImage',
      type: 'image'
    },
    {
      title: 'Subtitle EN',
      name: 'cutsceneSubtitleEN',
      type: 'text'
    },
    {
      title: 'Subtitle FR',
      name: 'cutsceneSubtitleFR',
      type: 'text'
    },
    {
      title: 'Subtitle DE',
      name: 'cutsceneSubtitleDE',
      type: 'text'
    }
  ],
  preview:{
    select:{
      title: 'cutsceneSubtitleEN',
      media: 'cutsceneImage'
    }
  }
}