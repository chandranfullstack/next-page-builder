'use strict';

const sourceH1=`
<DevelopCard><DevelopCard/>
`
const sourceH2=`
<DigitalTranformation><DigitalTranformation/>
`
const sourceH3=`
<AppBox
    backgroundImage="url(/home/hero-bg.png)",
    backgroundRepeat= "no-repeat",
    backgroundSize="cover",
    backgroundPosition="bottom",
    paddingBottom="100px",
      >
<AppFlex>
      <AppFlex
        alignItems="center"
        gap="40px"
        mt="28px"
        direction="row"
      >
        <AppBox w="100%">
          <AppText
            textStyle="heroSubHead"
            as="span"
            fontSize="55px"
            lineHeight="72px"
            text="Start Solving Your Tech Skill Gaps To"
          />
          <AppText
            textStyle="heroHead"
            as="span"
            fontSize="55px"
            lineHeight="72px"
            customStyle="10px"
            text="Accelerate Business Transformation."
          />

          <AppDivider "pt"="10px" />

          <AppText
            textStyle="hero_italic"
            "color"="appColors.apporange["100"]","pt"= "20px"
            text="Digital Transformation. Skill at Scale with Speed."
          />
          <AppText
            textStyle="fs3"
            "pt"="10px"
            text=
              "Higher adoption rates. Better learner engagement. Improved course completion rates. Aligned to business impact. Delivered on time, every time through a comprehensive learning ecosystem that enables multiple learner journeys."
            
          />
          <AppFlex
            gap="8px"
            justifyContent="md":"start"
            "pt"="20px"
          >
            <AppButton variant="primarybtn">Watch Demo</AppButton>
          </AppFlex>
        </AppBox>
        <AppFlex "w"="42%", "justifyContent"="end">
          <AppImage
            src="/home/hero-img.svg"
            width=563
            height=606
            alt="Image"
          />
        </AppFlex>
      </AppFlex>
    </AppFlex>
    </AppBox>
`

const sourceH4=`
<LxpCard><LxpCard/>
`
const sourceH5=`
<MesaureCritical><MesaureCritical/>
`
const sourceH6=`
<Organisations><Organisations/>
`
const sourceH7=`
<Organisations><Organisations/>
`
const sourceH8=`
<Testimonial><Testimonial/>
`


const Component$H1 = {
  source: sourceH1,
  displayName: "Component 1",
  category: "Home"
};
const Component$H2 = {
  source: sourceH2,
  displayName: "Component 2",
  category: "Home"
};
const Component$H3 = {
  source: sourceH3,
  displayName: "Hero",
  category: "Home"
};
const Component$H4 = {
  source: sourceH4,
  displayName: "Component 4",
  category: "Home"
};
const Component$H5 = {
  source: sourceH5,
  displayName: "Component 5",
  category: "Home"
};
const Component$H6 = {
  source: sourceH6,
  displayName: "Component 6",
  category: "Home"
};
const Component$H7 = {
  source: sourceH7,
  displayName: "Component 7",
  category: "Home"
};
const Component$H8 = {
  source: sourceH8,
  displayName: "Component 8",
  category: "Home"
};


const source$1f = `
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt="">

                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p class="text-sm text-blue-500 uppercase">category</p>

                    <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                        All the features you want to know
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                    <div class="flex items-center mt-6">
                        <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="">

                        <div class="mx-4">
                            <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const Component$1f = {
  source: source$1f,
  displayName: "Blog 1",
  category: "Blogs"
};


const source$13 = `
<section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
            Join us and get the update <br> from anywhere
        </h2>

        <div class="mt-6 sm:-mx-2">
            <div class="inline-flex w-full sm:w-auto sm:mx-2">
                <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Buy Blox Now
                </a>
            </div>

            <div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
                <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                    Start a Journey
                </a>
            </div>
        </div>
    </div>
