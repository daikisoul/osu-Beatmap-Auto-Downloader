function clickDownloadButton() {
  // Use a MutationObserver to detect changes in the DOM
  const observer = new MutationObserver((mutationsList, observer) => {
    const downloadLink = document.querySelector('a.btn-osu-big--beatmapset-header[href*="download"]');
    if (downloadLink) {
      // Click the download link
      window.location.href = downloadLink.href;
      observer.disconnect(); // Stop observing once the download link is clicked
    }
  });

  // Start observing the DOM for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Execute the function
clickDownloadButton();
