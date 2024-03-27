import Footer from "@/components/layout/footer/Footer";
import TopBar from "@/components/layout/topBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="">
        {/* <TopBar title="MOT TESTING" /> */}
        {children}
      </main>
    </>
  );
};

export default Layout;
