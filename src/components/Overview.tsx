// src/components/Overview.tsx

import { motion } from 'framer-motion';
import { Code2, Layers, Plug } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Building websites from start to finish using various technologies.',
  },
  {
    icon: Layers,
    title: 'Software Development',
    description: 'Creating software applications for various platforms.',
  },
  {
    icon: Plug,
    title: 'Third-Party Integration',
    description: 'Integrating third-party services and APIs into existing applications.',
  },
];

export const Overview = () => {
  return (
    <section id="overview" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
            Overview
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            I'm a Web Developer with hands-on experience in building and maintaining web applications.
            Focused on writing clean, efficient code and continuously learning new technologies.
            Experienced in working with teams to deliver reliable internal and external systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group border-none h-full bg-card/50 backdrop-blur rounded-2xl">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                    <service.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl mb-4 leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