</section>
`;

const Component$13 = {
  source: source$13,
  displayName: "Cta 1",
  category: "CTA"
};

const source$U = `
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
                    <path d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z" fill="#2D3748"/><path d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z" fill="#2D3748"/><path d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z" fill="#4299E1"/>
                </svg>

                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Default Taiwindcss Config</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>

            <div>
                <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
                    <path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#2D3748"/><path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#4299E1"/><path d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z" fill="#4299E1"/>
                </svg>

                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Fully Responsive Components</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>

            <div>
                <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
                    <path d="M26.599 4.339a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM7.151 25.661a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM23.486 13.163a8.636 8.636 0 00-1.19-2.873l1.123-1.123-2.592-2.59L19.705 7.7a8.636 8.636 0 00-2.873-1.19V4.921h-3.664v1.586a8.634 8.634 0 00-2.873 1.19l-1.122-1.12-2.592 2.589 1.123 1.123a8.636 8.636 0 00-1.19 2.873H4.922l-.002 3.663h1.592A8.626 8.626 0 007.704 19.7l-1.127 1.127 2.59 2.591 1.128-1.127a8.623 8.623 0 002.873 1.19v1.597h3.664v-1.597a8.628 8.628 0 002.873-1.19l1.128 1.128 2.59-2.592-1.127-1.127a8.627 8.627 0 001.19-2.873h1.593v-3.664h-1.593zM15 19.256a4.255 4.255 0 110-8.511 4.255 4.255 0 010 8.51z" fill="#4299E1"/><path d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z" fill="#2D3748"/><path d="M12.582 25.078c0 .324.263.586.586.586h3.664a.586.586 0 00.586-.586v-1.136a9.179 9.179 0 002.199-.911l.802.802a.586.586 0 00.829 0l2.59-2.592a.586.586 0 000-.828l-.802-.802a9.169 9.169 0 00.911-2.199h1.132a.586.586 0 00.586-.585v-3.664a.586.586 0 00-.586-.586h-1.132a9.17 9.17 0 00-.911-2.199l.797-.797a.587.587 0 000-.829l-2.592-2.59a.586.586 0 00-.829 0l-.795.797a9.177 9.177 0 00-2.2-.912V4.922a.586.586 0 00-.585-.586h-3.664a.586.586 0 00-.586.586v1.126a9.169 9.169 0 00-2.199.91l-.796-.795a.586.586 0 00-.828 0l-2.592 2.59a.585.585 0 000 .828l.797.797a9.173 9.173 0 00-.911 2.199h-1.13a.586.586 0 00-.586.585l-.002 3.664a.585.585 0 00.586.586h1.132c.207.77.512 1.507.911 2.2l-.801.8a.586.586 0 000 .83l2.59 2.59a.586.586 0 00.829 0l.801-.801a9.185 9.185 0 002.2.911v1.136zm-1.97-3.28a.586.586 0 00-.732.078l-.713.714-1.761-1.763.712-.713a.586.586 0 00.078-.732 8.02 8.02 0 01-1.11-2.679.586.586 0 00-.572-.462H5.507l.002-2.492h1.005a.586.586 0 00.572-.463 8.022 8.022 0 011.11-2.678.586.586 0 00-.078-.733l-.708-.708 1.763-1.761.707.707c.196.196.5.228.733.078a8.016 8.016 0 012.678-1.11.586.586 0 00.463-.573v-1h2.492v1c0 .277.193.515.463.573a8.024 8.024 0 012.678 1.11c.232.15.537.118.732-.078l.708-.707 1.762 1.761-.708.708a.586.586 0 00-.078.732 8.027 8.027 0 011.11 2.679c.058.27.297.463.573.463h1.007v2.492h-1.007a.586.586 0 00-.573.462 8.02 8.02 0 01-1.11 2.679.586.586 0 00.078.732l.713.713-1.761 1.762-.714-.713a.586.586 0 00-.732-.078 8.027 8.027 0 01-2.678 1.11.586.586 0 00-.463.573v1.011h-2.492v-1.01a.586.586 0 00-.463-.574 8.021 8.021 0 01-2.678-1.11z" fill="#2D3748"/><path d="M19.841 15A4.847 4.847 0 0015 10.158 4.847 4.847 0 0010.158 15 4.847 4.847 0 0015 19.841 4.847 4.847 0 0019.841 15zm-8.51 0A3.674 3.674 0 0115 11.33 3.674 3.674 0 0118.67 15 3.674 3.674 0 0115 18.67 3.674 3.674 0 0111.33 15z" fill="#2D3748"/><path d="M20.395 2.216a.59.59 0 00.415-.172.593.593 0 00.171-.415.59.59 0 00-.586-.586.589.589 0 00-.586.586.589.589 0 00.586.587zM9.63 27.794a.59.59 0 00-.586.586.59.59 0 00.586.586.59.59 0 00.586-.586.59.59 0 00-.586-.585z" fill="#4299E1"/>
                </svg>

                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">RTL Languages Support</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>
        </div>
    </div>
