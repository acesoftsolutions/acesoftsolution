'use client';

import { motion } from 'framer-motion';

const countries = [
  '🇮🇳 India',
  '🇺🇸 United States',
  '🇬🇧 United Kingdom',
  '🇨🇦 Canada',
  '🇦🇺 Australia',
  '🇦🇪 UAE',
  '🇸🇦 Saudi Arabia',
  '🇩🇪 Germany',
];

export default function TrustedCompanies() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-500/20
            bg-white/[0.03]
            px-5
            py-2
            text-sm
            text-cyan-300
          ">
            Trusted Worldwide
          </span>

          <h2 className="
            mt-6
            text-4xl
            font-bold
            text-white
            md:text-5xl
          ">
            Serving Clients Across
            <span className="
              block
              bg-gradient-to-r
              from-[#0E4DB7]
              via-[#3CC8F5]
              to-[#12C7B5]
              bg-clip-text
              text-transparent
            ">
              Multiple Countries
            </span>
          </h2>

          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-lg
            text-white/60
          ">
            Delivering software development,
            ERP solutions, mobile applications,
            AI systems and digital transformation
            services globally.
          </p>
        </motion.div>

        <div className="
          mt-14
          grid
          grid-cols-2
          gap-5
          md:grid-cols-4
        ">

          {countries.map((country, index) => (

            <motion.div
              key={country}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                rounded-3xl
                border
                border-cyan-500/10
                bg-white/[0.03]
                p-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/30
                hover:-translate-y-1
              "
            >
              <p className="
                text-lg
                font-medium
                text-white
              ">
                {country}
              </p>
            </motion.div>

          ))}
        </div>

        {/* Bottom Stats */}

        <div className="
          mt-16
          grid
          gap-5
          md:grid-cols-4
        ">

          {[
            {
              value: '500+',
              label: 'Projects Delivered',
            },
            {
              value: '150+',
              label: 'Happy Clients',
            },
            {
              value: '10+',
              label: 'Years Experience',
            },
            {
              value: '8+',
              label: 'Countries Served',
            },
          ].map((item) => (

            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-cyan-500/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >
              <h3 className="
                text-4xl
                font-bold
                text-white
              ">
                {item.value}
              </h3>

              <p className="
                mt-2
                text-white/60
              ">
                {item.label}
              </p>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
}