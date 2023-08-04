import "./Header.css";

import { useState } from "react";

import Logo from "../logo/Logo";
import HeaderLinks from "./Nav/HeaderLinks";
import Menu from "./Menu/Menu";
import UserSignIn from "./SignIn/SignIn";
// import Search from "./Search/Search";

export default function Header({ parentClass, linkIds, homeId }) {
  const [links, setLinks] = useState(initLinks(linkIds, homeId));
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const containerClass = "header";
  const visibleClass = "visible";
  const componentClass = `${parentClass}__${containerClass} ${containerClass}`;
  const logoId = "logo";

  function handleClick(linkId) {
    setLinks(
      linkId === logoId
        ? initLinks(linkIds, homeId)
        : links.map((link) => {
            if (link.isCurrent) link.isCurrent = false;
            if (link.id === linkId) link.isCurrent = true;
            return link;
          })
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsMenuVisible(false);
  }

  return (
    <header
      className={
        isMenuVisible ? componentClass + " " + visibleClass : componentClass
      }>
      <Logo parentClass={containerClass} handleClick={handleClick} />
      <HeaderLinks
        parentClass={containerClass}
        linksData={links}
        handleClick={handleClick}
      />
      {/* <Search parentClass={containerClass} /> */}
      <Menu
        parentClass={containerClass}
        setIsMenuVisible={setIsMenuVisible}
        isMenuVisible={isMenuVisible}
      />
      <UserSignIn parentClass={containerClass} />
    </header>
  );

  function initLinks(linkIds, homeId) {
    class Link {
      constructor(linkId) {
        this.id = linkId;
        this.path = linkId === homeId ? "/" : `/${linkId}/`;
        this.title = initLinkTitle(linkId);
        this.isCurrent = linkId === homeId;
      }
    }

    return linkIds.map((routeId) => new Link(routeId));
  }

  function initLinkTitle(linkId) {
    switch (linkId) {
      case "all":
        return "Всі";

      case "bearings":
        return "Підшипники";

      case "filters":
        return "Фільтри";

      case "belts":
        return "Паси";

      default:
        return "Інше";
    }
  }
}
