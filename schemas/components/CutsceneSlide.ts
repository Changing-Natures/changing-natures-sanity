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
      type: 'text',
      validation: (Rule: any) => Rule.max(180).warning('Over 180 chars! Players might not be able to read this in time.'),
    },
    {
      title: 'Subtitle FR',
      name: 'cutsceneSubtitleFR',
      type: 'text',
      validation: (Rule: any) => Rule.max(180).warning('Over 180 chars! Players might not be able to read this in time.'),
    },
    {
      title: 'Subtitle DE',
      name: 'cutsceneSubtitleDE',
      type: 'text',
      validation: (Rule: any) => Rule.max(180).warning('Over 180 chars! Players might not be able to read this in time.'),
    }
  ],
  preview:{
    select:{
      title: 'cutsceneSubtitleEN',
      media: 'cutsceneImage'
    }
  }
}