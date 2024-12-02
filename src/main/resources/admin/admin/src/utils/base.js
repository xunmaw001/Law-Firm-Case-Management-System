const base = {
    get() {
        return {
            url : "http://localhost:8080/lvshishiwusuoanjianguanli/",
            name: "lvshishiwusuoanjianguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lvshishiwusuoanjianguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "律师事务所案件管理系统"
        } 
    }
}
export default base
