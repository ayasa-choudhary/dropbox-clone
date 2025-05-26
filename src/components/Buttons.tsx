"use client"
import { motion } from 'framer-motion'

export default function Buttons() {
    // Simple footer component that doesn't rely on scrolling
    return (
        <div className="w-full py-2 bg-gray-100 flex justify-center items-center">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-sm text-gray-600"
            >
                © 2023 Dropbox Clone
            </motion.div>
        </div>
    )
}
