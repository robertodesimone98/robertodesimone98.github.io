// Title of a project, translated. The text lives in the locales:
//   <zone>.projects.items.<slug>.title
// If the key is missing, the `title` written in the data file is shown as is.
export function projectTitle(project, zone, t) {
  return t(`${zone}.projects.items.${project.slug}.title`, { defaultValue: project.title })
}
