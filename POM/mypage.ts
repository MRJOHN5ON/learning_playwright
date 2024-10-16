
import { Page, Locator, FrameLocator } from '@playwright/test';
export const selectors = {

    //nav menu items
    topHomeButton: '#myNavMenu >> text=Home',
    topAboutButton: '#myNavMenu >> text=About',
    topProjectButton: '#myNavMenu >> text=Projects',
    topContactButton: '#myNavMenu >> text=Contact',

    //file download buttons
    resumePDF: 'a.btn.blue-btn:has-text("RESUME")',
    coverLetterPDF: 'a.btn:has-text("COVER LETTER")',

    //social media buttons
    linkedIn:'a[href="https://www.linkedin.com/in/ryleyj"]',
    gitHub: 'a[href="https://github.com/MRJOHN5ON"]',

    //projects box link containers
    project1: '//*[@id="projects"]/div[2]/div[1]/a/h3',
    project2: '//*[@id="projects"]/div[2]/div[2]/a/h3',
    project3: '#projects > div.project-container > div:nth-child(3) > a > h3',
    project4: '#projects > div.project-container > div:nth-child(4) > a > h3',
    project5: '#projects > div.project-container > div:nth-child(5) > a > h3',

    //project one page
    gitHubRepoBt: 'a[href="https://github.com/MRJOHN5ON/postmanAPI_testing"]',
    image1: 'img[alt="Adding Products to a Kit"]',
    image2: 'img[alt="Exceeding 30 Items"]',
    jiraBugImage: 'img[alt="Bug Report in JIRA"]',
    image3: 'img[alt="Non-existent Product IDs"]',
    resultsImage: 'img[alt="Results"]',
    backToHome: 'role=link[name="Go Back To Home Page"]',

    //project 2 page
    youtubeVideo: '/html/body/main/div[1]/iframe',
    dropdownBt: '.accordion',
    openedDropdown: '.accordion-header.active',
    dropDownPic1: 'img[alt="Mind Map 1"]',
    dropDownPic2:'img[alt="Mind Map 2"]',
    dropDownPic3:'img[alt="Mind Map 3"]',
    dropDownPic4:'img[alt="Mind Map 4"]',
    dropDownPic5:'img[alt="Mind Map 5"]',
    failedText: '.status-failed',

    // project 4 page
    summerAppBt: 'a[href="https://summeradventure.netlify.app/"]',
    jasmineBt: 'a[href="https://www.linkedin.com/in/jasmine-dardy/"]',
    noahBt: 'a[href="https://www.linkedin.com/in/noah-arbaugh/"]',
    


    //home page images
    profilePic1: 'img[alt="avatar"]',
    profilePic2: 'img[alt="My Photo"]',

     // Form field placeholders
     nameField: 'input[placeholder="Name"]',
     emailField: 'input[placeholder="Email"]',
     messageField: 'textarea[placeholder="message"]',
     sendButton: '//*[@id="contact-form"]/div[3]/button',

     //urban scooter page images
     urbanScooterPic: 'img[alt="urbanscooter"]',
     placeOrderpic:'img[alt="Place Order Screen"]',
     requiermentsPic: 'img[alt="Field Restrictions"]',
     typeErrorPic: 'img[alt="Unexpected Application Error"]',
     JiraBugReport1: 'img[alt="Jira Bug Report - Input Field Vulnerability"]',
     loginAndroidPic: 'img[alt="Login page andriod"]',
     notificationsAndroidPic: 'img[alt="Notifications Feature"]',
     androidAlertPic: 'img[alt="Notifications alert"]',
     noInternetPic: 'img[alt="No Internet Connection Pop-Up"]',
     JiraBugReport2: 'img[alt="Notification Tests Results"]',
     JiraBugReport3: 'img[alt="Internet Connection Tests Results"]',

     //urban scooter page icons
     webIcon: '.uil.uil-browser.overview-icon',
     mobileIcon: '.uil.uil-android-alt.overview-icon',
     databaseIcon: '.uil.uil-database.overview-icon',
     checkMarkIcon: '.uil.uil-check.methodologies-icon',
     softwareEngineerIcon: '#softwareengineer',
     bugIcon: '#BugSearch',
     ApiIcon: '#Api',
     postmanIcon: '#Postman',
     JiraIcon: '#Jira',
     googleSheetsIcon: '#Google',
     chromeDevToolsIcon: '#Chrome',
     androidStudioIcon: '#Android',
     figmaIcon: '#Figma',
     terminalIcon: '#Terminal',
     swaggerIcon: '#apimobileprogram',

     //urban scooter page buttons
     figmaBt: 'a.btn:has-text("  View Figma Layout Specs")',
     backToHomeLink: 'a[href="index.html"]',
     projectBankLink: 'a[href="https://mrjohn5on.github.io/#projects"]',
     


};

