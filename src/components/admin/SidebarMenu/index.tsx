"use client";
import Link from "next/link";
import AdminHome from "@/app/images/admin-home.svg";
import AdminInsight from "@/app/images/admin-insight.svg";
import AdminReimburse from "@/app/images/admin-reimburse.svg";
import AdminInbox from "@/app/images/admin-inbox.svg";
import AdminCarRent from "@/app/images/admin-car-rent.svg";
import AdminCalender from "@/app/images/admin-calender.svg";
import AdminSettings from "@/app/images/admin-settings.svg";
import AdminHelp from "@/app/images/admin-help.svg";
import AdminDarkMode from "@/app/images/admin-dark-mode.svg";
import AdminLogOut from "@/app/images/admin-logout.svg";
import AdminDoubleArrow from "@/app/images/admin-double-arrow.svg";
import "./styles.scss";
import React, { useState } from "react";

const SideBar = () => {
  // Function to close sidebar for only icons look
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [textOpen, setTextOpen] = useState<boolean>(false);
  const [isRotated, setIsRotated] = useState<boolean>(false);

  const handleSwitchSidebar = () => {
    setIsOpen((prev) => !prev);
    setIsRotated((prev) => !prev);
    if (!textOpen) {
      setTextOpen(true);
    } else {
      setTimeout(() => {
        setTextOpen(false);
      }, 100);
    }
  };

  return (
    <>
      <div
        className={`ad-sidebar-container ${
          isOpen ? "ad-sidebar-tiny-container" : ""
        }`}
      >
        <div
          className="switchBtn"
          onClick={handleSwitchSidebar}
          style={
            isRotated ? { transform: "rotate(180deg) translateY(-30px)" } : {}
          }
        >
          <AdminDoubleArrow
            width={20}
            height={20}
            style={{ transform: "translateX(1px)" }}
          />
        </div>
        <div className="ad-sidebar-list-wrapper">
          {/* Main Menu */}
          <div className="ad-sidebar-mainmenu">
            <h3 className="ad-sidebar-title">{!isOpen && "MAIN MENU"}</h3>
            <ul className="ad-sidebar-items">
              <li className="ad-sidebar-item">
                <Link href="/dashboard" className="ad-sidebar-item-link">
                  <AdminHome width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="ad-sidebar-item">
                <Link href="#" className="ad-sidebar-item-link">
                  <AdminCarRent width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Car Rent
                  </span>
                </Link>
              </li>
              <li className="ad-sidebar-item">
                <Link href="#" className="ad-sidebar-item-link">
                  <AdminInsight width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Insight
                  </span>
                </Link>
              </li>
              <li className="ad-sidebar-item">
                <Link href="#" className="ad-sidebar-item-link">
                  <AdminReimburse width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Reimburse
                  </span>
                </Link>
              </li>
              <li className="ad-sidebar-item">
                <Link href="#" className="ad-sidebar-item-link">
                  <AdminInbox width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Inbox
                  </span>
                </Link>
              </li>
              <li className="ad-sidebar-item">
                <Link href="#" className="ad-sidebar-item-link">
                  <AdminCalender width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Calender
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Preferences */}
          <div className="ad-sidebar-preferences">
            <h3 className="ad-sidebar-title">{!isOpen && "PREFERENCES"}</h3>
            <ul className="ad-sidebar-items">
              <li className="ad-sidebar-item">
                <Link href="#" className="ad-sidebar-item-link">
                  <AdminSettings width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Settings
                  </span>
                </Link>
              </li>
              <li className="ad-sidebar-item">
                <Link href="#" className="ad-sidebar-item-link">
                  <AdminHelp width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Help & Center
                  </span>
                </Link>
              </li>
              <li className="ad-sidebar-item">
                <Link href="#" className="ad-sidebar-item-link">
                  <AdminDarkMode width="24" height="24" />
                  <span
                    className={`ad-sidebar-item-text ${
                      textOpen ? "ad-sidebar-item-text-none" : ""
                    }`}
                  >
                    Dark Mode
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ad-sidebar-logout">
          <Link href="#" className="ad-sidebar-logout-link">
            <AdminLogOut width="24" height="24" />
            <span
              className={`ad-sidebar-logout-text ${
                textOpen ? "ad-sidebar-item-text-none" : ""
              }`}
            >
              Log Out
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
