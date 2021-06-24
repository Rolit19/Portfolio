import React from 'react'
import '../css/button.css'
import { Icon } from "@iconify/react";
import {Box} from '@material-ui/core'
import codeforcesIcon from "@iconify-icons/simple-icons/codeforces";
import codechefIcon from "@iconify-icons/simple-icons/codechef";
import githubFill from "@iconify-icons/akar-icons/github-fill";
import linkedinFill from "@iconify-icons/akar-icons/linkedin-fill";
import geeksforgeeksIcon from "@iconify-icons/simple-icons/geeksforgeeks";
import leetcodeIcon from "@iconify-icons/cib/leetcode";
import hackerrankIcon from "@iconify-icons/cib/hackerrank";




const Platforms = () => {
    return (
        <>
        <Box>
          <ul className="home-platforms-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Rolit19"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-platforms-icons"
                title="GitHub"
              >
                <Icon
                  icon={githubFill}
                  height={38}
                  width={38}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codechef.com/users/rolit_19"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-platforms-icons"
                title="CodeChef"
              >
                <Icon
                  icon={codechefIcon}
                  height={37}
                  width={37}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/rolit_19/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-platforms-icons"
                title="LeetCode"
              >
                <Icon
                  icon={leetcodeIcon}
                  height={34}
                  width={34}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rolit-trivedi-8b3700194/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-platforms-icons"
                title="LinkedIn"
              >
                <Icon
                  icon={linkedinFill}
                  height={34}
                  width={34}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://auth.geeksforgeeks.org/user/rolit1910/practice/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-platforms-icons"
                title="GeeksforGeeks"
              >
                <Icon
                  icon={geeksforgeeksIcon}
                  height={34}
                  width={33}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://codeforces.com/profile/rolit_19"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-platforms-icons"
                title="CodeForces"
              >
                <Icon
                  icon={codeforcesIcon}
                  height={30}
                  width={30}
                  style={{ marginBottom: 10 }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/Rolit"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-platforms-icons"
                title="HackerRank"
              >
                <Icon
                  icon={hackerrankIcon}
                  height={36}
                  width={36}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
          </ul>
        </Box>
        </>
    );
  };
  
  export default Platforms;