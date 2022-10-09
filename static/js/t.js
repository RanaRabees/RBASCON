function et_escape(param) {
    return encodeURIComponent(param);
}

function et_unescape(param) {
    return decodeURIComponent(param);
}
var arrOfLinksToPrepare = [];
var preparePlayableMedia = false;
var getParamsWhitelist = [];
(function() {
    'use strict';
    var et_CssSelectorClickEvent = function(eventObject, type, action, category) {
        if (!(this instanceof et_CssSelectorClickEvent)) {
            return new et_CssSelectorClickEvent(eventObject, type, action, category);
        }
        this.setVersion(1);
        this.setEventData({
            "object": eventObject,
            "event_sub_type": type,
            "action": action || 'click',
            "category": category
        });
        this.setName('cssSelectorClick');
        this.setOnsite = function(campaign, medium) {
            this.etcc_cu = 'onsite';
            this.etcc_cmp_onsite = campaign;
            this.etcc_med_onsite = medium;
            return this;
        };
    };
    et_CssSelectorClickEvent.prototype = new et_GenericEvent();
    et_CssSelectorClickEvent.prototype.constructor = et_CssSelectorClickEvent;
    var et_CssSelectorViewEvent = function(eventObject, type, action, category) {
        if (!(this instanceof et_CssSelectorViewEvent)) {
            return new et_CssSelectorViewEvent(eventObject, type, action, category);
        }
        this.setVersion(1);
        this.setEventData({
            "object": eventObject,
            "event_sub_type": type,
            "action": action || 'view',
            "category": category
        });
        this.setName('cssSelectorView');
    };
    et_CssSelectorViewEvent.prototype = new et_GenericEvent();
    et_CssSelectorViewEvent.prototype.constructor = et_CssSelectorViewEvent;
    var cssSelectors = [{
        "id": 1,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(2) > nav:nth-child(2) > a:nth-child(1)",
        "category": "Footer",
        "object": "Berlin",
        "action": "click",
        "type": "cssSelectorId:1",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 4,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(2) > nav:nth-child(2) > a:nth-child(2)",
        "category": "Footer",
        "object": "Hamburg",
        "action": "click",
        "type": "cssSelectorId:4",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 7,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(2) > nav:nth-child(2) > a:nth-child(3)",
        "category": "Footer",
        "object": "Prag",
        "action": "click",
        "type": "cssSelectorId:7",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 13,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(2) > nav:nth-child(2) > a:nth-child(4)",
        "category": "Footer",
        "object": "New York",
        "action": "click",
        "type": "cssSelectorId:13",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 16,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(2) > nav:nth-child(2) > a:nth-child(5)",
        "category": "Footer",
        "object": "Sydney",
        "action": "click",
        "type": "cssSelectorId:16",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 106,
        "url": "*",
        "cssSelector": ".inpage-offcanvas",
        "category": "Inpage-Navigation",
        "object": "Klick auf Inpage-Navigation",
        "action": "click",
        "type": "cssSelectorId:106",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 109,
        "url": "*",
        "cssSelector": ".back-to-top",
        "category": "Inpage-Navigation",
        "object": "back to Top",
        "action": "click",
        "type": "cssSelectorId:109",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 112,
        "url": "*",
        "cssSelector": ".inpage-offcanvas__list > div:nth-child(2)",
        "category": "Inpage-Navigation",
        "object": "Index-1",
        "action": "click",
        "type": "cssSelectorId:112",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 115,
        "url": "*",
        "cssSelector": ".inpage-offcanvas__list > div:nth-child(3)",
        "category": "Inpage-Navigation",
        "object": "Index-2",
        "action": "click",
        "type": "cssSelectorId:115",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 118,
        "url": "*",
        "cssSelector": ".inpage-offcanvas__list > div:nth-child(4)",
        "category": "Inpage-Navigation",
        "object": "Index-3",
        "action": "click",
        "type": "cssSelectorId:118",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 121,
        "url": "*",
        "cssSelector": ".inpage-offcanvas__list > div:nth-child(5)",
        "category": "Inpage-Navigation",
        "object": "Index-4",
        "action": "click",
        "type": "cssSelectorId:121",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 124,
        "url": "*",
        "cssSelector": ".inpage-offcanvas__list > div:nth-child(6)",
        "category": "Inpage-Navigation",
        "object": "Index-5",
        "action": "click",
        "type": "cssSelectorId:124",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 127,
        "url": "*",
        "cssSelector": ".inpage-offcanvas__list > div:nth-child(7)",
        "category": "Inpage-Navigation",
        "object": "Index-6",
        "action": "click",
        "type": "cssSelectorId:127",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 130,
        "url": "*",
        "cssSelector": ".inpage-offcanvas__list > div:nth-child(8)",
        "category": "Inpage-Navigation",
        "object": "Index-7",
        "action": "click",
        "type": "cssSelectorId:130",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 133,
        "url": "*",
        "cssSelector": ".inpage-offcanvas__list > div:nth-child(9)",
        "category": "Inpage-Navigation",
        "object": "Index-8",
        "action": "click",
        "type": "cssSelectorId:133",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 142,
        "url": "rbascon.com\/en\/",
        "cssSelector": "#slick-slide20",
        "category": "Highlight Projekte Kacheln",
        "object": "Navigationspunkt links",
        "action": "click",
        "type": "cssSelectorId:142",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 145,
        "url": "rbascon.com\/en\/",
        "cssSelector": "#slick-slide21",
        "category": "Highlight Projekte Kacheln",
        "object": "Navigationspunkt rechts",
        "action": "click",
        "type": "cssSelectorId:145",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 148,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.c-gradient-grey-light-bg:nth-child(1) > div:nth-child(1) > a:nth-child(2)",
        "category": "Startseite",
        "object": "Zur virtuellen Hauptversammlung 2020",
        "action": "click",
        "type": "cssSelectorId:148",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 151,
        "url": "rbascon.com\/en\/",
        "cssSelector": "a.btn--secondary:nth-child(3)",
        "category": "Startseite",
        "object": "Alle Downloads",
        "action": "click",
        "type": "cssSelectorId:151",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 154,
        "url": "rbascon.com\/en\/",
        "cssSelector": "a.btn--primary:nth-child(3)",
        "category": "Startseite",
        "object": "Zur rbascon-Aktie",
        "action": "click",
        "type": "cssSelectorId:154",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 157,
        "url": "rbascon.com\/en\/",
        "cssSelector": "a.btn:nth-child(7)",
        "category": "Startseite",
        "object": "6Gr\u00fcnde mehr erfahren",
        "action": "click",
        "type": "cssSelectorId:157",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 160,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.carousel:nth-child(6) > button:nth-child(3)",
        "category": "Startseite",
        "object": "6Gr\u00fcnde Caroussel arrow-right",
        "action": "click",
        "type": "cssSelectorId:160",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 163,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.carousel:nth-child(6) > button:nth-child(1)",
        "category": "Startseite",
        "object": "6Gr\u00fcnde Caroussel arrow-left",
        "action": "click",
        "type": "cssSelectorId:163",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 166,
        "url": "rbascon.com\/en\/",
        "cssSelector": "a.btn:nth-child(5)",
        "category": "Startseite",
        "object": "Alle Pressemitteilungen",
        "action": "click",
        "type": "cssSelectorId:166",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 169,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)",
        "category": "Startseite",
        "object": "Zur concepts-Website",
        "action": "click",
        "type": "cssSelectorId:169",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 172,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)",
        "category": "Startseite",
        "object": "Ansprechpartner Finden",
        "action": "click",
        "type": "cssSelectorId:172",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 175,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2)",
        "category": "Startseite",
        "object": "Weitere Informationen f\u00fcr Gesch\u00e4ftspartner",
        "action": "click",
        "type": "cssSelectorId:175",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 178,
        "url": "rbascon.com\/en\/",
        "cssSelector": "li.option:nth-child(2)",
        "category": "Startseite",
        "object": "Ihr Ansprechpartner - Compliance",
        "action": "click",
        "type": "cssSelectorId:178",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 181,
        "url": "rbascon.com\/en\/",
        "cssSelector": "li.option:nth-child(3)",
        "category": "Startseite",
        "object": "Ihr Ansprechpartner - Einkauf",
        "action": "click",
        "type": "cssSelectorId:181",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 184,
        "url": "rbascon.com\/en\/",
        "cssSelector": "li.option:nth-child(4)",
        "category": "Startseite",
        "object": "Ihr Ansprechpartner - Human Resources",
        "action": "click",
        "type": "cssSelectorId:184",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 190,
        "url": "rbascon.com\/en\/",
        "cssSelector": "li.option:nth-child(5)",
        "category": "Startseite",
        "object": "Ihr Ansprechpartner - Investor Relations",
        "action": "click",
        "type": "cssSelectorId:190",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 193,
        "url": "rbascon.com\/en\/",
        "cssSelector": "li.option:nth-child(6)",
        "category": "Startseite",
        "object": "Ihr Ansprechpartner - Nachhaltigkeit\/CR",
        "action": "click",
        "type": "cssSelectorId:193",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 196,
        "url": "rbascon.com\/en\/",
        "cssSelector": "li.option:nth-child(7)",
        "category": "Startseite",
        "object": "Ihr Ansprechpartner - Presse\/Medien",
        "action": "click",
        "type": "cssSelectorId:196",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 199,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.carousel:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Berlin - learn more",
        "action": "click",
        "type": "cssSelectorId:199",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 202,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.carousel:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "New York - learn more",
        "action": "click",
        "type": "cssSelectorId:202",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 205,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.slick-current:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Sydney - learn more",
        "action": "click",
        "type": "cssSelectorId:205",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 208,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.slick-current:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Hamburg - learn more",
        "action": "click",
        "type": "cssSelectorId:208",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 211,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.slick-current:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Prague - learn more",
        "action": "click",
        "type": "cssSelectorId:211",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 214,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.carousel:nth-child(3) > button:nth-child(3)",
        "category": "Startseite B\u00fchne",
        "object": "Arrow-right",
        "action": "click",
        "type": "cssSelectorId:214",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 217,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.carousel:nth-child(3) > button:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Arrow-left",
        "action": "click",
        "type": "cssSelectorId:217",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 220,
        "url": "rbascon.com\/en\/",
        "cssSelector": "#slick-slide00 > button:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Navigationspunkt - Berlin",
        "action": "click",
        "type": "cssSelectorId:220",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 223,
        "url": "rbascon.com\/en\/",
        "cssSelector": "#slick-slide01 > button:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Navigationspunkt - Hamburg",
        "action": "click",
        "type": "cssSelectorId:223",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 226,
        "url": "rbascon.com\/en\/",
        "cssSelector": "#slick-slide02 > button:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Navigationspunkt - Prag",
        "action": "click",
        "type": "cssSelectorId:226",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 229,
        "url": "rbascon.com\/en\/",
        "cssSelector": "#slick-slide03 > button:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Navigationspunkt - New York",
        "action": "click",
        "type": "cssSelectorId:229",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 232,
        "url": "rbascon.com\/en\/",
        "cssSelector": "#slick-slide04 > button:nth-child(1)",
        "category": "Startseite B\u00fchne",
        "object": "Navigationspunkt - Sydney",
        "action": "click",
        "type": "cssSelectorId:232",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 235,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.col-sm-12:nth-child(1) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Karriere - Sch\u00fcler und Schulabg\u00e4nger",
        "action": "click",
        "type": "cssSelectorId:235",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 238,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.col-sm-12:nth-child(2) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Karriere - Studierende",
        "action": "click",
        "type": "cssSelectorId:238",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 241,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.col-sm-12:nth-child(3) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Karriere - Absolventen",
        "action": "click",
        "type": "cssSelectorId:241",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 244,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.col-sm-12:nth-child(4) > div:nth-child(1) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Karriere - Berufserfahrene",
        "action": "click",
        "type": "cssSelectorId:244",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 247,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(6) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Zu Karriere",
        "action": "click",
        "type": "cssSelectorId:247",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 250,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(9) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Zu Investor Relations",
        "action": "click",
        "type": "cssSelectorId:250",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 253,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.bg-image:nth-child(2) > div:nth-child(1) > a:nth-child(2)",
        "category": "Startseite Kachel",
        "object": "So funktioniert PPP - Mehr erfahren",
        "action": "click",
        "type": "cssSelectorId:253",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 256,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(12) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Zu Alle Aktivit\u00e4ten",
        "action": "click",
        "type": "cssSelectorId:256",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 259,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(15) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Zu Alle Highlight-Projekte",
        "action": "click",
        "type": "cssSelectorId:259",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 262,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(18) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Zur Verantwortung",
        "action": "click",
        "type": "cssSelectorId:262",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 265,
        "url": "rbascon.com\/en\/",
        "cssSelector": "div.area-display:nth-child(22) > a:nth-child(1)",
        "category": "Startseite Kachel",
        "object": "Zu Aktuelles und Medien",
        "action": "click",
        "type": "cssSelectorId:265",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 274,
        "url": "rbascon.com\/en\/careers\/graduates",
        "cssSelector": "a.btn--secondary:nth-child(3)",
        "category": "WhatsApp - Schreibe uns!",
        "object": "Absolventen",
        "action": "Kontaktaufnahme",
        "type": "cssSelectorId:274",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 277,
        "url": "rbascon.com\/en\/careers\/application-process",
        "cssSelector": "a.btn",
        "category": "Bewerbungsprozess",
        "object": "Jetzt Bewerben",
        "action": "click",
        "type": "cssSelectorId:277",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 280,
        "url": "rbascon.com\/en\/careers\/pupils-and-school-leavers",
        "cssSelector": "a.btn:nth-child(5)",
        "category": "Schueler und Schulabg\u00e4nger",
        "object": "Alle Jobs ansehen",
        "action": "click",
        "type": "cssSelectorId:280",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 283,
        "url": "rbascon.com\/en\/careers\/pupils-and-school-leavers",
        "cssSelector": "a.btn--primary:nth-child(3)",
        "category": "Schueler und Schulabg\u00e4nger",
        "object": "zu Alle Fragen",
        "action": "click",
        "type": "cssSelectorId:283",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 286,
        "url": "rbascon.com\/en\/careers\/pupils-and-school-leavers",
        "cssSelector": "a.btn--secondary:nth-child(3)",
        "category": "WhatsApp - Schreibe uns!",
        "object": "Schueler und Schulabg\u00e4nger",
        "action": "Kontaktaufnahme",
        "type": "cssSelectorId:286",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 289,
        "url": "rbascon.com\/en\/careers\/students",
        "cssSelector": "div.opacity:nth-child(2) > div:nth-child(1) > a:nth-child(3)",
        "category": "WhatsApp - Schreibe uns!",
        "object": "Studierende",
        "action": "Kontaktaufnahme",
        "type": "cssSelectorId:289",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 290,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(4) > nav:nth-child(2) > a:nth-child(1)",
        "category": "Footer",
        "object": "Activities",
        "action": "click",
        "type": "cssSelectorId:290",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 293,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(4) > nav:nth-child(2) > a:nth-child(2)",
        "category": "Footer",
        "object": "Careers",
        "action": "click",
        "type": "cssSelectorId:293",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 296,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(4) > nav:nth-child(2) > a:nth-child(3)",
        "category": "Footer",
        "object": "News & Media",
        "action": "click",
        "type": "cssSelectorId:296",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 299,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(4) > nav:nth-child(2) > a:nth-child(4)",
        "category": "Footer",
        "object": "Responsibility",
        "action": "click",
        "type": "cssSelectorId:299",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 302,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(4) > nav:nth-child(2) > a:nth-child(5)",
        "category": "Footer",
        "object": "Investor Relations",
        "action": "click",
        "type": "cssSelectorId:302",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 305,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(4) > nav:nth-child(2) > a:nth-child(6)",
        "category": "Footer",
        "object": "About rbascon",
        "action": "click",
        "type": "cssSelectorId:305",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 308,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(4) > h2:nth-child(1) > a:nth-child(1)",
        "category": "Footer",
        "object": "Homepage",
        "action": "click",
        "type": "cssSelectorId:308",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 311,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(3) > nav:nth-child(2) > a:nth-child(1)",
        "category": "Footer",
        "object": "Construction",
        "action": "click",
        "type": "cssSelectorId:311",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 314,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(3) > nav:nth-child(2) > a:nth-child(2)",
        "category": "Footer",
        "object": "Services and mining",
        "action": "click",
        "type": "cssSelectorId:314",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }, {
        "id": 317,
        "url": "*",
        "cssSelector": "div.col-lg-5:nth-child(3) > nav:nth-child(2) > a:nth-child(3)",
        "category": "Footer",
        "object": "PPP and concessions",
        "action": "click",
        "type": "cssSelectorId:317",
        "eventType": "EVENT_TYPE_CLICK",
        "isOnsiteCampaign": false,
        "onsiteCmp": "",
        "onsiteMed": ""
    }];
    var elementMatches = (function() {
        if (typeof Element === 'undefined') {
            return function() {
                return false;
            };
        }
        var prototype = Element.prototype;
        return prototype.matches || prototype.msMatchesSelector || prototype.webkitMatchesSelector;
    })();

    function handleIntersect(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.target.getAttribute('data-css-event-sent') === 'false') {
                _etracker.sendEvent(cssSelectors[entry.target.getAttribute('data-css-selector')].event);
                entry.target.setAttribute('data-css-event-sent', true);
            }
        });
    }
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    var CssObserver = getIntersectionObserver(handleIntersect, options);

    function getIntersectionObserver(handleIntersect, options) {
        if ('IntersectionObserver' in window) {
            return new IntersectionObserver(handleIntersect, options);
        }
        return {
            observe: function(element) {}
        };
    }

    function querySelector(selector) {
        try {
            return document.querySelector(selector);
        } catch (e) {
            try {
                var escapedSelector = CSS.escape(selector).replaceAll('\\#', '#').replaceAll('\\.', '.');
                return document.querySelector(escapedSelector);
            } catch (e) {
                return undefined;
            }
        }
    }

    function checkViewElements() {
        for (var i = 0, length = cssSelectors.length; i < length; i++) {
            var selector = cssSelectors[i];
            if (selector.eventType === 'EVENT_TYPE_VIEW' && !selector.observed) {
                var regex = createRegexFromWildcards(selector.url);
                var currentUrl = getCurrentUrl();
                if (regex.test(currentUrl)) {
                    var element = querySelector(selector.cssSelector);
                    if (element) {
                        selector.observed = true;
                        selector.event = et_CssSelectorViewEvent(selector.object, selector.type, selector.action, selector.category);
                        element.setAttribute('data-css-selector', i);
                        element.setAttribute('data-css-event-sent', false);
                        CssObserver.observe(element);
                    }
                }
            }
        }
        window.setTimeout(checkViewElements, 500);
    }

    function checkClickElements() {
        for (var i = 0, length = cssSelectors.length; i < length; i++) {
            var selector = cssSelectors[i];
            if (selector.eventType !== 'EVENT_TYPE_VIEW' && !selector.observed) {
                var regex = createRegexFromWildcards(selector.url);
                var currentUrl = getCurrentUrl();
                if (regex.test(currentUrl)) {
                    var element = querySelector(selector.cssSelector);
                    if (element) {
                        selector.observed = true;
                        var clickEvent = et_CssSelectorClickEvent(selector.object, selector.type, selector.action, selector.category);
                        if (selector.isOnsiteCampaign) {
                            clickEvent.setOnsite(selector.onsiteCmp, selector.onsiteMed);
                        }
                        et_addEvent(element, 'mousedown', sendClickEvent.bind(null, clickEvent), true);
                    }
                }
            }
        }
        window.setTimeout(checkClickElements, 500);
    }

    function sendClickEvent(clickEvent) {
        _etracker.sendEvent(clickEvent);
    }

    function getCurrentUrl() {
        return window.location.hostname + window.location.pathname;
    }

    function createRegexFromWildcards(input) {
        if (!input) {
            input = '';
        }
        var escaped = escapeRegExp(input);
        escaped = escaped.replace(/\*/g, '.*').replace(/\?/g, '.');
        return new RegExp('^(www\\.)?' + escaped + '$', 'i');
    }

    function escapeRegExp(input) {
        return input.replace(/[[\]{}()+.\\^$|]/g, '\\$&');
    }
    checkViewElements();
    checkClickElements();
})();
var et_protocol = window._etracker.getConfigValue('protocol') || '//';

