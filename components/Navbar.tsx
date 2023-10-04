import React from 'react'
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
		<nav className="flex flex-row items-center justify-between w-full h-20">
			<div className="flex flex-col">
				<h1 className="text-2xl font-bold text-blue-500">
					Tax Calculator
				</h1>
			</div>
			<div className="flex flex-row cursor-pointer">
				<ModeToggle />
			</div>
		</nav>
  );
}