</section>
`;

const Component$U = {
  source: source$U,
  displayName: "Features 1",
  category: "Features"
};


const source$N = `
<AppFlex
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      width="100%",
      pt= "163px",
      pb="100px",
      backgroundColor="#1B1B1B",
      backgroundImage='url(/footerbg.svg)' 
      backgroundRepeat="no-repeat",
      backgroundSize= "cover",
    >
      <AppContainer>
        <AppFlex
          direction="column"
            gap= "1rem",
            width= "100%",
            alignItems="start",
            color="white",
        >
          <AppFlex
            direction="column"
            alignItems="start"
            width="20%"
          >
            <AppImage
              src="/common/logo.svg"
              alt="arrow"
              width=220
              height=120
            />
            <AppLink display="block" href="/">
              <AppFlex gap="0.5rem">
                <AppImage
                  src="/common/mail.svg"
                  alt="arrow"
                  width=20
                  height=20
                />
                <AppText text="contact@techademy.net" />
              </AppFlex>
            </AppLink>
          </AppFlex>
          <AppGrid
            width="80%"           
            gap="40px"
            templateColumns="repeat(3,1fr)",
            justifyItems="start"
          >
            <AppFlex
              gap="0.6rem"
              direction="column"
              alignItems="flex-start"
            >
              <AppText
                text="Solutions"
                  color= "#737373",
                  fontSize="16px",
              />
              <a class="link text-white" href="/cloud-labs">Cloud Labs</a>
              <a class="link text-white" href="/assessments">Assessment Platform</a>
              <a class="link text-white" href="/content-engine">Content Engine</a>
              <a class="link text-white" href="/virtutor">Virtutor</a>
              <a class="link text-white" href="/hackathons">Hackathons</a>
            </AppFlex>
            <AppFlex
              direction="column"
              gap="0.6rem"
              alignItems="flex-start"
            >
              <AppText
                text="Skilling Solutions"
                  color= "#737373",
                  fontSize= "16px",
              />
              <a class="link text-white" href="/solutions/ld/lateral-training">Lateral Training</a>
              <a class="link text-white" href="/solutions/ld/certification-paths">Certification Paths</a>
              <a class="link text-white" href="/solutions/hr/new-hire-foundation">New Hire Foundation</a>
              <a class="link text-white" href="/solutions/ld/upskill-and-reskill">Upskilling &amp; Reskilling</a>
            </AppFlex>
            <AppFlex
              gap="0.6rem"
              direction="column"
              alignItems="flex-start"
            >
              <AppText
                text="Featured Platform "
                  color="#737373",
                  fontSize= "16px",
              />
              <a class="link text-white" href="/solutions/ld">Learning & Development</a>
              <a class="link text-white" href="/solutions/hr/hiring">Human Resource</a>
              <a class="link text-white" href="/solutions/cxo">CXO</a>
              <a class="link text-white" href="/solutions/hr/student-engagement">Student Engagement</a>
            </AppFlex>
            <AppFlex
              direction="column"
              gap="0.6rem"
              alignItems="flex-start"
            >
              <AppText
                text="Platform by Use Case"
                color="#737373",
                fontSize="16px",
              />
              <a class="link text-white" href="/learning-analytics">Learning Analytics</a>
              <a class="link text-white" href="/solutions/hr/campus-hiring">Campus Hiring</a>
              <a class="link text-white" href="/proctoring">Proctoring</a>
              <a class="link text-white" href="/solutions/hr/hiring">Hiring</a>
            </AppFlex>

            <AppFlex
              gap="0.6rem"
              direction="column"
              alignItems="flex-start"
            >
              <AppText
                text="Resources"
                  color="#737373",
                  fontSize= "16px",
              />
              <a class="link text-white" href="/resources/blog">Blog</a>
              <a class="link text-white" href="/resources/case-studies">Case Studies</a>
              <a class="link text-white" href="/resources/ebooks">eBooks</a>
            </AppFlex>
          </AppGrid>
        </AppFlex>
        <AppFlex
          direction="column"
          alignItems="flex-start"
            gap= "2rem",
            width= "100%",
            height= "100%",
            flex="1",
            paddingTop="1.5rem",
        >
          <AppBox
              width="100%",
              height= "1px",
              backgroundColor="#fff",
              opacity= "0.2",
          />
          <AppFlex
            justifyContent="space-between"
              width= "100%",
          >
            <AppFlex
              gap="0.6rem"
                color: "#fff",
            >
              <AppImage
                src="/common/globe.svg"
                alt="arrow"
                width=20
                height=20
              />
              United States (English)
            </AppFlex>
            <AppFlex
              gap="1.5rem"
              color="#fff",
            >
              <AppLink
                target="_blank"
                href="https://www.linkedin.com/company/techademy-ulxp/"
              >
                <AppImage
                  src="/common/LinkedIn.svg"
                  alt="arrow"
                  width=20
                  height=20
                />
              </AppLink>
              <AppLink
                target="_blank"
                href="https://www.youtube.com/@techademy1221"
              >
                <AppImage
                  src="/common/YouTube.svg"
                  alt="arrow"
                  width=20
                  height=20
                />
              </AppLink>
              <AppLink
                target="_blank"
                href="https://www.instagram.com/techademy_ULXP/"
              >
                <AppImage
                  src="/common/Instagram.svg"
                  alt="arrow"
                  width=20
                  height=20
                />
              </AppLink>
            </AppFlex>
          </AppFlex>
          <AppBox
              width="100%",
              height="1px",
              backgroundColor="#fff",
              opacity= "0.2",
          />
          <AppFlex
            justifyContent="space-between"
              width="100%",
              fontSize="16px"
          >
            <AppText
                fontSize="16px",
                color= "#737373",
              text="© 2023 Techademy.net"
            />
            <AppBox>
              <AppLink
                href="/privacy-policy"
                fontSize="16px"
              >
                Privacy Policy
              </AppLink>
              <AppBox m= "0px 4px", display="inline">
                |
              </AppBox>

              <AppLink
                href="/terms-of-service"
                fontSize="16px"
              >
                Terms & Conditions
              </AppLink>
            </AppBox>
          </AppFlex>
        </AppFlex>
      </Container>
    </AppFlex>`;

const Component$N = {
  source: source$N,
  displayName: "Footer 1",
  category: "Footers"
};

const source$O=`
<AppFooter>
<AppFooter>
`

const Component$O={
  source:source$O,
  displayName:"footer2",
  category:"Footers"
}

const source$E = `
<AppBox
    backgroundImage="url(/home/hero-bg.png)",
    backgroundRepeat= "no-repeat",
    backgroundSize="cover",
    backgroundPosition="bottom",
    paddingBottom="100px",
      >
