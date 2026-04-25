'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function SkillsSection() {

  const topTechnicalSkills = [
    { name: "Python", level: 8 },
    { name: "Django", level: 7 },
    { name: "HTML", level: 9 },
    { name: "CSS", level: 8 },
    { name: "JavaScript", level: 7 },
  ];

  const topSoftwareSkills = [
    { name: "Git & GitHub", level: 7 },
    { name: "VS Code", level: 9 },
    { name: "Linux", level: 6 },
  ];

  const topSoftSkills = [
    { name: "Communication", level: 8 },
    { name: "Problem Solving", level: 9 },
    { name: "Team Work", level: 8 },
  ];

  return (
    <>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
      >

        {/* TECHNICAL */}
        <motion.div variants={fadeIn('up', 0.1)} className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>

              <div className="space-y-4">
                {topTechnicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}/10
                      </span>
                    </div>

                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* SOFTWARE */}
        <motion.div variants={fadeIn('up', 0.2)} className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Software Proficiency</h3>

              <div className="space-y-4">
                {topSoftwareSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}/10
                      </span>
                    </div>

                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* SOFT SKILLS */}
        <motion.div variants={fadeIn('up', 0.3)} className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>

              <div className="space-y-4">
                {topSoftSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}/10
                      </span>
                    </div>

                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </motion.div>

      {/* BUTTON */}
      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link href="/skills">
            View All Skills
          </Link>
        </Button>
      </div>
    </>
  );
}