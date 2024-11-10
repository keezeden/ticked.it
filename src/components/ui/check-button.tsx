"use client";

import { Check } from "lucide-react";
import { Button } from "./button";

import party from "party-js";

type CheckButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CheckButton = ({ onClick }: CheckButtonProps) => {
  const confetti = (e: React.MouseEvent<HTMLButtonElement>) => {
    party.confetti(e.currentTarget, {
      count: party.variation.range(50, 100),
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    confetti(e);
    if (onClick) onClick(e);
  };

  return (
    <Button onClick={handleClick} variant="outline" size="icon">
      <Check />
    </Button>
  );
};
