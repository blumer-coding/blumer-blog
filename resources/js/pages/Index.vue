<style lang="scss">
</style>

<template>
    <div id="home">
        <span
            v-show="blogsLoadStatus == 1">
        </span>
        <span
                v-show="blogsLoadStatus == 2">
        </span>
        <span
                v-show="blogsLoadStatus == 3">
        </span>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch( 'loadBlogs' );
        },
        /**
         * 定义组件的计算属性
         */
        computed: {
            // 获取 blogs 加载状态
            blogsLoadStatus() {
                if (this.$store.getters.getBlogsLoadStatus == 1){
                    this.$message({
                        message: "Loading...",
                        type: 'info'
                    });
                }else if(this.$store.getters.getBlogsLoadStatus == 2){
                    this.$message({
                        message: "Blogs loaded successfully!",
                        type: 'success'
                    });
                }else{
                    this.$message({
                        message: "Blogs loaded failed!",
                        type: 'danger'
                    });
                }
                return this.$store.getters.getBlogsLoadStatus;
            },
            // 获取 blogs
            blogs(){
                return this.$store.getters.getBlogs;
            }
        }
    }
</script>