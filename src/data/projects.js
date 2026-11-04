import { gamingProjects } from './gaming/projects'
import { brandProjects } from './brand/projects'

// Inside each list, display order = order in the array of the zone (first = shown first).
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

// Two lists per zone: 'work' (made for a client) and 'personal' (own channel, personal
// projects, courses). The order of the lists is different in each zone.
const GROUP_ORDER = {
  gaming: ['personal', 'work'],
  brand: ['work', 'personal'],
}

export function getProjectGroup(project) {
  return project.origin === 'client' ? 'work' : 'personal'
}

// [{ group: 'work' | 'personal', projects: [...] }], in the order shown on the home.
// A list with no projects is left out.
export function getGroupedProjects(zone) {
  const list = projectsByZone[zone] ?? []
  return (GROUP_ORDER[zone] ?? ['work', 'personal'])
    .map((group) => ({ group, projects: list.filter((p) => getProjectGroup(p) === group) }))
    .filter((g) => g.projects.length > 0)
}

// Flat list in VISUAL order (list by list): ProjectNav previous/next follows it.
export function getProjects(zone) {
  return getGroupedProjects(zone).flatMap((g) => g.projects)
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
