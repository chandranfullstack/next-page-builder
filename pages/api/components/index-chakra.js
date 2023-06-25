'use strict';

const color={
  backgroundColor:"red"
}

const source1=
`<AppBox background-color="red">
<AppText>Hello World Chakra UI</AppText>
</AppBox>`

const source2=
`<AppBox>
<AppBox
    background-image= "url('https://media.istockphoto.com/id/696834370/photo/solar-system.jpg?s=2048x2048&w=is&k=20&c=-uioe12V0kimPoV5Wt9Pf71UXreeGUq3UfB2tPFe2c0=')"
    background-repeat= "no-repeat"
    background-size= "cover"
    background-position="flex"
    py= { md: py, base: "90px" }
    pl={ md: "120px", base: "10px", sm: "auto" }
    border-radius= "20px"
    h= "200px"
    background-color="green"
/>
  <AppBox
    w={{ base: "auto", sm: "auto", md: "632px" }}
    pr={{ base: "5px" }}
    mt="10px"
    textStyle={{ base: "responsiveParaText", md: "fs3" }}
  />
  <AppBox gap={"8px"} mt="25px">
    <AppText variant={"primarybtn"}>Request a Demo</AppText>
    <AppText variant={"primaryoutlinebtn"}>Talk to Sales</AppText>
  </AppBox>
</AppBox>
</AppBox>`


const source3=
`<AppBox>
<AppBox
    background-image="url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
    background-repeat= "no-repeat",
    background-size="cover",
    background-position="relative",
    py=80px,
    pl=80px,
    border-radius= "20px",
    height="800px"
    background-color="green"
>
  {Component}
  <AppText
    w={{ base: "auto", sm: "auto", md: "632px" }}
    pr={{ base: "5px" }}
    mt="10px"
    textStyle={{ base: "responsiveParaText", md: "fs3" }}
    text={para}
  />
  <AppBox gap={"8px"} mt="25px">
    <AppText variant={"primarybtn"}>Request a Demo</AppText>
    <AppText variant={"primaryoutlinebtn"}>Talk to Sales</AppText>
  </AppBox>
</AppBox>
</AppBox>`

const FlexComponet=`
<AppFlex
justifyContent="space-between"
alignItems="start"
gap="30px"
py="55px",
direction="column"
>
<AppFlex
  direction="column"
  display={{ base: "none", md: "initial" }}
>
  <AppFlex gap="8px">
    <AppText text="Notion" />
  </AppFlex>
  <AppBox mt="157px">
    <AppText
      textStyle="countText"
      fontSize={{ base: "40px", md: "57px" }}
      text={"250k+"}
    />
    <AppText text={"watching hours"} />
  </AppBox>
</AppFlex>
<AppFlex direction="column" alignItems="start">
  <AppText
    width={{ base: "100%", md: "535px" }}
    textStyle="fs5"
    fontSize={{ base: "14px", md: "24px" }}
    text={'“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'”}
  />
  <AppFlex gap="16px" mt="35px">
    <AppBox>
      <AppText text={"John Doe"} />
      <AppText
        textStyle="fs1"
        text={"Chief Learning Officer @ Notion"}
      />
    </AppBox>
  </AppFlex>
</AppFlex>
</AppFlex>
`


const Component1 = {
    source: source1,
    displayName: "Test Component",
    category: "Component"
};

const Component2 = {
  source: source2,
  displayName: "Test Component2",
  category: "Component"
};


const Component3={
  source:source3,
  displayName:"Test Component3",
  category:"Component"
}
  
const Component4={
  source:FlexComponet,
  displayName:"flex",
  category:"Flex"
}


const components = {
    component1: Component1,
    component2:Component2,
    component3:Component3,
    component4:Component4
  };
  

exports["default"]=components


// 'use strict';

// const source$1f = `
//     <section class="bg-white dark:bg-gray-900">
//         <div class="container px-6 py-10 mx-auto">
//             <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

