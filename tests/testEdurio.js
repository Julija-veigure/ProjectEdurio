const {Builder, By, until} = require("selenium-webdriver");
const nextBtn = By.xpath(".//button[@class = 'btn btn-full nw-survey-filing-next-link']")




async function runTest() {

    function click(locator){
        return driver.wait(until.elementLocated(locator), 10000).click();
    }

    function scroll(px){
        return driver.executeScript("window.scrollBy(0," + px + ")")
    }

    function wait(locator){
        return driver.executeScript("arguments[0].scrollIntoView();", driver.findElement(locator))
    }

    let driver = await new Builder().forBrowser("chrome").build();
    // window.maximize();

    // Step 1 - Open the link
    await driver.get("https://edurio.com/teacher/poll/TftMJA");
    console.log("The survey is opened")

    // Step 2 - Accept cookies by clicking “OK”
    await click(By.xpath(".//div[@class='accept-btn']"));

    // Step 3 - Click the button “Start the poll”
    await scroll(200)
    await click(By.xpath(".//button[text() = 'Start the survey']"));

    // Step 4 - Once the page loads, select the option “Year 3” and click the button “Next”
    await click(By.xpath(".//span[text() = 'Year 3']"));
    await click(nextBtn);

    // Step 5 - Once the page loads, select the option “Quite satisfied”
    await wait(By.xpath(".//div[@class = 'poll-question multichoice_radio']"));
    await scroll(200);
    await click(By.xpath(".//span[text() = 'Quite satisfied']"));

    // Step 6 - Click on the “Click here to further explain or specify your answer” element
    await scroll(200);
    await click(By.xpath(".//div[@class = 'poll-comment']"));

    // Step 7 - In the input field that appeared insert the text “We joined only 3 months ago.”
    await driver.findElement(By.xpath(".//textarea[@autofocus = 'autofocus']")).sendKeys("We joined only 3 months ago.");

    // Step 8 - Click the button “Next”.
    await click(nextBtn);

    // Step 9 - Once the page loads, select the option “Don’t know” (for question 3) //Need to discuss
    await wait(By.xpath(".//div[@class = 'poll-question multichoice_radio']"));
    await scroll(500);
    await click(By.xpath(".//span[text() = \"Don't know\"]"));

    // Step 10 - Select the option “Quite confident” (for question 4) //Need to discuss
    await click(By.xpath(".//span[text() = 'Quite confident']"));
    // await driver.findElements(By.xpath(".//span[text() = 'Quite confident']"))[1].click();
    // const question = [driver.findElements(By.xpath(".//span[text() = 'Quite confident']"))];
    // console.log("list size is ->" + question.length);//

    // Step 11 - Click the button “Next”
    await click(nextBtn);

    // Step 12 - Once the page loads, select the options “By e-mail”
    await click(By.xpath(".//span[text() = 'By e-mail']"));

    // Step 13 - Select the options “From my child”
    await driver.executeScript("arguments[0].scrollIntoView();", driver.findElement(By.xpath(".//span[text() = 'From my child']")));
    await click(By.xpath(".//span[text() = 'From my child']"));

    // Step 14 - Click the button “Next”
    await click(nextBtn);

    // Step 15 - Once the page loads, in the input field for question 6 insert the text “Make learning more relevant.”
    await wait(By.xpath(".//textarea[@rows = '2']"));
    await driver.findElement(By.xpath(".//textarea[@rows = '2']")).sendKeys("Make learning more relevant.");

    // Step 16 - Click the button “Finish survey”
    await click(nextBtn);

    // Step 17 - On the confirmation modal click the button “Finish survey”
    await click(By.xpath(".//button[@class = 'modal-default-button']"));

}

runTest()