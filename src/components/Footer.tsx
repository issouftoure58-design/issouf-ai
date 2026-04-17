export function Footer() {
  return (
    <footer className="border-t border-white/40 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-gray-400">&copy; {new Date().getFullYear()}</span>
          <span className="text-[13px] font-medium text-gray-600">issouf</span>
          <span className="text-[13px] font-medium bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">.ai</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+33974995631" className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors font-mono">+33 9 74 99 56 31</a>
          <a href="mailto:contact@nexus-ai-saas.com" className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors">contact@nexus-ai-saas.com</a>
        </div>
      </div>
    </footer>
  );
}
