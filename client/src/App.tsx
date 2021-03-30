import React from "react";
import incrementValue from "./middleware/Counter/incrementValue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import PrimaryVideoCard from "./views/components/PrimaryVideoCard";
import LearningCard from "./views/components/LearningCard";
import LandingPage from "./views/components/LandingPage/LandingPage";

function App() {
	const dispatch = useDispatch();
	const state = useSelector((state: RootState) => state.counter.currentValue);
	/** Alternate: const state = useSelector<RootState, number>(state => state.counter.currentValue); */
	return (
		<>
			{/* <div className="App"> {state}</div>
			<button
				onClick={() => {
					dispatch(incrementValue(1));
				}}
			>
				click to increment
			</button>
			<PrimaryVideoCard
				thumbnailUrl="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
				description="description"
				title="title"
			/> */}

			<LandingPage />
		</>
	);
}

export default App;
