import { Outlet } from "react-router-dom";

import MainNavigation from "./MainNavigation";
import "./MainNavigations.css";

function Root() {
	// const navigation = useNavigation();

	return (
		<>
			<header>
				<MainNavigation />
			</header>
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	);
}

export default Root;
