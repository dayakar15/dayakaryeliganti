'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

import { blogPosts } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Card, CardContent } from '@/components/ui/card';

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights, experiences, and knowledge sharing from my engineering journey.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeIn('up', 0.2 * index)}>
                <Card className="overflow-hidden hover:shadow-lg transition">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-full min-h-[200px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.author}</span>
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <Link
                          href={post.link}
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

