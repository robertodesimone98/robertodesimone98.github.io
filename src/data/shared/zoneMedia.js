// Per-zone media. Files go in public/videos/ (served from /videos/...).
// Hero and Landing each have their own entry, so they can use different files:
//   hero    -> video of the zone home (Hero.jsx). Optional `wordmark`: image of the
//              name, shown instead of the title text (file in public/images/)
//   landing -> preview video, shown very faintly when hovering that side of
//              the landing (ZonePanel.jsx)
// `poster` is optional: leave it out if there is no image file.
// Everything works even if the files are missing (no video, plain background).
export const zoneMedia = {
  gaming: {
    hero: {
      video: '/videos/gaming-hero.mp4',
      poster: '/videos/gaming-hero.jpg',
      wordmark: '/images/rawb-start.svg',
    },
    landing: {
      video: '/videos/gaming-landing.mp4',
    },
  },
  brand: {
    hero: {
      video: '/videos/brand-hero.mp4',
      poster: '/videos/brand-hero.jpg',
    },
    landing: {
      video: '/videos/brand-landing.mp4',
    },
  },
}
