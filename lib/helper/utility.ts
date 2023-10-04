export function displayCurrencyFormat(value: number): string {
	const decimalFormat: Intl.NumberFormat = new Intl.NumberFormat("en-PH", {
		style: "currency",
		currency: "PHP",
		minimumFractionDigits: 2,
	});
	return decimalFormat.format(value);
}