if (typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '') {
    var et_server = et_protocol + 'www.etracker.de';
    var et_code_server = et_protocol + 'code.etracker.com';
} else {
    var et_server = et_proxy_redirect;
    var et_code_server = et_proxy_redirect;
}

var et_ver = '5.0';
var et_panelLink = et_server + '/app?et=';
var et_secureId = 'XdEvxg';

var et_maxUrlLength = (function() {
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    return isIE ? 2000 : 8190;
})();

var et_deliveryHash = "Bmj9FzlOHp40FOikjRWy4+frv1N0WZ3M";

var cc_autoPageNameRegistration = 'title';
var cc_getParamsWhiteList = [];
ET_Event = new etEvent("XdEvxg", et_server);
var cc_cntScript = 'cntcc';
var cc_genericEventPath = '/api/v6/tracking/webEvents';
var cc_optInPath = '/api/v6/tracking/optIn';
var cc_cntCookie = '/cntcookie.php';
var cc_deltaTime = 16531529952494 - (new Date().getTime() * 10);
var cc_codecVersion = 1;
var cc_apiVersion = '1.1.2';
var cc_articleDivider = '|';
var cc_itemDivider = ';';

(function() {
    'use strict';
    window.et_ScrollDepthUtils = {
        getPageName: function() {
            return et_getPageName();
        },
        isInIframe: function() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }
    };
    'use strict';

    function ScrollPositionsContainer(timestamp) {
        var _this = this;
        _this.buckets = _createNewBuckets();
        _this.tm = timestamp;
        _this.bucketChangeEvent = undefined;
        _this.lastBuckets = [];
        ScrollPositionsContainer.prototype.getPositions = function() {
            return _this.buckets;
        };
        ScrollPositionsContainer.prototype.reset = function() {
            _this.buckets = _createNewBuckets();
        };
        ScrollPositionsContainer.prototype.addStayTime = function(positionFrom, positionTo, timeMs) {
            if (positionFrom < 0 || positionTo < 0) {
                return;
            }
            _this.tm = new Date().getTime();
            positionFrom = Math.floor(positionFrom);
            positionTo = Math.floor(positionTo);
            if (positionFrom > positionTo) {
                var originalTo = positionTo;
                positionTo = positionFrom;
                positionFrom = originalTo;
            }
            var currentBuckets = [];
            for (var key in _this.buckets) {
                if (positionFrom <= _this.buckets[key].to && positionTo >= _this.buckets[key].from) {
                    _this.buckets[key].stayTime += timeMs;
                    currentBuckets.push(key);
                }
            }
            if (_bucketsChanged(currentBuckets, _this.lastBuckets) && typeof _this.bucketChangeEvent === 'function') {
                _this.bucketChangeEvent();
            }
            _this.lastBuckets = currentBuckets;
        };

        function _bucketsChanged(arr1, arr2) {
            if (arr1.length === 0 || arr2.length === 0) {
                return false;
            }
            if (arr1.length !== arr2.length) {
                return true;
            }
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return true;
                }
            }
            return false;
        }
        ScrollPositionsContainer.prototype.subscribeToBucketChange = function(callback) {
            _this.bucketChangeEvent = callback;
        };

        function _createNewBuckets() {
            var buckets = {
                0: {
                    stayTime: 0
                },
                10: {
                    stayTime: 0
                },
                25: {
                    stayTime: 0
                },
                50: {
                    stayTime: 0
                },
                75: {
                    stayTime: 0
                },
                101: {
                    stayTime: 0
                }
            };
            var previousKey = 0;
            for (var key in buckets) {
                key = parseInt(key);
                buckets[previousKey].to = key - 1;
                buckets[key].from = key;
                buckets[key].to = 1000000;
                previousKey = key;
            }
            return buckets;
        }
    }
    'use strict';
    var et_ScrollDepthEvent = function(eventObject, pageName) {
        if (!(this instanceof et_ScrollDepthEvent)) {
            return new et_ScrollDepthEvent(eventObject, pageName);
        }
        this.name = 'scrollDepth';
        this.pagename = pageName;
        this.version = 1;
        this.eventData = {
            'object': eventObject
        };
    };
    et_ScrollDepthEvent.prototype = new et_GenericEvent();
    et_ScrollDepthEvent.prototype.constructor = et_ScrollDepthEvent;
    et_ScrollDepthEvent.prototype.getEvent = function() {
        var originalObject = et_GenericEvent.prototype.getEvent.call(this)[0];
        originalObject[this.name]['pagename'] = this.pagename;
        return [originalObject];
    };

    function ScrollDepthTracker(currentTm) {
        var _this = this;
        _this.REFRESH_TIME_MS = 1000;
        _this.STORAGE_KEY = 'et_scroll_depth';
        _this.STORAGE_MAX_AGE_MS = 1 * 60 * 60 * 1000;
        _this.THROTTLING_TIME = 5000;
        _this.STORAGE = sessionStorage;
        _this.lastUpdateTm = currentTm;
        _this.lastFlushedTm = undefined;
        _this.siteHeight = 1;
        _this.scrollPositions = new ScrollPositionsContainer(currentTm);
        _this.startTracking = startTracking;
        _this.getScrollPositions = getScrollPositions;
        _this.getPageName = getPageName;
        _this.save = save;
        _this.load = load;
        _this.reset = reset;

        function startTracking() {
            _this.scrollPositions.subscribeToBucketChange(_onScrollingBucketChange);
            var body = document.body;
            var html = document.documentElement || document.body;
            _this.siteHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            _this.load();
            et_addEvent(window, 'scroll', _updateScrollPositions);
            setInterval(_updateScrollPositions, _this.REFRESH_TIME_MS);
            setInterval(save, _this.REFRESH_TIME_MS);
        }

        function _onScrollingBucketChange() {
            var nowTm = new Date().getTime();
            if (!_this.lastFlushedTm || nowTm - _this.lastFlushedTm >= _this.THROTTLING_TIME) {
                _sendScrollDepthEventEvent();
                _this.lastFlushedTm = nowTm;
            }
        }

        function _sendScrollDepthEventEvent(pageName, buckets) {
            if (!_etracker.isTrackingEnabled()) {
                return;
            }
            pageName = pageName || getPageName();
            if (!buckets) {
                buckets = _createBucketsArrayToSend(_this.scrollPositions.buckets);
            }
            _etracker.sendEvent(et_ScrollDepthEvent(encodeURIComponent(JSON.stringify(buckets)), pageName));
            _this.reset();
        }

        function _createBucketsArrayToSend(bucketsObj) {
            var buckets = [];
            for (var bucketKey in bucketsObj) {
                buckets.push({
                    from: bucketsObj[bucketKey].from,
                    to: bucketsObj[bucketKey].to,
                    stayTime: bucketsObj[bucketKey].stayTime
                });
            }
            return buckets;
        }

        function reset() {
            _this.scrollPositions.reset();
            _this.save();
        }

        function _updateScrollPositions() {
            var currentPositions = _this.getScrollPositions();
            var newTm = new Date().getTime();
            var stayTime = newTm - _this.lastUpdateTm;
            _this.scrollPositions.addStayTime(currentPositions.from, currentPositions.to, stayTime);
            _this.lastUpdateTm = newTm;
        }

        function getPageName() {
            return window.et_ScrollDepthUtils.getPageName();
        }

        function save() {
            var pageName = _this.getPageName();
            if (pageName === undefined || !_this.scrollPositions || !_this.STORAGE) {
                return;
            }
            _this.scrollPositions.tm = new Date().getTime();
            var storedJson = _readJsonFromStorage();
            storedJson[pageName] = _this.scrollPositions;
            _this.STORAGE.setItem(_this.STORAGE_KEY, JSON.stringify(storedJson));
        }

        function _deleteExpiredEntries() {
            var storedJson = _readJsonFromStorage();
            var now = new Date().getTime();
            for (var key in storedJson) {
                if (now - storedJson[key].tm > _this.STORAGE_MAX_AGE_MS) {
                    delete storedJson[key];
                }
            }
            _this.STORAGE.setItem(_this.STORAGE_KEY, JSON.stringify(storedJson));
        }

        function load() {
            if (!_this.STORAGE) {
                return;
            }
            _deleteExpiredEntries();
            var storedContent = _readJsonFromStorage();
            var pageName = _this.getPageName();
            if (storedContent[pageName] && storedContent[pageName].buckets) {
                var storedContentForPage = storedContent[pageName];
                if (storedContentForPage.buckets) {
                    for (var key in storedContentForPage.buckets) {
                        if (_this.scrollPositions.buckets[key] !== undefined) {
                            _this.scrollPositions.buckets[key].stayTime = storedContentForPage.buckets[key].stayTime;
                        }
                    }
                }
            }
        }

        function _readJsonFromStorage() {
            if (!_this.STORAGE) {
                return {};
            }
            var storedContent = _this.STORAGE.getItem(_this.STORAGE_KEY);
            if (!storedContent) {
                return {};
            }
            try {
                return JSON.parse(storedContent);
            } catch (e) {
                return {};
            }
        }

        function getScrollPositions() {
            var scrollX = 0,
                scrollY = 0;
            if (typeof(window.pageYOffset) === 'number') {
                scrollY = window.pageYOffset;
                scrollX = window.pageXOffset;
            } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                scrollY = document.body.scrollTop;
                scrollX = document.body.scrollLeft;
            } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                scrollY = document.documentElement.scrollTop;
                scrollX = document.documentElement.scrollLeft;
            }
            return {
                from: scrollY / _this.siteHeight * 100,
                to: (scrollY + _getViewportSize()['height']) / _this.siteHeight * 100
            };
        } /***Gets the viewport size depending of browser capabilities *@returns{{width:*,height:*}}*/
        function _getViewportSize() {
            var viewPortWidth;
            var viewPortHeight;
            if (typeof window.innerWidth !== 'undefined') {
                viewPortWidth = window.innerWidth;
                viewPortHeight = window.innerHeight;
            } else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
                viewPortWidth = document.documentElement.clientWidth;
                viewPortHeight = document.documentElement.clientHeight;
            } else {
                viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
                viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
            }
            return {
                width: viewPortWidth,
                height: viewPortHeight
            };
        }
    }
    'use strict';
    var SAMPLING_RATE = 0.5;
    var scrollMapSettings = 2;
    var shouldScrollDepthBeActive = false;

    function startScrollDepth() {
        if (_etracker.isTrackingEnabled() && (scrollMapSettings === 2 || (_etracker.areCookiesEnabled() && scrollMapSettings === 1))) {
            if (_isCookieSet()) {
                shouldScrollDepthBeActive = _isCookieTrue();
            } else {
                shouldScrollDepthBeActive = Math.random() <= SAMPLING_RATE;
                _setCookie(shouldScrollDepthBeActive);
            }
        }
        if (shouldScrollDepthBeActive && !window.et_ScrollDepthUtils.isInIframe()) {
            var scrollDepth = new ScrollDepthTracker(new Date().getTime());
            _etracker.addOnLoad(scrollDepth.startTracking);
        }
        try {
            localStorage.removeItem('et_scroll_depth');
        } catch (e) {}
    }

    function _isCookieSet() {
        try {
            return !!document.cookie.match(/isSdEnabled=/);
        } catch (e) {}
        return false;
    }

    function _isCookieTrue() {
        try {
            return !!document.cookie.match(/isSdEnabled=true/);
        } catch (e) {}
        return false;
    }

    function _setCookie(isTrue) {
        et_setCookieValue('isSdEnabled', isTrue, 1, undefined, false);
    }
    _etracker.addEvent(startScrollDepth);
    'use strict';
    (function() {
        if (window.et_ScrollDepthUtils.isInIframe()) {
            var currentHeight = 0;
            et_addEvent(window, 'beforeunload', function() {
                _sendMessage('page-unloaded');
            });
            _etracker.addOnLoad(function() {
                currentHeight = _getPageHeight();
                var message = {
                    height: currentHeight
                };
                _sendMessage('page-loaded', message);
            });
            et_addEvent(window, 'resize', function() {
                var newPageHeight = _getPageHeight();
                if (newPageHeight !== currentHeight) {
                    currentHeight = newPageHeight;
                    var message = {
                        height: currentHeight
                    };
                    _sendMessage('height-changed', message);
                }
            });
        }

        function _sendMessage(type, payload) {
            var message = {
                type: type,
                payload: payload,
                url: window.location.href,
                pageName: window.et_ScrollDepthUtils.getPageName()
            };
            parent.postMessage(JSON.stringify(message), '*');
        }

        function _getPageHeight() {
            var body = document.body;
            var html = document.documentElement;
            return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        }
    })();
})();

