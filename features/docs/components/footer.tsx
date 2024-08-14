import { Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex items-center gap-1.5 justify-center min-h-[80px] border-t mx-36">
      <Copyright size={11} /> <span className="text-lg">2024 Scalaris</span>
    </div>
  );
};
