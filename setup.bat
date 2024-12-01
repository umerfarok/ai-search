@echo off

REM Create main directories
mkdir app
mkdir components
mkdir public

REM Create app subdirectories
mkdir app\api

REM Create component files
type nul > components\hero.tsx
type nul > components\features.tsx
type nul > components\how-it-works.tsx
type nul > components\testimonials.tsx
type nul > components\security.tsx
type nul > components\pricing.tsx
type nul > components\cta.tsx
type nul > components\header.tsx
type nul > components\footer.tsx
type nul > components\theme-provider.tsx

REM Create UI component files
mkdir components\ui
type nul > components\ui\button.tsx
type nul > components\ui\card.tsx
type nul > components\ui\avatar.tsx

REM Create app files
type nul > app\layout.tsx
type nul > app\page.tsx
type nul > app\globals.css

REM Create public files
type nul > public\placeholder.svg

echo Folder structure and files created successfully!