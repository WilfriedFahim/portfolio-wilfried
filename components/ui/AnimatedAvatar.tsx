"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedAvatar() {
	return (
		<div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-auto flex items-center justify-center">
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: [0, -20, 0] }}
				transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
				className="w-full h-auto flex items-center justify-center"
			>
				<Image
					src="/images/photo_wilfried.jpg"
					alt="Portrait Wilfried"
					width={400}
					height={400}
					className="rounded-full shadow-2xl shadow-amber-50 border-5 border-white object-cover p-1"
					priority
				/>
				{/* Badge Builder  flottant */}
				<div className="absolute -bottom-5 -left-5 bg-white text-blue-600 p-2 sm:p-3 md:p-4 rounded-lg shadow-lg">
					<div className="text-[10px] sm:text-xs font-bold">Builder depuis</div>
					<div className="md:text-lg lg:text-xl font-bold">2025💻📱</div>
				</div>
			</motion.div>

		</div>
	);
}
