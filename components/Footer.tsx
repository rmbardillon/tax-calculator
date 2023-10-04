import React from 'react'

export default function Footer() {
  return (
		<footer className="bg-gray-800 text-white py-4 sm:absolute w-full sm:bottom-0">
			<div className="container mx-auto text-center">
				<p>&copy; {new Date().getFullYear()} Romeo Jr Bardillon</p>
			</div>
		</footer>
  );
}
