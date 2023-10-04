import React from 'react'

export default function Footer() {
  return (
		<footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-full">
			<div className="container mx-auto text-center">
				<p>&copy; {new Date().getFullYear()} Romeo Jr Bardillon</p>
			</div>
		</footer>
  );
}
