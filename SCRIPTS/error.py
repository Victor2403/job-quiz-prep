import requests
from bs4 import BeautifulSoup
import re

def decode_secret_message(url):
    response = requests.get(url)
    if response.status_code != 200:
        print("Failed to fetch the document.")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    text = soup.get_text()

    # Extract (x, char, y) triplets - more robust pattern
    pattern = r'(\d+)\s*([^\s\d])\s*(\d+)'
    matches = re.findall(pattern, text)

    if not matches:
        print("No triplets found.")
        return

    entries = []
    for x_str, char, y_str in matches:
        try:
            x = int(x_str)
            y = int(y_str)
            entries.append((x, y, char))
        except ValueError:
            continue

    if not entries:
        print("No valid entries found.")
        return

    # Get grid dimensions
    min_x = min(x for x, y, char in entries)
    max_x = max(x for x, y, char in entries)
    min_y = min(y for x, y, char in entries)
    max_y = max(y for x, y, char in entries)

    # Build the grid
    grid = []
    for y in range(min_y, max_y + 1):
        row = []
        for x in range(min_x, max_x + 1):
            # Find the character for this position, default to space
            char = next((c for (xx, yy, c) in entries if xx == x and yy == y), ' ')
            row.append(char)
        grid.append(''.join(row))

    # Print the grid (only non-empty rows)
    for row in grid:
        if any(c != ' ' for c in row):
            print(row)

# Run with the test URL
decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vTER-wL5E8YC9pxDx43gk8eIds59GtUUk4nJo_ZWagbnrH0NFvMXIw6VWFLpf5tWTZIT9P9oLIoFJ6A/pub")