<AppFlex>
      <AppFlex
        alignItems="center"
        gap="40px"
        mt="28px"
        direction="row"
      >
        <AppBox w="100%">
          <AppText
            textStyle="heroSubHead"
            as="span"
            fontSize="55px"
            lineHeight="72px"
            text="Start Solving Your Tech Skill Gaps To"
          />
          <AppText
            textStyle="heroHead"
            as="span"
            fontSize="55px"
            lineHeight="72px"
            customStyle="10px"
            text="Accelerate Business Transformation."
          />

          <AppDivider "pt"="10px" />

          <AppText
            textStyle="hero_italic"
            "color"="appColors.apporange["100"]","pt"= "20px"
            text="Digital Transformation. Skill at Scale with Speed."
          />
          <AppText
            textStyle="fs3"
            "pt"="10px"
            text=
              "Higher adoption rates. Better learner engagement. Improved course completion rates. Aligned to business impact. Delivered on time, every time through a comprehensive learning ecosystem that enables multiple learner journeys."
            
          />
          <AppFlex
            gap="8px"
            justifyContent="start"
            "pt"="20px"
          >
            <AppButton variant="primarybtn">Watch Demo</AppButton>
          </AppFlex>
        </AppBox>
        <AppFlex "w"="42%", "justifyContent"="end">
          <AppImage
            src="/home/hero-img.svg"
            width=563
            height=606
            alt="Image"
          />
        </AppFlex>
      </AppFlex>
    </AppFlex>
    </AppBox>
`

const ComponentH = {
  source: source$E,
  displayName: "Hero",
  category: "Heros"
};

const SourceHero1=`
    <AppBox
      backgroundImage= 'url(/platform/assessment-herobg.svg)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
      backgroundPosition:="bottom",
      py="161px",
      pl="120px",
    >
    <AppBox w="586px">
          <AppText textStyle="fs10"  as="span" text="Having The " />
          <AppText as="span" textStyle="h10" text=" Right Talent " />
          <AppText textStyle="fs10" as="span" text=" With The " />
          <AppText as="span" textStyle="h10" text=" Right Skills " />
          <AppText
            as="span"
            textStyle="fs10"
            text="Is Critical To Your Success"
          />
        </AppBox>
      <AppText
        w="632px"
        pr="5px"
        mt="10px"
        textStyle="fs3"
        text="We get this. That’s why we’ve designed our assessment platform to do the heavy lifting for you. This starts with our End-to-end Fullstack Assessment, giving you clear data to make informed learning decisions, rather than relying on instincts and assumptions."
      />
      <AppFlex gap="8px" mt="25px">
        <AppButton variant="primarybtn">Request a Demo</AppButton>
        <AppButton variant="primaryoutlinebtn">Talk to Sales</AppButton>
      </AppFlex>
  </AppBox>
`

const ComponentH1 = {
  source: SourceHero1,
  displayName: "Hero1",
  category: "Heros"
};

const SourceHero2=`
    <AppBox
      backgroundImage= 'url(/platform/cl-herobg.png)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
      backgroundPosition:="bottom",
      py="170px",
      pl="120px",
    >
    <AppBox w="666px">
          <AppText
            as="span"
            textStyle="fs10"
            fontSize="30px"
            text="Develop And Practice Skills "
          />
          <AppText
            textStyle="fs10"
            fontSize="30px"
            as="span"
            text=" In A secure, Customized Environment That Mirrors Your Production Environments"
          />
        </AppBox>
      <AppText
        w="632px"
        pr="5px"
        mt="10px"
        textStyle="fs3"
        text="Change the way your workforce learns by enabling them to develop strong proficiencies with a library of over 2000+ virtual tech labs. Compiled and curated for every leaner’s specific goals and roles, Techademy’s practice labs puts leaners in an environment that mirrors projects that they would tackle in real-world."
      />
      <AppFlex gap="8px" mt="25px">
        <AppButton variant="primarybtn">Request a Demo</AppButton>
        <AppButton variant="primaryoutlinebtn">Talk to Sales</AppButton>
      </AppFlex>
  </AppBox>
`

const ComponentH2 = {
  source: SourceHero2,
  displayName: "Hero 2",
  category: "Heros"
};


const SourceHero3=`
    <AppBox
      backgroundImage= 'url(/platform/contentEngine-herobg.png)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
      backgroundPosition="bottom",
      py="160px",
      pl="120px",
    >
    <AppBox w="666px">
    <AppText
    textStyle="fs11"
    text="Take The Quickest Path To Meeting Your Learning Objectives"
    color="#FFFFFF"
    />
        </AppBox>
      <AppText
        w="632px"
        pr="5px"
        mt="10px"
        textStyle="fs3"
        text="Explore objective-driven learning experiences that combine theory, technical knowledge, practice sessions and end-to-end assessments to master skills that can be used in real-world scenarios"
      />
      <AppFlex gap="8px" mt="25px">
        <AppButton variant="primarybtn">Request a Demo</AppButton>
        <AppButton variant="primaryoutlinebtn">Talk to Sales</AppButton>
      </AppFlex>
  </AppBox>
