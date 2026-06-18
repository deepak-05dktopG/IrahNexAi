import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../ui/ProfileCard';

const team = [
  {
    id: 1,
    name: 'Irah',
    role: 'Founder & Lead Engineer',
    bio: 'Visionary technologist with expertise in AI systems, full-stack architecture, and product strategy.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    tags: ['AI/ML', 'Full-Stack', 'Strategy'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Alex Vance',
    role: 'Head of AI Research',
    bio: 'Deep learning specialist focused on LLMs, computer vision, and real-world AI deployment at scale.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    tags: ['Deep Learning', 'NLP', 'MLOps'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
];

const AboutTeam = () => (
  <section className="py-20 px-6 relative z-10">
    <div className="gradient-divider" />

    <div className="max-w-6xl mx-auto pt-1">
      <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-6">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="section-label">Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Meet The <span className="text-gradient-blue">Team</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="/contact" className="btn-secondary text-sm">
            Join Our Team
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
            className="flex justify-center w-full"
          >
            <ProfileCard
              name={member.name}
              title={member.role}
              handle={member.name.toLowerCase().replace(/\s+/g, '')}
              status="Online"
              contactText="Contact"
              avatarUrl={member.image}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              behindGlowColor="rgba(37, 99, 235, 0.45)"
              innerGradient="linear-gradient(145deg, rgba(8, 11, 18, 0.95) 0%, rgba(37, 99, 235, 0.1) 100%)"
              onContactClick={() => window.location.href = '/contact'}
            />
          </motion.div>
        ))}
      </div>
    </div>
    <div className="gradient-divider mt-8" />
  </section>
);

export default AboutTeam;