//             <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
//                 <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt="">

//                 <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
//                     <p class="text-sm text-blue-500 uppercase">category</p>

//                     <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
//                         All the features you want to know
//                     </a>

//                     <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
//                         laudantium quia tempore delect
//                     </p>

//                     <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

//                     <div class="flex items-center mt-6">
//                         <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="">

//                         <div class="mx-4">
//                             <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
//                             <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// `;

// const Component$1f = {
//   source: source$1f,
//   displayName: "Blog 1",
//   category: "Blogs"
// };


// const source$13 = `
// <section class="bg-white dark:bg-gray-900">
//     <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
//         <h2 class="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
//             Join us and get the update <br> from anywhere
//         </h2>

//         <div class="mt-6 sm:-mx-2">
//             <div class="inline-flex w-full sm:w-auto sm:mx-2">
//                 <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
//                     Buy Blox Now
//                 </a>
//             </div>

//             <div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
//                 <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
//                     Start a Journey
//                 </a>
//             </div>
//         </div>
//     </div>
// </section>
// `;

// const Component$13 = {
//   source: source$13,
//   displayName: "Cta 1",
//   category: "CTA"
// };

// const source$U = `
// <section class="bg-white dark:bg-gray-900">
//     <div class="container px-6 py-12 mx-auto">
//         <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             <div>
//                 <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
//                     <path d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z" fill="#2D3748"/><path d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z" fill="#2D3748"/><path d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z" fill="#4299E1"/>
//                 </svg>

//                 <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Default Taiwindcss Config</h1>

//                 <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
//             </div>

//             <div>
//                 <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
//                     <path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#2D3748"/><path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#4299E1"/><path d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z" fill="#4299E1"/>
//                 </svg>

//                 <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Fully Responsive Components</h1>

//                 <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
//             </div>

