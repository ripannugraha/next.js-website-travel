export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-[#FB8C00] hover:bg-orange-500 text-white font-inter px-6 py-3 rounded-lg flex items-center gap-2">
      {children} →
    </button>
  );
}