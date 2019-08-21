(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{170:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),s("p",[t._v("or with npm:")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),s("p",[t._v("Congratulations, you just ran your first passing test!")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("We ran an existing test that came with the project. Let's get our hands dirty, writing our own component, and a test. Traditionally when doing TDD, you write the failing test first, then implement the code which allows the test to pass. For now, we will write the component first.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),s("p",[t._v("A full list of matchers is available in the "),s("a",{attrs:{href:"http://jestjs.io/docs/en/expect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest documentation"),s("OutboundLink")],1),t._v(". "),s("code",[t._v("vue-test-utils")]),t._v(" doesn't include any matchers - the ones Jest provides are more than enough. We want to compare the text from "),s("code",[t._v("Greeting")]),t._v(". We could write:")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing-vue-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-vue-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing vue-cli")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("vue-test-utils")]),this._v(" is the official testing library for Vue, and will be used throughout the guide. It runs in both a browser and Node.js environment, and works with any test runner. We will be running our tests in a Node.js environment throughout this guide.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("vue-cli")]),this._v(" is the easiest way to get started. It will set up a project, as well as configure Jest, a popular testing framework. Install it by running:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("yarn global add @vue/cli\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install -g @vue/cli\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a new project by running "),e("code",[this._v("vue create [project-name]")]),this._v('. Choose "Manually select features" and "Unit Testing", and "Jest" for the test runner.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Once the installation finishes, "),e("code",[this._v("cd")]),this._v(" into the project and run "),e("code",[this._v("yarn test:unit")]),this._v(". If everything went well, you should see:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" PASS  tests/unit/HelloWorld.spec.js\n  HelloWorld.vue\n    ✓ renders props.msg when passed (26ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        2.074s\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"writing-your-first-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-your-first-test","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing your first test")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We don't need "),e("code",[this._v("src/components/HelloWorld.vue")]),this._v(" or "),e("code",[this._v("tests/unit/HelloWorld.spec.js")]),this._v(" anymore, so you can delete those.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-the-greeting-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-greeting-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating the "),e("code",[this._v("Greeting")]),this._v(" component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a "),e("code",[this._v("Greeting.vue")]),this._v(" file in "),e("code",[this._v("src/components")]),this._v(". Inside "),e("code",[this._v("Greeting.vue")]),this._v(", add the following:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"writing-the-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-the-test","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing the test")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Greeting")]),this._v(" has only one responsibility - to render the "),e("code",[this._v("greeting")]),this._v(" value. The strategy will be:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("render the component with "),e("code",[this._v("mount")])]),this._v(" "),e("li",[this._v('assert that the component\'s text contains "Vue and TDD"')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Create a "),s("code",[t._v("Greeting.spec.js")]),t._v(" inside "),s("code",[t._v("tests/unit")]),t._v(". Inside, import "),s("code",[t._v("Greeting.vue")]),t._v(", as well as "),s("code",[t._v("mount")]),t._v(", and add the outline of the test:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("import { mount } from '@vue/test-utils'\nimport Greeting from '@/components/Greeting.vue'\n\ndescribe('Greeting.vue', () => {\n  it('renders a greeting', () => {\n\n  })\n})\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("There are different syntaxes used for TDD, we will use the commonly seen "),s("code",[t._v("describe")]),t._v(" and "),s("code",[t._v("it")]),t._v(" syntax that comes with Jest. "),s("code",[t._v("describe")]),t._v(" generally outlines what the test is about, in this case "),s("code",[t._v("Greeting.vue")]),t._v(". "),s("code",[t._v("it")]),t._v(" represents a single piece of responsibility that the subject of the test should fulfill. As we add more features to the component, we add more "),s("code",[t._v("it")]),t._v(" blocks.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now we should render the component with "),e("code",[this._v("mount")]),this._v(". The standard practice is to assign the component to a variable called "),e("code",[this._v("wrapper")]),this._v(". We will also print the output, to make sure everything is running correctly:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"running-the-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-the-test","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the test")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Run the test by typing "),e("code",[this._v("yarn test:unit")]),this._v(" into your terminal. Any file in the "),e("code",[this._v("tests")]),this._v(" directory ending with "),e("code",[this._v(".spec.js")]),this._v(" is automatically executed. If everything went well, you should see:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (27ms)\n\nconsole.log tests/unit/Greeting.spec.js:7\n  <div>\n    Vue and TDD\n  </div>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We can see the markup is correct, and the test passes. The test is passing because there was no failure - this test can never fail, so it is not very useful yet. Even if we change "),e("code",[this._v("Greeting.vue")]),this._v(" and delete the "),e("code",[this._v("greeting")]),this._v(" from the template, it will still pass. Let's change that.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"making-assertions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#making-assertions","aria-hidden":"true"}},[this._v("#")]),this._v(" Making assertions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We need to make an assertion to ensure the component is behaving correctly. We can do that using Jest's "),e("code",[this._v("expect")]),this._v(" API. It looks like this: "),e("code",[this._v("expect(result).to [matcher] (actual)")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Matchers")]),this._v(" are methods to compare values and objects. For example:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("but "),e("code",[this._v("vue-test-utils")]),this._v(" has an even better way to get the markup - "),e("code",[this._v("wrapper.text")]),this._v(". Let's finish the test off:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Greeting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Greeting.vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greeting.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'renders a greeting'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toMatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We don't need the "),e("code",[this._v("console.log")]),this._v(" anymore, so you can delete that. Run the tests with "),e("code",[this._v("yarn unit:test")]),this._v(", and if everything went well you should get:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (15ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        1.477s, estimated 2s\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Looking good. But you should always see a test fail, then pass, to make sure it's really working. In traditional TDD, you would write the test before the actual implementation, see it fail, then use the failing errors to guide your code. Let's make sure this test is really working. Update "),e("code",[this._v("Greeting.vue")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue without TDD"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("And now run the test with "),e("code",[this._v("yarn test:unit")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('FAIL  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✕ renders a greeting (24ms)\n\n● Greeting.vue › renders a greeting\n\n  expect(received).toMatch(expected)\n\n  Expected value to match:\n    "Vue and TDD"\n  Received:\n    "Vue without TDD"\n\n     6 |     const wrapper = mount(Greeting)\n     7 |\n  >  8 |     expect(wrapper.text()).toMatch("Vue and TDD")\n       |                            ^\n     9 |   })\n    10 | })\n    11 |\n\n    at Object.<anonymous> (tests/unit/Greeting.spec.js:8:28)\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Jest gives us good feedback. We can see the expected and actual result, as well as on which line the expectation failed. The test did fail, as expected. Revert "),e("code",[this._v("Greeting.vue")]),this._v(" and make sure the test is passing again.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Next we will look at the two methods "),e("code",[this._v("vue-test-utils")]),this._v(" provides to render components: "),e("code",[this._v("mount")]),this._v(" and "),e("code",[this._v("shallowMount")]),this._v(".")])}],!1,null,null,null);e.default=a.exports}}]);