//             <div>
//                 <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
//                     <path d="M26.599 4.339a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM7.151 25.661a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM23.486 13.163a8.636 8.636 0 00-1.19-2.873l1.123-1.123-2.592-2.59L19.705 7.7a8.636 8.636 0 00-2.873-1.19V4.921h-3.664v1.586a8.634 8.634 0 00-2.873 1.19l-1.122-1.12-2.592 2.589 1.123 1.123a8.636 8.636 0 00-1.19 2.873H4.922l-.002 3.663h1.592A8.626 8.626 0 007.704 19.7l-1.127 1.127 2.59 2.591 1.128-1.127a8.623 8.623 0 002.873 1.19v1.597h3.664v-1.597a8.628 8.628 0 002.873-1.19l1.128 1.128 2.59-2.592-1.127-1.127a8.627 8.627 0 001.19-2.873h1.593v-3.664h-1.593zM15 19.256a4.255 4.255 0 110-8.511 4.255 4.255 0 010 8.51z" fill="#4299E1"/><path d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z" fill="#2D3748"/><path d="M12.582 25.078c0 .324.263.586.586.586h3.664a.586.586 0 00.586-.586v-1.136a9.179 9.179 0 002.199-.911l.802.802a.586.586 0 00.829 0l2.59-2.592a.586.586 0 000-.828l-.802-.802a9.169 9.169 0 00.911-2.199h1.132a.586.586 0 00.586-.585v-3.664a.586.586 0 00-.586-.586h-1.132a9.17 9.17 0 00-.911-2.199l.797-.797a.587.587 0 000-.829l-2.592-2.59a.586.586 0 00-.829 0l-.795.797a9.177 9.177 0 00-2.2-.912V4.922a.586.586 0 00-.585-.586h-3.664a.586.586 0 00-.586.586v1.126a9.169 9.169 0 00-2.199.91l-.796-.795a.586.586 0 00-.828 0l-2.592 2.59a.585.585 0 000 .828l.797.797a9.173 9.173 0 00-.911 2.199h-1.13a.586.586 0 00-.586.585l-.002 3.664a.585.585 0 00.586.586h1.132c.207.77.512 1.507.911 2.2l-.801.8a.586.586 0 000 .83l2.59 2.59a.586.586 0 00.829 0l.801-.801a9.185 9.185 0 002.2.911v1.136zm-1.97-3.28a.586.586 0 00-.732.078l-.713.714-1.761-1.763.712-.713a.586.586 0 00.078-.732 8.02 8.02 0 01-1.11-2.679.586.586 0 00-.572-.462H5.507l.002-2.492h1.005a.586.586 0 00.572-.463 8.022 8.022 0 011.11-2.678.586.586 0 00-.078-.733l-.708-.708 1.763-1.761.707.707c.196.196.5.228.733.078a8.016 8.016 0 012.678-1.11.586.586 0 00.463-.573v-1h2.492v1c0 .277.193.515.463.573a8.024 8.024 0 012.678 1.11c.232.15.537.118.732-.078l.708-.707 1.762 1.761-.708.708a.586.586 0 00-.078.732 8.027 8.027 0 011.11 2.679c.058.27.297.463.573.463h1.007v2.492h-1.007a.586.586 0 00-.573.462 8.02 8.02 0 01-1.11 2.679.586.586 0 00.078.732l.713.713-1.761 1.762-.714-.713a.586.586 0 00-.732-.078 8.027 8.027 0 01-2.678 1.11.586.586 0 00-.463.573v1.011h-2.492v-1.01a.586.586 0 00-.463-.574 8.021 8.021 0 01-2.678-1.11z" fill="#2D3748"/><path d="M19.841 15A4.847 4.847 0 0015 10.158 4.847 4.847 0 0010.158 15 4.847 4.847 0 0015 19.841 4.847 4.847 0 0019.841 15zm-8.51 0A3.674 3.674 0 0115 11.33 3.674 3.674 0 0118.67 15 3.674 3.674 0 0115 18.67 3.674 3.674 0 0111.33 15z" fill="#2D3748"/><path d="M20.395 2.216a.59.59 0 00.415-.172.593.593 0 00.171-.415.59.59 0 00-.586-.586.589.589 0 00-.586.586.589.589 0 00.586.587zM9.63 27.794a.59.59 0 00-.586.586.59.59 0 00.586.586.59.59 0 00.586-.586.59.59 0 00-.586-.585z" fill="#4299E1"/>
//                 </svg>

//                 <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">RTL Languages Support</h1>

//                 <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
//             </div>
//         </div>
//     </div>
// </section>
// `;

// const Component$U = {
//   source: source$U,
//   displayName: "Features 1",
//   category: "Features"
// };


// const source$N = `
// <Flex
//       direction={"column"}
//       alignItems={"flex-start"}
//       justifyContent={"center"}
//       customStyle={{
//         width: "100%",
//         pt: "163px",
//         pb: "100px",
//         backgroundColor: bgimg ? "" : "#1B1B1B",
//         backgroundImage: bgimg ? "url('/footerbg.svg')" : "",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <Container>
//         {/* <Box
//         customStyle={{
//           height: "85.47px",
//           borderRadius: "0px 0px 100% 100%",
//           backgroundColor: "white",
//           width: "100%",
//         }}
//       /> */}
//         <Flex
//           direction={{ base: "column", xl: "row" }}
//           customStyle={{
//             gap: "1rem",
//             width: "100%",
//             // marginLeft: "2rem",
//             alignItems: "start",
//             color: "black",
//           }}
//         >
//           <Flex
//             direction={"column"}
//             alignItems={"start"}
//             width={{ base: "100%", xl: "20%" }}
//           >
//             <Image
//               src="/common/logo.svg"
//               alt="arrow"
//               width={220}
//               height={120}
//             />

