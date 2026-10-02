import re
import glob

files = [
    'src/app/page.tsx',
    'src/app/paths/page.tsx',
    'src/app/tracks/[slug]/TrackDetail.tsx',
    'src/app/tracks/[slug]/[stepId]/ItemDetail.tsx',
    'src/components/QuizView.tsx',
    'src/components/StepView.tsx',
    'src/components/StepSusunKodeView.tsx',
    'src/components/MateriView.tsx',
    'src/components/MarkdownRenderer.tsx',
    'src/app/flashcards/jepang/JapaneseDeckOverview.tsx',
    'src/app/flashcards/jepang/n5/vol-1/[partSlug]/FlashcardSessionView.tsx',
    'src/app/bahasa/inggris/EnglishHubView.tsx',
    'src/app/bahasa/jepang/JapaneseHubView.tsx',
]

print("=== AUDIT TEXT-WHITE & HARDCODED DARK CLASSES ===")
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        lines = fp.readlines()
    for idx, line in enumerate(lines):
        if 'text-white' in line and not 'dark:text-white' in line and not 'bg-' in line:
            print(f"{f}:{idx+1}: {line.strip()[:100]}")
