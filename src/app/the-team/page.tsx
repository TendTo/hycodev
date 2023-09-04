"use client";

import { Staff } from "./members";

import styles from "../../../styles/the-team.module.scss";
import PersonBox from "../components/person-profile";
import MeetTheTeam from "../meet-the-team/page";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import Image from "next/image";
import { useState } from "react";
import Divider from "../components/divider";

export default function theTeam() {
  const splitRoles = Staff.flatMap((box) => box.role);
  const roles = Array.from(new Set(splitRoles));
  const [selectedRole, setSelectedRole] = useState("");
  const filteredStaff = selectedRole
    ? Staff.filter((publicationBox) =>
        publicationBox.role.includes(selectedRole)
      )
    : Staff;
  return (
    <div>
      <div className={styles.banner__wrapper}>
        <Image
          style={{ objectFit: "cover" }}
          src="/../public/images/the_team.jpg"
          fill={true}
          quality={100}
        />
      </div>
      <div className={styles.container}>
        {<MeetTheTeam></MeetTheTeam>}
        <Divider />
        <div className={styles.category}>
          <h3 className={typography.heading_secondary__light}>The Team</h3>
          <div
            className={
              styles.team +
              " " +
              utilities.bot_margin__big +
              " " +
              styles.list_wrapper
            }
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
            {roles.map((role, id) => {
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
            })}
            {/*<p className={typography.paragraph}>Researchers</p>*/}
            {/*<p className={typography.paragraph}>PhD Students</p>*/}
            {/*<p className={typography.paragraph}>Collaborators</p>*/}
            {/*<p className={typography.paragraph}>Interns</p>*/}
            {/*<p className={typography.paragraph}>Past Members</p>*/}
          </div>
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
        </div>
      </div>
    </div>
  );
}
