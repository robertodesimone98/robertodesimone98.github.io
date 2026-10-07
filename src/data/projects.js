import { gamingProjects } from './gaming/projects'
import { brandProjects } from './brand/projects'

// Display order = order in the array of each zone (first = shown first).
const projectsByZone = {
  gaming: gamingProjects,
  brand: brandProjects,
}

// Where a project was published. Brand names: not translated.
export const channelLabels = {
  youtube: 'YouTube',
  instagram: 'Instagram',
  tiktok: 'TikTok',
}

export function getProjects(zone) {
  return projectsByZone[zone] ?? []
}

export function getProjectBySlug(zone, slug) {
  return getProjects(zone).find((p) => p.slug === slug)
}

export function getAdjacentProjects(zone, slug) {
  const list = getProjects(zone)
  const index = list.findIndex((p) => p.slug === slug)
  return {
    previous: index > 0 ? list[index - 1] : null,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : null,
  }
}

// Fourth metadata field of the detail page (and the line under the card title):
// label and value depend on where the project comes from.
//   client   -> CLIENT (name, with link if clientUrl)
//   channel  -> CHANNEL (own channel handle, with link to the profile)
//   course   -> COURSE (school / course name)
//   personal -> TYPE   (no value: the translated "Personal project")
export function getOriginField(project) {
  if (project.origin === 'client') {
    return { labelKey: 'client', value: project.client, url: project.clientUrl }
  }
  if (project.origin === 'channel') {
    return { labelKey: 'channel', value: project.client, url: project.clientUrl }
  }
  if (project.origin === 'course') {
    return { labelKey: 'course', value: project.client, url: project.clientUrl }
  }
  return { labelKey: 'personal', value: null, url: null }
}
