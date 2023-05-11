import { DocsSidebarNav } from "./sidebar-nav";
import { SiteFooter } from "./site-footer";
import { ScrollArea } from "./ui/scroll-area";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
              <ScrollArea className="py-6 pr-6 lg:py-8">
                <DocsSidebarNav items={siteConfig.sidebarNav} />
              </ScrollArea>
            </aside>
            <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
              {children}
            </main>
          </div>
        </div>
        <SiteFooter />
      </div>
    </>
  );
}
