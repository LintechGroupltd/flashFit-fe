"use client";

import React, { useEffect, useState } from "react";

import TopNavbar from "./topNavbar";
import BottomNavbar from "./bottomNavbar";

function NavBar({ hideBottomNav = false }: { hideBottomNav?: boolean }) {
  const threshold = 1;
  const [isSticky, setIsSticky] = useState("up");

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? "down"
          : "up";
        setIsSticky(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopNavbar isSticky={isSticky !== "up" ? true : false} />
      {hideBottomNav ? null : (
        <BottomNavbar isSticky={isSticky !== "up" ? true : false} />
      )}
    </>
  );
}

export default NavBar;
