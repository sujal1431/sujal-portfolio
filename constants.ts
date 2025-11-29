import { PortfolioItem, MediaType } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // -----------------------------------------------------------------
  // SECTION: POSTERS
  // -----------------------------------------------------------------
  {
    id: 'p1',
    title: 'Verve Dance Competition',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Verve Dance.jpg',
    description: 'Official poster design for the Verve Dance competition.',
    toolsUsed: ['Canva', 'Event Branding']
  },
  {
    id: 'p2',
    title: 'Quiz Verve',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Quiz Verve.jpg',
    description: 'Creative promotional material for the Quiz Verve event.',
    toolsUsed: ['Canva', 'Layout Design']
  },
  {
    id: 'p3',
    title: 'Carrom Tournament',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Carrom competiton.jpg',
    description: 'Tournament announcement poster for campus sports.',
    toolsUsed: ['Canva', 'Sports Branding']
  },
  {
    id: 'p4',
    title: 'SVE Brand Identity',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/SVE Logo.jpg',
    description: 'Logo design and brand identity for SVE.',
    toolsUsed: ['Logo Design', 'Branding']
  },
  {
    id: 'p5',
    title: 'Traditional & Digital Art',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/triditional and digital art.jpg',
    description: 'A fusion of traditional art styles with digital mediums.',
    toolsUsed: ['Digital Art', 'Illustration']
  },
  {
    id: 'p6',
    title: 'Shakurpur Mandram',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Shakurpur Om Shakurpur Mandram.jpg',
    description: 'Devotional event poster design for Om Shakurpur Mandram.',
    toolsUsed: ['Canva', 'Festival Creative']
  },
  {
    id: 'p7',
    title: 'Event Invitation',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Save The Date.jpg',
    description: 'Elegant "Save The Date" invitation card design.',
    toolsUsed: ['Canva', 'Typography']
  },
  {
    id: 'p8',
    title: 'Certificate of Excellence',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Certificate.jpg',
    description: 'Professional certificate design for awards and recognition.',
    toolsUsed: ['Canva', 'Corporate Design']
  },
  {
    id: 'p9',
    title: 'Webinar Background',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Purple Modern Professional Webinar Zoom Virtual Background.jpg',
    description: 'Professional virtual background designed for Zoom webinars.',
    toolsUsed: ['Canva', 'Remote Work Tools']
  },
  {
    id: 'p10',
    title: 'Richa Mahajan Feature',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Richa Mahajan.jpg',
    description: 'Feature creative design.',
    toolsUsed: ['Canva', 'Social Media']
  },
  {
    id: 'p11',
    title: 'Fun Creative (Pookie)',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/Pookie Cookie.jpg',
    description: 'Engaging and fun creative design.',
    toolsUsed: ['Canva', 'Social Media']
  },
  {
    id: 'p12',
    title: 'Campus Fun (Pookie 2)',
    category: MediaType.POSTER,
    thumbnailUrl: '/assets/photos/PookieCookie 1.jpg',
    description: 'Candid and engaging campus content.',
    toolsUsed: ['Canva', 'Content Creation']
  },

  // -----------------------------------------------------------------
  // SECTION: VIDEOS
  // -----------------------------------------------------------------
  {
    id: 'v1',
    title: 'Genesis Event Coverage',
    category: MediaType.VIDEO,
    // Using a relevant photo as thumbnail
    thumbnailUrl: '/assets/photos/Purple Modern Professional Webinar Zoom Virtual Background.jpg', 
    videoUrl: '/assets/videos/Genesis.mp4',
    description: 'Full event coverage and highlights for the Genesis event.',
    toolsUsed: ['Video Editing', 'Event Coverage']
  },
  {
    id: 'v2',
    title: 'Verve Event Highlights',
    category: MediaType.VIDEO,
    // Using the matching poster as thumbnail
    thumbnailUrl: '/assets/photos/Verve Dance.jpg',
    videoUrl: '/assets/videos/Verve.mp4',
    description: 'Cinematic highlights and moments from the Verve event.',
    toolsUsed: ['Premiere Pro', 'Cinematography']
  },

  // -----------------------------------------------------------------
  // SECTION: REELS
  // -----------------------------------------------------------------
  {
    id: 'r1',
    title: 'SONIC 2025 Teaser',
    category: MediaType.REEL,
    // Generic tech/professional background as thumb
    thumbnailUrl: '/assets/photos/Purple Modern Professional Webinar Zoom Virtual Background.jpg',
    videoUrl: '/assets/reels/Sonic.mp4',
    description: 'High-energy teaser reel for the SONIC 2025 IT Seminar.',
    toolsUsed: ['Trends', 'Fast Paced Editing']
  },
  {
    id: 'r2',
    title: 'Om Shakti Festival',
    category: MediaType.REEL,
    // Matching the poster
    thumbnailUrl: '/assets/photos/Shakurpur Om Shakurpur Mandram.jpg',
    videoUrl: '/assets/reels/omshakti.mp4',
    description: 'Cultural festival highlights and devotional moments.',
    toolsUsed: ['Social Media', 'Cultural']
  },
  {
    id: 'r3',
    title: 'Campus Fun (Cooler)',
    category: MediaType.REEL,
    // Using fun photo as thumb
    thumbnailUrl: '/assets/photos/PookieCookie 1.jpg',
    videoUrl: '/assets/reels/Cooler.MP4',
    description: 'Fun and engaging short-form content for campus engagement.',
    toolsUsed: ['Reels', 'Humor']
  },
  {
    id: 'r4',
    title: 'Event Moments',
    category: MediaType.REEL,
    thumbnailUrl: '/assets/photos/Save The Date.jpg',
    videoUrl: '/assets/reels/IMG_2732.MP4',
    description: 'Capturing candid moments and event atmosphere.',
    toolsUsed: ['Vlog', 'Mobile Cinematography']
  }
];