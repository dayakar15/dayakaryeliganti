'use client';

import { projects } from '@/lib/Constants';

export default function ProjectsPage() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">

				<h1 className="text-3xl font-bold text-center">
					My Projects
				</h1>

				<div className="grid md:grid-cols-3 gap-6 mt-10">

					{projects.map((project, index) => (
						<div
							key={index}
							className="p-6 border rounded-lg shadow hover:shadow-lg transition"
						>
							<h2 className="text-xl font-semibold">
								{project.title}
							</h2>

							<p className="text-sm mt-2 text-muted-foreground">
								{project.description}
							</p>

							{/* Tech */}
							<div className="flex flex-wrap gap-2 mt-3">
								{project.tags.map((tag, i) => (
									<span
										key={i}
										className="text-xs bg-primary/10 px-2 py-1 rounded"
									>
										{tag}
									</span>
								))}
							</div>

							{/* Links */}
							<div className="flex gap-4 mt-4">

								{project.repo && (
									<a
										href={project.repo}
										target="_blank"
										className="text-blue-500 text-sm"
									>
										GitHub
									</a>
								)}

								{project.link && (
									<a
										href={project.link}
										target="_blank"
										className="text-green-500 text-sm"
									>
										Live Demo
									</a>
								)}

							</div>

						</div>
					))}

				</div>

			</div>
		</section>
	);
}