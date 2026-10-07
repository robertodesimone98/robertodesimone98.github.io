// Period of a project: { from, to }. Each value is 'YYYY' or 'YYYY-MM';
// `to` can also be 'present' or omitted (single date).
//   { from: '2025-03', to: '2026-04' } -> "March 2025 — April 2026"
//   { from: '2024' }                   -> "2024"
//   { from: '2026-01', to: 'present' } -> "January 2026 — present"
function formatDate(value, lang) {
  const [year, month] = value.split('-')
  if (!month) return year
  const label = new Date(Number(year), Number(month) - 1, 1).toLocaleDateString(lang, {
    month: 'long',
    year: 'numeric',
  })
  return label.charAt(0).toUpperCase() + label.slice(1)
}

export function formatPeriod(period, lang, presentLabel) {
  if (!period) return ''
  const from = formatDate(period.from, lang)
  if (!period.to) return from
  const to = period.to === 'present' ? presentLabel : formatDate(period.to, lang)
  return `${from} — ${to}`
}
