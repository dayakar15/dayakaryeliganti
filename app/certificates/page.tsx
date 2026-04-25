'use client';

import { motion } from 'framer-motion';
import { certificates } from '@/lib/Constants';
import { SectionHeader } from '@/components/ui/section-header';

export default function CertificatesPage() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">

				<SectionHeader
					title="Certificates"
					description="My achievements and certifications"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

					{certificates.map((cert, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="p-6 rounded-xl border bg-card shadow hover:shadow-lg transition"
						>
							<h3 className="text-lg font-semibold">
								{cert.title}
							</h3>

							<p className="text-muted-foreground mt-2">
								{cert.issuer}
							</p>

							<p className="text-sm mt-1">
								{cert.date}
							</p>

						</motion.div>
					))}

				</div>

			</div>
		</section>
	);
}