//             {/* <Text
//             text={
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc."
//             }
//           /> */}
//             <Link style={{ display: "block" }} href={"/"}>
//               <Flex gap={"0.5rem"}>
//                 <Image
//                   src="/common/mail.svg"
//                   alt="arrow"
//                   width={20}
//                   height={20}
//                 />
//                 <Text text={"contact@techademy.net"} />
//               </Flex>
//             </Link>
//           </Flex>
//           <Grid
//             width={{ base: "100%", xl: "80%" }}
//             gap="40px"
//             templateColumns={{
//               base: "repeat(1,1fr)",
//               md: "repeat(2,1fr)",
//               xl: "repeat(3,1fr)",
//             }}
//             justifyItems="start"
//           >
//             <Flex
//               gap={"0.6rem"}
//               direction={"column"}
//               alignItems={"flex-start"}
//             >
//               <Text
//                 text={"Solutions"}
//                 customStyle={{
//                   color: "#737373",
//                   fontSize: "16px",
//                 }}
//               />
//               {navDropDown[1].listOne.map((item, index) => (
//                 <Link key={index} href={item.link} className="link">
//                   {item.title}
//                 </Link>
//               ))}
//             </Flex>
//             <Flex
//               direction={"column"}
//               gap={"0.6rem"}
//               alignItems={"flex-start"}
//             >
//               <Text
//                 text={"Skilling Solutions"}
//                 customStyle={{
//                   color: "#737373",
//                   fontSize: "16px",
//                 }}
//               />
//               {navDropDown[0].listTwo.map((item, index) => (
//                 <Link key={index} href={item.link} className="link">
//                   {item.title}
//                 </Link>
//               ))}
//             </Flex>

//             <Flex
//               gap={"0.6rem"}
//               direction={"column"}
//               alignItems={"flex-start"}
//             >
//               <Text
//                 text={"Featured Platform "}
//                 customStyle={{
//                   color: "#737373",
//                   fontSize: "16px",
//                 }}
//               />
//               {navDropDown[0].listOne.map((item, index) => (
//                 <Link key={index} href={item.link} className="link">
//                   {item.title}
//                 </Link>
//               ))}
//             </Flex>
//             <Flex
//               direction={"column"}
//               gap={"0.6rem"}
//               alignItems={"flex-start"}
//             >
//               <Text
//                 text={"Platform by Use Case"}
//                 customStyle={{
//                   color: "#737373",
//                   fontSize: "16px",
//                 }}
//               />
//               {navDropDown[1].listTwo.map((item, index) => (
//                 <Link key={index} href={item.link} className="link">
//                   {item.title}
//                 </Link>
//               ))}
//             </Flex>

