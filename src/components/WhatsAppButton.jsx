export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919956785112"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-5 py-4 sm:px-6 sm:py-4 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-200 font-semibold text-sm sm:text-base"
    >
      <span className="text-lg sm:text-xl">💬</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
