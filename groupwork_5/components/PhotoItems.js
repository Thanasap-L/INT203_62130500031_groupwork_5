app.component('photo-items', {
    props: {
        img: {
            type: Array,
            require: true
        },
    },
    template:
        /*html*/
        `<div v-for="(image,index) in img" class="w-full lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0 px-5">
    <img @click="zoomImg(index); shownImg()" alt="image"
        class="cursor-pointer object-cover object-center w-full h-64 rounded-lg lg:h-auto"
        v-bind:src="image.url">
    <div class="flex flex-col items-start mx-auto mt-8 sm:flex-row sm:items-center">
        <h1 class="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
            {{image.text}}</h1>
        <svg v-show="image.fav" :xmlns="svg" class="mx-auto fill-current text-red-600 mr-5 " width="40"
            height="40" viewBox="0 0 24 24">
            <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
        </svg>

        <button class="flex-shrink-0 px-4 py-2 mt-10 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg 
                    sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 
                    hover:scale-110 focus:shadow-outline focus:outline-none"
            @click="favImg(index)">Like</button>
        </div>
    </div>`,
    data() {
        return { svg: "http://www.w3.org/2000/svg" }
    },
    methods: {
        favImg(index) {
            this.$emit('fav-img', index)
        },
        zoomImg(index) {
            this.$emit('zoomImg', index);
        },
        shownImg(img) {
            this.$emit('shownImg', img);
        }
    }
})