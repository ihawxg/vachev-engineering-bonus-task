/** @format */


import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardProps = {
  label: string;
  icon: React.ElementType;
  amount: string;
  discription: string;
};

export default function Card({ label, icon, amount, discription }: CardProps) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm">{label}</p>
        {/* icon */}
        {React.createElement(icon, { className: "h-4 w-4 text-gray-400" })}
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{amount}</h2>
        <p className="text-xs text-gray-500">{discription}</p>
      </section>
    </CardContent>
  );
}


export function CardContent({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        className
      )}
    />
  );
}

