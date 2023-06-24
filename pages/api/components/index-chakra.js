'use strict';

const color={
  backgroundColor:"red"
}

const source1=
`<section>
<Box background-color="red">
<Text>Hello World Chakra UI</Text>
</Box></section>`

const source2=
`<Box>
<Box
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
  <Box
    w={{ base: "auto", sm: "auto", md: "632px" }}
    pr={{ base: "5px" }}
    mt="10px"
    textStyle={{ base: "responsiveParaText", md: "fs3" }}
  />
  <Box gap={"8px"} mt="25px">
    <Text variant={"primarybtn"}>Request a Demo</Text>
    <Text variant={"primaryoutlinebtn"}>Talk to Sales</Text>
  </Box>
</Box>
</Box>`


const source3=
`<Box>
<Box
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
  <Text
    w={{ base: "auto", sm: "auto", md: "632px" }}
    pr={{ base: "5px" }}
    mt="10px"
    textStyle={{ base: "responsiveParaText", md: "fs3" }}
    text={para}
  />
  <Box gap={"8px"} mt="25px">
    <Text variant={"primarybtn"}>Request a Demo</Text>
    <Text variant={"primaryoutlinebtn"}>Talk to Sales</Text>
  </Box>
</Box>
</Box>`


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
  


const components1 = {
    component1: Component1,
    component2:Component2,
    component3:Component3
  };
  

exports["default"]=components1


'use strict';

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
<footer class="flex flex-col items-center justify-between p-6 bg-white dark:bg-gray-900 sm:flex-row">
    <a href="#" class="text-xl font-bold text-gray-600 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>

    <p class="text-sm text-gray-600 dark:text-gray-300">\xA9 Copyright 2021. All Rights Reserved.</p>

    <div class="flex -mx-2">
        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                </path>
            </svg>
        </a>

        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                </path>
            </svg>
        </a>

        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                </path>
            </svg>
        </a>
    </div>
</footer>
`;

const Component$N = {
  source: source$N,
  displayName: "Footer 1",
  category: "Footers"
};

const source$E = `
<header class="bg-white dark:bg-gray-900">
    <nav x-data="{ isOpen: false }" class="relative bg-white dark:bg-gray-900">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <div>
                    <a class="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                </div>
    
                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button x-cloak @click="isOpen = !isOpen" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
    
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a>
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Shop</a>
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Contact</a>
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About</a>
                </div>
    
                <div class="flex justify-center md:block">
                    <a class="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
    
                        <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
                    
                    <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img class="w-full h-full max-w-md" src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80">
            </div>
        </div>
    </div>
</header>
`;

const Component$E = {
  source: source$E,
  displayName: "Hero 1",
  category: "Heros"
};

const source$t = `
<nav class="bg-white shadow dark:bg-gray-800">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a href="#" class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">features</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z" fill="currentColor" /></svg>
        </a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z"/><path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z"/><path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z"/></svg>
        </a>
    </div>
</nav>
`;

const Component$t = {
  source: source$t,
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
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">

            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p class="text-5xl font-semibold text-blue-500 ">\u201C</p>

                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white xl:text-4xl lg:w-96">
                    Help us improve our productivity
                </h1>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                    \u201C Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a. \u201D
                </p>

                <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

                <div class="flex items-center justify-between mt-12 lg:justify-start">
                    <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const Component$5 = {
  source: source$5,
  displayName: "Testimonials 1",
  category: "Testimonials"
};



const components = {
  Blog1: Component$1f,
  Cta1: Component$13,
  Features1: Component$U,
  Footer1: Component$N,
  Hero1: Component$E,
  Navigation1: Component$t,
  Portfolio1: Component$n,
  Testimonial1: Component$5,
};

exports["default"] = components;
