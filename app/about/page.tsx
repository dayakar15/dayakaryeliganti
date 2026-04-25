'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>

					{/* TEXT */}
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>

						<p className="text-lg text-muted-foreground">
							I am a passionate engineering student with a focus on innovation and problem-solving.
							My academic journey has equipped me with strong technical skills and a deep understanding
							of engineering principles.
						</p>

						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								I have worked on real-world projects like truck sharing for farmers,
								a Python trading bot, and cybercrime analytics. I enjoy building practical
								applications and learning new technologies continuously.
							</p>
						</div>

						<Button className="mt-6" asChild>
							<a href="/cv.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					{/* IMAGE (UPDATED HERE ✅) */}
					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/myphoto1.png"
							alt="My Photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
							priority
						/>
					</motion.div>

				</motion.div>

				{/* CARDS */}
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>

					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Bachelor of Technology student focusing on software development,
									problem-solving, and real-world applications.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Projects</h3>
								<p className="text-muted-foreground">
									Developed projects including logistics platforms, trading bots,
									and predictive analytics systems.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Skilled in Python, Django, HTML, CSS, JavaScript, and Data Analytics.
								</p>
							</CardContent>
						</Card>
					</motion.div>

				</motion.div>
			</div>
		</div>
	);
}