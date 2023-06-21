import Sidebar from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-5 py-7">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
}