`

const ComponentH3 = {
  source: SourceHero3,
  displayName: "Hero 3",
  category: "Heros"
};

const SourceHero4=`
    <AppBox
      backgroundImage= 'url(/platform/analytics.png)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
      backgroundPosition="bottom",
      py="160px",
      pl="120px",
    >
    <AppBox w="666px">
    <AppText
    textStyle="fs10"
    text="Real-Time Insights About"
    color="#FFFFFF",
    fontSize= "40px",
    fontWeight="600",
    lineHeight="50px",
    />
    <AppText 
          textStyle="fs10"
          as="span" 
          text="Your Organization’s Capabilities" 
          fontSize="40px",fontWeight="600",lineHeight="50px"
          />
    </AppBox>
      <AppText
        w="632px"
        pr="5px"
        mt="10px"
        textStyle="fs3"
        text="Track progress with insights into skill development over time to ensure your org is prepared to deliver on key initiative. Leverage an advanced learning analytics to get a better understanding of your organisation’s knowledge progression accurately and objectively. Our out-of-the-box analytics give you clarity into where people sit currently versus your desired future state."
      />
      <AppFlex gap="8px" mt="25px">
        <AppButton variant="primarybtn">Request a Demo</AppButton>
        <AppButton variant="primaryoutlinebtn">Talk to Sales</AppButton>
      </AppFlex>
  </AppBox>
`

const ComponentH4 = {
  source: SourceHero4,
  displayName: "Hero 4",
  category: "Heros"
};

const SourceHero5=`
    <AppBox
      backgroundImage= 'url(/virtutor/virtutor-herobg.png)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
      backgroundPosition="bottom",
      py="185px",
      pl="120px",
    >
    <AppBox w="586px">
    <AppText
    textStyle="h10"
    text="Train Your Learners Under Industry Experts""
    color="#FFFFFF",
    />
    </AppBox>
      <AppText
        w="632px"
        pr="5px"
        mt="10px"
        textStyle="fs3"
        text="Virtutor provides live interactive tutoring on demand. Being one of the largest communities of tech experts, we have a mentor pool of over 8000 SMEs across various tech stacks. We also allow organisations to add their in-house mentors to our platform."
      />
      <AppFlex gap="8px" mt="25px">
        <AppButton variant="primarybtn">Request a Demo</AppButton>
        <AppButton variant="primaryoutlinebtn">Talk to Sales</AppButton>
      </AppFlex>
  </AppBox>
`

const ComponentH5 = {
  source: SourceHero5,
  displayName: "Hero 5",
  category: "Heros"
};

const SourceHero6=`
    <AppBox
      backgroundImage= 'url(/proctoring/proctoring-herobg.png)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
      backgroundPosition="bottom",
      py="215px",
      pl="120px",
    >
    <AppBox w="666px">
    <AppText
    textStyle="h10"
    text="Every Test Is Different.  Don’t Settle For Restrictions."
    color="#FFFFFF",
    />
    </AppBox>
      <AppText
        w="632px"
        pr="5px"
        mt="10px"
        textStyle="fs3"
        text="Your one-stop-shop for the most flexible and secure options for proctoring exams online."
      />
      <AppFlex gap="8px" mt="25px">
        <AppButton variant="primarybtn">Request a Demo</AppButton>
        <AppButton variant="primaryoutlinebtn">Talk to Sales</AppButton>
      </AppFlex>
  </AppBox>
`

const ComponentH6 = {
  source: SourceHero6,
  displayName: "Hero 6",
  category: "Heros"
};

const SourceHero7=`
    <AppBox
      backgroundImage= 'url(/platform/hackathon-herobg.svg)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
      backgroundPosition="bottom",
      py="200px",
      pl="120px",
    >
    <AppBox w="700px">
    <AppText
    textStyle="h10"
    text="Go All Out With Hackathons For Hiring And Employee Engagement"
    color="#FFFFFF",
    />
    </AppBox>
      <AppText
        w="632px"
        pr="5px"
        mt="10px"
        textStyle="fs3"
        text="Explore hackathon challenges that are fully curated and managed. To put it simply, you get the engagement you need, without any bandwidth drain."
      />
      <AppFlex gap="8px" mt="25px">
        <AppButton variant="primarybtn">Request a Demo</AppButton>
        <AppButton variant="primaryoutlinebtn">Talk to Sales</AppButton>
      </AppFlex>
  </AppBox>
`

const ComponentH7 = {
  source: SourceHero7,
  displayName: "Hero 7",
  category: "Heros"
};

const SourceC1=`
<AppFlex
      backgroundImage='url(/home/develop1-bg.svg)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
    >
      <AppContainer maxW="1264px">
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          px="10px"
          direction="row"
          gap="20px"
        >
          <AppBox width="565px">
          <AppBox>
            <AppText
              as="span"
              color="black"
              textStyle="fs13"
              text="Develop "
            />
            <GradientText as="span" text="A Workforce That Delivers " textStyle="gradientText" />
            <AppText
              as="span"
              textStyle="fs13"
              color="black"
              text="on Key Initiatives"
            />
          </AppBox>
          <AppBox color="#303030" mt="14px">
          <AppText 
          text=" Empower your tech teams to produce key business outcomes by
          upskilling and reskilling them to drive digital transformation.
          Upskill your workforce to deliver business results and stay
          competitive. Reduce ramp time for new hires and existing staff by
          giving them a training environment customized to your tech stack to
          quickly build deep expertise." color="black" />
        </AppBox>
        <AppFlex
          color="#0023B5",
          display= "flex",
          alignItems="center",
          gap="8px",
          marginTop="14px",
          lineHeight="24px",
          fontSize="16px",
          fontWeight= "600",
          letterSpacing= "-0.36px",
        role="button"
           >
           <AppText text="GET IN TOUCH" color="#0023B5" as="span" />
           <AppIcon  index="2" />
          </AppFlex>
          </AppBox>
          <AppBox>
            <AppImage alt="image" src=/home/develop1.svg width=626 height=402 />
          </AppBox>
        </AppFlex>
      </AppContainer>
    </AppFlex>
