/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"p > b\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"AdBlock\\\")]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"devtoolsDetector\"]]}"],["{\"selector\":\"#root > div > div\",\"tasks\":[[\"has-text\",\"Get one more story in your member\"]]}","{\"selector\":\".overlay\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Welcome back\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"write a response\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Publish now\"]]}]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select:\"]]}"],["{\"selector\":\"[id=\\\"toggle_notification_notification-ad-blocker\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".pull-right.inline-gallery-container\",\"tasks\":[[\"has-text\",\"Post this\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"debugger\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".ct_warn\",\"tasks\":[[\"has-text\",\"adblock\"]]}"],["{\"selector\":\"div[style] > div > .userBanner--red\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".et_pb_row_1_tb_body\",\"tasks\":[[\"has-text\",\"Sign up for our weekly newsletter\"]]}","{\"selector\":\".et_pb_section\",\"tasks\":[[\"has-text\",\"Sign up for our weekly newsletter\"]]}"],["{\"selector\":\"div[class^=\\\"-_\\\"] > form\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"button[type=\\\"submit\\\"]\",\"action\":[\"remove-attr\",\"disabled\"]}"],["{\"selector\":\".js-dismissable-hero\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".bg-gray-50\",\"tasks\":[[\"has-text\",\"Fake news\"]]}","{\"selector\":\".hidden\",\"tasks\":[[\"has-text\",\"Fake news\"]]}"],["{\"selector\":\".bg-gray-100\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.onmousedown\"]]}"],["{\"selector\":\"div[oncopy]\",\"action\":[\"remove-attr\",\"/oncopy|oncut|onpaste/\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/addLinkToCopy/i\"]]}"],["{\"selector\":\".sidebar-form\",\"tasks\":[[\"has-text\",\"Sign Up For Our Newsletter\"]]}"],["{\"selector\":\".callout\",\"tasks\":[[\"has-text\",\"inbox\"]]}"],["{\"selector\":\".col1span3\",\"tasks\":[[\"has-text\",\"Newsletters\"]]}"],["{\"selector\":\".p-4.bg-\\\\[\\\\#F5F5F5\\\\]\",\"tasks\":[[\"has-text\",\"Subscribe to our newsletter\"]]}"],["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has-text\",\"Subscribe to our Newsletter\"]]}"],["{\"selector\":\".has-primary-dark-background-color\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".bg-purple-50\",\"tasks\":[[\"has-text\",\"Fan of great business\"]]}","{\"selector\":\".md\\\\:px-2.py-10\",\"tasks\":[[\"has-text\",\"Subscribe to the newsletter\"]]}"],["{\"selector\":\"strong > .link--button\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".bg-primary-dark\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"body[class^=\\\"scroll-block--is-blocked\\\"]\",\"action\":[\"remove-class\",\"/scroll-block--is-blocked/\"]}"],["{\"selector\":\".px20.pb32\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".section > .wrapper\",\"tasks\":[[\"has-text\",\"Newsletters\"]]}"],["{\"selector\":\"#home-section3\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\"#modal_login\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[contains(text(),\\\"Adblock\\\")]/..\"]]}"],["{\"selector\":\".bottom-0.fixed\",\"tasks\":[[\"has-text\",\"weekly newsletters\"]]}","{\"selector\":\".lg\\\\:p-\\\\[16px\\\\]\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Using an ad blocker?\"],[\"upward\",3]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/-moz-user-select:none|@media print/\"]]}"],["{\"selector\":\".ReactModalPortal\",\"tasks\":[[\"has-text\",\"mobile\"]]}"],["{\"selector\":\".p-6.justify-center\",\"tasks\":[[\"has-text\",\"Daily newsletter\"]]}"],["{\"selector\":\".order-lg-2\",\"tasks\":[[\"has-text\",\"Sign up to our newsletter\"]]}","{\"selector\":\".sidebar-sticky\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".forbidden_select\",\"action\":[\"remove-class\",\"forbidden_select\"]}"],["{\"selector\":\".comp > strong\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".swal2-shown\",\"action\":[\"remove-class\",\"swal2-shown\"]}"],["{\"selector\":\".fbUserStory\",\"tasks\":[[\"has-text\",\"Popular Across Facebook\"]]}","{\"selector\":\".userContentWrapper\",\"tasks\":[[\"has-text\",\"Popular Across Facebook\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"-moz-none\"]]}"],["{\"selector\":\".pb-1.gap-4\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}","{\"selector\":\".pb-6\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\"[oncontextmenu=\\\"return false;\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\".td-block-title.block-title\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\".has-senary-background-color\",\"tasks\":[[\"has-text\",\"Email\"]]}","{\"selector\":\".has-tertiary-background-color\",\"tasks\":[[\"has-text\",\"Week\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"blocking software\\\")]/../../..\"]]}","{\"selector\":\".advanced.embed-media\",\"tasks\":[[\"has-text\",\"Get a daily look\"]]}"],["{\"selector\":\".bg-gray-100\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\"script[id=\\\"jquery-core-js-after\\\"]\",\"tasks\":[[\"has-text\",\"e.preventDefault();\"]]}"],["{\"selector\":\".w-full\",\"tasks\":[[\"has-text\",\"Mailing\"]]}"],["{\"selector\":\"h3.section_name\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".wp-block-group-is-layout-flow\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\"html.no-scroll\",\"action\":[\"remove-class\",\"no-scroll\"]}"],["{\"selector\":\".d-lg-block.sp-module\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}","{\"selector\":\"body > div[id]\",\"action\":[\"style\",\"visibility: hidden !important\"],\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}]]}"],["{\"selector\":\".t-bg-surface-zero.t-p-6\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"contextmenu\"]}"],["{\"selector\":\".pb-6.border-b\",\"tasks\":[[\"has-text\",\"Signup\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"stopRefreshSite\"]]}"],["{\"selector\":\"p > em\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".p-8.bg-dynamic-primary\",\"tasks\":[[\"has-text\",\"straight to your inbox\"]]}"],["{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select: none;\"]]}"],["{\"selector\":\".shadow-card.p-8\",\"tasks\":[[\"has-text\",\"Laravel Newsletter\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"unselectable\"]]}"],["{\"selector\":\".pt-\\\\[60px\\\\]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"[data-pw-desk]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".has-border-color.wp-block-columns\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\"#MainModule + div[class] > div[style^=\\\"width\\\"] > div > i[data-icon-name=\\\"OutlookLogo\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}"],["{\"selector\":\".fxsEzN\",\"tasks\":[[\"has-text\",\"Sign up to our newsletter\"]]}"],["{\"selector\":\"section.sidebar-section\",\"tasks\":[[\"has-text\",\"email\"]]}"],["{\"selector\":\".under-map-wrapper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body[oncontextmenu=\\\"return!1\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/media print|user-select:/\"]]}"],["{\"selector\":\".sidebar-item-container\",\"tasks\":[[\"has-text\",\"Email me\"]]}"],["{\"selector\":\".mobile-only-on-col-ab\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".bg-gray-50\",\"tasks\":[[\"has-text\",\"Want to stay informed\"]]}"],["{\"selector\":\".border-brand-pink\",\"tasks\":[[\"has-text\",\"inbox\"]]}"],["{\"selector\":\"div[class=\\\"container_box content_box\\\"] > div:only-child > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",4]]}","{\"selector\":\"div[class=\\\"container_box content_box\\\"] > div[id][class] > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\"div[id][class][style^=\\\"position:\\\"] > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".md\\\\:decorative-horizontal-lines\",\"tasks\":[[\"has-text\",\"subscribe\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"/oncopy|oncut|onpaste/\"]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\".confirm\",\"tasks\":[[\"has-text\",\"AdBlocker\"]]}"],["{\"selector\":\"#custom_html-12\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\".p1\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"[bundlename$=\\\"nsfw_blocking_modal\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"xpromo-nsfw-blocking-container\",\"tasks\":[[\"shadow\",\".prompt:has(> .viewInApp)\"]]}"],["{\"selector\":\"a:has(shreddit-player)\",\"action\":[\"remove-attr\",\"href\"]}","{\"selector\":\"shreddit-player\",\"action\":[\"remove-attr\",\"autoplay\"]}"],["{\"selector\":\".has-profile.post:first-child\",\"tasks\":[[\"has-text\",\"/adblock/i\"]]}"],["{\"selector\":\".border.rounded.p-2\",\"tasks\":[[\"has-text\",\"news letter\"]]}"],["{\"selector\":\"form[id=\\\"tfnewsearch\\\"]\",\"action\":[\"remove-attr\",\"onsubmit\"]}"],["{\"selector\":\"[style=\\\"text-align:center\\\"]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".bg-light\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"contextmenu\"]]}"],["{\"selector\":\"[oncopy=\\\"return false\\\"]\",\"action\":[\"remove-attr\",\"oncopy\"]}"],["{\"selector\":\".wp-block-group__inner-container\",\"tasks\":[[\"has-text\",\"Discover\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"copyprotect\"]]}"],["{\"selector\":\"[data-text-as-pseudo-element*=\\\" push \\\"]\",\"tasks\":[[\"upward\",\"[role]\"],[\"upward\",\"[role]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\":not(input):not(textarea)\"]]}"],["{\"selector\":\".ReactModal__Overlay--after-open\",\"tasks\":[[\"has-text\",\"/Premium|Try 7 days/\"]]}","{\"selector\":\".ReactModal__Overlay--after-open:has(iframe[srcdoc], img)\",\"tasks\":[[\"has-text\",\"signing up\"]]}","{\"selector\":\"main > div[class*=\\\"-\\\"] > div[class^=\\\"_\\\"] > div[class^=\\\"_\\\"] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"_\\\"]\",\"tasks\":[[\"has-text\",\"Do your part to support us\"]]}]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"/onselectstart|oncopy|oncontextmenu/\"]}"],["{\"selector\":\".wp-block-quote\",\"tasks\":[[\"has-text\",\"inbox daily\"]]}"],["{\"selector\":\"*\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"innerText\"]]}"],["{\"selector\":\".LostInventoryMessage_root__YllYq\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".wp-block-group\",\"tasks\":[[\"has-text\",\"Subscribe to our Newsletter\"]]}"],["{\"selector\":\"[data-testid=\\\"contributions-liveblog-epic\\\"]\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"preventDefault\"]]}"],["{\"selector\":\".bg-soft-teal\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".rounded-3.px-5\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".dark-theme-dialog__dialogBody___106Di\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"div[tabindex=\\\"0\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"spath\",\":has([href=\\\"/signup\\\"])\"]]}"],["{\"selector\":\".rounded-md.md\\\\:p-8.p-5.shadow-light\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".duet--article--highlight\",\"tasks\":[[\"has-text\",\"Sign up here\"]]}"],["{\"selector\":\".no-select\",\"action\":[\"remove-class\",\"no-select\"]}"],["{\"selector\":\".has-medium-font-size\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".mt-\\\\[2rem\\\\]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Winter-Update\"],[\"upward\",1]]}"],["{\"selector\":\".promo-card-primary\",\"tasks\":[[\"has-text\",\"Check your inbox\"]]}"],["{\"selector\":\".textwidget > .textwidget\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"oncontextmenu\"]]}"],["{\"selector\":\"[href=\\\"/about#support\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"DisableDevtool\"]]}"],["{\"selector\":\".loading-text\",\"action\":[\"remove-class\",\"loading-text\"]}"],["{\"selector\":\".v-card.v-card--flat\",\"tasks\":[[\"has-text\",\"Sign up to receive\"]]}"],["{\"selector\":\".mx-auto.container\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"body > div:nth-of-type(1) > div\",\"tasks\":[[\"has-text\",\"adblocker\"]]}"],["{\"selector\":\".around-desktop-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.carbonLoaded\"]]}"],["{\"selector\":\".adbanner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#side > ins.adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.onkeydown\"]]}"],["{\"selector\":\".modal-content\",\"tasks\":[[\"has\",{\"selector\":\".text > b\",\"tasks\":[[\"has-text\",\"Privacy Policy\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/oncontextmenu|devtools|stateObject|debugger/\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/contextmenu|devtool/\"]]}"],["{\"selector\":\".elementor-top-column h6\",\"tasks\":[[\"has-text\",\"advertisement\"],[\"upward\",\".elementor-top-column\"]]}"],["{\"selector\":\".notificationsContainer\",\"tasks\":[[\"has-text\",\"whitelisten of beleef Tweakers\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"AdB\\\")]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/user-select|::selection/\"]]}"],["{\"selector\":\".text_multiline\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".has-background\",\"tasks\":[[\"has-text\",\"/newsletter|inbox/\"]]}"],["{\"selector\":\".restricted-body.html-content\",\"tasks\":[[\"has-text\",\"Email us\"]]}","{\"selector\":\".restricted-body.html-content\",\"tasks\":[[\"has-text\",\"your inbox\"]]}"],["{\"selector\":\".recommendationSection\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".row > .entry-content > p\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\".elementor-button-link\",\"tasks\":[[\"has-text\",\"Sign Up\"]]}"],["{\"selector\":\".has-background.has-dark-gray-background-color\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Adblock\"]]}"],["{\"selector\":\".hide.post__sidebar\",\"tasks\":[[\"has-text\",\"Share this article\"]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has-text\",\"Subscribe for\"]]}","{\"selector\":\".elementor-widget-container\",\"tasks\":[[\"has-text\",\"tired of censorship\"]]}"],["{\"selector\":\".wp-block-pullquote\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".wp-block-column > .is-layout-flow.wp-block-group\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"Adblock\\\")]\"]]}"],["{\"selector\":\"p.t-links-underlinedy\",\"tasks\":[[\"has-text\",\"Sign up for The Brief\"]]}"],["{\"selector\":\".bg-dark-brown\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"checkAdblockBait\"]]}"],["{\"selector\":\".border-gray-175\",\"tasks\":[[\"has-text\",\"BT in your inbox\"]]}"],["{\"selector\":\"html\",\"action\":[\"remove-class\",\"modal-open\"],\"tasks\":[[\"watch-attr\",[\"class\"]]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"nocontextmenu\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"blocker\\\")]\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"We think our Android\"]]}"],["{\"selector\":\"body[oncontextmenu=\\\"return false\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"_0x\"]]}"]];

const hostnamesMap = new Map([["ferroviando.com.br",1],["jornaljoca.com.br",1],["visse.com.br",1],["plural.jor.br",1],["javsubtitle.co",[1,8]],["afrikmag.com",1],["alphagirlreviews.com",1],["aprendeinglessila.com",1],["arcanescans.com",1],["bigdatauni.com",1],["bingotingo.com",1],["clockks.com",1],["codedosa.com",1],["counciloflove.com",1],["cracksone.com",1],["drkrok.com",1],["evreporter.com",1],["filmzone.com",1],["flashdumpfiles.com",1],["formatatmak.com",1],["getective.com",1],["globaldefensecorp.com",1],["gossipnextdoor.com",1],["guidingliterature.com",1],["hayatbilgileri.com",1],["hellokpop.com",1],["hiraethtranslation.com",1],["ieltsliz.com",1],["immobiliaremia.com",1],["infokik.com",1],["iptv4best.com",1],["jafekri.com",1],["jbjbgame.com",1],["joysound.com",1],["kapitalis.com",1],["kitchennovel.com",1],["koalasplayground.com",1],["learninsta.com",1],["liveyourmaths.com",1],["moneyexcel.com",1],["ncert-solutions.com",1],["home.novel-gate.com",1],["placementstore.com",1],["poolpiscina.com",1],["riwyat.com",1],["samsungtechwin.com",1],["secondlifetranslations.com",1],["selfstudyanthro.com",1],["selfstudyhistory.com",1],["sinhasannews.com",1],["tech-recipes.com",1],["tempatwisataseru.com",1],["theaircurrent.com",1],["tipssehatcantik.com",1],["truyenbanquyen.com",1],["viatasisanatate.com",1],["wikiofcelebs.com",1],["winmeen.com",1],["neuroteam-metz.de",1],["velicu.eu",1],["newspao.gr",1],["ncertsolutions.guru",1],["tiempo.hn",1],["rukim.id",1],["ibps.in",1],["colegiosconcertados.info",1],["coffeeapps.ir",1],["infodifesa.it",1],["gakki.me",1],["tunegate.me",1],["mediahiburan.my",1],["cours-de-droit.net",1],["ezmanga.net",1],["nocturnetls.net",1],["programasvirtualespc.net",1],["onlineonderdelenshop.nl",1],["day-hoc.org",1],["licensekeys.org",1],["sertracen.com.pa",1],["kulinarnastronamocy.pl",1],["blogvisaodemercado.pt",1],["ananda-yoga.ro",1],["anascrie.ro",1],["cabinetexpert.ro",1],["pitesti24.ro",1],["visefierbinti.ro",1],["voxvalachorum.ro",1],["ziarulargesul.ro",1],["kaystls.site",1],["kicknews.today",1],["primicia.com.ve",1],["maduras.vip",1],["media.framu.world",1],["animesaga.in",2],["fritz.ai",3],["blog.inkdrop.app",3],["blog.dp6.com.br",3],["uxdesign.cc",3],["atrium.co",3],["newco.co",3],["thecontrol.co",3],["unpatent.co",3],["backstage.1blocker.com",3],["500ish.com",3],["tech.ahrefs.com",3],["artplusmarketing.com",3],["backchannel.com",3],["badootech.badoo.com",3],["baharudinyusuf.com",3],["bitcointechtalk.com",3],["bitwarden.com",3],["bluerockpublicradio.com",3],["boomsupersonic.com",3],["bradfieldcs.com",3],["brightthemag.com",3],["tech.buzzfeed.com",3],["blog.canopas.com",3],["blog.coinbase.com",3],["blog.confiant.com",3],["dave-bailey.com",3],["discordapp.com",3],["doist.com",3],["doit-intl.com",3],["doublepulsar.com",3],["economist.com",3],["electricliterature.com",3],["elidourado.com",3],["getadblock.com",3],["levelup.gitconnected.com",3],["greylock.com",3],["blog.growthhackers.com",3],["headmelted.com",3],["helium.com",3],["blog.hiri.com",3],["howwegettonext.com",3],["iheart.com",3],["injusticetoday.com",3],["insightdatascience.com",3],["itsyourturnblog.com",3],["kiwi.com",3],["learngoprogramming.com",3],["learningbyshipping.com",3],["ledwards.com",3],["legalist.com",3],["broadcast.listennotes.com",3],["logrocket.com",3],["blog.ltse.com",3],["mapbox.com",3],["medium.com",3],["melmagazine.com",3],["mondaynote.com",3],["open.nytimes.com",3],["nyulocal.com",3],["ofdollarsanddata.com",3],["postlight.com",3],["proandroiddev.com",3],["signalvnoise.com",3],["slackhq.com",3],["news.smugmug.com",3],["springboard.com",3],["startupsventurecapital.com",3],["theawl.com",3],["thebigroundtable.com",3],["thebillfold.com",3],["thebolditalic.com",3],["theringer.com",3],["thriveglobal.com",3],["timeline.com",3],["towardsdatascience.com",3],["udacity.com",3],["usejournal.com",3],["warisboring.com",3],["wearemel.com",3],["whatahowler.com",3],["writingcooperative.com",3],["x.company",3],["slack.engineering",3],["blog.angular.io",3],["blog.bitsrc.io",3],["bolt.io",3],["codeburst.io",3],["fossa.io",3],["itnext.io",3],["okmeter.io",3],["javascript.plainenglish.io",3],["prototypr.io",3],["rainway.io",3],["stoplight.io",3],["theabacus.io",3],["blog.waffle.io",3],["coach.me",3],["citizen428.net",3],["dotandline.net",3],["keepingstock.net",3],["esciencecenter.nl",3],["thetaoist.online",3],["checkio.org",3],["blog.devcolor.org",3],["freecodecamp.org",3],["iota.org",3],["jupyter.org",3],["sagefy.org",3],["standardnotes.org",3],["blog.statebox.org",3],["thinkprogress.org",3],["uxplanet.org",3],["faun.pub",3],["blog.twitch.tv",3],["appd.at",4],["themosvagas.com.br",4],["hitproversion.com",4],["operatorsekolahdbn.com",4],["techsini.com",4],["9now.com.au",5],["newswire.ca",6],["eplayer.click",7],["streamservicehd.click",7],["kooora4livs.com",[7,67]],["olacast.live",7],["kooora4lives.net",[7,67]],["librospreuniversitariospdf.blogspot.com",8],["lvturbo.com",8],["sbbrisk.com",8],["sbface.com",8],["sbspeed.com",8],["camcaps.io",8],["streamsb.net",8],["vtplayer.net",8],["weakstream.org",8],["camcaps.to",8],["apps.jeurissen.co",9],["1fichier.com",10],["8muses.com",11],["advancedsciencenews.com",12],["androidauthority.com",13],["apk1s.com",14],["dreamsfriend.com",14],["mercenaryenrollment.com",14],["xossipy.com",14],["appimagehub.com",15],["linux-apps.com",15],["pling.com",15],["gnome-look.org",15],["store.kde.org",15],["opendesktop.org",15],["xfce-look.org",15],["askubuntu.com",16],["serverfault.com",16],["stackapps.com",16],["stackexchange.com",16],["superuser.com",16],["mathoverflow.net",16],["babylonbee.com",17],["bigthink.com",18],["canalnatelinhaonline.blogspot.com",19],["mskmangaz.blogspot.com",20],["bloombergquint.com",21],["brooklynvegan.com",22],["calgaryherald.com",23],["edmontonjournal.com",23],["montrealgazette.com",23],["ottawacitizen.com",23],["thestarphoenix.com",23],["chron.com",24],["sfgate.com",24],["cockroachlabs.com",25],["coder.com",26],["comicbook.com",27],["commoncog.com",28],["countryandtownhouse.com",29],["crunchydata.com",30],["crunchyroll.com",31],["ctpost.com",32],["cultofmac.com",33],["dailygalaxy.com",34],["deezer.com",35],["diffnow.com",36],["dlnews.com",37],["duolingo.com",38],["elektrikmen.com",39],["embibe.com",40],["entrepreneur.com",41],["erlang-solutions.com",42],["esscctv.com",43],["ew.com",44],["expquebec.com",45],["facebook.com",46],["facebookcorewwwi.onion",46],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",46],["faloo.com",47],["fastcompany.com",48],["financasdeouro.com",49],["verfutebol.net",49],["finsmes.com",50],["foxandbriar.com",51],["foxnews.com",52],["freethink.com",53],["gdrivedescarga.com",54],["guitar.com",55],["heraldextra.com",56],["historiccity.com",57],["stitchsnitches.com",57],["hket.com",58],["hot-dinners.com",59],["hotcleaner.com",60],["interestingengineering.com",61],["ipphone-warehouse.com",62],["jointhefollowup.com",63],["jpost.com",64],["jweekly.com",65],["kerrang.com",66],["laravel-news.com",68],["lazytranslations.com",69],["levernews.com",70],["lightnovelpub.com",71],["linuxiac.com",72],["outlook.live.com",73],["lokercirebon.com",74],["loginhit.com.ng",74],["londonpass.com",75],["marginalrevolution.com",76],["marinetraffic.com",77],["myntra.com",78],["naaree.com",79],["neo4j.com",80],["notateslaapp.com",81],["notthebee.com",82],["officialcharts.com",83],["online2pdf.com",84],["pcmag.com",85],["pendulumedu.com",86],["people.com",87],["photopea.com",88],["politicalwire.com",89],["rd.com",90],["recordcollectormag.com",91],["reddit.com",92],["embed.reddit.com",93],["forum.release-apk.com",94],["rprealtyplus.com",95],["safirsoft.com",96],["salon.com",97],["market.samm.com",98],["seriesperu.com",99],["shortform.com",100],["skepticalraptor.com",101],["skidrowreloaded.com",102],["web.skype.com",103],["snbc13.com",104],["watchmdh.to",104],["spanishdict.com",105],["studiestoday.com",106],["taskandpurpose.com",107],["teachoo.com",108],["th-world.com",109],["theatlantic.com",110],["thebarbedwire.com",111],["theguardian.com",112],["themeslide.com",113],["warungkomik.com",113],["theskimm.com",114],["thestreamable.com",115],["tunein.com",116],["twitter.com",117],["x.com",117],["urbandictionary.com",118],["vox.com",119],["webnovel.com",120],["worldsensorium.com",121],["yourstory.com",122],["airbnb.de",123],["newsroom.ucla.edu",124],["washington.edu",125],["yoututosjeff.es",126],["gridcoinstats.eu",127],["jpopsingles.eu",128],["adslink.pw",128],["techcrunch-com.translate.goog",129],["gript.ie",130],["businessinsider.in",131],["ncrtsolutions.in",132],["hardware.info",133],["tarnkappe.info",134],["cssreference.io",135],["tileman.io",136],["bwitter.me",137],["allcryptoz.net",138],["crewbase.net",138],["crewus.net",138],["shinbhu.net",138],["shinchu.net",138],["thumb8.net",138],["thumb9.net",138],["topcryptoz.net",138],["ultraten.net",138],["uniqueten.net",138],["myanimelist.net",139],["phimlongtieng.net",140],["playertv.net",141],["streambuddy.net",142],["tweakers.net",143],["wotlabs.net",144],["janvissersweer.nl",145],["sciencenorway.no",146],["newsroom.co.nz",147],["stuff.co.nz",148],["aarp.org",149],["cjr.org",150],["ffrfaction.org",151],["montanafreepress.org",152],["nusantararom.org",153],["quantamagazine.org",154],["reclaimthenet.org",155],["sfpublicpress.org",156],["systemsapproach.org",157],["sythe.org",158],["texastribune.org",159],["thetransmitter.org",160],["mgsm.pl",161],["businesstimes.com.sg",162],["surreyhillsgrocer.sg",163],["teamkong.tk",164],["mail.tm",165],["dailymail.co.uk",166],["ntuplay.xyz",167]]);

const entitiesMap = new Map([["extreme-down",0],["fmovies",1],["vidmoly",2]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
