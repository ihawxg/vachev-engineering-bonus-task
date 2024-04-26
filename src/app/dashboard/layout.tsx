import SideNavbar from "@/components/SideNavbar";

export default function Layout({ children }:{
    children: React.ReactNode;
  }) {
    return <div className="min-h-screen w-full bg-white text-black flex">
        <SideNavbar />
        <div className="p-8 w-full">{children}</div>
    </div>
}