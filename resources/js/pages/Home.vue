
<style>

</style>

<template>
    <div id="home">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>

        <span v-show="blogsLoadStatus == 1">Loading</span>
        <span v-show="blogsLoadStatus == 2">Blogs loaded successfully!</span>
        <span v-show="blogsLoadStatus == 3">Blogs loaded unsuccessfully!</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
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