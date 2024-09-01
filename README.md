# React Router Tutorial

React Router enables "client side routing".

## Client Side Routing
Client side routing allows your app to update the URL from a link click without making another request for another document from the server. This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page.

### Example
```
    import * as React from "react";
    import { createRoot } from "react-dom/client";
    import {
        createBrowserRouter,
        RouterProvider,
        Route,
        Link,
    } from "react-router-dom";

    const router = createBrowserRouter([
    {
        path: "/",
        element: (
        <div>
            <h1>Hello World</h1>
            <Link to="about">About Us</Link>
        </div>
        ),
    },
    {
        path: "about",
        element: <div>About</div>,
    },
    ]);

    createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
    );
```

## Nested Routes
Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data.

## Dynamic Segments
  ```
  <Route path="projects/:projectId/tasks/:taskId" />
  ```
