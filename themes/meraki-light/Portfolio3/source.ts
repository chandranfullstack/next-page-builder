const source = `
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Portfolio
        </h1>

        <p class="mt-4 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>


        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="overflow-hidden bg-cover rounded-lg h-96 group">
                <div
                    class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 backdrop-blur-sm bg-black group-hover:opacity-90">
                    <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Best website collections</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                </div>
            </div>

            <div class="overflow-hidden bg-cover rounded-lg h-96 group">
                <div
                    class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 backdrop-blur-sm bg-black group-hover:opacity-90">
                    <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Block of Ui kit collections</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p>
                </div>
            </div>

            <div class="overflow-hidden bg-cover rounded-lg h-96 group">
                <div
                    class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 backdrop-blur-sm bg-black group-hover:opacity-90">
                    <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mockups</p>
                </div>
            </div>
        </div>
    </div>
</section>
`

export { source }
