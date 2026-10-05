// Per-zone media. Files go in public/videos/ (served from /videos/...).
// The Hero works even if the files are missing (no video, plain background).
// The Landing can reuse these later (cover / preview) once its behavior is decided.
export const zoneMedia = {
  gaming: {
    hero: {
      video: '/videos/gaming-hero.mp4',
      poster: '/videos/gaming-hero.jpg',
    },
  },
  brand: {
    hero: {
      video: '/videos/brand-hero.mp4',
      poster: '/videos/brand-hero.jpg',
    },
  },
}
