"use client"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState } from 'react';

export default function SalaryForm({ onSalaryChange }: { onSalaryChange: (salary: number) => void }) {
	const [salary, setSalary] = useState<number>(0);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (salary == 0) {
			alert("Please enter a valid salary");
            // Autofocus on the input field
            document.querySelector("input")?.focus();
			return;
		}
        onSalaryChange(salary);
	};
	return (
		<div className="flex justify-center">
			<form className="w-3/4" onSubmit={handleSubmit}>
				<Input
					type="number"
					placeholder="Salary"
					autoFocus
					onChange={(e: any) => {
						setSalary(e.target.value);
					}}
				/>
				<Button type="submit" className="mt-3 w-full">
					Calculate
				</Button>
			</form>
		</div>
	);
}