`

const ComponentC1={
  source:SourceC1,
  displayName:"Card1",
  category:"cards"
}

const SourceC2=`
    <AppFlex
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
    >
      <AppContainer maxW="1264px">
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          px="10px"
          direction="row-reverse"
          gap="20px"
        >
          <AppBox width="565px">
          <AppBox>
            <GradientText2 text="Develop And Practice Skills" textStyle="gradientText2"/>
            <AppText
              as="span"
              color="black"
              textStyle="fs13"
              text="In A Secure, Custom Environment To Drive Hands-On Learning"
            />
          </AppBox>
          <AppBox color="#303030" mt="14px">
          <AppText 
          text=" Change the way your workforce learns by enabling them to develop
          strong proficiencies with a library of over 2000+ virtual tech labs.
          Compiled and curated for every leaner’s specific goals and roles,
          Techademy’s practice labs put leaners in an environment that mirrors
          projects that they would tackle in real-world." color="black" />
        </AppBox>
        <AppFlex
          color="#0023B5",
          display= "flex",
          alignItems="center",
          gap="8px",
          marginTop="14px",
          lineHeight="24px",
          fontSize="16px",
          fontWeight= "600",
          letterSpacing= "-0.36px",
        role="button"
           >
           <AppText text="GET IN TOUCH" color="#0023B5" as="span" />
           <AppIcon  index="2" />
          </AppFlex>
          </AppBox>
          <AppBox>
            <AppImage alt="image" src=/home/develop2.svg width=668 height=430 />
          </AppBox>
        </AppFlex>
      </AppContainer>
    </AppFlex>
`

const ComponentC2={
  source:SourceC2,
  displayName:"Card2",
  category:"cards"
}

const SourceC3=`
    <AppFlex
      bg="#FAFAFA"
    >
      <AppContainer maxW="1264px">
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          px="10px"
          direction="row"
          gap="20px"
        >
          <AppBox width="565px">
          <AppBox>
            <AppText
              as="span"
              color="black"
              textStyle="fs13"
              text="Turn Assessment Results Into "
            />
            <GradientText2 text="A Development Roadmap" textStyle="gradientText2"/>
          </AppBox>
          <AppBox color="#303030" mt="14px">
          <AppText 
          text=" Validate the skill strengths of potential hires with end-to-end
          assessments, so you can make the best possible hiring decision and
          have upskilling paths set when they start; learning journeys that
          would help them onboard, learn your unique toolsets, processes, and
          technology, and help predictably bring their tech skills to where
          you need them." color="black" />
        </AppBox>
        <AppFlex
          color="#0023B5",
          display= "flex",
          alignItems="center",
          gap="8px",
          marginTop="14px",
          lineHeight="24px",
          fontSize="16px",
          fontWeight= "600",
          letterSpacing= "-0.36px",
        role="button"
           >
           <AppText text="GET IN TOUCH" color="#0023B5" as="span" />
           <AppIcon  index="2" />
          </AppFlex>
          </AppBox>
          <AppBox>
            <AppImage alt="image" src=/home/develop3.svg width=724 height=464 />
          </AppBox>
        </AppFlex>
      </AppContainer>
    </AppFlex>
`

const ComponentC3={
  source:SourceC3,
  displayName:"Card3",
  category:"cards"
}

const SourceC4=`
<AppFlex
      backgroundImage='url(/home/develop4-bg.svg)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
    >
      <AppContainer maxW="1264px">
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          px="10px"
          direction="row-reverse"
          gap="20px"
        >
          <AppBox width="565px">
          <AppBox>
            <AppText
              as="span"
              color="black"
              textStyle="fs13"
              text="Shorten The Learning Curve With "
            />
            <GradientText2 text="Tailor-Made Learning Paths" textStyle="gradientText2" />
          </AppBox>
          <AppBox color="#303030" mt="14px">
          <AppText 
          text="Explore objective-driven learning experiences that combine the
          theory, technical knowledge, and hands-on practice to master tech
          skills across major technologies and platforms. Our learning paths
          combine specific courses and tools into one experience to teach you
          any given skill from start to finish." color="black" />
        </AppBox>
        <AppFlex
          color="#0023B5",
          display= "flex",
          alignItems="center",
          gap="8px",
          marginTop="14px",
          lineHeight="24px",
          fontSize="16px",
          fontWeight= "600",
          letterSpacing= "-0.36px",
        role="button"
           >
           <AppText text="GET IN TOUCH" color="#0023B5" as="span" />
           <AppIcon  index="2" />
          </AppFlex>
          </AppBox>
          <AppBox>
            <AppImage alt="image" src=/home/develop4.svg width=668 height=430 />
          </AppBox>
        </AppFlex>
      </AppContainer>
    </AppFlex>
