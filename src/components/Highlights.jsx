// Renders the light markup used in project texts:
//   **text**   -> highlighted (secondary accent)
//   _text_     -> italic
//   **_text_** -> highlighted + italic
//   \n         -> line break
function Highlights({ text }) {
  const lines = String(text ?? '').split('\n')

  return lines.map((line, lIndex) => {
    const parts = line.split(/(\*\*_.*?_\*\*|\*\*.*?\*\*|_.*?_)/g).map((part, i) => {
      if (part.startsWith('**_') && part.endsWith('_**')) {
        return (
          <span key={i} className="highlight">
            <em>{part.slice(3, -3)}</em>
          </span>
        )
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={i} className="highlight">
            {part.slice(2, -2)}
          </span>
        )
      }
      if (part.startsWith('_') && part.endsWith('_') && part.length > 1) {
        return <em key={i}>{part.slice(1, -1)}</em>
      }
      return part
    })

    return (
      <span key={lIndex}>
        {parts}
        {lIndex < lines.length - 1 && <br />}
      </span>
    )
  })
}

export default Highlights
