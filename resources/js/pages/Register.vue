<template>
    <div class="">
        用户注册：
        <el-input
                placeholder="请输入用户名"
                suffix-icon="el-icon-user"
                v-model="name">
        </el-input>
        <el-input
                placeholder="请输入密码"
                suffix-icon="el-icon-user"
                v-model="pwd">
        </el-input>
        <el-input
                placeholder="请确认密码"
                suffix-icon="el-icon-user"
                v-model="pwdcfm">
        </el-input>
        <el-input
                placeholder="请输入邮箱"
                suffix-icon="el-icon-email"
                v-model="email">
        </el-input>
        <div class="large-12 medium-12 small-12 cell">
            <a class="button" v-on:click="submitRegister()">提交</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Register",
        data() {
            return {
                name: '',
                pwd: '',
                pwdcfm: '',
                email: '',
            }
        },
        methods: {
            submitRegister: function () {
                this.$store.dispatch('register', {
                    name: this.name,
                    pwd: this.pwd,
                    pwdcfm: this.pwdcfm,
                    email: this.email,
                });
            }
        }
    }
</script>

<style scoped>

</style>