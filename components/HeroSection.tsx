import { Beef, Soup, UtensilsCrossed } from "lucide-react";
import FoodCardForm from "./FoodCardForm";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="flex justify-center gap-8 border p-8">
      <div className="flex-2">
        <FoodCardForm />
      </div>

      <div className="flex-1 ">
        <h1>
          Create a food card and start tracking <br /> your weekly meals
        </h1>

        <Separator className="mt-6" />

        <div className="flex gap-3 justify-center mt-6">
          <Beef />
          <Soup />
          <UtensilsCrossed />
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col gap-3">
          <span>
            Checkout the github repository{" "}
            <Link
              className="text-primary hover:underline"
              href="https://github.com/awonfs/trpc-drizzle"
            >
              here
            </Link>
          </span>
          <span>
            This project is for personal use and also <br /> a way to learn
            Next.js with TRPC and Drizzle
          </span>
          <span>
            This site is built with Next.js, TailwindCSS, <br /> ShadcnUI, TRPC,
            Drizzle, and sqlite
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
