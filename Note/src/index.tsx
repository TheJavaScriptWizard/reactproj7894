import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId='528700847072-8gk6ksei3a1kghg6t4de5b9uq09goee4.apps.googleusercontent.com'>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </GoogleOAuthProvider>
)
