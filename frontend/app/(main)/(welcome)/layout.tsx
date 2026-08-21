// frontend/app/(main)/layout.tsx

import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <Navbar />
      </div>
      {children}
    </>
  );
}