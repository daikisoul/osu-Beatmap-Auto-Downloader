window.addEventListener('load', () => {
    const downloadButton = document.querySelector('a.btn-osu-big--beatmapset-header[href*="download"]');
    if (downloadButton) {
      downloadButton.click();
    }
  });
  