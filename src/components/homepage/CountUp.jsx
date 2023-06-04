import {useEffect, useRef, useState} from "preact/hooks";

const CountUp = ({ end, steps = 13}) => {

	const [state,setStaet] = useState(null);
	const ref = useRef(0);

	const acc = end / steps;

	const updateCounterState = () =>{
		if(ref.current < end) {
			const result = Math.ceil(ref.current + acc)
			//////////////////////////////////////////
			if( result > end) return setStaet(end);
			//////////////////////////////////////////
			setStaet(result);
			ref.current = result
		}
		setTimeout(updateCounterState, 150);
	};

	useEffect(() =>{
		let isMounted = true;
		if (isMounted) {
			updateCounterState();
		}
		return () => (isMounted = false);
	}, [end]);

	return(
		<>
		<h1>{state}</h1>
		</>
	)

}

export default CountUp


