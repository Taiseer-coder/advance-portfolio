import { motion } from "framer-motion";
import {
  FaBrain,
  FaLightbulb,
  FaMousePointer,
  FaMountain,
} from "react-icons/fa";

export default function Skills() {
  return (
    <div
      id="skills"
      dir="rtl"
      className="min-h-screen flex items-center justify-center py-24 px-4 bg-white"
    >
      <div className="relative w-full max-w-5xl space-y-24">
        <div className="text-6xl bold justify-center items-center flex text ">
            <h1>
                المهارات
            </h1>
        </div>
        <SkillItem
          title="تحليل متقدم"
          icon={<FaBrain size={36} />}
          align="right"
          color="text-red-500"
        />

        <SkillItem
          title="أفكار إبداعية"
          icon={<FaLightbulb size={36} />}
          align="left"
          color="text-yellow-500"
        />

        <SkillItem
          title="تجربة مستخدم"
          icon={<FaMousePointer size={36} />}
          align="right"
          color="text-orange-500"
        />

        <SkillItem
          title="حلول مبتكرة"
          icon={<FaMountain size={36} />}
          align="left"
          color="text-green-500"
        />

      </div>
      
    </div>
  );
}

function SkillItem({ title, icon, align, color }) {
  const isRight = align === "right";

  return (
    <div >
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }} // يعيد الأنيميشن كل مرة
      className={`relative flex ${isRight ? "justify-start" : "justify-end"}`}
    >

      {/* الخط المتدرج */}
      <div className="absolute  top-1/2 left-0 right-0 h-3 
        bg-linear-to-l from-teal-500 to-blue-600
        rounded-full -translate-y-1/2">
      </div>

      {/* المحتوى */}
      <div
        className={`relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12
        ${isRight ? "md:flex-row" : "md:flex-row-reverse"}
        bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg`}
      >

        {/* الدائرة */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="w-28 h-28 md:w-40 md:h-40 bg-white rounded-full shadow-xl
          flex items-center justify-center text-gray-700"
        >
          {icon}
        </motion.div>

        {/* النص */}
        <div className="max-w-md text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-bold">
            {title.split(" ")[0]}{" "}
            <span className={color}>
              {title.split(" ")[1]}
            </span>
          </h2>

          <p className="text-gray-500 mt-3 leading-relaxed text-sm md:text-base">
            أمتلك خبرة في هذا المجال مع قدرة على تقديم حلول مبتكرة
            وتحليل دقيق للمشكلات لتحقيق أفضل النتائج.
          </p>
        </div>

      </div>
    </motion.div>
  </div>);
}