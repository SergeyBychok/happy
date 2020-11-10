import { createGlobalStyle } from 'styled-components'
import Font from '@assets/fonts/poppins-v15-latin-regular.woff2'
import FontWoff from '@assets/fonts/poppins-v15-latin-regular.woff'
import FontTtf from '@assets/fonts/poppins-v15-latin-regular.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src:url(${Font}) format('woff2');
        src:url(${FontWoff}) format('woff');
        src: url(${FontTtf});
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
form,
label,
caption,
table,
tbody,
tfoot,
thead,
tr,
th,
td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
}
a {
    color: inherit;
    text-decoration: none;
}
img {
    border: 0;
    vertical-align: middle;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
}

a:focus {
    outline: 0;
    text-decoration: none;
}
body {
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
nav,
section,
summary {
    display: block;
}
button{
    padding: 0;
}
button:focus {
    outline: none;
}

ol, ul {
    list-style: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
`

export default GlobalStyle
