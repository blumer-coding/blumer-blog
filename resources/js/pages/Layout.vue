<style type="">
    #chang-jian-ye-mian-bu-ju + .demo-container .el-footer, #chang-jian-ye-mian-bu-ju + .demo-container .el-header {
        text-align: center;
    }
    #chang-jian-ye-mian-bu-ju + .demo-container .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
     .app{
         font-family: "microsoft yahei";
     }
    #content{
        background-color: #f9f9f9;
        padding: 30px 0;
    }
    .navBarWrap {
        position:fixed;
        top:0;
        z-index:999;
        width: 100%;
    }
</style>

<template>
    <div id="app-layout" class="app">
        <el-container>
            <el-header>
                <navigation></navigation>
            </el-header>
            <el-row type="flex" justify="center" id="content">
                <el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </el-container>
        <login-modal></login-modal>
    </div>
</template>

<script>
    import Navigation from '../components/global/Navigation.vue';
    import LoginModal from '../components/global/LoginModal.vue';
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                minHeight: 0,
                navBarFixed: false
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
            Navigation,
            LoginModal,
        },
        created(){
            this.$store.dispatch( 'loadUser' );
        },
    }
</script>