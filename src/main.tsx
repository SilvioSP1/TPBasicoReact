import React, { Suspense, lazy } from 'react';
import { createRoot } from "react-dom/client";
import App from './App.tsx'
import Loader from './components/Loader.tsx';
import './index.css'

const container : HTMLElement | null = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <Suspense fallback={<Loader/>}>
        <App />
    </Suspense>
);
