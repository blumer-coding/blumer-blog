<style lang="scss">
</style>

<template>
    <div id="home">
        <span v-show="blogsLoadStatus == 1">Loading</span>
        <span v-show="blogsLoadStatus == 2">Blogs loaded successfully!</span>
        <span v-show="blogsLoadStatus == 3">Blogs loaded failed!</span>
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
            blogsLoadStatus(){
                return this.$store.getters.getBlogsLoadStatus;
            },
            // 获取 blogs
            blogs(){
                return this.$store.getters.getBlogs;
            }
        }
    }
</script>