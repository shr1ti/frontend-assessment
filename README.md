
## 🚀 Features

### ✅ Beautiful UI (Figma-Inspired)
- Glassmorphic cards  
- Gradient backgrounds  
- Clean serif headings  
- Adaptive layout for mobile & desktop  

### 🎯 Quiz Features
- Multiple-choice questions  
- Highlight selected answers  
- Smooth page transitions  
- Progress indicator with segments  
- Percentage-based scoring  
- Confetti animation on completion  
- Sound feedback (Click + Next)  

### 🐾 Animated Mascot
- Floating, bouncing animation  
- Cute speech bubble (“Best of Luck!”)  
- Responsive positioning  
- Loads from `/public/mascot/mascot.png`  

### ⚡ Technologies Used
- **Next.js** (Pages Router)
- **React + TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **canvas-confetti**
- Custom hooks (`useSound`, `useConfetti`)


## 📂 Folder Structure
frontend-assessment/
│
├── public/
│ ├── mascot/
│ │ └── mascot.png
│ └── sounds/
│ ├── click.mp3
│ └── next.mp3
│
├── src/
│ ├── components/
│ │ ├── Mascot.tsx
│ │ ├── QuestionCard.tsx
│ │ ├── ProgressSegments.tsx
│ │ ├── OptionButton.tsx
│ │ └── header.tsx
│ │
│ ├── hooks/
│ │ ├── useSound.ts
│ │ └── useConfetti.ts
│ │
│ ├── pages/
│ ├── index.tsx
│ ├── quiz.tsx
│ └── result.tsx
│
└── README.md
