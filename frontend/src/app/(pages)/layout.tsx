import Button from "../components/chat/Button";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
        <Button />
    </div>
  );
}
