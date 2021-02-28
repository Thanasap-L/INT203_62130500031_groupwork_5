app.component('photo-view', {
    emits: ['shownImg'],
    props: {
        zoomin: {
            require: true
        },
        shown: {require: true}
    },
    template:
        /*html*/
        `<div v-show="shown" class="bg-black w-screen p-5" style="height: 8vm">
        <button @click="shownImg"><i class="material-icons">
                remove_circle_outline
            </i></button>
        <img class="h-full rounded pb-12 mx-auto" v-bind:src="zoomin">
    </div>
    `,
    methods: {
        shownImg() {
            this.$emit('shownImg');
            console.log(this.shown)
        },
    }
})