//             <Flex
//               gap={"0.6rem"}
//               direction={"column"}
//               alignItems={"flex-start"}
//             >
//               <Text
//                 text={"Resources"}
//                 customStyle={{
//                   color: "#737373",
//                   fontSize: "16px",
//                 }}
//               />
//               {navDropDown[2].listOne
//                 .concat(navDropDown[2].listTwo)
//                 .map((item, index) => (
//                   <Link key={index} href={item.link} className="link">
//                     {item.title}
//                   </Link>
//                 ))}
//             </Flex>
//           </Grid>
//         </Flex>
//         <Flex
//           direction={"column"}
//           alignItems={"flex-start"}
//           customStyle={{
//             gap: "2rem",
//             width: "100%",
//             height: "100%",
//             flex: "1",
//             paddingTop: "1.5rem",
//           }}
//         >
//           <Box
//             customStyle={{
//               width: "100%",
//               height: "1px",
//               backgroundColor: "#fff",
//               opacity: "0.2",
//             }}
//           />
//           <Flex
//             justifyContent="space-between"
//             customStyle={{
//               width: "100%",
//             }}
//           >
//             <Flex
//               gap={"0.6rem"}
//               customStyle={{
//                 color: "#fff",
//               }}
//             >
//               <Image
//                 src="/common/globe.svg"
//                 alt="arrow"
//                 width={20}
//                 height={20}
//               />
//               United States (English)
//             </Flex>
//             <Flex
//               gap={"1.5rem"}
//               customStyle={{
//                 color: "#fff",
//               }}
//             >
//               <Link
//                 target="_blank"
//                 href={"https://www.linkedin.com/company/techademy-ulxp/"}
//               >
//                 <Image
//                   src="/common/LinkedIn.svg"
//                   alt="arrow"
//                   width={20}
//                   height={20}
//                 />
//               </Link>
//               <Link
//                 target="_blank"
//                 href={"https://www.youtube.com/@techademy1221"}
//               >
//                 <Image
//                   src="/common/YouTube.svg"
//                   alt="arrow"
//                   width={20}
//                   height={20}
//                 />
//               </Link>
//               <Link
//                 target="_blank"
//                 href={"https://www.instagram.com/techademy_ULXP/"}
//               >
//                 <Image
//                   src="/common/Instagram.svg"
//                   alt="arrow"
//                   width={20}
//                   height={20}
//                 />
//               </Link>
//             </Flex>
//           </Flex>
//           <Box
//             customStyle={{
//               width: "100%",
//               height: "1px",
//               backgroundColor: "#fff",
//               opacity: "0.2",
//             }}
//           />
//           <Flex
//             justifyContent="space-between"
//             customStyle={{
//               width: "100%",
//               fontSize: { base: "12px", sm: "16px", md: "16px", xl: "16px" },
//             }}
//           >
//             <Text
//               customStyle={{
//                 fontSize: { basic: "12px", md: "16px", sm: "16px", xl: "16px" },
//                 color: "#737373",
//               }}
//               text={"© 2023 Techademy.net"}
//             />
//             <Box>
//               <Link
//                 href={"/privacy-policy"}
//                 fontSize={{ base: "12px", sm: "16px", md: "16px", xl: "16px" }}
//               >
//                 Privacy Policy
//               </Link>
//               <Box customStyle={{ m: "0px 4px", display: "inline" }}>
//                 |
//               </Box>

//               <Link
//                 href={"/terms-of-service"}
//                 fontSize={{ base: "12px", sm: "16px", md: "16px", xl: "16px" }}
//               >
//                 Terms & Conditions
//               </Link>
//             </Box>
//           </Flex>
//         </Flex>
//       </Container>
//     </Flex>`;

// const Component$N = {
//   source: source$N,
//   displayName: "Footer 1",
//   category: "Footers"
// };

// const source$E = `
// <Flex>
//       <Flex
//         align-items="center"
//         gap={"40px"}
//         mt={{ base: "40px", xl: "28px" }}
//         direction={{ base: "column", xl: "row" }}
//       >
//         <Box  w: { base: "100%", xl: "58%" } >
//           <Text
//             textStyle="heroSubHead"
//             as="span"
//             fontSize={{ base: "24px", md: "55px" }}
//             lineHeight={{ base: "40px", md: "72px" }}
//             text="Start Solving Your Tech Skill Gaps To"
//           />
//           <Text
//             textStyle="heroHead"
//             as="span"
//             fontSize={{ base: "24px", md: "55px" }}
//             lineHeight={{ base: "40px", md: "72px" }}
//             customStyle={{ paddingLeft: "10px" }}
//             text="Accelerate Business Transformation."
//           />

//           <Divider pt="10px" />

