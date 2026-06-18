# Dr. Pallavi Bhat's Rehab Essence
> **Centre for Occupational Therapy & Neurorehabilitation**  
> *Tagline: "From Ability to Possibility"*

Rehab Essence is a premium, modern, responsive landing page and client portal website built for the specialized occupational therapy clinic led by **Dr. Pallavi Bhat (MOT - Neurorehabilitation)** in Panaji, Goa. 

The application is crafted using modern web development practices, focusing on rich aesthetics, fluid transitions, and clear typography.

---

## 🎨 Brand Identity & Styling

The site adheres to the official **Rehab Essence Brand Guidelines**:
- **Primary Color Palette**:
  - **Teal** (`#00A8A8`): Symbol mark and primary icons.
  - **Deep Blue** (`#0046A5`): Brand text, primary buttons, and footer.
  - **Soft Grey** (`#F5F7FA`): Neutral backgrounds and cards.
  - **Sky Blue** (`#B3E5FC`): Accents, badge highlights, and text overlays.
- **Typography**:
  - **Poppins**: Primary font used for headings and brand elements.
  - **Raleway**: Secondary font for subheading structures and tags.
  - **Lato / Open Sans**: Recommended body fonts for clinical content, lists, and FAQs.

---

## 🛠️ Technology Stack

1. **Core**: React 19 & Vite
2. **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite`)
3. **Animations**: Framer Motion (premium micro-interactions and scroll-triggered transitions)
4. **Icons**: Lucide React

---

## 📂 Project Architecture

```bash
Rehab Essence/
├── public/                 # Static assets (Favicon, icons)
├── src/
│   ├── assets/             # Images, graphics, and logo assets
│   │   ├── logo.png                # Official brand logo (horizontal layout)
│   │   ├── pallavi_bhatt.jpg       # Founder profile photo
│   │   ├── rehab_essence_hero.png  # Hero background concept illustration
│   │   └── hero.png                # Micro-icon overlay graphics
│   ├── components/         # Section-based modular components
│   │   ├── Navbar.jsx              # Sticky glassmorphic navigation header
│   │   ├── Hero.jsx                # Introduction header with booking CTAs
│   │   ├── QuickNav.jsx            # Service shortcut cards
│   │   ├── Services.jsx            # Interactive service deep-dive dashboard
│   │   ├── AboutUs.jsx             # Story, mission, founder bio card, & team profiles
│   │   ├── HowItWorks.jsx          # 5-step clinical journey vertical timeline
│   │   ├── Resources.jsx           # Blogs, worksheets, and social links
│   │   ├── Testimonials.jsx        # Carousel for patient stories & reviews
│   │   ├── FAQs.jsx                # Accordion drawer for parent & adult enquiries
│   │   ├── Contact.jsx             # Enquiries booking form & clinic details/interactive vector map
│   │   ├── Footer.jsx              # Policy-integrated navigation footer
│   │   └── Logo.jsx                # Responsive logo rendering wrapper (scales logo.png)
│   ├── App.jsx             # Main landing page assembler
│   ├── App.css             # Global component adjustments
│   ├── index.css           # Tailwind CSS directives & root design tokens
│   └── main.jsx            # React app entry point
├── package.json            # Script commands & package dependencies
└── vite.config.js          # Vite configuration with Tailwind CSS plugin
```

---

## ⚙️ Setup & Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone this repository to your local system:
   ```bash
   git clone https://github.com/Akshit926/Rehab-Essence.git
   ```
2. Navigate into the project directory:
   ```bash
   cd "Rehab Essence"
   ```
3. Install the required package dependencies:
   ```bash
   npm install
   ```

### Command Scripts
- **Start Local Server** (runs the site in development mode with Hot Module Replacement):
  ```bash
  npm run dev
  ```
- **Build for Production** (creates a highly optimized production bundle inside the `/dist` directory):
  ```bash
  npm run build
  ```
- **Preview Production Build** (locally spins up the compiled production build to inspect load performance):
  ```bash
  npm run preview
  ```
- **Code Linter** (inspects the codebase for standard formatting rules):
  ```bash
  npm run lint
  ```

---

## 📍 Clinic Contact Details

- **Location**: 8th Floor, Silvio Heights, St. Inez, Panaji, Goa 403001
- **Phone**: +91 91721 33791
- **Email**: rehabessence@gmail.com
- **Operating Hours**:
  - **Monday – Friday**: 9:00 AM – 7:00 PM
  - **Saturday**: 9:00 AM – 5:00 PM
  - **Sunday**: Closed
- **Social Handles**: `@theessenceofot` (Instagram)
