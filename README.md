# osu! Beatmap Auto Downloader

osu! Beatmap Auto Downloader is a Chrome extension that automatically downloads osu! beatmaps when visiting beatmap pages on the osu! website.

## Features

- Automatically detects when you visit an osu! beatmap page.
- Clicks the download button to start the download automatically.

## Installation

1. **Clone or Download the Repository:**
   - Clone the repository using Git:
     ```bash
     git clone https://github.com/yourusername/osu-beatmap-auto-downloader.git
     ```
   - Or download the ZIP file from GitHub and extract it to a directory of your choice.

2. **Load the Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click "Load unpacked" and select the directory where you cloned/extracted the extension files.

## Files

- `manifest.json`: Contains metadata about the extension, such as its name, version, and permissions.
- `content.js`: The content script that detects beatmap pages and clicks the download button.


