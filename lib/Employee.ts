import data from "../public/sss-contribution.json";

type JSONData = {
	[key: string]: {
		RangeStart: number;
		RangeEnd: number;
		Value: number;
	};
};
const jsonData: JSONData = data;

export default class Employee {
	private static readonly PAGIBIG_RATE_1: number = 0.01;
	private static readonly PAGIBIG_RATE_2: number = 0.02;
	private static readonly PAGIBIG_RATE_DEFAULT: number = 100.0;

	private salary: number;

	constructor(salary: number) {
		this.salary = salary;
	}

	public getSSSContributionRange(): number {
		try {
			for (const key in jsonData) {
				if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
					const entry = jsonData[key];
					const lowerLimit: number = entry.RangeStart;
					const upperLimit: number = entry.RangeEnd;
					const totalContribution: number = entry.Value;

					if (
						lowerLimit <= this.salary &&
						upperLimit >= this.salary
					) {
						return totalContribution;
					} else if (this.salary > Number.MAX_VALUE) {
						return 1350;
					}
				}
			}
		} catch (error: any) {
			console.error(
				`An error occurred while reading the JSON data: ${error.message}`
			);
			return 0.0;
		}
		return 0.0;
	}

	public getPagIbigContribution(): number {
		if (this.salary <= 1500) {
			return this.salary * Employee.PAGIBIG_RATE_1;
		} else if (this.salary <= 5000) {
			return this.salary * Employee.PAGIBIG_RATE_2;
		} else {
			return Employee.PAGIBIG_RATE_DEFAULT;
		}
	}

	public getPhilHealthContribution(): number {
		if (this.salary < 10000) {
			return 225;
		} else if (this.salary <= 90000) {
			return (this.salary * 0.045) / 2;
		} else {
			return 4050;
		}
	}

	public getTaxableIncome(totalContribution: number): number {
		return this.salary - totalContribution;
	}

	public getIncomeTax(taxableIncome: number): number {
		if (this.salary <= 20833) {
			return 0;
		} else if (this.salary <= 33332) {
			return (taxableIncome - 20833) * 0.2;
		} else if (this.salary <= 66666) {
			return 2500 + (taxableIncome - 33333) * 0.25;
		} else if (this.salary <= 166666) {
			return 10833.33 + (taxableIncome - 66667) * 0.3;
		} else if (this.salary <= 666666) {
			return 40833.33 + (taxableIncome - 166667) * 0.32;
		} else {
			return 200833.33 + (taxableIncome - 666667) * 0.35;
		}
	}

	public displayTotalDeductionAndTakeHomePay(): void {
		const decimalFormat: Intl.NumberFormat = new Intl.NumberFormat(
			"en-PH",
			{
				style: "currency",
				currency: "PHP",
				minimumFractionDigits: 2,
			}
		);

		const sssContribution: number = this.getSSSContributionRange();
		const pagibigContribution: number = this.getPagIbigContribution();
		const philHealthContribution: number = this.getPhilHealthContribution();
		const totalContribution: number =
			sssContribution + pagibigContribution + philHealthContribution;
		const taxableIncome: number = this.getTaxableIncome(totalContribution);
		const incomeTax: number = this.getIncomeTax(taxableIncome);
		const takeHomePay: number = this.salary - totalContribution - incomeTax;

		console.log(`Salary: ${decimalFormat.format(this.salary)}`);
		console.log(
			`Total Contribution: ${decimalFormat.format(totalContribution)}`
		);
		console.log(
			`\t-SSS Contribution: ${decimalFormat.format(sssContribution)}`
		);
		console.log(
			`\t-Pag-Ibig Contribution: ${decimalFormat.format(
				pagibigContribution
			)}`
		);
		console.log(
			`\t-PhilHealth Contribution: ${decimalFormat.format(
				philHealthContribution
			)}`
		);
		console.log(`Income Tax: ${decimalFormat.format(incomeTax)}\n`);
		console.log(`Take Home Pay: ${decimalFormat.format(takeHomePay)}`);
	}
}
