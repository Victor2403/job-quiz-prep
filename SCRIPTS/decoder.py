import requests
from bs4 import BeautifulSoup

def decode_secret_message(url):
    # Fetch the document
    response = requests.get(url)
    if response.status_code != 200:
        print("Failed to fetch the document")
        return
    
    # Parse HTML with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all table rows (skip header row)
    rows = soup.find_all('tr')[1:]  # Skip header row
    
    data = []
    for row in rows:
        cols = row.find_all('td')
        if len(cols) == 3:  # Ensure we have exactly 3 columns
            try:
                x = int(cols[0].text.strip())
                char = cols[1].text.strip()
                y = int(cols[2].text.strip())
                data.append((x, y, char))
            except ValueError:
                continue
    
    if not data:
        print("No valid data found in table")
        return
    
    # Get grid dimensions
    min_x = min(x for x, y, char in data)
    max_x = max(x for x, y, char in data)
    min_y = min(y for x, y, char in data)
    max_y = max(y for x, y, char in data)
    
    # Build the grid
    grid = []
    for y in range(min_y, max_y + 1):
        row = []
        for x in range(min_x, max_x + 1):
            char = next((c for (xx, yy, c) in data if xx == x and yy == y), ' ')
            row.append(char)
        grid.append(''.join(row))
    
    # Print only non-empty rows
    for row in grid:
        if any(c != ' ' for c in row):
            print(row)

# Run with the test URL
decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vTER-wL5E8YC9pxDx43gk8eIds59GtUUk4nJo_ZWagbnrH0NFvMXIw6VWFLpf5tWTZIT9P9oLIoFJ6A/pub")