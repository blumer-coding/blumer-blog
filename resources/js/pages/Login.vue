<template>
    <div>
        <el-link href="/auth/github" type="danger">Log In With Github</el-link>
        <el-link href="/auth/qq" type="primary"> Log In With QQ</el-link>
        <el-link href="/auth/wechat-web" type="success">Log In With Wechat</el-link>
        <el-link href="/auth/weibo" type="warning">Log In With Weibo</el-link>
    </div>
</template>
<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>