import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`

.content .taglist {
    list-style: none;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
}

.content .taglist li {
    padding: 0 2rem 1rem 0;
    margin-bottom: 1.5rem;
    margin-top: 0;
}

.pagination .navbar {
    justify-content: center;
}

.container {
    width: 100% !important;
    margin: 0 auto;
}

.section {
    padding: 3rem 1.5rem;
    background-color: #fff;
    border-radius: 10px;
}

.full-width-image-container {
    width: 100vw;
    height: 400px;
    position: relative;
    left: 50%;
    right: 50%;
    margin: 5em -50vw;
    background-size: cover;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
}

.margin-top-0 {
    margin-top: 0 !important;
}

.attribute-name:before {
    content: "";
    display: block;
    left: 0;
    bottom: 5px;
    position: absolute;
    width: 100%;
    border-bottom: 1px dotted #d6dbe0;
}

.attribute-name span {
    background: #fff;
    padding-right: 3px;
    position: relative;
}

.attribute-value {
    padding: 0 10px 0 4px;
}

.hidden {
    display: none;
}

.img-container {
    position: relative;
    text-align: center;
    color: white;
}

/* Bottom left text */
.bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
}

/* Top left text */
.top-left {
    position: absolute;
    top: 8px;
    left: 16px;
}

/* Top right text */
.top-right {
    position: absolute;
    top: 8px;
    right: 16px;
}

/* Bottom right text */
.bottom-right {
    position: absolute;
    bottom: 8px;
    right: 16px;
}

/* Centered text */
.centered {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Left text */
.left-absolute {
    position: absolute !important;
    top: 50%;
    left: 5%;
    text-align: left;
    line-height: 1.1;
    transform: translate(0%, -50%);
}

.ant-menu-dark .ant-menu-item > a {
    color: #ffffff !important;
}

.gradient-block {
    color: #fff;
    background: linear-gradient(-45deg,#e63d33,#333333,#2c67aa,#333333);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    text-align: center;
    padding: 40px;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0 !important;
}

.main-page-billboard {
    background-color: #fff;
    max-width: 180px;
    padding: 20px;
    text-align: left;
    font-family: Avant Garde, Tahoma, Helvetica, Arial;
    font-weight: 300;
    font-size: 18px;
    color: #000;
    border-radius: 4px;
    margin: 0 auto;
}

.shadow {
    transition: 0.3s;
}

.shadow:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
}

h3 {
    font-weight: 300 !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: white;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 37px;
    strong {
        font-weight: 300 !important;
    }
}

tbody {
    tr {
        td {
            padding: .5rem;
        }
    }
}

.wp-content img {
    padding: 0px;
    margin: 0 auto;
}

.footer-link {
    margin-bottom: 5px;
    display: inline-block;
    font-size: 15px;
    color: white;
    width: 100%;
    line-height: 25px;
    text-decoration: underline;
    font-weight: 800;
    font-family: Avant Garde, Tahoma, Helvetica, Arial;
}

.wp-content p {
    margin-bottom: 10px;
}

.activeLink {
    border-bottom: 3px solid #fff;
}

.wp-content ul {
    list-style: circle;
}

.wp-content h2 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    margin-top: 10px;
}

.wp-content h3 {
    font-size: 1.4rem;
    margin-bottom: 12px;
    margin-top: 5px;
}

.layout {
    margin: 0 auto;
}

.is-size-1 {
    font-size: 3rem !important;
}

.is-size-2 {
    font-size: 2.5rem !important;
}

.is-size-3 {
    font-size: 2rem !important;
}

.is-size-4 {
    font-size: 1.5rem !important;
}

.is-size-5 {
    font-size: 1.25rem !important;
}

.is-size-6 {
    font-size: 1rem !important;
}

.is-size-7 {
    font-size: 0.75rem !important;
}

@media screen and (max-width: 768px) {
    .is-size-1-mobile {
        font-size: 3rem !important;
    }

    .is-size-2-mobile {
        font-size: 2.5rem !important;
    }

    .is-size-3-mobile {
        font-size: 2rem !important;
    }

    .is-size-4-mobile {
        font-size: 1.5rem !important;
    }

    .is-size-5-mobile {
        font-size: 1.25rem !important;
    }

    .is-size-6-mobile {
        font-size: 1rem !important;
    }

    .is-size-7-mobile {
        font-size: 0.75rem !important;
    }
}

@media screen and (min-width: 769px), print {
    .is-size-1-tablet {
        font-size: 3rem !important;
    }

    .is-size-2-tablet {
        font-size: 2.5rem !important;
    }

    .is-size-3-tablet {
        font-size: 2rem !important;
    }

    .is-size-4-tablet {
        font-size: 1.5rem !important;
    }

    .is-size-5-tablet {
        font-size: 1.25rem !important;
    }

    .is-size-6-tablet {
        font-size: 1rem !important;
    }

    .is-size-7-tablet {
        font-size: 0.75rem !important;
    }
}

@media screen and (max-width: 1023px) {
    .is-size-1-touch {
        font-size: 3rem !important;
    }

    .is-size-2-touch {
        font-size: 2.5rem !important;
    }

    .is-size-3-touch {
        font-size: 2rem !important;
    }

    .is-size-4-touch {
        font-size: 1.5rem !important;
    }

    .is-size-5-touch {
        font-size: 1.25rem !important;
    }

    .is-size-6-touch {
        font-size: 1rem !important;
    }

    .is-size-7-touch {
        font-size: 0.75rem !important;
    }
}

@media screen and (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
    .is-size-1-desktop {
        font-size: 3rem !important;
    }

    .is-size-2-desktop {
        font-size: 2.5rem !important;
    }

    .is-size-3-desktop {
        font-size: 2rem !important;
    }

    .is-size-4-desktop {
        font-size: 1.5rem !important;
    }

    .is-size-5-desktop {
        font-size: 1.25rem !important;
    }

    .is-size-6-desktop {
        font-size: 1rem !important;
    }

    .is-size-7-desktop {
        font-size: 0.75rem !important;
    }
}

@media screen and (min-width: 1216px) {
    .container {
        max-width: 1152px;
    }
    .is-size-1-widescreen {
        font-size: 3rem !important;
    }

    .is-size-2-widescreen {
        font-size: 2.5rem !important;
    }

    .is-size-3-widescreen {
        font-size: 2rem !important;
    }

    .is-size-4-widescreen {
        font-size: 1.5rem !important;
    }

    .is-size-5-widescreen {
        font-size: 1.25rem !important;
    }

    .is-size-6-widescreen {
        font-size: 1rem !important;
    }

    .is-size-7-widescreen {
        font-size: 0.75rem !important;
    }
}

@media screen and (min-width: 1408px) {
    .container {
        max-width:1344px
    }

    .is-size-1-fullhd {
        font-size: 3rem !important;
    }

    .is-size-2-fullhd {
        font-size: 2.5rem !important;
    }

    .is-size-3-fullhd {
        font-size: 2rem !important;
    }

    .is-size-4-fullhd {
        font-size: 1.5rem !important;
    }

    .is-size-5-fullhd {
        font-size: 1.25rem !important;
    }

    .is-size-6-fullhd {
        font-size: 1rem !important;
    }

    .is-size-7-fullhd {
        font-size: 0.75rem !important;
    }
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@media screen and (max-width: 768px) {
    .ant-modal-body {
        padding: 12px;
    }

    .section {
        padding: 2rem 0.5rem !important;
    }

    .wp-content img {
        padding: 0px;
    }
}

.has-text-weight-bold {
    font-weight: 700!important;
}

.title {
    font-weight: 700!important;
    font-size: 20px;
    color: #000;
}

img {
    height: auto;
    max-width: 100%;
}

.slick-slide {
    padding: 2px 5px;
}

a {
  text-decoration: none !important;
}

h1 {
  font-family: 'Roboto';
	font-style: normal;
	font-weight: 300;
	font-size: 36px;
	line-height: 42px;

}

#category {
  font-family: Staatliches !important;
  font-weight: 500 !important;
}

#title {
  letter-spacing: 0.4px !important;
  font-size: 22px !important;
  font-size: 1.375rem !important;
  line-height: 1.13636 !important;
}

#banner {
  margin: 20px !important;
  height: 800px !important;
}

#editor {
  font-size: 16px !important;
  font-size: 1rem !important;
  line-height: 1.75 !important;
}

.uk-navbar-container {
  background: #fff !important;
  font-family: Staatliches !important;
}

img:hover {
  opacity: 1 !important;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) !important;
}

.level-card {
    height: 100%;
    position: relative;
    border: 1px solid #5B5B65;
    border-radius: 8px;
    background-color: #5B5B65;
    color: #fff;
    line-height: 150%;
}

.level-card b {
    font-size: 19px;
    line-height: 150%;
}

.level-card p {
    font-size: 16px;
}

.level-card .ant-card-head-title {
    height: 250px;
}


.badge {
    position: absolute;
    top: 16px;
    right: 0;
    padding: 5px 12px;
    border-radius: 5px;
    background-color: #282828;
    color: #00C26F;
}

.no-right-radius {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-color: #72727b;
}

.no-left-radius {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-color: #72727b;
}

.no-radius {
    border-radius: 0;
}

.hidden {
  display: none;
}

.ant-select-dropdown {
    background: ${({theme}) => theme.color.blue.light};
    box-shadow: none;
    border-radius: 0;
}

background: ${({theme}) => theme.color.blue.regular};

`;

export default GlobalStyles;
