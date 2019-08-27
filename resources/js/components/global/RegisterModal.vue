<template>
    <div class="">
        <el-drawer
                title="用户注册"
                :before-close="handleClose"
                :visible.sync="dialog"
                direction="ttb"
                custom-class="demo-drawer"
                ref="drawer"
                size="30%"
        >
            <div class="demo-drawer__content">
                <el-row :gutter="10">
                    <el-form :model="form">
                    <el-col :xs="4" :sm="6" :md="8" :lg="9">
                        <el-form-item label="用户名" :label-width="formLabelWidth">
                            <el-input
                                    placeholder="请输入用户名"
                                    suffix-icon="el-icon-user"
                                    v-model="name">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9">
                        <el-form-item label="邮箱" :label-width="formLabelWidth">
                            <el-input
                                    placeholder="请输入邮箱"
                                    suffix-icon="el-icon-email"
                                    v-model="email">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9">
                        <el-form-item label="密码" :label-width="formLabelWidth">
                            <el-input
                                    placeholder="请输入密码"
                                    suffix-icon="el-icon-user"
                                    v-model="pwd">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9">
                        <el-form-item label="确认密码" :label-width="formLabelWidth">
                            <el-input
                                    placeholder="请确认密码"
                                    suffix-icon="el-icon-user"
                                    v-model="pwdcfm">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    </el-form>
                </el-row>
                <div class="demo-drawer__footer">
                    <el-button @click="dialog = false">取 消</el-button>
                    <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
                </div>
            </div>
        </el-drawer>
        <span
                v-show="registerStatus == 1">
                </span>
        <span
                v-show="registerStatus == 2">
                </span>
        <span
                v-show="registerStatus == 3">
        </span>
    </div>
</template>
<script>
    import { EventBus } from '../../event-bus.js';
    export default {
        name: "Register",
        data() {
            return {
                dialog: false,
                table: false,
                loading: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '80px',
                // fullscreenLoading: false,
                loader:'',
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
            openFullScreen2() {
                this.loader = this.$loading({
                    lock: true,
                    text: '注册中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            },
            handleClose(done) {
                this.$confirm('确定要提交表单吗？')
                    .then(_ => {
                        if (this.validateRegister()) {
                            this.$store.dispatch('register', {
                                name: this.name,
                                pwd: this.pwd,
                                pwdcfm: this.pwdcfm,
                                email: this.email,
                            });
                        }
                    })
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
        },
        computed: {
            registerStatus(){
                if (this.$store.getters.getRegisterStatus == 1){
                    this.openFullScreen2();
                }
                if (this.$store.getters.getRegisterStatus == 2){
                    this.loader.close();
                    this.openMessage('注册成功！','success');
                    this.dialog=false;
                    this.$router.push('/');
                }
                if (this.$store.getters.getRegisterStatus == 3){
                    this.loader.close();
                    this.openMessage('注册失败!可能原因:1.邮箱已被注册!','error');
                }
                return this.$store.getters.getRegisterStatus;
            }
        },
        mounted() {
            EventBus.$on('prompt-signin', function () {
                this.dialog = true;
            }.bind(this));
        },
    }
</script>

<style scoped>

</style>