"use client";
import React, { useRef, useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import close_dark from "../../../../../public/assets/icons/close_dark.svg";
import { menuItems } from "./data";
import styles from "./styles.module.css";

function BottomNavbar({ isSticky }: { isSticky?: boolean }) {
  const router = useRouter();
  const [selectedItem, setselectedItem] = useState<any | null>(null);

  const gotoLink = (link?: any, blank?: any) => {
    if (blank) {
      if (typeof window !== "undefined") window.open(link, "_blank");
    } else {
      router.push(link);
    }
    setselectedItem(null);
  };

  const openChildren = (item?: any) => {
    if (selectedItem?.text === item?.text) {
      setselectedItem(null);
    } else {
      setselectedItem(item);
    }
  };

  const closeSelected = () => setselectedItem(null);

  const menuRef = useRef();
  const handleOutsideClick = (event?: any) => {
    if (event?.target?.id === selectedItem?.id) return;

    if (menuRef?.current && !menuRef.current?.contains(event.target)) {
      setselectedItem(null);
    }
  };

  useEffect(() => {
    window.document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedItem]);

  const __comp = useRef(null);

  if (!isSticky) return null;

  return (
    <div className={styles.main} ref={__comp}>
      {selectedItem ? (
        <div className={styles.sub_links_wrapper} ref={menuRef}>
          <div>
            {selectedItem?.children?.length
              ? selectedItem.children.map((child, index) => {
                  return (
                    <Link
                      className={styles.sub_links_wrapper_button}
                      href={child?.link}
                      key={child?.text + index}
                      target={child?.blank ? child?.blank : undefined}>
                      <Image
                        width={24}
                        height={24}
                        alt="logo"
                        src={child?.icon}
                      />

                      <div className="flex flex-col">
                        <span>{child?.text}</span>
                        <small>{child?.description}</small>
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      <nav
        className={styles.nav}
        ref={__comp}
        style={{
          boxShadow: selectedItem
            ? "none 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 0px 0px"
            : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          borderTopLeftRadius: selectedItem ? "0px" : undefined,
          borderTopRightRadius: selectedItem ? "0px" : undefined,
        }}>
        <div className={styles.nav_inner}>
          {menuItems.map((item, index) => {
            const active = selectedItem?.text === item?.text;

            return (
              <button
                onClick={() =>
                  item?.link
                    ? gotoLink(item?.link, item?.blank)
                    : openChildren(item)
                }
                key={item?.id}
                id={item?.id}
                className={`${styles.nav_button} ${item?.hideInSmallScreen ? styles.hideInSmallScreen : item?.hideInBigScreen ? styles.hideInBigScreen : null}`}
                style={{
                  background:
                    active && item?.activeBg ? item?.activeBg : item?.bg,
                  color: item?.textColor,
                }}>
                {item?.leftIcon ? (
                  <Image
                    width={24}
                    height={24}
                    alt="logo"
                    src={item?.leftIcon}
                    className={styles.nav_button_img}
                  />
                ) : null}
                <span id={item?.id}>{item?.text}</span>
                {item?.rightIcon ? (
                  <Image
                    width={24}
                    height={24}
                    alt="logo"
                    src={item?.rightIcon}
                    className={`${styles.nav_button_img}`}
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default BottomNavbar;
