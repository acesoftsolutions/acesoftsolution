'use client';

import { motion } from 'framer-motion';
import {
Quote,
Star,
Users,
TrendingUp,
Award,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
const featured = testimonials[0];
const others = testimonials.slice(1, 4);

return ( <section className="bg-[#F8FAFC] py-14 lg:py-12"> <div className="mx-auto max-w-7xl px-5 lg:px-8">
{/* Header */}

    <AnimatedSection>
      <div className="mx-auto max-w-4xl text-center">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-blue-100
            bg-blue-50
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >
          Client Testimonials
        </span>

        <h2
          className="
            mt-6
            text-3xl
            font-bold
            text-slate-900
            md:text-4xl
            xl:text-5xl
          "
        >
          Trusted By
          <span
            className="
              block
              bg-gradient-to-r
              from-blue-700
              via-cyan-500
              to-teal-500
              bg-clip-text
              text-transparent
            "
          >
            Growing Businesses Worldwide
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            text-slate-600
          "
        >
          Empowering startups, SMEs, and enterprises with scalable
              digital solutions, expert development, and strategies
              that consistently drive measurable, real-world growth.

        </p>
      </div>
    </AnimatedSection>

    {/* Rating */}

    <AnimatedSection>
      <div
        className="
          mt-12
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map(
            (_, i) => (
              <Star
                key={i}
                className="
                  h-7
                  w-7
                  fill-yellow-400
                  text-yellow-400
                "
              />
            )
          )}
        </div>

        <h3
          className="
            mt-4
            text-4xl
            font-bold
            text-slate-900
          "
        >
          4.9/5
        </h3>

        <p className="text-slate-500">
          Rated 4.9/5 by Verified Clients
        </p>
      </div>
    </AnimatedSection>

    {/* Featured Testimonial */}

    <AnimatedSection>
      <motion.div
        whileHover={{
          y: -4,
        }}
        className="
          mt-16
          rounded-[40px]
          bg-white
          p-8
          shadow-xl
          ring-1
          ring-slate-200
          lg:p-14
        "
      >
        <Quote
          className="
            h-16
            w-16
            text-blue-600
          "
        />

        <p
          className="
            mt-8
            text-xl
            leading-relaxed
            text-slate-700
            md:text-2xl
          "
        >
          "{featured.content}"
        </p>

        <div className="mt-8 flex gap-1">
          {Array.from({
            length: featured.rating,
          }).map((_, i) => (
            <Star
              key={i}
              className="
                h-5
                w-5
                fill-yellow-400
                text-yellow-400
              "
            />
          ))}
        </div>

        <div
          className="
            mt-10
            flex
            items-center
            gap-4
          "
        >
          <img
            src={featured.image}
            alt={featured.name}
            className="
              h-16
              w-16
              rounded-full
              object-cover
            "
          />

          <div>
            <h4
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              {featured.name}
            </h4>

            <p className="text-slate-500">
              {featured.position}
            </p>

            <p className="text-blue-700">
              {featured.company}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>

    {/* Other Testimonials */}

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {others.map((item) => (
        <motion.div
          key={item._id}
          whileHover={{
            y: -4,
          }}
          className="
            rounded-[28px]
            bg-white
            p-6
            shadow-sm
            ring-1
            ring-slate-200
            transition-all
            duration-300
            hover:shadow-lg
          "
        >
          <Quote
            className="
              h-8
              w-8
              text-blue-300
            "
          />

          <p
            className="
              mt-4
              leading-relaxed
              text-slate-600
            "
          >
            {item.content}
          </p>

          <div className="mt-5 flex gap-1">
            {Array.from({
              length: item.rating,
            }).map((_, i) => (
              <Star
                key={i}
                className="
                  h-4
                  w-4
                  fill-yellow-400
                  text-yellow-400
                "
              />
            ))}
          </div>

          <div
            className="
              mt-6
              flex
              items-center
              gap-3
            "
          >
            <img
              src={item.image}
              alt={item.name}
              className="
                h-12
                w-12
                rounded-full
                object-cover
              "
            />

            <div>
              <h4
                className="
                  font-semibold
                  text-slate-900
                "
              >
                {item.name}
              </h4>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                {item.company}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Stats */}

    <AnimatedSection>
      <div
        className="
          mt-20
          grid
          gap-6
          md:grid-cols-3
        "
      >
        <div
          className="
            rounded-3xl
            bg-white
            p-8
            text-center
            shadow-sm
            ring-1
            ring-slate-200
          "
        >
          <Users
            className="
              mx-auto
              h-10
              w-10
              text-blue-600
            "
          />

          <h3
            className="
              mt-4
              text-4xl
              font-bold
              text-slate-900
            "
          >
            150+
          </h3>

          <p className="text-slate-500">
            Global Clients Served
          </p>
        </div>

        <div
          className="
            rounded-3xl
            bg-white
            p-8
            text-center
            shadow-sm
            ring-1
            ring-slate-200
          "
        >
          <TrendingUp
            className="
              mx-auto
              h-10
              w-10
              text-green-600
            "
          />

          <h3
            className="
              mt-4
              text-4xl
              font-bold
              text-slate-900
            "
          >
            98%
          </h3>

          <p className="text-slate-500">
            Client Retention Rate
          </p>
        </div>

        <div
          className="
            rounded-3xl
            bg-white
            p-8
            text-center
            shadow-sm
            ring-1
            ring-slate-200
          "
        >
          <Award
            className="
              mx-auto
              h-10
              w-10
              text-cyan-600
            "
          />

          <h3
            className="
              mt-4
              text-4xl
              font-bold
              text-slate-900
            "
          >
            250+
          </h3>

          <p className="text-slate-500">
            Projects Successfully Delivered
          </p>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>


);
}