export const urls ={

    //Home page links
    BASEURL: 'https://mrjohn5on.github.io/',
    indexUrl: 'https://mrjohn5on.github.io/index.html',
    topHomeUrl: 'https://mrjohn5on.github.io/#home',
    topAboutUrl: 'https://mrjohn5on.github.io/#about',
    topProjectsUrl: 'https://mrjohn5on.github.io/#projects',
    topContactButton: 'https://mrjohn5on.github.io/#contact',
    linkedInPage: 'https://www.linkedin.com/in/ryleyj',
    gitHubPage: 'https://github.com/MRJOHN5ON',
    projectOne: 'https://mrjohn5on.github.io/project1.html',
    projectTwo: 'https://mrjohn5on.github.io/project2.html',
    projectThree: 'https://mrjohn5on.github.io/project3.html',
    projectFour: 'https://github.com/MRJOHN5ON/Swaglabs-Username-Acceptance-Test',
    projectFive: 'https://mrjohn5on.github.io/project4.html',
    urbanScooter:'https://mrjohn5on.github.io/urbanscooters.html',
    

    //Project one page links
    projectOneRepo: 'https://github.com/MRJOHN5ON/postmanAPI_testing',
    firstImage: 'https://mrjohn5on.github.io/assets/images/p1.png',
    secondImage: 'https://mrjohn5on.github.io/assets/images/p2.png',
    jira1: 'https://mrjohn5on.github.io/assets/images/p3.png',
    jira2: 'https://mrjohn5on.github.io/assets/images/p5.png',
    ThirdImage: 'https://mrjohn5on.github.io/assets/images/p4.png',
    results: 'https://mrjohn5on.github.io/assets/images/p6.png',
   

    //Project 4 page links 
    summerApp: 'https://summeradventure.netlify.app/',
    noahLinkedIn: 'https://www.linkedin.com/in/noah-arbaugh/',
    jasmineLinkedIn: 'https://www.linkedin.com/in/jasmine-dardy/',

    //urban scooter page links
    overviewMenuBt:'https://mrjohn5on.github.io/urbanscooters.html#overview',
    testingScopeMenuBt:'https://mrjohn5on.github.io/urbanscooters.html#testing-scope',
    methodologyMenuBt:'https://mrjohn5on.github.io/urbanscooters.html#methodologies',
    toolsMenuBt:'https://mrjohn5on.github.io/urbanscooters.html#tools',
    webTestingMenuBt:'https://mrjohn5on.github.io/urbanscooters.html#web-testing',
    mobileTestingMenuBt:'https://mrjohn5on.github.io/urbanscooters.html#mobile-testing',
    apiTestingMenuBt:'https://mrjohn5on.github.io/urbanscooters.html#api-testing',
    figmaWebLink: 'https://www.figma.com/design/PiEK0kEfKb94vSqtoCQG1w/Web?node-id=0-1&node-type=canvas',
    figmaMobileLink:'https://www.figma.com/file/Ql81P6XKXadabhs5Hi6BxP/mobile?node-id=0%3A1&t=EFnpFwwT1DRQlhIy-1',  
    
   




};

export class MyPage {
    readonly page: Page;
    readonly iframe: FrameLocator;
    readonly demoLink: Locator;

    constructor(page: Page) {
        this.page = page;
        // Define the iframe locator using the title attribute
        this.iframe = page.frameLocator('iframe[title="YouTube video player"]');
        // Define the locator for the link within the iframe
        this.demoLink = this.iframe.locator('a', { hasText: 'Urban Lunch App Demonstration' });
    }

    // Method to click the demo link
    async clickDemoLink() {
        await this.demoLink.click();
    }

    // Method to get the text of the demo link
    async getDemoLinkText() {
        return await this.demoLink.textContent();
    }
}