//           <Text
//             textStyle="hero_italic"
//             color= appColors.apporange["100"], pt: "20px"
//             text={"Digital Transformation. Skill at Scale with Speed."}
//           />
//           <Text
//             textStyle="fs3"
//             customStyle={{ pt: "10px" }}
//             text={
//               "Higher adoption rates. Better learner engagement. Improved course completion rates. Aligned to business impact. Delivered on time, every time through a comprehensive learning ecosystem that enables multiple learner journeys."
//             }
//           />
//           <Flex
//             gap={"8px"}
//             justifyContent={{ base: "center", md: "start" }}
//             customStyle={{ pt: "20px" }}
//           >
//             <Button variant={"primarybtn"}>Watch Demo</Button>
//             {/* <AppButton rightIcon={<BsArrowRight />} variant={"plainbtn"}>
//               Explore Solutions
//             </AppButton> */}
//           </Flex>
//         </Box>
//         <Flex customStyle={{ w: "42%", justifyContent: "end" }}>
//           <Image
//             src="/home/hero-img.svg"
//             width={563}
//             height={606}
//             alt="Image"
//           />
//         </Flex>
//       </Flex>
//     </Flex>
// `;

// const Component$E = {
//   source: source$E,
//   displayName: "Hero 1",
//   category: "Heros"
// };

// const source$t = `
// <nav class="bg-white shadow dark:bg-gray-800">
//     <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
//         <a href="#" class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

//         <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">features</a>

//         <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</a>

//         <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</a>

//         <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
//             <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z" fill="currentColor" /></svg>
//         </a>

//         <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
//             <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z"/><path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z"/><path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z"/></svg>
//         </a>
//     </div>
// </nav>
// `;

// const Component$t = {
//   source: source$t,
//   displayName: "Navigation 1",
//   category: "Navigation"
// };

// const source$n = `
// <section class="bg-white dark:bg-gray-900">
//     <div class="container px-6 py-10 mx-auto">
//         <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our
//             Portfolio</h1>

//         <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
//             <div class="flex items-end overflow-hidden bg-cover">
//                 <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 mb-auto">
//                     <img class="rounded-lg h-36 object-cover" src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"/>
//                     <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Best website collections</h2>
//                     <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
//                 </div>
//             </div>

//             <div class="flex items-end overflow-hidden bg-cover">
//                 <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 mb-auto">
//                     <img class="rounded-lg h-36 object-cover" src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>
//                     <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit collections</h2>
//                     <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
//                 </div>
//             </div>

//             <div class="flex items-end overflow-hidden bg-cover">
//                 <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 mb-auto">
//                     <img class="rounded-lg h-36 object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
//                     <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Ton's of mobile mockup</h2>
//                     <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
//                 </div>
//             </div>

//             <div class="flex items-end overflow-hidden bg-cover">
//                 <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 mb-auto">
//                     <img class="rounded-lg h-36 object-cover" src="https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
//                     <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Huge collection of animation</h2>
//                     <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Animation</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
// `;

// const Component$n = {
//   source: source$n,
//   displayName: "Portfolio 1",
//   category: "Portfolios"
// };


// const source$5 = `
// <section class="bg-white dark:bg-gray-900">
//     <div class="container px-6 py-10 mx-auto">
//         <div class="lg:-mx-6 lg:flex lg:items-center">
//             <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">

//             <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
//                 <p class="text-5xl font-semibold text-blue-500 ">\u201C</p>

//                 <h1 class="text-2xl font-semibold text-gray-800 dark:text-white xl:text-4xl lg:w-96">
//                     Help us improve our productivity
//                 </h1>

//                 <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
//                     \u201C Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
//                     tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
//                     aperiam dolorum, obcaecati corrupti aspernatur a. \u201D
//                 </p>

//                 <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
//                 <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

//                 <div class="flex items-center justify-between mt-12 lg:justify-start">
//                     <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
//                         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </button>

//                     <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
//                         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
// `;

// const Component$5 = {
//   source: source$5,
//   displayName: "Testimonials 1",
//   category: "Testimonials"
// };



// const components1 = {
//   Blog1: Component$1f,
//   Cta1: Component$13,
//   Features1: Component$U,
//   Footer1: Component$N,
//   Hero1: Component$E,
//   Navigation1: Component$t,
//   Portfolio1: Component$n,
//   Testimonial1: Component$5,
// };

// exports["default"] = components1;
