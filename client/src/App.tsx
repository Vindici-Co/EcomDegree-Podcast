import React from "react";
import incrementValue from "./middleware/Counter/incrementValue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import PrimaryVideoCard from "./views/components/PrimaryVideoCard";
import LearningCard from "./views/components/LearningCard/LearningCard";

function App() {
	const dispatch = useDispatch();
	const state = useSelector((state: RootState) => state.counter.currentValue);
	/** Alternate: const state = useSelector<RootState, number>(state => state.counter.currentValue); */
	return (
		<>
			<div className="App"> {state}</div>
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
			/>
			<LearningCard
				cardImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1OtaIHbKuEeGtlTLhhR0RQHaE8%26pid%3DApi&f=1"
				upperTitle="amazon upper title"
				description="amazon brand description test"
				lowerTitle="amazon lower title"
				btnColor="orange"
			/>
		</>
	);
}

export default App;
