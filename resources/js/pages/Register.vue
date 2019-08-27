<template>
    <div class="">
        用户注册:
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
                validations:{
                    name:{
                        id_valid:true,
                        text:''
                    },
                    pwd:{
                        id_valid:true,
                        text:''
                    },
                    pwdcfm:{
                        id_valid:true,
                        text:''
                    },
                    email:{
                        id_valid:true,
                        text:''
                    },
                }
            }
        },
        methods: {
            submitRegister: function () {
                if(this.validateRegister()) {
                    this.$store.dispatch('register', {
                        name: this.name,
                        pwd: this.pwd,
                        pwdcfm: this.pwdcfm,
                        email: this.email,
                    });
                }
            },
            openMessage:function(title,type){
                this.$message({
                    message:title,
                    type: type
                });
            },
            validateRegister: function () {
                let validateRegisterForm  = true;
                if(this.name.trim() === ''){
                    validateRegisterForm = false;
                    this.validations.name.is_valid = false;
                    this.validations.name.text = '请输入用户名';
                    this.openMessage(this.validations.name.text,'warning');
                    return validateRegisterForm;
                }
                if(!this.name.trim().match(/(^[a-zA-Z0-9_-]{6,12}$)/)){
                    validateRegisterForm = false;
                    this.validations.name.is_valid = false;
                    this.validations.name.text = '用户名必须 6到12位,字母,数字,下划线,减号';
                    this.openMessage(this.validations.name.text,'warning');
                    return validateRegisterForm;
                }
                if(this.pwd.trim() === ''){
                    validateRegisterForm = false;
                    this.validations.pwd.is_valid = false;
                    this.validations.pwd.text = '请输入密码';
                    this.openMessage(this.validations.pwd.text,'warning');
                    return validateRegisterForm;
                }
                if(!this.pwd.trim().match(/(^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{6,20}$)/)){
                    validateRegisterForm = false;
                    this.validations.pwd.is_valid = false;
                    this.validations.pwd.text = '密码最少6位，要同时含有数字和字母';
                    this.openMessage(this.validations.pwd.text,'warning');
                    return validateRegisterForm;
                }
                if(this.pwdcfm.trim() === ''){
                    validateRegisterForm = false;
                    this.validations.pwdcfm.is_valid = false;
                    this.validations.pwdcfm.text = '请确认密码';
                    this.openMessage(this.validations.pwdcfm.text,'warning');
                    return validateRegisterForm;
                }
                if(this.pwdcfm.trim() !== this.pwd.trim()){
                    validateRegisterForm = false;
                    this.validations.pwdcfm.is_valid = false;
                    this.validations.pwdcfm.text = '两次密码不一致,无法提交';
                    this.openMessage(this.validations.pwdcfm.text,'warning');
                    return validateRegisterForm;
                }
                if(this.email.trim() ==='' || !this.email.match(/(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)/)){
                    validateRegisterForm = false;
                    this.validations.email.is_valid = false;
                    this.validations.email.text = '请输入有效的邮件地址';
                    this.openMessage(this.validations.email.text,'warning');
                    return validateRegisterForm;
                }
                return validateRegisterForm;
            }
        }
    }
</script>

<style scoped>

</style>