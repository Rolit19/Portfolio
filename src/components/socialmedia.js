import React from 'react'
import '../css/socialmedia.css'
import { Icon } from "@iconify/react";
import linkedinFill from "@iconify-icons/akar-icons/linkedin-fill";
import facebookFill from '@iconify-icons/akar-icons/facebook-fill';
import instagramFill from '@iconify-icons/akar-icons/instagram-fill';
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';

const socialmedia = () => {
    return (
        <>
        <div className="social-media-container">
          <ul className="home-platforms-social-links1">
            <li className="social-icons1">
              <a
                href="https://www.facebook.com/rolit.trivedi"
                target="_blank"
                rel="noreferrer"
                className="icon-colour"
                title="Facebook"
              >
                <Icon
                  icon={facebookFill}
                  height={37}
                  width={37}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
            <li className="social-icons1">
              <a
                href="https://www.instagram.com/r_o_l_i_t_1910/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour"
                title="Instagram"
              >
                <Icon
                  icon={instagramFill}
                  height={34}
                  width={34}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
            <li className="social-icons1">
              <a
                href="https://www.linkedin.com/in/rolit-trivedi-8b3700194/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour"
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
            <li className="social-icons1">
              <a
                href="https://mobile.twitter.com/RolitTrivedi"
                target="_blank"
                rel="noreferrer"
                className="icon-colour"
                title="Twitter"
              >
                <Icon
                  icon={twitterFill}
                  height={34}
                  width={33}
                  style={{ marginBottom: 6 }}
                />
              </a>
            </li>
          </ul>
        </div>
        </>
    );
  };
  
export default socialmedia;
