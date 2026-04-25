import Link from 'next/link';
import {
	Linkedin,
	Github,
	Phone,
	Mail,
} from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: <Phone className="h-5 w-5" />, href: siteConfig.links.phone, label: 'Phone' },
		{ icon: <Mail className="h-5 w-5" />, href: siteConfig.links.email, label: 'Email' },
		{ icon: <Linkedin className="h-5 w-5" />, href: siteConfig.links.linkedin, label: 'LinkedIn' },
		{ icon: <Github className="h-5 w-5" />, href: siteConfig.links.github, label: 'GitHub' },
		
	];

	const navColumns = [
		{
			title: 'About',
			links: [
				{ title: 'About Me', href: '/about' },
				{ title: 'Education', href: '/education' },
				{ title: 'Skills', href: '/skills' },
			],
		},
		{
			title: 'Work',
			links: [
				{ title: 'Projects', href: '/projects' },
				{ title: 'Certificates', href: '/certificates' },
			],
		},
		{
			title: 'Connect',
			links: [
				{ title: 'Blog', href: '/blog' },
				{ title: 'Contact', href: '/contact' },
				{ title: 'Resume', href: '/resume.pdf' }, // FIXED
			],
		},
	];

	return (
		<footer className="bg-card py-12 border-t">
			<div className="container px-4 mx-auto">

				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

					{/* Logo */}
					<div className="md:col-span-1">
						<Link href="/">
							<span className="text-2xl font-bold text-gradient">
								Portfolio
							</span>
						</Link>

						<p className="mt-4 text-sm text-muted-foreground">
							A professional portfolio showcasing my skills, projects, and achievements.
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							{socialLinks.map((link, index) => (
								<Button key={index} size="icon" variant="outline" asChild>
									<a
										href={link.href}
										target="_blank"
										rel="noreferrer"
										aria-label={link.label}
									>
										{link.icon}
									</a>
								</Button>
							))}
						</div>
					</div>

					{/* Links */}
					<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
						{navColumns.map((column, index) => (
							<div key={index}>
								<h3 className="font-semibold mb-3">{column.title}</h3>
								<ul className="space-y-2">
									{column.links.map((link, i) => (
										<li key={i}>
											<Link
												href={link.href}
												className="text-muted-foreground hover:text-primary text-sm"
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

				</div>

				<Separator className="my-8" />

				<div className="flex flex-col sm:flex-row justify-between text-sm">
					<p className="text-muted-foreground">
						© {currentYear} Engineering Portfolio
					</p>

					<div className="flex gap-4 mt-4 sm:mt-0">
						<Link href="/privacy">Privacy</Link>
						<Link href="/terms">Terms</Link>
					</div>
				</div>

			</div>
		</footer>
	);
}