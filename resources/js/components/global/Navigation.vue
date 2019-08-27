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
            <el-menu-item index="2"><a href="/">分享</a></el-menu-item>
            <el-menu-item index="3"><a href="/">教程</a></el-menu-item>
            <el-menu-item index="4"><a href="/">公告</a></el-menu-item>
            <el-menu-item index="5"><a href="/">问答</a></el-menu-item>
            <el-submenu index="6" v-if="user != '' && userLoadStatus === 2" v-show="userLoadStatus === 2">
                <template slot="title">
                    <el-image style="width: 40px; height: 40px;border:3px solid #409eff;border-radius:20px" :src="user.avatar">
                    </el-image>
                </template>
                <el-menu-item index="6-1">写博客</el-menu-item>
                <el-menu-item index="6-2">个人中心</el-menu-item>
                <el-menu-item index="6-3" v-on:click="logout()">退出登录</el-menu-item>
            </el-submenu>
            <el-menu-item index="7" @click="login" v-if="user == ''">登录</el-menu-item>
            <el-menu-item index="8" @click="signin" v-if="user == ''">注册
<!--                <router-link :to="{ name: 'register' }">-->
<!--                    注册-->
<!--                </router-link>-->
            </el-menu-item>
        </el-menu>
        <span
                v-show="userLoadStatus == 1">
        </span>
        <span
                v-show="userLoadStatus == 2">
        </span>
        <span
                v-show="userLoadStatus == 3">
        </span>
        <register_></register_>
    </div>
</template>
<script>
    import register_ from "./RegisterModal.vue";
    import {EventBus} from '../../event-bus.js';
    export default {
        name:'Navigation',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
            };
        },
        methods: {
            login() {
                EventBus.$emit('prompt-login');
            },
            signin() {
                EventBus.$emit('prompt-signin');
            },
            logout() {
                this.$store.dispatch('logoutUser');
                window.location = '/logout';
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
        },
        components: {
            register_,
        },
        //定义组件的计算属性
        computed: {
            // 从 Vuex 中获取用户加载状态
            userLoadStatus(){
                if (this.$store.getters.getUserLoadStatus == 1){

                }else if(this.$store.getters.getUserLoadStatus == 2){
                    this.$message({
                        message: "User loaded successfully!",
                        type: 'success'
                    });
                }else{
                    this.$message({
                        message: "User loaded failed!",
                        type: 'danger'
                    });
                }
                return this.$store.getters.getUserLoadStatus;
            },
            // 从 Vuex 中获取用户信息
            user(){
                return this.$store.getters.getUser;
            },
        }
    }
</script>