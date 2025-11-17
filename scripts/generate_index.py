import os
import re

BASE = "problems"
OUTPUT = "PROBLEMS_INDEX.md"

def extract_title(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            if line.startswith("# "):
                return line.replace("#", "").strip()
    return "Untitled"

def main():
    categories = ["easy", "medium", "hard"]
    final_lines = []

    final_lines.append("# 📘 Problems Index\n")
    final_lines.append("Automatically generated. Do not edit manually.\n\n")

    for cat in categories:
        path = os.path.join(BASE, cat)
        final_lines.append(f"## 🔹 {cat.capitalize()}\n")
        final_lines.append("| Problem | Difficulty | Path |\n")
        final_lines.append("|---------|------------|------|\n")

        for filename in sorted(os.listdir(path)):
            if filename.endswith(".md"):
                full_path = os.path.join(path, filename)
                title = extract_title(full_path)
                link = f"{BASE}/{cat}/{filename}"
                final_lines.append(f"| {title} | {cat} | [{filename}]({link}) |\n")

        final_lines.append("\n")

    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.writelines(final_lines)

    print("Generated PROBLEMS_INDEX.md successfully.")

if __name__ == "__main__":
    main()
