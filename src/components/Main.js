import React, {useEffect, useState} from 'react';

function Main(){

	const [result, setResult] = useState(0);
	const [parameter1, setParameter1] = useState(0);
	const [parameter2, setParameter2] = useState(0);
	const [operator, setoperator] = useState('+');

	useEffect(() => {
		var result;
		result = parseInt(parameter1) + parseInt(parameter2);
		if(operator == '-'){
			result = parseInt(parameter1) - parseInt(parameter2);
		}else if(operator == '*'){
			result = parseInt(parameter1) * parseInt(parameter2);
		}else if(operator == '/'){
			result = parseInt(parameter1) / parseInt(parameter2);
		}
		setResult(result);
	});

	function Calc(target){
		console.log(target);
		//var result1 = target.value;
		//setResult(result1);
		if(target.name == 'parameter1'){
			setParameter1(target.value);
		}
		if(target.name == 'parameter2'){
			setParameter2(target.value);
		}
	}

	function switchOperator(operator1){
		setoperator(operator1);
		console.log(operator1);
	}



	return(
		<div className="Main"><br />
			<p> Calculation of 2 numbers</p>
			<input
				type="number"
				placeholder="Enter Number"
				className="Textbox"
				name="parameter1"
				value={parameter1 ? parameter1 : ''}
				onChange={e => Calc(e.target)} 
			/>
			<select className="Select" onChange={e => switchOperator(e.target.value)} value={operator}  name="operator">
				<option value="+"> + </option>
				<option value="-"> - </option>
				<option value="*"> * </option>
				<option value="/"> / </option>
			</select>
			<input
				type="number"
				placeholder="Enter Number"
				className="Textbox"
				name="parameter2"
				value={parameter2 ? parameter2 : ''}
				onChange={e => Calc(e.target)} 
			/><br /><br />
			<div>Result is: {result}</div>
		</div>
	);
}
export default Main;