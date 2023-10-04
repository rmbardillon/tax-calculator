"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import ResultBox from '@/components/ResultBox'
import SalaryForm from '@/components/SalaryForm'
import { useState } from "react";

export default function Home() {
    const [salary, setSalary] = useState<number>(0);
	const handleSalaryChange = (newSalary: number) => {
		setSalary(newSalary);
	};

    return (
        <>
            <main className="container flex flex-col min-h-screen">
                <Navbar />
                <div className="border rounded-lg shadow-xl p-12">
                    <SalaryForm onSalaryChange={handleSalaryChange} />
                    <ResultBox salary={salary} />
                </div>
            </main>
            <Footer />
        </>
	);
}
