import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/general.scss';
import './styles/queries.scss';
import {createHashRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import ButtonsPage from "./routes/buttons-page";
import IntroPage from "./routes/intro-page";
import AccordionPage from "./routes/accordion-page";
import DropdownPage from "./routes/dropdown-page";
import ModalPage from "./routes/modal-page";
import TablePage from "./routes/table-page";
import HeadingPage from "./routes/heading-page";


const router = createHashRouter([
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
            },
            {
                path: "/accordion",
                element: <AccordionPage/>
            },
            {
                path: "/Dropdown",
                element: <DropdownPage/>
            },
            {
                path: "/modal",
                element: <ModalPage/>
            },
            {
                path: "/table",
                element: <TablePage/>
            },
            {
                path: "/page-heading",
                element: <HeadingPage/>
            },
            {
                path: "/navigation",
                element: <HeadingPage/>
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
