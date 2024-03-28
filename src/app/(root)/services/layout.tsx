import AppFooter from "@/components/layout/footer/Footer";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="">
        {children}
        <AppFooter />
      </main>
    </>
  );
};

export default Layout;
