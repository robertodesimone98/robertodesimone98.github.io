// Per-zone media. Files go in public/videos/ (served from /videos/...).
// Hero and Landing each have their own entry, so they can use different files:
//   hero    -> background video of the zone home (Hero.jsx)
//   landing -> preview video, shown very faintly when hovering that side of
//              the landing (ZonePanel.jsx)
// `poster` is optional: leave it out if there is no image file.
// Everything works even if the files are missing (no video, plain background).
export const zoneMedia = {
  gaming: {
    hero: {
      video: '/videos/gaming-hero.mp4',
      poster: '/videos/gaming-hero.jpg',
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
