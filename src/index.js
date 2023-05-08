import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/general.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import ButtonsPage from "./routes/buttons-page";
import IntroPage from "./routes/intro-page";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <IntroPage/>
            },
            {
                path: "/buttons",
                element: <ButtonsPage/>
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
