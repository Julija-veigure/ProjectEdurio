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

    driver.manage().window().maximize();
    await driver.get("https://edurio.com/teacher/poll/TftMJA");
    console.log("The survey is opened")
    await click(acptBtn);
    await scroll(200);
    await click(startSrv);
    await click(answer1);
    await click(nextBtn);
    await wait(By.xpath(".//div[@class = 'poll-question multichoice_radio']"));
    await scroll(200);
    await click(answer2);
    await scroll(200);
    await click(answer2Comment);
    await typeText(answ2CommentField, answ2CommentText);
    await click(nextBtn);
    await wait(By.xpath(".//div[@class = 'poll-question multichoice_radio']"));
    await scroll(500);

    // Need to discuss
    await click(answer3);
    await click(answer4);
    // await driver.findElements(By.xpath(".//span[text() = 'Quite confident']"))[1].click();
    // const question = [driver.findElements(By.xpath(".//span[text() = 'Quite confident']"))];
    // console.log("list size is ->" + question.length);//

    await click(nextBtn);
    await click(answer5first);
    await scrollTill(answer5second);
    await click(answer5second);
    await click(nextBtn);
    await wait(answer6);
    await typeText(answer6, answer6Text);
    await click(nextBtn);
    await click(finishSrvBtn);

}

runTest()