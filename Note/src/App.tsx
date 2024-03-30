import { useState } from 'react';
import { fileUploader } from 'react-drag-drop-files';
import DragDrop from "./DragDrop.tsx";
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google.tsx';

function App() {

  return (
    <>
      <h1>Hello World! 2</h1>
      <GoogleOAuthProvider clientId="<528700847072-8gk6ksei3a1kghg6t4de5b9uq09goee4.apps.googleusercontent.com>">
        <Google />
      </GoogleOAuthProvider>
      <DragDrop hoverTitle={"Hello"} fileTypes={["JPG", "PNG", "GIF"]} hoverStyle={{backgroundColor: '#FAOO3F'}} />
    </>
  );
}

export default App
