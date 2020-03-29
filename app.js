var content = new Vue({
    el: "#content",
    data: {
        name: "",   // "" 空的文字
        repos: null // null 空值
    },
    methods: {
        // 取得資料庫
        getRepos: function () {
            console.log("取得資料庫" + this.name);
            // axios 取得資了 (資料連結 API).取得完成後 (回應 => { 回應資料存取 })
            axios
            .get(`https://api.github.com/users/${this.name}/repos`)
            .then(response => {this.repos = response.data; console.log(response.data)})
        }
    }
});