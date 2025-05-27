# Dropbox Brand Guidelines Clone

A modern, interactive clone of the Dropbox Brand Guidelines page featuring scroll-driven animations and interactive elements. This project showcases a responsive grid layout with animated tiles representing different aspects of the Dropbox brand identity.

## Features

- **Scroll-Driven Animation**: Engaging intro animation that transitions smoothly into the main content as users scroll
- **Interactive Grid Layout**: Responsive grid of tiles representing different brand elements
- **Hover Animations**: Each tile features unique hover animations that demonstrate the aspect it represents:
  - **Framework**: Animated connected dots and lines
  - **Voice & Tone**: Animated quotation marks
  - **Logo**: 3D rotation of the Dropbox logo
  - **Typography**: Letter-spacing animation for "Aa"
  - **Iconography**: 3D flip from lock to unlock icon
  - **Color**: Rotating and scaling shapes
  - **Imagery**: Path drawing animation
  - **Motion**: Animated bezier curve and control points
- **Responsive Design**: Adapts seamlessly to different screen sizes with optimized layouts for desktop, tablet, and mobile
- **Central Dropbox Logo**: Interactive logo overlay with hover effects

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **React Icons**: Icon library for React applications

## Project Structure

- `src/app/page.tsx`: Main page component that renders the AnimatedGrid
- `src/components/AnimatedGrid.tsx`: Handles the scroll-driven animation sequence
- `src/components/Grid.tsx`: Contains the grid layout and individual tile components
- `src/app/globals.css`: Global styles and grid area definitions
- `src/app/layout.tsx`: Root layout component

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

1. **Intro Animation**: When you first load the page, you'll see an introductory message about Dropbox brand guidelines
2. **Scroll Interaction**: As you scroll down, the intro fades out and a blue tile with descriptive text scales up
3. **Grid Reveal**: Continue scrolling to see the blue tile transform into the central Dropbox logo as the surrounding grid of brand elements fades in
4. **Interactive Tiles**: Hover over each tile to see unique animations that represent different aspects of the brand guidelines

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Deployment

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
