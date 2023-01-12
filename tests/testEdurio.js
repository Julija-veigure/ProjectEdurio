// const assert = require('assert');
// const {Builder, Key, By, until} = require('selenium-webdriver');
//
// (async function test() {
//     let driver = await new Builder().forBrowser('firefox').build();
//     try {
//         await driver.get("https://edurio.com/poll/TftMJA");
//         await driver.findElement(By.xpath(".//div[@class='accept-btn']")).click()
//
//     } finally {
//         //await driver.quit();
//     }
// })();

// recommendation from net:
// var window = new webdriver.WebDriver.Window(driver);
// window.maximize();

const {Builder, By, Key, until, WebElement} = require("selenium-webdriver");


async function runTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://edurio.com/teacher/poll/TftMJA");
    console.log("The survey is opened")

    // Step 2 - Accept cookies by clicking “OK”.
    await driver.findElement(By.xpath(".//div[@class='accept-btn']")).click();

    // Step 3 - Click the button “Start the poll”
    await driver.wait(until.elementLocated(By.xpath(".//button[text() = 'Start the poll']")), 10000).click();

    // Step 4 - Once the page loads, select the option “Year 3” and click the button “Next”
    await driver.wait(until.elementLocated(By.xpath(".//span[text() = 'Year 3']")), 10000).click();
    await driver.wait(until.elementLocated(By.xpath(".//button[@class = 'btn btn-full nw-survey-filing-next-link']")), 10000).click();

    // Step 5 - Once the page loads, select the option “Quite satisfied”
    await driver.wait(until.elementLocated(By.xpath(".//span[text() = 'Quite satisfied']")), 10000).click();

    // Step 6 - Click on the “Click here to further explain or specify your answer” element
    await driver.executeScript("arguments[0].scrollIntoView();", driver.findElement(By.xpath(".//div[@class = 'poll-comment']")));
    await driver.findElement(By.xpath(".//div[@class = 'poll-comment']")).click();

    // Step 7 - In the input field that appeared insert the text “We joined only 3 months ago.”
    await driver.findElement(By.xpath(".//textarea[@autofocus = 'autofocus']")).sendKeys("We joined only 3 months ago.");

    // Step 8 - In the input field that appeared insert the text “We joined only 3 months ago.”
    await driver.findElement(By.xpath(".//button[@class = 'btn btn-full nw-survey-filing-next-link']")).click(); //BTN next

    await driver.wait(until.elementLocated(By.xpath(".//span[text() = 'Completely confident']")), 10000); //wait

    await driver.executeScript("window.scrollBy(0,400)");
    // const question = [driver.findElements(By.xpath(".//span[text() = \"Don't know\"]"))];
    // console.log("list size is ->" + question.length);
    await driver.findElements(By.xpath(".//span[text() = \"Don't know\"]"))[0].click(); //Question 3, Don't know
    // await driver.findElements(By.xpath(".//span[text() = 'Quite confident']"))[1].click(); //Question 4, Quite confident
    // await driver.wait(until.elementLocated(By.xpath(".//button[@class = 'btn btn-full nw-survey-filing-next-link']")), 10000).click(); //Next Btn
    //
    // await driver.wait(until.elementLocated(By.xpath(".//span[text() = 'By e-mail']")), 10000).click(); //Question 5 By e-mail
    // await driver.executeScript("arguments[0].scrollIntoView();", driver.findElement(By.xpath(".//span[text() = 'From my child']"))).click();
    //
    //
    //
    // await driver.findElement(By.xpath(".//div[@class = 'poll-comment']")).click();
    // await driver.wait(until.elementLocated(By.xpath(".//span[text() = 'Quite satisfied']")), 10000).click(); //wait


    // js.executeScript("arguments[0].scrollIntoView();", driver.findElement(By.xpath(".//span[text() = 'From my child']")));
    // driver.findElement(By.xpath( ".//span[text() = 'From my child']")).click();//From my child
    // wait.until(ExpectedConditions.elementToBeClickable(By.xpath(".//button[@class = 'btn btn-full nw-survey-filing-next-link']")));
    // driver.findElement(By.xpath( ".//button[@class = 'btn btn-full nw-survey-filing-next-link']")).click();//BTN next
    //
    // wait.until(ExpectedConditions.elementToBeClickable(By.xpath(".//textarea[@rows = '2']")));
    // driver.findElement(By.xpath(".//textarea[@rows = '2']")).sendKeys("Make learning more relevant."); //Make learning more relevant.
    // wait.until(ExpectedConditions.elementToBeClickable(By.xpath(".//button[@class = 'btn btn-full nw-survey-filing-next-link']")));
    // driver.findElement(By.xpath( ".//button[@class = 'btn btn-full nw-survey-filing-next-link']")).click();//Finish survey btn
    //
    // wait.until(ExpectedConditions.elementToBeClickable(By.xpath(".//button[@class = 'modal-default-button']")));
    // driver.findElement(By.xpath( ".//button[@class = 'modal-default-button']")).click();//Finish survey btn
    //
    //
    // // }
    // // finally {
    // //     await driver.quit();
    // // }

}

runTest()