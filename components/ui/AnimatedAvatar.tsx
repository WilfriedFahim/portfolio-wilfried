"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedAvatar() {
	return (
		<div className="relative w-[280px] h-[280px] flex items-center justify-center">
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: [0, -20, 0] }}
				transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
				className="w-[280px] h-[280px] flex items-center justify-center"
			>
				<Image
					src="/images/photo_wilfried.jpg"
					alt="Portrait Wilfried"
					width={280}
					height={280}
					className="rounded-full shadow-2xl shadow-amber-50 border-5 border-white object-cover p-1"
					priority
				/>
			</motion.div>
			{/* Badge Builder  flottant */}
			<div className="absolute -bottom-5 -left-5 bg-white text-blue-600 p-4 rounded-lg shadow-lg">
				<div className="text-xs font-bold">Builder depuis</div>
				<div className="text-lg lg-text-4xl font-bold">2025💻📱</div>
			</div>
		</div>
	);
}
