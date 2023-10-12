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
      validation: (Rule: any) => [
        Rule.required().error('EN Missing'),
        Rule.max(180).warning('Too long!'),
      ]
    },
    {
      title: 'Subtitle FR',
      name: 'cutsceneSubtitleFR',
      type: 'text',
      validation: (Rule: any) => Rule.max(180).warning('Too long!'),
    },
    {
      title: 'Subtitle DE',
      name: 'cutsceneSubtitleDE',
      type: 'text',
      validation: (Rule: any) => [
        Rule.required().error('DE Missing'),
        Rule.max(180).warning('Too long!'),
      ]}
  ],
  preview:{
    select:{
      title: 'cutsceneSubtitleEN',
      media: 'cutsceneImage'
    }
  }
}