`

const ComponentC4={
  source:SourceC4,
  displayName:"Card4",
  category:"cards"
}

const SourceC5=`
<AppFlex
    >
      <AppContainer maxW="1264px">
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          px="10px"
          direction="row-reverse"
          gap="20px"
        >
          <AppBox width="505px">
          <AppBox w="505px">
          <GradientText2 text="Know the true tech skills" textStyle="gradientText1" />
          <AppText
            as="span"
            color="black"
            textStyle="fs13"
            text=" of your candidates"
          />
        </AppBox>
          <AppBox color="#303030" mt="14px">
          <AppText 
          text="Discover where your organization stands at a glance and begin
          extending skills right away with comprehensive learning paths. Test
          your candidates and employees on real-world projects to get deeper
          insights into their skills and create long term job-skill matrix for
          your organization." color="black" />
        </AppBox>
        <AppFlex
          color="#0023B5",
          display= "flex",
          alignItems="center",
          gap="8px",
          marginTop="14px",
          lineHeight="24px",
          fontSize="16px",
          fontWeight= "600",
          letterSpacing= "-0.36px",
        role="button"
           >
           <AppText text="GET IN TOUCH" color="#0023B5" as="span" />
           <AppIcon  index="2" />
          </AppFlex>
          </AppBox>
          <AppBox>
            <AppImage alt="image" src=/platform/techskill.svg width=690 height=444 />
          </AppBox>
        </AppFlex>
      </AppContainer>
    </AppFlex>
`

const ComponentC5={
  source:SourceC5,
  displayName:"Card5",
  category:"cards"
}

const SourceC6=`
<AppFlex
      backgroundImage='url(/home/develop1-bg.svg)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
      bg="#FAFAFA"
    >
      <AppContainer maxW="1264px">
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          px="10px"
          direction="row"
          gap="20px"
        >
          <AppBox width="481px">
          <AppBox  >
          <AppText
            as="span"
            color="black"
            textStyle="fs13"
            text="Turn Assessment Results Into "
          />
          <GradientText2 text="a Development Roadmap" textStyle="gradientText2" />
        </AppBox>
          <AppBox color="#303030" mt="14px">
          <AppText 
          text="Validate the skill strengths of potential hires with end-to-end
          assessments, so you can make the best possible hiring decision and have
          upskilling paths set when they start; learning journeys that would help
          them onboard, learn your unique toolsets, processes, and technology, and
          help predictably bring their tech skills to where you need them." color="black" />
        </AppBox>
        <AppFlex
          color="#0023B5",
          display= "flex",
          alignItems="center",
          gap="8px",
          marginTop="14px",
          lineHeight="24px",
          fontSize="16px",
          fontWeight= "600",
          letterSpacing= "-0.36px",
        role="button"
           >
           <AppText text="GET IN TOUCH" color="#0023B5" as="span" />
           <AppIcon  index="2" />
          </AppFlex>
          </AppBox>
          <AppBox>
            <AppImage alt="image" src=/home/develop3.svg width=724 height=464 />
          </AppBox>
        </AppFlex>
      </AppContainer>
    </AppFlex>
`

const ComponentC6={
  source:SourceC6,
  displayName:"Card6",
  category:"cards"
}

const SourceC7=`
<AppFlex
      backgroundImage='url(/home/develop1-bg.svg)',
      backgroundRepeat="no-repeat",
      backgroundSize="cover",
    >
      <AppContainer maxW="1264px">
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          px="10px"
          direction="row-reverse"
          gap="20px"
        >
          <AppBox width="534px">
          <AppBox>
          <GradientText2 text="Collaboratively edit and debug" textStyle="gradientText2" />
          <AppText
            as="span"
            color="black"
            textStyle="fs13"
            text="with others in real-time, regardless of the programming languages."
          />
        </AppBox>
          <AppBox color="#303030" mt="14px">
          <AppText 
          text=" Regardless of what stack your candidates are working on, you can
          instantly share your projects with your peers with ease. Co-edit,
          co-debug, chat with your peers, share terminals, servers, look at
          comments and do so much more without having to clone repositories and
          environments." color="black" textStyle="fs3" />
        </AppBox>
        <AppFlex
          color="#0023B5",
          display= "flex",
          alignItems="center",
          gap="8px",
          marginTop="14px",
          lineHeight="24px",
          fontSize="16px",
          fontWeight= "600",
          letterSpacing= "-0.36px",
          role="button"
           >
           <AppText text="GET IN TOUCH" color="#0023B5" as="span" />
           <AppIcon  index="2" />
          </AppFlex>
          </AppBox>
          <AppBox>
            <AppImage alt="image" src=/platform/debug.svg width=694 height=446 />
          </AppBox>
        </AppFlex>
      </AppContainer>
    </AppFlex>
`

const ComponentC7={
  source:SourceC7,
  displayName:"Card7",
  category:"cards"
}

const source$t = `
   <AppBox
    top="0",
    position="sticky",
    zIndex="100",
    width="100%",
    backgroundColor="white",
    >
      <AppContainer>
      <AppFlex
        justifyContent="end",
        backgroundColor="transparent",
        alignItems="center",
        height="60px",
    >
      <AppFlex
        gap="22px", alignItems="center", height="100%"
      >
        <AppFlex
          color="black"
          gap="7px", alignItems="center"
        >
          <AppBox>
            <AppIcon index="4"  size=20 />
          </AppBox>
          <AppBox fontSize="17px" >
            contact@techademy.net
          </AppBox>
        </AppFlex>

        <AppFlex gap="1.5rem">
          <AppLink
            target="_blank"
            href="https://www.linkedin.com/company/techademy-ulxp/"
          >
            <AppIcon index="6" size=20  />
          </AppLink>
          <AppLink
            target="_blank"
            href="https://www.youtube.com/@techademy1221"
          >
            <AppIcon  size=20 index="7" />
          </AppLink>
          <AppLink
            target="_blank"
            href="https://www.instagram.com/techademy_ULXP/"
          >
            <AppIcon  index="5" size=20  />
          </AppLink>
        </AppFlex>
      </AppFlex>
      </AppFlex>
        <AppBox display="block" >
          <AppNav logo="/home/logoblack.svg" color="black" />
        </AppBox>
      </AppContainer>
    </AppBox>
