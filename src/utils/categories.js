// Label of the category of a project. `category` can be a single key ('trailer')
// or a list (['trailer', 'social']): the labels are joined with " · ".
export function categoryLabel(project, t) {
  const list = Array.isArray(project.category) ? project.category : [project.category]
  return list.map((c) => t(`projects.categories.${c}`)).join(' · ')
}