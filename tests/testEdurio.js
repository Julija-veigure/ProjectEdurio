const {Builder, By, until} = require("selenium-webdriver");
const acptBtn = By.xpath(".//div[@class='accept-btn']");
const nextBtn = By.xpath(".//button[@class = 'btn btn-full nw-survey-filing-next-link']");
const startSrv = By.xpath(".//button[text() = 'Start the survey']");
const answer1 = By.xpath(".//span[text() = 'Year 3']");
const answer2 = By.xpath(".//span[text() = 'Quite satisfied']");
const answer2Comment = By.xpath(".//div[@class = 'poll-comment']");
const answ2CommentField = By.xpath(".//textarea[@autofocus = 'autofocus']");
const answ2CommentText = "We joined only 3 months ago.";
const answer3 = By.xpath(".//span[text() = \"Don't know\"]");
const answer4 = By.xpath(".//span[text() = 'Quite confident']");
const answer5first = By.xpath(".//span[text() = 'By e-mail']");
const answer5second = By.xpath(".//span[text() = 'From my child']");
const answer6 = By.xpath(".//textarea[@rows = '2']");
const answer6Text = "Make learning more relevant.";
const finishSrvBtn = By.xpath(".//button[@class = 'modal-default-button']");

async function runTest() {

    let driver = await new Builder().forBrowser("chrome").build();

    function click(locator) {
        return driver.wait(until.elementLocated(locator), 10000).click();
    }

    function scroll(px) {
        return driver.executeScript("window.scrollBy(0," + px + ")");
    }

    function wait(locator) {
        return driver.wait(until.elementLocated(locator), 10000);
    }

    function scrollTill(locator) {
        return driver.executeScript("arguments[0].scrollIntoView();", driver.findElement(locator));
    }

    function typeText(locator, text) {
        return driver.findElement(locator).sendKeys(text);
    }

    // window.maximize();

    // Step 1 - Open the link
    await driver.get("https://edurio.com/teacher/poll/TftMJA");
    console.log("The survey is opened")

    // Step 2 - Accept cookies by clicking “OK”
    await click(acptBtn);

    // Step 3 - Click the button “Start the poll”
    await scroll(200);
    await click(startSrv);

    // Step 4 - Once the page loads, select the option “Year 3” and click the button “Next”
    await click(answer1);
    await click(nextBtn);

    // Step 5 - Once the page loads, select the option “Quite satisfied”
    await wait(By.xpath(".//div[@class = 'poll-question multichoice_radio']"));
    await scroll(200);
    await click(answer2);

    // Step 6 - Click on the “Click here to further explain or specify your answer” element
    await scroll(200);
    await click(answer2Comment);

    // Step 7 - In the input field that appeared insert the text “We joined only 3 months ago.”
    await typeText(answ2CommentField, answ2CommentText);

    // Step 8 - Click the button “Next”.
    await click(nextBtn);

    // Step 9 - Once the page loads, select the option “Don’t know” (for question 3) //Need to discuss
    await wait(By.xpath(".//div[@class = 'poll-question multichoice_radio']"));
    await scroll(500);
    await click(answer3);

    // Step 10 - Select the option “Quite confident” (for question 4) //Need to discuss
    await click(answer4);
    // await driver.findElements(By.xpath(".//span[text() = 'Quite confident']"))[1].click();
    // const question = [driver.findElements(By.xpath(".//span[text() = 'Quite confident']"))];
    // console.log("list size is ->" + question.length);//

    // Step 11 - Click the button “Next”
    await click(nextBtn);

    // Step 12 - Once the page loads, select the options “By e-mail”
    await click(answer5first);

    // Step 13 - Select the options “From my child”
    await scrollTill(answer5second);
    await click(answer5second);

    // Step 14 - Click the button “Next”
    await click(nextBtn);

    // Step 15 - Once the page loads, in the input field for question 6 insert the text “Make learning more relevant.”
    await wait(answer6);
    await typeText(answer6, answer6Text);

    // Step 16 - Click the button “Finish survey”
    await click(nextBtn);

    // Step 17 - On the confirmation modal click the button “Finish survey”
    await click(finishSrvBtn);

}

runTest()