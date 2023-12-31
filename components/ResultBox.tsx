import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Employee from "@/lib/Employee";
import { displayCurrencyFormat } from "@/lib/helper/utility";

type Props = {
    salary: number
}

export default function ResultBox(props : Props) {
    const employee = new Employee(props.salary);
	const totalContribution =
		employee.getSSSContributionRange() +
		employee.getPagIbigContribution() +
		employee.getPhilHealthContribution();
	const sssContribution = displayCurrencyFormat(employee.getSSSContributionRange());
	const pagIbigContribution = displayCurrencyFormat(employee.getPagIbigContribution());
	const philHealthContribution = displayCurrencyFormat(employee.getPhilHealthContribution());
	const taxableIncome = displayCurrencyFormat(employee.getTaxableIncome(totalContribution));
	const incomeTax = displayCurrencyFormat(employee.getIncomeTax(employee.getTaxableIncome(totalContribution))
	);
	const takeHomePay = displayCurrencyFormat(props.salary - totalContribution - employee.getIncomeTax(employee.getTaxableIncome(totalContribution)));
  return (
		<div className="flex flex-col items-center mt-3">
			<h1>Result</h1>
			<div className="flex w-3/4 flex-col sm:flex-col xl:flex-row">
				<Card className="xl:w-1/3 sm:w-full m-2">
					<CardHeader>Monthly Contribution</CardHeader>
					<CardContent>
						<div className="flex justify-between items-baseline">
							<h1>SSS</h1>
							<h2>{props.salary == 0 ? "" : sssContribution}</h2>
						</div>
						<div className="flex justify-between items-baseline">
							<h1>PhilHealth</h1>
							<h2>
								{props.salary == 0
									? ""
									: philHealthContribution}
							</h2>
						</div>
						<div className="flex justify-between items-baseline">
							<h1>Pag-Ibig</h1>
							<h2>
								{props.salary == 0 ? "" : pagIbigContribution}
							</h2>
						</div>
						<div className="flex justify-between items-baseline">
							<h1>Total Contribution</h1>
							<h2>
								{props.salary == 0 ? "" : displayCurrencyFormat(totalContribution)}
							</h2>
						</div>
					</CardContent>
				</Card>
				<Card className="xl:w-1/3 sm:w-full m-2">
					<CardHeader>Tax</CardHeader>
					<CardContent>
						<div className="flex justify-between items-baseline">
							<h1>Taxable Income</h1>
							<h2>{props.salary == 0 ? "" : taxableIncome}</h2>
						</div>
						<div className="flex justify-between items-baseline">
							<h1>Income Tax</h1>
							<h2>{props.salary == 0 ? "" : incomeTax}</h2>
						</div>
					</CardContent>
				</Card>
				<Card className="xl:w-1/3 sm:w-full m-2">
					<CardHeader>Summary</CardHeader>
					<CardContent>
						<div className="flex justify-between items-baseline">
							<h1>Salary</h1>
							<h2>{props.salary == 0 ? "" : displayCurrencyFormat(props.salary)}</h2>
						</div>
						<div className="flex justify-between items-baseline">
							<h1>Total Contribution</h1>
							<h2>
								{props.salary == 0 ? "" : displayCurrencyFormat(totalContribution)}
							</h2>
						</div>
						<div className="flex justify-between items-baseline">
							<h1>Income Tax</h1>
							<h2>{props.salary == 0 ? "" : incomeTax}</h2>
						</div>
						<div className="flex justify-between items-baseline">
							<h1>Take Home Pay</h1>
							<h2>{props.salary == 0 ? "" : takeHomePay}</h2>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
  );
}
