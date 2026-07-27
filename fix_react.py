import re

with open("src/data/tracks/react.ts", "r") as f:
    content = f.read()

# Let's fix react-1-1
content = re.sub(
    r'instruction:\s*"Tuliskan komentar penanda mental model React `// UI = f\(data\)`\.",\s*starterCode: "",\s*language: "js",\s*tests: \[\s*\{\s*pattern: "//\\\\s\*UI\\\\s\*=\\\\s\*f\\\\\(data\\\\\)",\s*message: "Tuliskan komentar: // UI = f\(data\)",\s*\},\s*\],\s*solution: "// UI = f\(data\)",',
    '''instruction:
            "Buat variabel konstanta `mentalModel` yang berisi string \\"UI = f(data)\\".",
          starterCode: "// Tulis variabel di bawah ini\\n",
          language: "js",
          tests: [
            {
              pattern: "const\\\\s+mentalModel\\\\s*=\\\\s*['\\"]UI = f\\\\(data\\\\)['\\"]",
              message: "Deklarasikan variabel mentalModel dengan nilai 'UI = f(data)'",
            },
          ],
          solution: "const mentalModel = 'UI = f(data)';",''',
    content
)

with open("src/data/tracks/react.ts", "w") as f:
    f.write(content)
