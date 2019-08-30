<style lang="scss">
    div#login-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .6);

        div.login-box {
            max-width: 370px;
            min-width: 320px;
            padding: 0 10px;
            background-color: #fff;
            border: 1px solid #ddd;
            -webkit-box-shadow: 0 1px 3px rgba(50, 50, 50, 0.08);
            box-shadow: 0 1px 3px rgba(50, 50, 50, 0.08);
            -webkit-border-radius: 4px;
            border-radius: 4px;
            font-size: 16px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            a {
                display: block;
                margin: auto;
                width: 230px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }
    }
    .bl-right{
        float:right;
    }
</style>

<template>
    <el-dialog title="用户登录" :visible.sync="dialogFormVisible">
        <el-container style="display:block">
        <el-row>
            <el-form :model="form">
                <el-col :xs="42" :sm="24" :md="24" :lg="24">
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input
                                placeholder="请输入邮箱"
                                suffix-icon="el-icon-email"
                                v-model="email">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-form-item label="密码" :label-width="formLabelWidth">
                        <el-input
                                placeholder="请输入密码"
                                suffix-icon="el-icon-user"
                                v-model="pwd">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-form>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :offset="1">
                <span>第三方登录:</span>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" class="bl-right">
                <el-link href="/auth/github" v-on:click.stop="">
                    <el-image style="width: 30px; height: 30px" src="/img/github/github-login.jpg"/>
                </el-link>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" class="bl-right">
                <el-link href="/auth/weixin-web" v-on:click.stop="">
                    <el-image style="width: 30px; height: 30px" src="/img/weixin/weixin-login.jpg"/>
                </el-link>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" class="bl-right">
                <el-link href="/auth/qq" v-on:click.stop="">
                    <el-image style="width: 30px; height: 30px" src="/img/qq/qq-login.jpg"/></el-link>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" class="bl-right">
                <el-link href="/auth/weibo" v-on:click.stop="">
                    <el-image style="width: 30px; height: 30px" src="/img/weibo/weibo-login.jpg"/>
                </el-link>
            </el-col>
            <el-col :xs="114" :sm="11" :md="11" :lg="11" :offset="1" style="margin-top:5px;">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
            </el-col>
            <el-col :xs="11" :sm="11" :md="11" :lg="11" style="margin-top:5px;">
                    <el-button class="bl-right" type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </el-col>
        </el-row>
        </el-container>

    </el-dialog>
</template>
<script>
    import { EventBus } from '../../event-bus.js';
    export default {
        data() {
            return {
                dialogFormVisible: false,
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
                formLabelWidth: '40px',
                email: '',
                pwd: '',
                validations: {
                    email: {
                        id_valid: true,
                        text: ''
                    },
                    pwd: {
                        id_valid: true,
                        text: ''
                    },
                }
            }
        },
        mounted() {
            EventBus.$on('prompt-login', function () {
                this.dialogFormVisible = true;
            }.bind(this));
        }
    }
</script>