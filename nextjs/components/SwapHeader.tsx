import React from "react";
import { useRouter } from "next/router";
import { Icons as icons } from "./assets/Icons";
import { NetworkSwitcher } from "./scaffold-eth/NetworkSwitcher";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { hardhat } from "viem/chains";
import { useChainId } from "wagmi";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const isActiveLink = (router: any, href: string) => router.pathname === href;
/**
 * Site header
 */
export const SwapHeader = () => {
  const router = useRouter();
  const chainId = useChainId();
  const redirectLink = (event: any, href: string) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      maxWidth="full"
      // className="px-10 md:px-0"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-purple-600",
        ],
        base: "px-10 md:px-0",
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">RoyaltySwap</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <RainbowKitCustomConnectButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
