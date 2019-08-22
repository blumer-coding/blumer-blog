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

</style>

<template>
    <div id="app-layout">
        <el-container>
            <el-header>
                <navigation></navigation>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '../components/global/Navigation.vue';
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
        components: {
            Navigation
        },
        created(){
            this.$store.dispatch( 'loadBlogs' );
            this.$store.dispatch( 'loadUser' );
        }
    }
</script>