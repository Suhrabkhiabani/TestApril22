$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DataBaseFeature.feature");
formatter.feature({
  "line": 2,
  "name": "DataBase SQL Query Feature",
  "description": "",
  "id": "database-sql-query-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.before({
  "duration": 2738575100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Execute all information from Actor table",
  "description": "",
  "id": "database-sql-query-feature;execute-all-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User Connects to PostgreSql DataBase",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User send query \u0027select first_name from public.actor\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should get all information from that table",
  "keyword": "Then "
});
formatter.match({
  "location": "DataBaseStepDefinition.user_Connects_to_PostgreSql_DataBase()"
});
formatter.result({
  "duration": 460766800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select first_name from public.actor",
      "offset": 17
    }
  ],
  "location": "DataBaseStepDefinition.user_send_query_select_from_public_actor(String)"
});
formatter.result({
  "duration": 20859300,
  "status": "passed"
});
formatter.match({
  "location": "DataBaseStepDefinition.user_should_get_all_information_from_that_table()"
});
formatter.result({
  "duration": 9245800,
  "status": "passed"
});
formatter.after({
  "duration": 719034300,
  "status": "passed"
});
formatter.uri("Features/DesktopFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Desktop Features",
  "description": "",
  "id": "desktop-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.before({
  "duration": 1539788700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all desktops",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2540636500,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_Click_on_Desktops_tab()"
});
formatter.result({
  "duration": 69297200,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_click_on_Show_all_desktops()"
});
formatter.result({
  "duration": 531771500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "",
  "description": "",
  "id": "desktop-features;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User should see all items are present in Desktop page",
  "keyword": "Then "
});
formatter.match({
  "location": "Monday.user_should_see_all_items_are_present_in_Desktop_page()"
});
formatter.result({
  "duration": 276993000,
  "status": "passed"
});
formatter.after({
  "duration": 687184400,
  "status": "passed"
});
formatter.before({
  "duration": 1541932500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all desktops",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2628882700,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_Click_on_Desktops_tab()"
});
formatter.result({
  "duration": 69241600,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_click_on_Show_all_desktops()"
});
formatter.result({
  "duration": 532686600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": "desktop-features;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User click ADD TO CART option on \u0027HP LP3065\u0027 item",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select quantity 1",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should see a message \u0027Success: you have added HP LP 3065 to your Shopping cart!\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 39
    }
  ],
  "location": "Monday.user_click_ADD_TO_CART_option_on_HP_LP_item(int)"
});
formatter.result({
  "duration": 30077500300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@id\u003d\u0027button-cart\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.128)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LAPTOP-5E7SJ6AA\u0027, ip: \u002710.0.0.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\suhra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57397}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 931f8a1e432d95998423a46f0b70206f\n*** Element info: {Using\u003dxpath, value\u003d//button[@id\u003d\u0027button-cart\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat pageObjects.Tuesday.clickOnAddToCartHPButton(Tuesday.java:51)\r\n\tat stepDefinitions.Monday.user_click_ADD_TO_CART_option_on_HP_LP_item(Monday.java:44)\r\n\tat ✽.And User click ADD TO CART option on \u0027HP LP3065\u0027 item(Features/DesktopFeature.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "Monday.user_select_quantity(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Monday.user_click_add_to_Cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 57
    }
  ],
  "location": "Monday.user_should_see_a_message_Success_you_have_added_HP_LP_to_your_Shopping_cart(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 668279200,
  "status": "passed"
});
formatter.before({
  "duration": 1557253100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all desktops",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2439729000,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_Click_on_Desktops_tab()"
});
formatter.result({
  "duration": 64941100,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_click_on_Show_all_desktops()"
});
formatter.result({
  "duration": 592934200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": "desktop-features;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User click ADD TO CART option on \u0027Canon EOS 5D\u0027 item",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select color from dropdown \u0027Red\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select quuantity 1",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click add too Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see a message \u0027Succes: You have added Canon EOS 5d to your shopping cart\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 44
    }
  ],
  "location": "Monday.user_click_ADD_TO_CART_option_on_Canon_EOS_D_item(int)"
});
formatter.result({
  "duration": 1310190200,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_select_color_from_dropdown_Red()"
});
formatter.result({
  "duration": 179500200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "Monday.user_select_quuantity(int)"
});
formatter.result({
  "duration": 141453000,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_click_add_too_Cart_button()"
});
formatter.result({
  "duration": 47230200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 730343500,
  "status": "passed"
});
formatter.before({
  "duration": 1511894400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all desktops",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2501685000,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_Click_on_Desktops_tab()"
});
formatter.result({
  "duration": 66480200,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_click_on_Show_all_desktops()"
});
formatter.result({
  "duration": 587516200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": "",
  "id": "desktop-features;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User click on Canon EOS 5D item",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on write a review link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user fill the review information with below information",
  "rows": [
    {
      "cells": [
        "yourname",
        "yourReview",
        "Rating"
      ],
      "line": 35
    },
    {
      "cells": [
        "AlexJohn",
        "VeryGoodVeryGoodVeryGood",
        "Good"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User should see a message with \u0027Thank you for your review. It has been submitted to the webmaster for approval\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Monday.user_click_on_Canon_EOS_D_item(int)"
});
formatter.result({
  "duration": 1411604900,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_click_on_write_a_review_link()"
});
formatter.result({
  "duration": 65747800,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_fill_the_review_information_with_below_information(DataTable)"
});
formatter.result({
  "duration": 232652100,
  "status": "passed"
});
formatter.match({
  "location": "Monday.user_click_on_Continue_Button()"
});
formatter.result({
  "duration": 56028600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 718547500,
  "status": "passed"
});
formatter.uri("Features/Laptop\u0026NoteBooks.feature");
formatter.feature({
  "line": 2,
  "name": "Laptop And NoteBooks Features",
  "description": "",
  "id": "laptop-and-notebooks-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.before({
  "duration": 1538012800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2543726900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 62340800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 505354800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add and Remove a Mac Book from cart",
  "description": "",
  "id": "laptop-and-notebooks-features;add-and-remove-a-mac-book-from-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User click on MacBook  item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clickadd to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see a message ‘Success: You have added MacBook to your shopping cart!’",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should see ‘1tem(s)-602.00’showed to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on cart option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on red X button to remove the item from cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "item should be removed and cartshould show ‘0 item(s)’",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_MacBook_item()"
});
formatter.result({
  "duration": 1247977300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_clickadd_to_Cart_button()"
});
formatter.result({
  "duration": 59106300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_a_message_Success_You_have_added_MacBook_to_your_shopping_cart()"
});
formatter.result({
  "duration": 318034300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "602",
      "offset": 25
    },
    {
      "val": "00",
      "offset": 29
    }
  ],
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_tem_s_showed_to_the_cart(int,int,int)"
});
formatter.result({
  "duration": 281864300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_cart_option()"
});
formatter.result({
  "duration": 58846400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_red_X_button_to_remove_the_item_from_cart()"
});
formatter.result({
  "duration": 55942400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "LaptopAndNoteBookStepDefinitions.item_should_be_removed_and_cartshould_show_item_s(int)"
});
formatter.result({
  "duration": 319704600,
  "status": "passed"
});
formatter.after({
  "duration": 4714726100,
  "status": "passed"
});
formatter.before({
  "duration": 1556001300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2492010900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 58088700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 651070300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Product Comparison",
  "description": "",
  "id": "laptop-and-notebooks-features;product-comparison",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User click on product comparison icon on ‘MacBook’",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on product comparison icon on ‘MacBook Air",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should see a message ‘Success: You have added MacBook Air to your product comparison!’",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User click on Product comparison link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should see Product Comparison Chart",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_product_comparison_icon_on_MacBook()"
});
formatter.result({
  "duration": 60160400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_product_comparison_icon_on_MacBook_Air()"
});
formatter.result({
  "duration": 60143100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_a_message_Success_You_have_added_MacBook_Air_to_your_product_comparison()"
});
formatter.result({
  "duration": 343780700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Product_comparison_link()"
});
formatter.result({
  "duration": 53309900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_Product_Comparison_Chart()"
});
formatter.result({
  "duration": 298429600,
  "status": "passed"
});
formatter.after({
  "duration": 684599300,
  "status": "passed"
});
formatter.before({
  "duration": 1542982700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2543805100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 67445300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 440431100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Adding and item to Wish list",
  "description": "",
  "id": "laptop-and-notebooks-features;adding-and-item-to-wish-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User click on heart icon to add ‘Sony VaIO’laptop to wish list",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should get a message ‘You must login or create an account to save Sony VAIO to your wish list!’",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_heart_icon_to_add_Sony_VaIO_laptop_to_wish_list()"
});
formatter.result({
  "duration": 69323200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_should_get_a_message_You_must_login_or_create_an_account_to_save_Sony_VAIO_to_your_wish_list()"
});
formatter.result({
  "duration": 313205900,
  "status": "passed"
});
formatter.after({
  "duration": 689212000,
  "status": "passed"
});
formatter.before({
  "duration": 1516851600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2454330900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 58951700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 461744300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate the price of MacBook Pro is 2000",
  "description": "",
  "id": "laptop-and-notebooks-features;validate-the-price-of-macbook-pro-is-2000",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User click on ‘MacBook Pro’item",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should see ‘$2,000.00’price tag is present on UI.",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_MacBook_Pro_item()"
});
formatter.result({
  "duration": 1258784400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "000",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_$_price_tag_is_present_on_UI(int,int,int)"
});
formatter.result({
  "duration": 345136400,
  "status": "passed"
});
formatter.after({
  "duration": 4735110100,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Retail Website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.before({
  "duration": 1532489100,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Testing to push unchanged to GitHub"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 7,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2426652000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 66527500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login to MyAccount",
  "description": "",
  "id": "login-to-retail-website;login-to-myaccount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enter username \u0027falconeagle@tek-school.com\u0027 and password \u0027good\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3645662500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "falconeagle@tek-school.com",
      "offset": 21
    },
    {
      "val": "good",
      "offset": 63
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 575012500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1238040300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3286469200,
  "status": "passed"
});
formatter.after({
  "duration": 653938400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#if i want to run same scenario with multiple userName and Password"
    },
    {
      "line": 24,
      "value": "# Should i copy and past same scenario with multiple user and pass ?"
    }
  ],
  "line": 27,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enter username \u0027\u003cuserName\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 35,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;1"
    },
    {
      "cells": [
        "sdet@tekschool.us",
        "sdet"
      ],
      "line": 36,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2"
    },
    {
      "cells": [
        "consumer@tekschool.us",
        "JBond"
      ],
      "line": 37,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3"
    },
    {
      "cells": [
        "students@tekschool.us",
        "TEST"
      ],
      "line": 38,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1521388800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Testing to push unchanged to GitHub"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 7,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2808525200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 56009100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@MultipleUserLogin"
    },
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3634942300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 481836000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1123099900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3270661300,
  "status": "passed"
});
formatter.after({
  "duration": 665474600,
  "status": "passed"
});
formatter.before({
  "duration": 1521877800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Testing to push unchanged to GitHub"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 7,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2480618900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 60467000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@MultipleUserLogin"
    },
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enter username \u0027consumer@tekschool.us\u0027 and password \u0027JBond\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3870816400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consumer@tekschool.us",
      "offset": 21
    },
    {
      "val": "JBond",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 509691500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1043105300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3290705100,
  "status": "passed"
});
formatter.after({
  "duration": 672323200,
  "status": "passed"
});
formatter.before({
  "duration": 1531625800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Testing to push unchanged to GitHub"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 7,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2363645200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 54235700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@MultipleUserLogin"
    },
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enter username \u0027students@tekschool.us\u0027 and password \u0027TEST\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3545730600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "students@tekschool.us",
      "offset": 21
    },
    {
      "val": "TEST",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 485185200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1514491900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3293212900,
  "status": "passed"
});
formatter.after({
  "duration": 678186100,
  "status": "passed"
});
formatter.uri("Features/RetailPage.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Website Features",
  "description": "",
  "id": "retail-website-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.before({
  "duration": 1504215300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Every feature file starts with Feature: \u003cName of feature file\u003e"
    },
    {
      "line": 5,
      "value": "#Every Scenario starts with Scenario: \u003cName of Test case we want to automate\u003e"
    },
    {
      "line": 6,
      "value": "#Gherkin keywords are Given When Then"
    },
    {
      "line": 7,
      "value": "#Given is precondition"
    },
    {
      "line": 8,
      "value": "#When is an Action taken"
    },
    {
      "line": 9,
      "value": "#Then is an expected result (usually we write validation)"
    },
    {
      "line": 10,
      "value": "#And is repeating an action or can be used following Given keyword as well"
    },
    {
      "line": 11,
      "value": "#But is used for negative scenarios verification"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2699569600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search functionality Test case",
  "description": "",
  "id": "retail-website-features;search-functionality-test-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User search for \u0027iphone\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should see Iphone image",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "iphone",
      "offset": 17
    }
  ],
  "location": "RetailPageTestStepDefinitions.user_search_for_iphone(String)"
});
formatter.result({
  "duration": 521870600,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_search_button()"
});
formatter.result({
  "duration": 417294900,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_should_see_Iphone_image()"
});
formatter.result({
  "duration": 356122800,
  "status": "passed"
});
formatter.after({
  "duration": 1121306100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 22,
      "value": "# In scenario Outline we can run same scenario with multiple set of data"
    },
    {
      "line": 23,
      "value": "# we will use examples keyword to pass different data"
    },
    {
      "line": 24,
      "value": "# Every Scenario outline follows with Examples keyword"
    },
    {
      "line": 25,
      "value": "# Under examples keyword we placed data inside the pipes | and we can separate"
    },
    {
      "line": 26,
      "value": "# columns with pipes"
    },
    {
      "line": 27,
      "value": "# in this examples each row represent one time of execution"
    }
  ],
  "line": 30,
  "name": "Test Search Funtionality with multiple set of Data",
  "description": "",
  "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@TestSmokee"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User search for \u0027\u003citemName\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data;",
  "rows": [
    {
      "cells": [
        "itemName"
      ],
      "line": 37,
      "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data;;1"
    },
    {
      "cells": [
        "iphone"
      ],
      "line": 38,
      "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data;;2"
    },
    {
      "cells": [
        "mac book"
      ],
      "line": 39,
      "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data;;3"
    },
    {
      "cells": [
        "Canon"
      ],
      "line": 40,
      "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1523204400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Every feature file starts with Feature: \u003cName of feature file\u003e"
    },
    {
      "line": 5,
      "value": "#Every Scenario starts with Scenario: \u003cName of Test case we want to automate\u003e"
    },
    {
      "line": 6,
      "value": "#Gherkin keywords are Given When Then"
    },
    {
      "line": 7,
      "value": "#Given is precondition"
    },
    {
      "line": 8,
      "value": "#When is an Action taken"
    },
    {
      "line": 9,
      "value": "#Then is an expected result (usually we write validation)"
    },
    {
      "line": 10,
      "value": "#And is repeating an action or can be used following Given keyword as well"
    },
    {
      "line": 11,
      "value": "#But is used for negative scenarios verification"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2405001700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Test Search Funtionality with multiple set of Data",
  "description": "",
  "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    },
    {
      "line": 29,
      "name": "@TestSmokee"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User search for \u0027iphone\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "iphone",
      "offset": 17
    }
  ],
  "location": "RetailPageTestStepDefinitions.user_search_for_iphone(String)"
});
formatter.result({
  "duration": 487505200,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_search_button()"
});
formatter.result({
  "duration": 354677500,
  "status": "passed"
});
formatter.after({
  "duration": 653858700,
  "status": "passed"
});
formatter.before({
  "duration": 1518089200,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Every feature file starts with Feature: \u003cName of feature file\u003e"
    },
    {
      "line": 5,
      "value": "#Every Scenario starts with Scenario: \u003cName of Test case we want to automate\u003e"
    },
    {
      "line": 6,
      "value": "#Gherkin keywords are Given When Then"
    },
    {
      "line": 7,
      "value": "#Given is precondition"
    },
    {
      "line": 8,
      "value": "#When is an Action taken"
    },
    {
      "line": 9,
      "value": "#Then is an expected result (usually we write validation)"
    },
    {
      "line": 10,
      "value": "#And is repeating an action or can be used following Given keyword as well"
    },
    {
      "line": 11,
      "value": "#But is used for negative scenarios verification"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2526832200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Test Search Funtionality with multiple set of Data",
  "description": "",
  "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    },
    {
      "line": 29,
      "name": "@TestSmokee"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User search for \u0027mac book\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "mac book",
      "offset": 17
    }
  ],
  "location": "RetailPageTestStepDefinitions.user_search_for_iphone(String)"
});
formatter.result({
  "duration": 605225200,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_search_button()"
});
formatter.result({
  "duration": 366317100,
  "status": "passed"
});
formatter.after({
  "duration": 684055500,
  "status": "passed"
});
formatter.before({
  "duration": 1540405400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Every feature file starts with Feature: \u003cName of feature file\u003e"
    },
    {
      "line": 5,
      "value": "#Every Scenario starts with Scenario: \u003cName of Test case we want to automate\u003e"
    },
    {
      "line": 6,
      "value": "#Gherkin keywords are Given When Then"
    },
    {
      "line": 7,
      "value": "#Given is precondition"
    },
    {
      "line": 8,
      "value": "#When is an Action taken"
    },
    {
      "line": 9,
      "value": "#Then is an expected result (usually we write validation)"
    },
    {
      "line": 10,
      "value": "#And is repeating an action or can be used following Given keyword as well"
    },
    {
      "line": 11,
      "value": "#But is used for negative scenarios verification"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2456408300,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Test Search Funtionality with multiple set of Data",
  "description": "",
  "id": "retail-website-features;test-search-funtionality-with-multiple-set-of-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    },
    {
      "line": 29,
      "name": "@TestSmokee"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User search for \u0027Canon\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Canon",
      "offset": 17
    }
  ],
  "location": "RetailPageTestStepDefinitions.user_search_for_iphone(String)"
});
formatter.result({
  "duration": 496058700,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_search_button()"
});
formatter.result({
  "duration": 375264300,
  "status": "passed"
});
formatter.after({
  "duration": 717906100,
  "status": "passed"
});
formatter.before({
  "duration": 1542931400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Every feature file starts with Feature: \u003cName of feature file\u003e"
    },
    {
      "line": 5,
      "value": "#Every Scenario starts with Scenario: \u003cName of Test case we want to automate\u003e"
    },
    {
      "line": 6,
      "value": "#Gherkin keywords are Given When Then"
    },
    {
      "line": 7,
      "value": "#Given is precondition"
    },
    {
      "line": 8,
      "value": "#When is an Action taken"
    },
    {
      "line": 9,
      "value": "#Then is an expected result (usually we write validation)"
    },
    {
      "line": 10,
      "value": "#And is repeating an action or can be used following Given keyword as well"
    },
    {
      "line": 11,
      "value": "#But is used for negative scenarios verification"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2443684300,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Register and Account test case",
  "description": "",
  "id": "retail-website-features;register-and-account-test-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@RegisterTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User click on Register option",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User fill the Registration form with Below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "telephone",
        "password",
        "confirmPassword",
        "subscribe"
      ],
      "line": 46
    },
    {
      "cells": [
        "Polina",
        "Zohal",
        "PolinaZohal@gmail.com",
        "45414578920",
        "testt",
        "testt",
        "no"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user acceptthe privacy and policy",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should be registered in Retail Website",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 58922600,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_Register_option()"
});
formatter.result({
  "duration": 765112900,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_fill_the_Registration_form_with_Below_information(DataTable)"
});
formatter.result({
  "duration": 737543000,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_acceptthe_privacy_and_policy()"
});
formatter.result({
  "duration": 385904200,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_Continue_button()"
});
formatter.result({
  "duration": 290033800,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_should_be_registered_in_Retail_Website()"
});
formatter.result({
  "duration": 30021480600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.128)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LAPTOP-5E7SJ6AA\u0027, ip: \u002710.0.0.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\suhra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57817}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 601abe1587316a8ed0909f185d67bfac\n*** Element info: {Using\u003dxpath, value\u003d//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat pageObjects.RetailPageObj.registerationOutcome(RetailPageObj.java:139)\r\n\tat stepDefinitions.RetailPageTestStepDefinitions.user_should_be_registered_in_Retail_Website(RetailPageTestStepDefinitions.java:91)\r\n\tat ✽.Then User should be registered in Retail Website(Features/RetailPage.feature:50)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 700742300,
  "status": "passed"
});
formatter.uri("Features/RetailPageLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Page Login Testing",
  "description": "",
  "id": "retail-page-login-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinTest"
    }
  ]
});
formatter.before({
  "duration": 1495284600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027deebahossain@gmail.com\u0027 and password \u0027love\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2502651700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 53171600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3589642400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deebahossain@gmail.com",
      "offset": 21
    },
    {
      "val": "love",
      "offset": 59
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 491581500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1265780400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3286739600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Register as an Affiliate userwith Cheque Payment Method",
  "description": "",
  "id": "retail-page-login-testing;register-as-an-affiliate-userwith-cheque-payment-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User click on‘Register for an Affiliate Account’link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User fill affiliate form with below information",
  "rows": [
    {
      "cells": [
        "company",
        "website",
        "taxID",
        "Cheque Payee Name"
      ],
      "line": 17
    },
    {
      "cells": [
        "Landover",
        "www.Landover.com",
        "121014",
        "David Dawson"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User check on About us check box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Continue button affiliate",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should see a success messages",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Register_for_an_Affiliate_Account_link()"
});
formatter.result({
  "duration": 30026516200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Register for an affiliate account\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.128)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LAPTOP-5E7SJ6AA\u0027, ip: \u002710.0.0.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\suhra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57842}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 20e509d22a9e3edf53a49753cb332d34\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Register for an affiliate account\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat pageObjects.RetailPageObject.registerForAffiliateAccount(RetailPageObject.java:20)\r\n\tat stepDefinitions.RetailPageLoginTestStepDefinition.user_click_on_Register_for_an_Affiliate_Account_link(RetailPageLoginTestStepDefinition.java:19)\r\n\tat ✽.When User click on‘Register for an Affiliate Account’link(Features/RetailPageLogin.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_affiliate_form_with_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_check_on_About_us_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Continue_button_affiliate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_messages()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 672928400,
  "status": "passed"
});
formatter.before({
  "duration": 1541499400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027deebahossain@gmail.com\u0027 and password \u0027love\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2702215000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 57883100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3588977700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deebahossain@gmail.com",
      "offset": 21
    },
    {
      "val": "love",
      "offset": 59
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 526020700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1129564200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3291088800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Edit your affiliate information from Cheque payment method to Bank Transfer",
  "description": "",
  "id": "retail-page-login-testing;edit-your-affiliate-information-from-cheque-payment-method-to-bank-transfer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User click on‘Edit your affiliate informationlink",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user click on Bank Transfer radio button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User fill Bank information with below information",
  "rows": [
    {
      "cells": [
        "bankName",
        "abaNumber",
        "swiftCode",
        "accountName",
        "accountNumber"
      ],
      "line": 28
    },
    {
      "cells": [
        "Bank of America",
        "100200",
        "225588",
        "Suhrab",
        "112233665544"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on Continue AffiliateButton",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_affiliate_informationlink()"
});
formatter.result({
  "duration": 30050721300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d \u0027Edit your affiliate information\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.128)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LAPTOP-5E7SJ6AA\u0027, ip: \u002710.0.0.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\suhra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57889}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9ebb675009a0b48366d98ea9f3593c39\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d \u0027Edit your affiliate information\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat pageObjects.RetailPageObject.editAffiliateInformation(RetailPageObject.java:78)\r\n\tat stepDefinitions.RetailPageLoginTestStepDefinition.user_click_on_Edit_your_affiliate_informationlink(RetailPageLoginTestStepDefinition.java:54)\r\n\tat ✽.When User click on‘Edit your affiliate informationlink(Features/RetailPageLogin.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Bank_Transfer_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_Bank_information_with_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_affiliatebutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 685630900,
  "status": "passed"
});
formatter.before({
  "duration": 1493879200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027deebahossain@gmail.com\u0027 and password \u0027love\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2747162500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 56595100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3592731800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deebahossain@gmail.com",
      "offset": 21
    },
    {
      "val": "love",
      "offset": 59
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 504009700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1010977300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3288870400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Edit your account Information",
  "description": "",
  "id": "retail-page-login-testing;edit-your-account-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User click on‘Edit your account information’ link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User modify below information",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastName",
        "email",
        "telephone"
      ],
      "line": 36
    },
    {
      "cells": [
        "Suhrab",
        "Khiabani",
        "falconeagle@tek-school.com",
        "301-401-7895"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User should seea message ‘Success: Your account has been successfully updated.’",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_account_information_link()"
});
