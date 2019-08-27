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
</style>

<template>
    <el-dialog title="用户登录" :visible.sync="dialogFormVisible">
        <el-container>
        <el-row :gutter="10">
            <el-form :model="form">
                <el-col :xs="4" :sm="6" :md="8" :lg="24">
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input
                                placeholder="请输入邮箱"
                                suffix-icon="el-icon-email"
                                v-model="email">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="24">
                    <el-form-item label="密码" :label-width="formLabelWidth">
                        <el-input
                                placeholder="请输入密码"
                                suffix-icon="el-icon-user"
                                v-model="pwd">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-form>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :offset="3">
                <span>第三方登录:</span>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                <el-link href="/auth/github" v-on:click.stop="">
                    <el-image style="width: 30px; height: 30px" src="/img/github/github-login.jpg"/>
                </el-link>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                <el-link href="/auth/weixin-web" v-on:click.stop="">
                    <el-image style="width: 30px; height: 30px" src="/img/github/github-login.jpg"/>
                </el-link>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                <el-link href="/auth/qq" v-on:click.stop="">
                    <el-image style="width: 30px; height: 30px" src="/img/github/github-login.jpg"/></el-link>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                <el-link href="/auth/weibo" v-on:click.stop="">
                    <el-image style="width: 30px; height: 30px" src="/img/weibo/weibo-login.jpg"/>
                </el-link>
            </el-col>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
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
                formLabelWidth: '120px',
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