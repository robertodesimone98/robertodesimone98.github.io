import { SiYoutube, SiInstagram, SiTiktok } from 'react-icons/si'
import { channelLabels } from '../data/projects'
import './ChannelIcons.css'

const channelIcons = {
  youtube: SiYoutube,
  instagram: SiInstagram,
  tiktok: SiTiktok,
}

// Where a project was published, as icons. Shared by the card and the detail page, so
// the icons are always the same. Not links: only decoration + accessible name.
function ChannelIcons({ channels = [] }) {
  return (
    <div className="channel-icons">
      {channels.map((channel) => {
        const Icon = channelIcons[channel]
        return Icon ? (
          <Icon key={channel} role="img" title={channelLabels[channel]} aria-label={channelLabels[channel]} />
        ) : null
      })}
    </div>
  )
}

export default ChannelIcons