function _etc_start() {
    var c = "";

    if (typeof _etracker.setFirstPixelSent == 'function')
        _etracker.setFirstPixelSent();
    if (typeof _etracker.doWrapperCalls == 'function')
        _etracker.doWrapperCalls();

    var et_isSubscriber = (
        'Notification' in window &&
        typeof(window.Notification) == "function" &&
        window.Notification.permission == "granted"
    );

    var extra = {
        et_sbscr: et_isSubscriber ? '1' : '0'
    };

    et_cc('XdEvxg', extra);

    etCommerce.etCommerceLoad('XdEvxg');
    etCommerce.doPreparedEvents();
    et_setupPageExitBeacon('XdEvxg');
    prepareAnchors = new et_prepareAnchorsForEvents(arrOfLinksToPrepare, getParamsWhitelist);
    prepareMedia = preparePlayableMedia && typeof et_prepareMediaForEvents !== "undefined" ? new et_prepareMediaForEvents() : null;
    if (c != '') {
        var x = document.createElement('div');
        x.innerHTML = c;
        var et_bodyInterval = window.setInterval(function() {
            if (document.body) {
                window.clearInterval(et_bodyInterval);
                document.body.appendChild(x);
            }
        }, 1);
    }
}

var et_OptInType = 0;
var _etc = function() {
    if (et_checkOptInCookie()) {
        _etc_start();
    }
};

_etracker.setReady();