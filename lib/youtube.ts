/**
 * YouTube utility functions for extracting video IDs and generating thumbnails
 */

/**
 * Extract YouTube video ID from various YouTube URL formats
 * @param url - YouTube URL (youtube.com, youtu.be, etc.)
 * @returns Video ID or null if not found
 */
export function getYouTubeVideoId(url: string): string | null {
  // Handle youtu.be URLs
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (youtuBeMatch) {
    return youtuBeMatch[1];
  }

  // Handle youtube.com URLs
  const youtubeMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (youtubeMatch) {
    return youtubeMatch[1];
  }

  // Handle embed URLs
  const embedMatch = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) {
    return embedMatch[1];
  }

  return null;
}

/**
 * Generate YouTube thumbnail URL from video ID
 * @param videoId - YouTube video ID
 * @param quality - Thumbnail quality ('default', 'medium', 'high', 'standard', 'maxres')
 * @returns Thumbnail URL
 */
export function getThumbnail(videoId: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'maxres'): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
}

/**
 * Generate YouTube thumbnail URL from video URL
 * @param url - YouTube URL
 * @param quality - Thumbnail quality
 * @returns Thumbnail URL or null if video ID cannot be extracted
 */
export function getThumbnailFromUrl(url: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'maxres'): string | null {
  const videoId = getYouTubeVideoId(url);
  return videoId ? getThumbnail(videoId, quality) : null;
}

/**
 * YouTube utility object with all functions
 */
export const youtube = {
  getVideoId: getYouTubeVideoId,
  getThumbnail,
  getThumbnailFromUrl,
};
