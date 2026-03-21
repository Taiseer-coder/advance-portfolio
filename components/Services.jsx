import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={34} />,
    title: "تطوير مواقع متقدمة",
    desc: "بناء مواقع حديثة سريعة الأداء باستخدام تقنيات متقدمة.",
  },
  {
    icon: <FaPalette size={34} />,
    title: "تصميم واجهات احترافي",
    desc: "تصميم UX/UI يعكس هوية احترافية وتجربة استخدام سلسة.",
  },
  {
    icon: <FaMobileAlt size={34} />,
    title: "تصميم متجاوب بالكامل",
    desc: "توافق تام مع جميع الأجهزة والشاشات.",
  },
  {
    icon: <FaRocket size={34} />,
    title: "تحسين الأداء والسرعة",
    desc: "تحسين سرعة الموقع وتجربة المستخدم لتحقيق أفضل النتائج.",
  },
];

export default function PremiumServices() {
  return (
    <section
    id="services"
      dir="rtl"
      className="bg-white py-32 px-6"
    >
         <div className="text-6xl bold justify-center items-center flex  pb-20">
            <h1>
                الخدمات 
            </h1>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-32">

        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-16
              ${isEven ? "" : "md:flex-row-reverse"}`}
            >
              {/* دائرة الأيقونة */}
              <div className="relative shrink-0">
                <div className="w-40 h-40 rounded-full 
                  bg-linear-to-tr from-teal-500 to-blue-600
                  flex items-center justify-center text-white
                  shadow-xl">
                  {service.icon}
                </div>
              </div>

              {/* النص */}
              <div className="max-w-xl text-center md:text-right">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.desc}
                </p>

                <div className="w-24 h-1 bg-linear-to-r from-teal-400 to-blue-600 mt-6 mx-auto md:mx-0"></div>
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}