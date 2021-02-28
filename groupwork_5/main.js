const app = Vue.createApp({
    data() {
        return {
            img: [{url: './images/image1.jpg', id:'0', text: 'Forest at night', fav: true},
                  {url: './images/image2.jpg', id:'1', text: 'Forest in the morning', fav: false},
                  {url: './images/image3.jpg', id:'2', text: 'Reject Humanity', fav: false},
                  {url: './images/image4.jpg', id:'3', text: 'Ruturn to Monke', fav: false},
            ],
            searchButton: true,
            searchBox: false,
            search: '',
            notFound: false,
            zoomIn: '',
            shown: false
        }
    },
    methods: {
        favImg(index) {
            this.img[index].fav = !this.img[index].fav;
        },
        showBar(){
            this.searchBox = !this.searchBox;
            this.searchButton = !this.searchButton;
            this.search = '';
        },
        zoomImg(index){
            this.zoomIn = this.img[index].url;
        },
        shownImg(){
            this.shown = !this.shown;
        },
        changeSearch(photoSearch){
            this.search = photoSearch;
        }
    },
    computed: {
        count() {
            return this.img.filter(t => t.fav).length;
        },
        total(){
            return this.img.length;
        },
        filterPhoto(){
            this.notFound = false;
            if(this.search == ''){
                return this.img
            } else {
                ft = this.img.filter(a => a.text.toLowerCase().includes(this.search.toLowerCase()));
                if(ft.length == 0){
                    this.notFound = true;
                } else {
                    return ft;
                }
            }
        }
    }
})