"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedAvatar() {
	return (
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
	);
}
