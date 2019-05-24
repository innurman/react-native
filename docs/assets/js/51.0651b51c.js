(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{107:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"style-dimensions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#style-dimensions","aria-hidden":"true"}},[e._v("#")]),e._v(" Style & Dimensions")]),e._v(" "),r("p",[e._v("React Native 앱 개발 시 사용되는 스타일 방법과 수치 설정에 대해 알아봅니다.")]),e._v(" "),r("h2",{attrs:{id:"스타일"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스타일","aria-hidden":"true"}},[e._v("#")]),e._v(" 스타일")]),e._v(" "),r("p",[e._v("React Native는 JavaScript를 사용해 애플리케이션의 스타일을 정의합니다. React Native의 모든 컴포넌트는 "),r("code",[e._v("style")]),e._v(" 속성을 가질 수 있으며,\nCSS와 유사한 문법과 "),r("a",{attrs:{href:"https://facebook.github.io/react-native/docs/colors",target:"_blank",rel:"noopener noreferrer"}},[e._v("컬러 값"),r("OutboundLink")],1),e._v("을 사용할 수 있습니다. 단, JavaScript를\n사용해 스타일을 기술하므로 "),r("code",[e._v("background-color")]),e._v(" 표기법 대신 "),r("code",[e._v("backgroundColor")]),e._v("와 같은 표기법을 사용해야 합니다.")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("React Native는 CSS에서 지원하지 않는 "),r("strong",[e._v("#rgba, #rrggbbaa")]),e._v(" 값 또한 지원합니다.")]),e._v(" "),r("iframe-wrapper",{attrs:{src:"https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%0A%0Aexport%20default%20function%20StyleDimension()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20flexDirection%3A%20'row'%7D%7D%3E%0A%20%20%20%20%20%20%3CView%20%0A%20%20%20%20%20%20%20%20className%3D%22side-left%22%20%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20flex%3A%201%2C%20backgroundColor%3A%20'%233d5afe'%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20%0A%20%20%20%20%20%20%20%20className%3D%22side-right%22%20%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20flex%3A%201%2C%20backgroundColor%3A%20'%233d5afe88'%20%7D%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%0A%7D"}})],1),e._v(" "),r("h3",{attrs:{id:"스타일-배열과-상속"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스타일-배열과-상속","aria-hidden":"true"}},[e._v("#")]),e._v(" 스타일 배열과 상속")]),e._v(" "),r("p",[r("code",[e._v("style")]),e._v(" 속성에 설정되는 값은 JavaScript 객체입니다. 단순한 스타일 코드일 경우 React Native 컴포넌트 요소에 인라인으로 설정할 수 있습니다. "),r("code",[e._v("style")]),e._v(" 속성은 객체 뿐만 아니라, 배열을 사용해 하나 이상의 스타일을 설정할 수도 있습니다. 배열의 마지막 아이템 스타일이 우선하므로 스타일 상속을 구현할 수도 있습니다.")]),e._v(" "),r("iframe-wrapper",{attrs:{src:"https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%0A%0Aexport%20default%20function%20StyleDimension()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%200.5%20%7D%7D%3E%0A%20%20%20%20%20%20%7B%2F*%20%EC%8A%A4%ED%83%80%EC%9D%BC%20%EB%B0%B0%EC%97%B4%3A%20%EB%A7%88%EC%A7%80%EB%A7%89%20%EC%95%84%EC%9D%B4%ED%85%9C%20%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%B4%20%EC%9A%B0%EC%84%A0%20(%EC%83%81%EC%86%8D%20%EA%B5%AC%ED%98%84)%20*%2F%7D%0A%20%20%20%20%20%20%3CView%20style%3D%7B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20flex%3A%201%2C%20backgroundColor%3A%20'%23494576'%20%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7B%20flex%3A%200.5%2C%20width%3A%20'50%25'%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%0A%7D"}}),e._v(" "),r("h3",{attrs:{id:"스타일-참조"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스타일-참조","aria-hidden":"true"}},[e._v("#")]),e._v(" 스타일 참조")]),e._v(" "),r("p",[e._v("스타일 객체가 복잡해지면 관리가 어려우므로 "),r("a",{attrs:{href:"https://facebook.github.io/react-native/docs/stylesheet#create",target:"_blank",rel:"noopener noreferrer"}},[e._v("StyleSheet.create()"),r("OutboundLink")],1),e._v("를 사용해 여러 스타일을 모아 코드를 클린하게 관리할 수 있습니다.")]),e._v(" "),r("iframe-wrapper",{attrs:{src:"https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%0A%0A%2F%2F%20%EC%8A%A4%ED%83%80%EC%9D%BC%20%EC%B0%B8%EC%A1%B0%20%EC%83%9D%EC%84%B1(%EA%B0%9D%EC%B2%B4)%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%200.25%20%7D%2C%0A%20%20wrapper%3A%20%7B%20flex%3A%201%2C%20flexDirection%3A%20'row'%20%7D%2C%0A%20%20box1%3A%20%7B%20backgroundColor%3A%20'%2318dfc1'%20%7D%2C%0A%20%20box2%3A%20%7B%20backgroundColor%3A%20'%23002b36'%20%7D%2C%0A%20%20box3%3A%20%7B%20backgroundColor%3A%20'%23dee1e6'%20%7D%2C%0A%20%20third%3A%20%7B%20flex%3A%200.3333%2C%20height%3A%2060%20%7D%2C%0A%7D)%0A%0Aexport%20default%20function%20StyleDimension()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.wrapper%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box1%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.third%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box2%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.third%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box3%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.third%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%0A%7D"}}),e._v(" "),r("h2",{attrs:{id:"크기-및-치수"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#크기-및-치수","aria-hidden":"true"}},[e._v("#")]),e._v(" 크기 및 치수")]),e._v(" "),r("p",[e._v("React Native 컴포넌트의 높이, 너비를 설정해 크기를 조정할 수 있습니다.")]),e._v(" "),r("h3",{attrs:{id:"고정-값-fixed-dimensions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#고정-값-fixed-dimensions","aria-hidden":"true"}},[e._v("#")]),e._v(" 고정 값 (Fixed Dimensions)")]),e._v(" "),r("p",[e._v("컴포넌트 크기를 설정하는 가장 간단한 방법은 높이("),r("code",[e._v("height")]),e._v("), 너비("),r("code",[e._v("width")]),e._v(")를 설정하는 것입니다.\nReact Native의 모든 치수는 단위가 없으며 장치 독립적인 픽셀("),r("code",[e._v("px")]),e._v(")을 나타냅니다.")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("장치 독립적 픽셀이란?")]),e._v(" "),r("p",[e._v("웹(px), iOS(pt), Android(dp)와 같이 각 플랫폼 마다 다른 수치를 사용하므로 크기 설정에 어려움이 생깁니다.\n뿐만 아니라 장치 마다 제각각 픽셀 밀도(Pixel Density)가 달라 수치 적용은 더더욱 어렵고 혼란이 가중됩니다.\n이러한 문제를 해결하려면 장치 밀도와 상관 없이 독립적으로 적용되는 픽셀을 적용해야 합니다.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("React Native")]),e._v(" "),r("th",[e._v("Web")]),e._v(" "),r("th",[e._v("iOS")]),e._v(" "),r("th",[e._v("Android")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("44")]),e._v(" "),r("td",[e._v("44px")]),e._v(" "),r("td",[e._v("44pt")]),e._v(" "),r("td",[e._v("44dp")])])])])]),e._v(" "),r("p",[e._v("이 방법은 화면 크기에 상관없이 항상 정확하게 같은 크기로 그려져야 하는 컴포넌트에 일반적으로 사용됩니다.")]),e._v(" "),r("iframe-wrapper",{attrs:{src:"https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%0A%0Aexport%20default%20function%20StyleDimension()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BbackgroundColor%3A%20'%23162442'%2C%20width%3A%20150%2C%20height%3A%2040%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BbackgroundColor%3A%20'%2327beff'%2C%20width%3A%20100%2C%20height%3A%2080%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BbackgroundColor%3A%20'%233bb98f'%2C%20width%3A%2050%2C%20height%3A%20120%7D%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%0A%7D"}}),e._v(" "),r("h3",{attrs:{id:"비율-값-flex-dimensions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#비율-값-flex-dimensions","aria-hidden":"true"}},[e._v("#")]),e._v(" 비율 값 (Flex Dimensions)")]),e._v(" "),r("p",[e._v("컴포넌트의 크기를 사용 가능한 공간을 기준으로 동적으로 확장(grow), 축소(shrink) 하려면 "),r("code",[e._v("flex")]),e._v(" 속성을 사용합니다.\n일반적으로 사용 가능한 공간을 가득 채우기 위해 "),r("code",[e._v("flex: 1")]),e._v("을 컴포넌트에 설정합니다. 만약 형제 관계의 컴포넌트 또한\n동일한 설정이 되어 있을 경우는 사용 가능한 공간을 양분하게 됩니다. "),r("code",[e._v("flex")]),e._v("에 설정된 값에 따라 형제 간 공간을 차지하는 비율이\n달라지게 됩니다. (아래 예시 참고)")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("View 컴포넌트의 "),r("code",[e._v("flex")]),e._v(" 기본 값은 "),r("code",[e._v("0")]),e._v("입니다. 별도로 "),r("code",[e._v("width")]),e._v(", "),r("code",[e._v("height")]),e._v(" 설정이 없는 경우 화면에 표시되지 않습니다.")])]),e._v(" "),r("p",[r("code",[e._v("flex")]),e._v(" 속성 값은 공간을 비율에 맞춰 나눠 크기를 결정합니다. "),r("code",[e._v("10:35:55")]),e._v("는 "),r("code",[e._v("1:3.5:5.5")]),e._v("와 같습니다. 즉,\n"),r("code",[e._v("flex")]),e._v(" 값을 "),r("code",[e._v("1")]),e._v(" 또는 "),r("code",[e._v("100")]),e._v("을 설정하더라도 비율 대비 공간 크기가 결정되므로 값 자체가 가진 크기가 중요하지는 않습니다.\n결과적으로 "),r("code",[e._v("1:3")]),e._v(" 이나 "),r("code",[e._v("100:300")]),e._v(" 이나 비율은 동일하기 때문입니다.")]),e._v(" "),r("iframe-wrapper",{attrs:{src:"https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20alignCenterMiddle%3A%20%7B%20justifyContent%3A%20'center'%2C%20alignItems%3A%20'center'%20%7D%2C%0A%7D)%0A%0Aexport%20default%20function%20StyleDimension()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%7D%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.alignCenterMiddle%2C%20%7Bflex%3A%2010%2C%20backgroundColor%3A%20'%23162442'%2C%20color%3A%20'%23fff'%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E10%25%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.alignCenterMiddle%2C%20%7Bflex%3A%2035%2C%20backgroundColor%3A%20'%2327beff'%2C%20color%3A%20'%23fff'%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E35%25%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.alignCenterMiddle%2C%20%7Bflex%3A%2055%2C%20backgroundColor%3A%20'%233bb98f'%2C%20color%3A%20'%23fff'%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E55%25%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%0A%7D"}}),e._v(" "),r("h2",{attrs:{id:"스타일-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스타일-api","aria-hidden":"true"}},[e._v("#")]),e._v(" 스타일 API")]),e._v(" "),r("p",[e._v("React Native API 중 스타일과 관련된 API는 "),r("strong",[e._v("View Style Props")]),e._v(" 입니다.\n설정 가능한 속성이 많아 일부는 하위 카테고리로 분류됩니다.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://facebook.github.io/react-native/docs/view-style-props",target:"_blank",rel:"noopener noreferrer"}},[e._v("View Style Props"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("  ⤷ "),r("a",{attrs:{href:"https://facebook.github.io/react-native/docs/layout-props",target:"_blank",rel:"noopener noreferrer"}},[e._v("Layout Props"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("  ⤷ "),r("a",{attrs:{href:"https://facebook.github.io/react-native/docs/shadow-props",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shadow Props"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("  ⤷ "),r("a",{attrs:{href:"https://facebook.github.io/react-native/docs/transforms",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transforms"),r("OutboundLink")],1)])])],1)},[],!1,null,null,null);t.default=o.exports}}]);