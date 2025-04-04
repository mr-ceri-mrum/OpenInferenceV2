# Open Inference V2

Modern website for Open Inference built with React, using a component-based architecture.

## 📋 Features

- Modern, responsive design
- Component-based architecture
- Seamless navigation with React Router
- Styled with Styled Components
- Fully customizable

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mr-ceri-mrum/OpenInferenceVTwo.git
cd OpenInferenceVTwo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🎬 Adding Your Video

The AI Solutions section contains a placeholder for a video file. To add your own video:

1. Place your video file in the `public` directory (for example: `public/videos/ai-solutions.mp4`)
2. Open the file `src/components/sections/AISolutions.js`
3. Update the `videoSource` variable with the correct path to your video (e.g., `/videos/ai-solutions.mp4`)

## 🏗️ Project Structure

```
OpenInferenceVTwo/
├── public/                 # Public assets
├── src/                    # Source files
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── components/         # Reusable components
│   │   ├── common/         # Common UI components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   └── sections/       # Page sections
│   ├── pages/              # Page components
│   ├── styles/             # Global styles
│   ├── App.js              # Main app component with routes
│   └── index.js            # Entry point
└── package.json            # Dependencies and scripts
```

## 🔧 Built With

- [React](https://reactjs.org/) - Frontend library
- [React Router](https://reactrouter.com/) - Navigation
- [Styled Components](https://styled-components.com/) - CSS-in-JS styling

## 📝 License

This project is licensed under the MIT License.
