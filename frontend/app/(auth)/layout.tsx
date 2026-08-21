// frontend/app/(main)/layout.tsx

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex items-center justify-center">
      </div>
      {children}
    </>
  );
}