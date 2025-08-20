import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchContextShare from './context/SearchContextShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="114932317449-i18etkfdt0e9pgjiu1s8hg4h3mnqoucj.apps.googleusercontent.com">
    <SearchContextShare>
    <App />
    </SearchContextShare>
    </GoogleOAuthProvider>;
    </BrowserRouter>
  </StrictMode>,
)
