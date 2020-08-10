$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myproject/homepage/GoogleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Demo of Searching Keyword (Cheese / Zeno in data table) in Google",
  "description": "As a site user\nIf I search for keyword\nThe page title should contains the keyword",
  "id": "demo-of-searching-keyword-(cheese-/-zeno-in-data-table)-in-google",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "",
  "description": "",
  "id": "demo-of-searching-keyword-(cheese-/-zeno-in-data-table)-in-google;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "The web site is opened as \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "# Enter the Keyword in the Google Search Bar"
    }
  ],
  "line": 11,
  "name": "I fill in \"q\" by name \"cheese\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# You can wait for 2 seconds"
    }
  ],
  "line": 14,
  "name": "I wait for \"2\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "# Hit Submit button in the Google Search Bar"
    }
  ],
  "line": 17,
  "name": "I submit form by form name \"q\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "# verify if the keyword appear in page title"
    }
  ],
  "line": 20,
  "name": "The page title should contains \"cheese\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 27
    }
  ],
  "location": "CommonStepDef.the_web_site_is_opened_as(String)"
});
formatter.result({
  "duration": 7164326223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 11
    },
    {
      "val": "cheese",
      "offset": 23
    }
  ],
  "location": "CommonStepDef.i_fill_in_by_name(String,String)"
});
formatter.result({
  "duration": 209446687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(Long)"
});
formatter.result({
  "duration": 2000462546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 28
    }
  ],
  "location": "CommonStepDef.i_submit_form_by_form_name(String)"
});
formatter.result({
  "duration": 1836111109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cheese",
      "offset": 32
    }
  ],
  "location": "CommonStepDef.the_page_title_should_contains(String)"
});
formatter.result({
  "duration": 20117808,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "",
  "id": "demo-of-searching-keyword-(cheese-/-zeno-in-data-table)-in-google;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "The web site is opened as \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "# Enter the Keyword in the Google Search Bar"
    }
  ],
  "line": 11,
  "name": "I fill in \"q\" by name \"zeno yu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# You can wait for 2 seconds"
    }
  ],
  "line": 14,
  "name": "I wait for \"2\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "# Hit Submit button in the Google Search Bar"
    }
  ],
  "line": 17,
  "name": "I submit form by form name \"q\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "# verify if the keyword appear in page title"
    }
  ],
  "line": 20,
  "name": "The page title should contains \"zeno yu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 27
    }
  ],
  "location": "CommonStepDef.the_web_site_is_opened_as(String)"
});
formatter.result({
  "duration": 670133008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 11
    },
    {
      "val": "zeno yu",
      "offset": 23
    }
  ],
  "location": "CommonStepDef.i_fill_in_by_name(String,String)"
});
formatter.result({
  "duration": 93433651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(Long)"
});
formatter.result({
  "duration": 2000777212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 28
    }
  ],
  "location": "CommonStepDef.i_submit_form_by_form_name(String)"
});
formatter.result({
  "duration": 757362057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeno yu",
      "offset": 32
    }
  ],
  "location": "CommonStepDef.the_page_title_should_contains(String)"
});
formatter.result({
  "duration": 7582542,
  "status": "passed"
});
});