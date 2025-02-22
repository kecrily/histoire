import { markRaw } from 'vue'
import type { StoryFile, Variant } from '../types'

const copiedFromExistingVariant = [
  'state',
  'slots',
  'initState',
  'source',
  'responsiveDisabled',
  'setupApp',
  'configReady',
  'previewReady',
]

export function mapFile (file: StoryFile, existingFile?: StoryFile): StoryFile {
  const result: StoryFile = {
    ...file,
    component: markRaw(file.component),
    story: {
      ...file.story,
      title: file.story.title,
      file: markRaw(file),
      variants: file.story.variants.map(v => mapVariant(v)),
      slots: () => ({}),
    },
  }

  if (existingFile) {
    for (const index in result.story.variants) {
      const variant = result.story.variants[index]
      const existingVariant = existingFile.story.variants[index]
      if (existingVariant) {
        for (const key of copiedFromExistingVariant) {
          if (typeof existingVariant[key] !== 'undefined') {
            if (key === 'state') {
              variant.state = existingVariant.state
              continue
            }
            variant[key] = existingVariant[key]
          }
        }
      }
    }
    if (existingFile.story.lastSelectedVariant) {
      result.story.lastSelectedVariant = result.story.variants.find(v => v.id === existingFile.story.lastSelectedVariant.id)
    }
  }

  return result
}

export function mapVariant (variant: Variant): Variant {
  return {
    ...variant,
    state: null,
    initState: null,
    setupApp: null,
    slots: () => ({}),
    previewReady: false,
  }
}
