import { useState, useRef } from 'react'

const CountUp = ({ end, time }) => {
	const [Value, setValue] = useState(null);
	const ref = useRef(0)

	const acc = end / 200
	const updateCouterState = () => (
		if (ref.current < end) {
		const res = Math.ceil(ref.current + acc)
	}
		)
	)
return (
	<div>CountUp</div>
)
}

export default CountUp