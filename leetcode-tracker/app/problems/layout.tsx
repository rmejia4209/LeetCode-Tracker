

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex-grow">
      {children}
    </div>
  );
}

export default Layout;
