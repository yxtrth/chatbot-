# AI Chatbot with React + Vite

A modern AI chatbot application built with React and Vite, powered by Google's Gemini AI API.

## Features

- 🤖 AI-powered conversations using Google Gemini API
- 💬 Clean and responsive user interface
- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 🔒 Secure API key management

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-ai-tool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Replace `your_gemini_api_key_here` with your actual API key in the `.env` file

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to use the chatbot.

## Project Structure

```
src/
├── App.jsx          # Main chatbot component
├── App.css          # Styles
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Environment Variables

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key

## Technologies Used

- React 19
- Vite 7
- Tailwind CSS 4
- Axios for HTTP requests
- Google Gemini AI API

## Build for Production

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
