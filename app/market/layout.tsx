export default function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <section >
      <div>
        {children}
      </div>
    </section>
  );
}
