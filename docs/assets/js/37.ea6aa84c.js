(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{241:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"전역-객체-모킹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전역-객체-모킹"}},[t._v("#")]),t._v(" 전역 객체 모킹")]),t._v(" "),a("p",[a("code",[t._v("vue-test-utils")]),t._v("는 테스트의 test basis로 "),a("code",[t._v("Vue.prototype")]),t._v("에 부착한 전역 객체를 mock 하거나, 모든 테스트의 default mock을 설정하는 간단한 방법을 제공합니다.")]),t._v(" "),a("p",[t._v("예제에서 사용한 테스트는 "),a("a",{attrs:{href:"https://github.com/lmiller1990/vue-testing-handbook/blob/master/demo-app/tests/unit/Bilingual.spec.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("에서 찾을 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"mocks-마운팅-옵션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mocks-마운팅-옵션"}},[t._v("#")]),t._v(" mocks 마운팅 옵션")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vue-test-utils.vuejs.org/api/options.html#mocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("mocks 마운팅 옵션"),a("OutboundLink")],1),t._v("은 "),a("code",[t._v("Vue.prototype")]),t._v("에 부착한 임의의 프로퍼티의 값을 설정하는 한 가지 방법입니다. 일반적으로 아래의 내용을 포함합니다.")]),t._v(" "),a("ul",[a("li",[t._v("Vuex를 위한 "),a("code",[t._v("$store")])]),t._v(" "),a("li",[t._v("Vue Router를 위한 "),a("code",[t._v("$router")])]),t._v(" "),a("li",[t._v("Vue-i18n을 위한 "),a("code",[t._v("$t")])])]),t._v(" "),a("p",[t._v("이 외에도 많은 것들이 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"vue-i18n-예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-i18n-예제"}},[t._v("#")]),t._v(" vue-i18n 예제")]),t._v(" "),a("p",[t._v("Vuex와 Vue Router에서 사용하는 방법은 각각의 세션("),a("a",{attrs:{href:"https://lmiller1990.github.io/vue-testing-handbook/vuex-in-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex"),a("OutboundLink")],1),t._v("와 "),a("a",{attrs:{href:"https://lmiller1990.github.io/vue-testing-handbook/vue-router.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),a("OutboundLink")],1),t._v(")에서 얘기했습니다. "),a("a",{attrs:{href:"https://github.com/kazupon/vue-i18n",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n"),a("OutboundLink")],1),t._v(" 예제를 보겠습니다. "),a("code",[t._v("createLocalVue")]),t._v("를 사용하고, 각 테스트에 "),a("code",[t._v("vue-i18n")]),t._v("을 설치할 수도 있지만, 빠르게 무거워지고 많은 보일러플레이트를 생성할 수 있습니다. 첫 번째는 "),a("code",[t._v("vue-i18n")]),t._v("을 사용하는  "),a("code",[t._v("<Bilingual>")]),t._v(" 컴포넌트입니다.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n    {{ $t("helloWorld") }}\n  '),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bilingual"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("code",[t._v("vue-i18n")]),t._v("은 다른 파일에서 사용할 번역문을 명시하고, "),a("code",[t._v("$t")]),t._v("로 해당 번역문을 참조하는 방식으로 동작합니다. 이 테스트의 목적을 위해서 번역문 파일이 어떻게 생겼는지는 중요하지 않습니다만, 컴포넌트를 테스트하기 위해서 아래와 같은 예제를 만들겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    helloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ja"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    helloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"こんにちは、世界！"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("locale을 바탕으로 올바른 번역문을 렌더합니다. 어떤 것도 모킹(mocking) 하지 않고, 테스트에서 컴포넌트를 렌더 해보겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" shallowMount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/test-utils"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Bilingual "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/components/Bilingual.vue"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bilingual"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"성공적으로 렌더한다"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shallowMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bilingual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("yarn test:unit")]),t._v("으로 이 테스트를 실행하면, 거대한 스택 트레이스(stack trace)를 던집니다. 결과를 주의 깊게 살펴보면, 아래와 같은 메시지를 볼 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[Vue warn]: Error in config.errorHandler: "TypeError: _vm.$t is not a function"\n')])])]),a("p",[a("code",[t._v("vue-i18n")]),t._v("을 설치하지 않았기 때문입니다. 그래서 전역 "),a("code",[t._v("$t")]),t._v(" 메서드는 존재하지 않습니다. "),a("code",[t._v("mocks")]),t._v(" 마운팅 옵션을 사용해서 해당 메서드를 mock 해보겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" shallowMount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/test-utils"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Bilingual "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/components/Bilingual.vue"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bilingual"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"성공적으로 렌더한다"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shallowMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bilingual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" msg\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("이제 테스트가 통과합니다! "),a("code",[t._v("mocks")]),t._v(" 옵션에는 많은 사용 방법이 있습니다. 제가 제일 많이 사용하는 방법은, 위에서 언급한 세 가지 패키지에서 제공하는 전역 객체를 모킹 하는 것입니다.")]),t._v(" "),a("h2",{attrs:{id:"config을-사용해서-default-mocks-설정하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config을-사용해서-default-mocks-설정하기"}},[t._v("#")]),t._v(" config을 사용해서 default mocks 설정하기")]),t._v(" "),a("p",[t._v("때로는 mock을 위한 기본값을 가지고 싶어서, 테스트의 test basis로 mock을 생성하고 싶지 않을 수도 있습니다. "),a("code",[t._v("vue-test-utils")]),t._v("에서 제공하는 "),a("a",{attrs:{href:"https://vue-test-utils.vuejs.org/api/#config",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),a("OutboundLink")],1),t._v(" API를 사용해서 이 일을 할 수 있습니다. "),a("code",[t._v("vue-i18n")]),t._v(" 예제를 확장해 보겠습니다. 아래와 같이 설정함으로써 어디서든지 default mocks를 설정할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueTestUtils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/test-utils"')]),t._v("\n\nVueTestUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mock"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default Mock Value"')]),t._v("\n")])])]),a("p",[t._v("이 가이드를 위한 데모 프로젝트는 Jest를 사용하고 있습니다. 그래서 "),a("code",[t._v("jest.init.js")]),t._v("에서 기본 mock을 선언하겠습니다. 해당 mock은 테스트가 자동으로 실행되기 전에 불러와 집니다. 또한 예제인 translations 객체를 앞에서 가져와서 mock 구현에 사용하겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueTestUtils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/test-utils"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" translations "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/translations.js"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" locale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),t._v("\n\nVueTestUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$t"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" translations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("locale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("이제 모킹한 "),a("code",[t._v("$t")]),t._v(" 함수를 사용했음에도 불구하고 진짜 번역문을 렌더합니다. 이번에는 "),a("code",[t._v("wrapper.html()")]),t._v("에 "),a("code",[t._v("console.log")]),t._v("를 사용해서 테스트를 다시 실행하겠습니다. 그리고 "),a("code",[t._v("mocks")]),t._v(" 마운팅 옵션을 제거하겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bilingual"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"성공적으로 렌더한다"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shallowMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bilingual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("테스트가 통과합니다. 그리고 아래와 같은 마크업이 렌더됩니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div class="hello">\n  Hello world!\n</div>\n')])])]),a("p",[t._v("Vuex를 테스트하기 위해 "),a("code",[t._v("mocks")]),t._v("를 사용하는 방법은 "),a("a",{attrs:{href:"https://lmiller1990.github.io/vue-testing-handbook/vuex-in-components.html#using-a-mock-store",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("서 읽어볼 수 있습니다. 테크닉 자체는 같습니다.")]),t._v(" "),a("h2",{attrs:{id:"결론"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#결론"}},[t._v("#")]),t._v(" 결론")]),t._v(" "),a("p",[t._v("이 가이드는 아래의 내용에 관해 얘기했습니다.")]),t._v(" "),a("ul",[a("li",[t._v("테스트의 test basis로 전역 객체를 모킹하기 위한 "),a("code",[t._v("mocks")]),t._v(" 사용하기")]),t._v(" "),a("li",[t._v("default mock을 설정하기 위한 "),a("code",[t._v("config.mocks")]),t._v(" 사용하기")])])])}),[],!1,null,null,null);s.default=e.exports}}]);