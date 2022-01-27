(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3,4,6],{312:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(43),n(33),n(46),{name:"AboutDescription",data:function(){return{resumes:[],description:{},profilePicLink:""}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$content("resumes").fetch();case 3:n=e.sent,t.resumes=n[0].resumes,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.prev=10,e.next=13,t.$content("about_info").only(["body"]).fetch();case 13:r=e.sent,t.description=r[0],e.next=20;break;case 17:e.prev=17,e.t1=e.catch(10),console.error(e.t1);case 20:return e.prev=20,e.next=23,t.$content("about_info").only(["profile_pic"]).fetch();case 23:l=e.sent,t.profilePicLink=l[0].profile_pic,e.next=30;break;case 27:e.prev=27,e.t2=e.catch(20),console.error(e.t2);case 30:case"end":return e.stop()}}),e,null,[[0,7],[10,17],[20,27]])})))()}}),c=n(19),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-5 mb-5 bg-light"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3"},[n("img",{staticClass:"img-fluid img-thumbnail rounded-circle",attrs:{src:t.profilePicLink,alt:""}})]),t._v(" "),n("div",{staticClass:"col-sm-9"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("nuxt-content",{attrs:{document:t.description}}),t._v(" "),n("ul",{staticClass:"list-inline mb-0"},[n("li",{staticClass:"list-inline-item mr-5 my-2"},t._l(t.resumes,(function(e,r){return n("a",{key:r,staticClass:"btn btn-primary rounded-pill mb-2 mr-2",attrs:{href:e.resume_pdf,target:"blank"}},[n("svg",{staticClass:"svg-icon mr-2 align-middle svg-icon-sm"},[n("use",{attrs:{"xlink:href":"#survey-1"}})]),n("span",{staticClass:"align-middle"},[t._v(t._s(e.text))])])})),0),t._v(" "),t._m(2)])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"font-weight-normal"},[t._v("\n        Hello! I'm "),n("strong",[t._v("María Gabriela Pérez")]),t._v(".\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"h1 font-weight-normal mb-4"},[t._v("\n        I'm a "),n("strong",[t._v("Graphic Designer")]),t._v(" and Publicist.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-inline-item my-2"},[n("ul",{staticClass:"list-inline mb-0"},[n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor",attrs:{href:"https://www.instagram.com/mariaescribe/",target:"blank"}},[n("i",{staticClass:"fab fa-instagram"})])]),t._v(" "),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor",attrs:{href:"https://www.linkedin.com/in/mariaescribe/",target:"blank"}},[n("i",{staticClass:"fab fa-linkedin"})])]),t._v(" "),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor",attrs:{href:"https://www.behance.net/mariaescribe",target:"blank"}},[n("i",{staticClass:"fab fa-behance"})])]),t._v(" "),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"reset-anchor",attrs:{href:"https://vm.tiktok.com/ZM83vpCnP/",target:"blank"}},[n("i",{staticClass:"fab fa-tiktok"})])])])])}],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);var r={name:"AboutSkill",props:{skill:{type:String},desc:{type:String},svgIcon:{type:String}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-6 mb-4"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"flex-grow-1"},[n("svg",{staticClass:"svg-icon text-primary"},[n("use",{attrs:{"xlink:href":t.svgIcon}})])]),t._v(" "),n("div",{staticClass:"ml-3"},[n("h3",{staticClass:"h5 mr-3"},[t._v(t._s(t.skill))]),t._v(" "),n("p",{staticClass:"text-muted mb-2"},[t._v(t._s(t.desc))])])])])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);var r={name:"AboutComponent"},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("about-description"),t._v(" "),n("h2",{staticClass:"h1 mb-4"},[t._v("Work experience")]),t._v(" "),n("div",{staticClass:"row mb-4"},[n("about-skill",{attrs:{skill:"Graphic Designer",desc:"From social media to flyers. Set the visual tone for brands in digital and print media.","svg-icon":"#stack-1"}}),t._v(" "),n("about-skill",{attrs:{skill:"Web Designer",desc:"Wireframing and prototyping. Create the website structure and the user interface.","svg-icon":"#laptop-screen-1"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutDescription:n(312).default,AboutSkill:n(313).default})},339:function(t,e,n){"use strict";n.r(e);var r={name:"AboutPage",layout:"CustomLayout"},l=n(19),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("about-component")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutComponent:n(322).default})}}]);