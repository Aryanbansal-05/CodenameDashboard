import { useEffect, useState } from "react"

const SiteNotice = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  if (!show) return null

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999]">
      <div
        className="
          relative w-[760px] max-w-[90vw]
          bg-white/80 text-gray-800
          border border-purple-300
          rounded-xl px-6 py-4
          shadow-[0_10px_40px_rgba(168,85,247,0.25)]
          backdrop-blur
          animate-fadeIn
        "
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
          aria-label="Close notification"
        >
          ✕
        </button>

        <p className="font-semibold text-center text-red-700">
          ⚠ Website Not Operational
        </p>

        <p className="mt-2 text-sm text-center text-gray-600">
          This is an assessment project for Acorn Globus.
        </p>
      </div>
    </div>
  )
}

export default SiteNotice
