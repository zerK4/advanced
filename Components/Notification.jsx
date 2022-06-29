import { motion } from "framer-motion";

export default function Notification({ toastTitle, toastMessage }) {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, duration: 0.1 }}
      className="absolute bottom-10 z-50 flex-col right-10 w-[20rem] h-20 bg-neutral-900 flex border-2 border-neutral-800 select-none "
    >
      <div className="flex justify-between w-full px-2">
        <div className="text-sm text-neutral-400 font-bold">⚠️</div>
        <div className="h-10 text-neutral-500 text-lg">{toastTitle}</div>
      </div>
      <div className="px-2 text-neutral-500">{toastMessage}</div>
    </motion.div>
  );
}
