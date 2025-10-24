import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // por si quieres añadir estilos extra
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`font-kdam border border-black rounded-full mr-2 px-6 py-1 text-black tracking-wide hover:bg-black hover:text-white transition ${className}`}
    >
      {children}
    </button>
  );
}
