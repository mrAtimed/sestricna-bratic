import { createSignal, crea } from "solid-js"

const CountUp = () => {
	const [value, setValue] = createSignal(12);
	return (

		<button onClick={() => setValue( value()+1) }>

		{value()}

		</button>
	)
}

export default CountUp