`;

const Component$t = {
  source: source$t,
  displayName: "Navigation 1",
  category: "Navigation"
};

const Nav=`<AppNav></AppNav>`

const Component$2 = {
  source: Nav,
  displayName: "Navigation 1",
  category: "Navigation"
};

const source$n = `
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our
            Portfolio</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <div class="flex items-end overflow-hidden bg-cover">
                <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 mb-auto">
                    <img class="rounded-lg h-36 object-cover" src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"/>
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Best website collections</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                </div>
            </div>

            <div class="flex items-end overflow-hidden bg-cover">
                <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 mb-auto">
                    <img class="rounded-lg h-36 object-cover" src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit collections</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                </div>
            </div>

            <div class="flex items-end overflow-hidden bg-cover">
                <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 mb-auto">
                    <img class="rounded-lg h-36 object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Ton's of mobile mockup</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                </div>
            </div>

            <div class="flex items-end overflow-hidden bg-cover">
                <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 mb-auto">
                    <img class="rounded-lg h-36 object-cover" src="https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Huge collection of animation</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Animation</p>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const Component$n = {
  source: source$n,
  displayName: "Portfolio 1",
  category: "Portfolios"
};


const source$5 = `
<AppBox bg="#02387A">
      <AppContainer maxW="1028px">
        <AppFlex
          justifyContent="space-between"
          alignItems="start"
          gap="30px"
          py="55px"
        >
          <AppFlex
            direction="column"
            display="initial"
          >
            <AppFlex gap="8px">
              <AppIcon size="45" index="1"/>
              <AppText text="Notion" />
            </AppFlex>
            <AppBox mt="157px">
              <AppText
                textStyle="countText"
                fontSize="57px"
                text="250k+"
              />
              <AppText text="watching hours" />
            </AppBox>
          </AppFlex>
          <AppFlex direction="column" alignItems="start">
            <AppText
              width="535px"
              textStyle="fs5"
              fontSize="24px"
              text='“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”'
            />
            <AppFlex gap="16px" mt="35px">
              <AppAvatar name="Don" />
              <AppBox>
                <AppText text="John Doe" />
                <AppText
                  textStyle="fs1"
                  text="Chief Learning Officer @ Notion"
                />
              </AppBox>
            </AppFlex>
          </AppFlex>
        </AppFlex>
      </AppContainer>
      <RedirectStripe py="18px">
        Read customer story <AppIcon index="0"/>
      </RedirectStripe>
    </AppBox>
`;

const Component$5 = {
  source: source$5,
  displayName: "Testimonials 1",
  category: "Testimonials"
};

const sourceN1=`
<AppCard
      bodyStyle={{ p: "0px" }}
      wrapperStyle={{
        boxShadow: "0px 1px 25.9355px rgba(192, 192, 192, 0.15)",
        overflow: "hidden",
      }}
    >
      <AppBox px="1.25rem" pt="1.25rem">
        <AppFlex justifyContent="space-between">
          <AppFlex position="relative">
            <AppImage src="/resources/news.png" alt="" width=52 height=17 />
          </AppFlex>
          <AppBox color={appColors.grey["50"]} fontSize="11px">
            1 min read
          </AppBox>
        </AppFlex>
        <AppBox noOfLines=3 mt="32px" textStyle="fs3" fontWeight="500">
          Techademy - the enterprise learning expert launches its e-learning
          platform for techies of today and tomorrow
        </AppBox>
      </AppBox>
      <AppFlex position="relative" height="258px" mt="32px">
        <AppImage src="/resources/news.png" alt="" fill=true width=52 height=17 />
      </AppFlex>
    </AppCard>
`

const Component$N1={
  source:sourceN1,
  displayName:"NewS Card",
  category:"Cards"
}

const components = {
  Hero: ComponentH,
  Hero1: ComponentH1,
  Hero2:ComponentH2,
  Hero3:ComponentH3,
  Hero4:ComponentH4,
  Hero5:ComponentH5,
  Hero6:ComponentH6,
  Hero7:ComponentH7,
  Card1:ComponentC1,
  Card2:ComponentC2,
  Card3:ComponentC3,
  Card4:ComponentC4,
  Card5:ComponentC5,
  Card6:ComponentC6,
  Card7:ComponentC7,
  Home1:Component$H1,
  Home2:Component$H2,
  Home3:Component$H3,
  Home4:Component$H4,
  Home5:Component$H5,
  Home6:Component$H6,
  Home7:Component$H7,
  Home8:Component$H8,
  Blog1: Component$1f,
  Cta1: Component$13,
  Features1: Component$U,
  Footer1: Component$N,
  Footer2: Component$O,
  Navigation1: Component$t,
  Navigation2: Component$2,
  Portfolio1: Component$n,
  Testimonial1: Component$5,
  NeWsCard:Component$N1
};

exports["default"] = components;
