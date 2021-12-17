(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{370:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"apollo-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apollo-client"}},[t._v("#")]),t._v(" Apollo Client")]),t._v(" "),s("ul",[s("li",[t._v("Each query will live inside of the folder gql/queries")]),t._v(" "),s("li",[t._v("Each mutation will live inside of the folder gql/mutations")]),t._v(" "),s("li",[t._v("When we're doing the query or mutation declaration, name should be uppercase, as follows:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET_USER_INFORMATION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gql"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n    query {\n        me {\n        accessToken\n        id\n        firstName\n        lastName\n        phoneNumber\n        contactEmail\n        profilePhoto {\n            id\n            url\n        }\n        agent {\n            completedStages {\n            totalStages\n            incompleteStages\n            completeStages\n            }\n        }\n        vendor {\n            id\n            email\n            businessName\n        }\n        }\n    }\n    ")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h1",{attrs:{id:"naming-of-querys-or-mutations-when-we-call-them-in-our-functional-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#naming-of-querys-or-mutations-when-we-call-them-in-our-functional-component"}},[t._v("#")]),t._v(" Naming of querys or mutations when we call them in our functional component:")]),t._v(" "),s("ul",[s("li",[t._v('The destructuring of properties, should follow the pattern of for example "data: invitationsData", "loading: loadingInvitationsData", "error: errorInvitationsData"')])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bad")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET_USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//good")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" userData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loading"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" loadingUserData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" errorUserData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET_USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("If it's a lazy query we can do something like:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fetchUserData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" userData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loading"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" loadingUserData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" errorUserData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useLazyQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET_USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);