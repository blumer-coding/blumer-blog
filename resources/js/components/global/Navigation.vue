<style lang="scss">
    .bl-logo{
        float:left;
    }
    .bl-logo:hover{
        background-color:#ffffff;
    }
    .bl-logo a{
        font-size:16px;
        color:#909399;
    }
    .bl-logo a:hover{
        text-decoration: none;
        color:#303133;
    }
    .el-menu-blumer{
        float:right;
    }
</style>
<template>
    <div class="bl-header">
        <h5 class="bl-logo el-menu-item "><a href="#">蓝默空间</a></h5>
        <el-menu :default-active="activeIndex" class="el-menu-blumer" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
            <el-submenu index="2">
                <template slot="title">分类</template>
                <el-menu-item index="2-1">分享</el-menu-item>
                <el-menu-item index="2-2">教程</el-menu-item>
                <el-menu-item index="2-3">问答</el-menu-item>
                <el-menu-item index="2-4">公告</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="/#/login">登录</a></el-menu-item>
            <el-menu-item index="4">注册</el-menu-item>
        </el-menu>
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
        // 定义组件的计算属性
        computed: {
            // 从 Vuex 中获取用户加载状态
            userLoadStatus(){
                return this.$store.getters.getUserLoadStatus;
            },

            // 从 Vuex 中获取用户信息
            user(){
                return this.$store.getters.getUser;
            }
        }
    }
</script>