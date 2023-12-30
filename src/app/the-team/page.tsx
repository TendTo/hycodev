"use client";

import { Staff, Collaborators } from "../../assets/hycodev-members";

import styles from "../../../styles/page-the-team.module.scss";
import PersonBox from "../../components/person-profile";
import TheTeamSadegh from "../../components/the-team-sadegh";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import { useEffect, useState } from "react";
import Divider from "../../components/divider";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Portal,
} from "@chakra-ui/react";
import CustomBanner from "../../components/custom-banner";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function theTeam() {
  const [width, setWindowWidth] = useState(0);
  const [selectedRole, setSelectedRole] = useState("");
  function RenderSort() {
    if (width < 600) {
      return (
        <div>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className={styles.menu__button}
            >
              Sort By
            </MenuButton>
            <Portal>
              <MenuList
                style={width < 600 ? { display: "block" } : { display: "none" }}
                className={
                  typography.paragraph +
                  " " +
                  utilities.bot_margin__big +
                  " " +
                  utilities.top_margin__small
                }
                placeholder="Sort By"
                size="lg"
                value={selectedRole}
              >
                <MenuItem
                  onClick={() => setSelectedRole("")}
                  className={typography.paragraph}
                  value={""}
                >
                  All
                </MenuItem>
                {roles.map((role, id) => {
                  const isSelected = role === selectedRole;
                  return (
                    <MenuItem
                      onClick={() => setSelectedRole(role)}
                      className={typography.paragraph}
                      value={role}
                    >
                      {role}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Portal>
          </Menu>
        </div>
      );
    } else {
      roles.map((role, id) => {
        const isSelected = role === selectedRole;
        return (
          <button
            key={id}
            onClick={() => setSelectedRole(role)}
            className={
              isSelected
                ? styles.list_item__active + " " + typography.paragraph
                : styles.list_item + " " + typography.paragraph
            }
          >
            {role}
          </button>
        );
      });
    }
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const splitRoles = Staff.flatMap((box) => box.role);
  const roles = Array.from(new Set(splitRoles));

  const filteredStaff = selectedRole
    ? Staff.filter((publicationBox) =>
        publicationBox.role.includes(selectedRole)
      )
    : Staff;
  const size = {
    size: {
      minHeight: "18rem",
      maxHeight: "18rem",
    },
  };
  const backdrop = {
    backdrop: {},
  };
  return (
    <div>
      <CustomBanner
        title={"Meet The Team"}
        source={"/../public/images/meet_the_team.jpg"}
        size={size}
        backdrop={backdrop}
      ></CustomBanner>
      <div className={styles.container}>
        {<TheTeamSadegh />}
        <Divider />

        <div className={styles.category}>
          <h3 className={typography.heading_secondary__light}>The Team</h3>
          <div
            className={utilities.bot_margin__big + " " + styles.list_wrapper}
          >
            <button
              onClick={() => setSelectedRole("")}
              className={
                !selectedRole
                  ? styles.list_item__active + " " + typography.paragraph
                  : styles.list_item + " " + typography.paragraph
              }
            >
              All
            </button>
            {roles.map((role) => (
              <button
                onClick={() => setSelectedRole(role)}
                className={
                  selectedRole == role
                    ? styles.list_item__active + " " + typography.paragraph
                    : styles.list_item + " " + typography.paragraph
                }
              >
                {role}
              </button>
            ))}
          </div>
          {RenderSort()}
          <div className={styles.team}>
            {filteredStaff.map((researcher, index) => (
              <PersonBox
                image={researcher.image}
                name={researcher.name}
                role={researcher.title}
                link={researcher.link}
              />
            ))}
          </div>
          <Divider class={utilities.bot_margin + utilities.top_margin} />
          <h3
            className={
              typography.heading_secondary__light + " " + utilities.bot_margin
            }
          >
            Collaborators
          </h3>
          <div className={styles.team}>
            {Collaborators.map((researcher, index) => (
              <PersonBox
                image={researcher.image}
                name={researcher.name}
                role={researcher.title}
                link={researcher.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
