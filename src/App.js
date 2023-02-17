import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Dashboard from "./components/pages/Dashboard";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [{ index: true, element: <Dashboard /> }],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
