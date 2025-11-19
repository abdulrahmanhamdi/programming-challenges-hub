import os

# Folder settings
BASE_DIR = "problems"
OUTPUT_FILE = "PROBLEMS_INDEX.md"

def get_problem_title(file_path):
    """Extract the problem title from the first line in the markdown file"""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            first_line = f.readline().strip()
            if first_line.startswith("#"):
                return first_line.replace("#", "").strip()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
    return "Untitled Problem"

def main():
    # Make sure we are in the root directory
    if not os.path.exists(BASE_DIR):
        print(f"Error: Folder '{BASE_DIR}' not found. Make sure you run this from the root directory.")
        return

    content = []
    # Write the header
    content.append("# 📘 Problems Index\n")
    content.append("Automatically generated. Do not edit manually.\n\n")

    # Order of difficulties
    difficulties = ["easy", "medium", "hard"]
    
    total_count = 0

    for difficulty in difficulties:
        folder_path = os.path.join(BASE_DIR, difficulty)
        
        # Add section title
        content.append(f"## 🔹 {difficulty.capitalize()}\n")
        
        # Write table header
        content.append("| Problem | Difficulty | Path |")
        content.append("|---------|------------|------|")

        if os.path.exists(folder_path):
            files = sorted([f for f in os.listdir(folder_path) if f.endswith(".md")])
            
            if not files:
                content.append(f"| No problems yet | {difficulty} | # |")
            
            for filename in files:
                file_path = os.path.join(folder_path, filename)
                title = get_problem_title(file_path)
                
                # Relative file path (must be accurate)
                # Example: problems/easy/two-sum.md
                relative_path = f"{BASE_DIR}/{difficulty}/{filename}"
                
                # Write the row in strict table format
                # | Title | difficulty | [filename](path) |
                line = f"| {title} | {difficulty} | [{filename}]({relative_path}) |"
                content.append(line)
                total_count += 1
        else:
            content.append(f"| Folder missing | {difficulty} | # |")
            
        content.append("\n")  # Empty line after each table

    # Write the final file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(content))

    print(f" Success! Generated index with {total_count} problems.")

if __name__ == "__main__":
    main()
