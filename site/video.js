/* Set this to your published YouTube video's 11-character ID, then re-export.
 * Leave it empty until the introduction is available. No external player loads
 * while the video is unconfigured. */
const INTRO_VIDEO_ID = "";

(() => {
  if (!/^[A-Za-z0-9_-]{11}$/.test(INTRO_VIDEO_ID)) return;
  const player = document.getElementById("video-player");
  const placeholder = document.getElementById("video-placeholder");
  const fallback = document.getElementById("video-fallback");
  const link = document.getElementById("video-link");
  if (!player || !placeholder || !fallback || !link) return;

  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}`;
  frame.title = "Sidecar MK1 introduction";
  frame.loading = "lazy";
  frame.allow = "encrypted-media; picture-in-picture; fullscreen";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  player.append(frame);
  link.href = `https://www.youtube.com/watch?v=${INTRO_VIDEO_ID}`;
  placeholder.hidden = true;
  player.hidden = false;
  fallback.hidden = false;
})();
