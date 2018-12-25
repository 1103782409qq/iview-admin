<template>
    <div>
        <p>Header</p>
        <Input v-for="(item, index) in lan.HOME.HEADER" :key="index+'HEADER'" v-model="lan.HOME.HEADER[index]"
               class="input-css"></Input>
        <Input style="display: inline-block;" v-show="addB.addBool1" v-model="formAddD.formAddData1" class="input-css"></Input>
        <Button  style="display: inline-block;" type="primary"  v-show="!addB.addBool1" @click="addB.addBool1=true;formAddD.formAddData1=''">add</Button>
        <Button  style="margin-left: 30px;display: inline-block;" type="primary"  v-show="addB.addBool1" @click="addB.addBool1=false;confirmFormData(1)">confirm</Button>
        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>TOPAREA.LEFT</p>
        <Input v-for="(item, index) in lan.HOME.TOPAREA.LEFT" :key="index+'TOPAREA.LEFT'"
               v-model="lan.HOME.TOPAREA.LEFT[index]" class="input-css"></Input>
        <Input style="display: inline-block;" v-show="addB.addBool2" v-model="formAddD.formAddData2" class="input-css"></Input>
        <Button  style="display: inline-block;" type="primary"  v-show="!addB.addBool2" @click="addB.addBool2=true;formAddD.formAddData2=''">add</Button>
        <Button  style="margin-left: 30px;display: inline-block;" type="primary"  v-show="addB.addBool2" @click="addB.addBool2=false;confirmFormData(2)">confirm</Button>
        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>TOPAREA.RIGHT</p>
        <Input v-for="(item, index) in lan.HOME.TOPAREA.RIGHT" :key="index+'TOPAREA.RIGHT'"
               v-model="lan.HOME.TOPAREA.RIGHT[index]" class="input-css"></Input>
        <Input style="display: inline-block;" v-show="addB.addBool3" v-model="formAddD.formAddData3" class="input-css"></Input>
        <Button  style="display: inline-block;" type="primary"  v-show="!addB.addBool3" @click="addB.addBool3=true;formAddD.formAddData3=''">add</Button>
        <Button  style="margin-left: 30px;display: inline-block;" type="primary"  v-show="addB.addBool3" @click="addB.addBool3=false;confirmFormData(3)">confirm</Button>
        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>CONTENT1</p>
        <Input v-for="(item, index) in lan.HOME.CONTENT1" :key="index+'CONTENT1'"
               v-model="lan.HOME.CONTENT1[index]" class="input-css"></Input>
        <Input style="display: inline-block;" v-show="addB.addBool4" v-model="formAddD.formAddData4" class="input-css"></Input>
        <Button  style="display: inline-block;" type="primary"  v-show="!addB.addBool4" @click="addB.addBool4=true;formAddD.formAddData4=''">add</Button>
        <Button  style="margin-left: 30px;display: inline-block;" type="primary"  v-show="addB.addBool4" @click="addB.addBool4=false;confirmFormData(4)">confirm</Button>
        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>CONTENT2</p>
        <Input v-for="(item, index) in lan.HOME.CONTENT2" :key="index+'CONTENT2'"
               v-model="lan.HOME.CONTENT2[index]" class="input-css"></Input>
        <Input style="display: inline-block;" v-show="addB.addBool5" v-model="formAddD.formAddData5" class="input-css"></Input>
        <Button  style="display: inline-block;" type="primary"  v-show="!addB.addBool5" @click="addB.addBool5=true;formAddD.formAddData5=''">add</Button>
        <Button  style="margin-left: 30px;display: inline-block;" type="primary"  v-show="addB.addBool5" @click="addB.addBool5=false;confirmFormData(5)">confirm</Button>
        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>CONTENT3</p>
        <Input v-for="(item, index) in lan.HOME.CONTENT3" :key="index+'CONTENT3'"
               v-model="lan.HOME.CONTENT3[index]" class="input-css"></Input>
        <Input style="display: inline-block;" v-show="addB.addBool6" v-model="formAddD.formAddData6" class="input-css"></Input>
        <Button  style="display: inline-block;" type="primary"  v-show="!addB.addBool6" @click="addB.addBool6=true;formAddD.formAddData6=''">add</Button>
        <Button  style="margin-left: 30px;display: inline-block;" type="primary"  v-show="addB.addBool6" @click="addB.addBool6=false;confirmFormData(6)">confirm</Button>
        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>FOOTER</p>
        <Input v-for="(item, index) in lan.HOME.FOOTER" :key="index+'FOOTER'"
               v-model="lan.HOME.FOOTER[index]" class="input-css"></Input>
        <Input style="display: inline-block;" v-show="addB.addBool7" v-model="formAddD.formAddData7" class="input-css"></Input>
        <Button  style="display: inline-block;" type="primary"  v-show="!addB.addBool7" @click="addB.addBool7=true;formAddD.formAddData7=''">add</Button>
        <Button  style="margin-left: 30px;display: inline-block;" type="primary"  v-show="addB.addBool7" @click="addB.addBool7=false;confirmFormData(7)">confirm</Button>
        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>ERRMSG</p>
        <div v-for="(item, index) in lan.HOME.ERRMSG" :key="index+'ERRMSG'" style="width: 300px;display: inline-block;">
            <span>{{lan.HOME.ERRMSG[index].code}}</span>
            <Input
                   v-model="lan.HOME.ERRMSG[index].msg" class="input-css"></Input>
        </div>
        <div style="display: inline-block;">
            <Input style="display: inline-block;width: 50px" v-show="errMsgBool" v-model="addMsgData.code" class=""></Input>
            <Input style="display: inline-block;" v-show="errMsgBool" v-model="addMsgData.msg" class="input-css"></Input>
        </div>
        <Button  style="display: inline-block;" type="primary"  v-show="!errMsgBool" @click="addErrData()">add</Button>
        <Button  style="margin-left: 30px;display: inline-block;" type="primary"  v-show="errMsgBool" @click="confirmErrData()">confirm</Button>


        <div style="display: flex;justify-content:flex-end">
    <Button type="primary" @click="submitLan(lan)">提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</Button>
    <Button type="primary" style="margin-left: 100px" @click="gotoFront()">查看前台</Button>
</div>


    </div>

</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        // name: 'china',
        data () {
            return {
                value: '',
                lan: {
                    'HOME': {
                        'TITLE': '你好',
                        'SELECT': '更改语言',
                        'HEADER': {},
                        'TOPAREA': {
                            'LEFT': {},
                            'RIGHT': {}
                        },
                        'CONTENT1': {},
                        'CONTENT2': {},
                        'CONTENT3': {},
                        'FOOTER': {},
                        'ERRMSG':[]
                    }
                },
                errMsgBool:false,
                addB:{
                    addBool1:false,
                    addBool2:false,
                    addBool3:false,
                    addBool4:false,
                    addBool5:false,
                    addBool6:false,
                    addBool7:false,

                },
                formAddD:{
                    formAddData1:'',
                    formAddData2:'',
                    formAddData3:'',
                    formAddData4:'',
                    formAddData5:'',
                    formAddData6:'',
                    formAddData7:'',

                },
                addMsgData:{
                    code:'',
                    msg:''
                },
                lanType:''
            };
        },
        mounted () {
            switch (this.$route.name) {
                case 'china':
                    this.lanType='zh';
                    break;
                case 'english':
                    this.lanType='en';
                    break;
                case 'japan':
                    this.lanType='ja';
                    break;
                case 'korea':
                    this.lanType='ko';
                    break;
                case 'russia':
                    this.lanType='ru';
                    break;
            }
            this.getMsg();
        },
        watch:{
            $route(to,from){
                switch (to.name) {
                    case 'china':
                        this.lanType='zh';
                        break;
                    case 'english':
                        this.lanType='en';
                        break;
                    case 'japan':
                        this.lanType='ja';
                        break;
                    case 'korea':
                        this.lanType='ko';
                        break;
                    case 'russia':
                        this.lanType='ru';
                        break;
                }
                this.getMsg();
            }
        },
        methods: {
            ...mapActions([
                'handleLogin',
                'getUserInfo',
                'getLan',
                'setLan'
            ]),
            submitLan (val) {
                var type = this.lanType;
                var content = this.lan;
                this.setLan({type, content}).then(res => {
                    if (res.data.errcode === '0') {
                        this.$Message.success('submit success');
                    } else {
                        this.$Message.success('submit error');
                    }
                });
            },
            addErrData(){
                this.errMsgBool=true;
                this.addMsgData={
                    code:'',
                    msg:''
                }
            },
            confirmFormData(n){
                switch (n) {
                    case 1:
                        this.lan.HOME.HEADER.push(JSON.parse(JSON.stringify(this.formAddD.formAddData1)));
                        break;
                    case 2:
                        this.lan.HOME.TOPAREA.LEFT.push(JSON.parse(JSON.stringify(this.formAddD.formAddData2)));
                        break;
                    case 3:
                        this.lan.HOME.TOPAREA.RIGHT.push(JSON.parse(JSON.stringify(this.formAddD.formAddData3)));
                        break;
                    case 4:
                        this.lan.HOME.CONTENT1.push(JSON.parse(JSON.stringify(this.formAddD.formAddData4)));
                        break;
                    case 5:
                        this.lan.HOME.CONTENT2.push(JSON.parse(JSON.stringify(this.formAddD.formAddData5)));
                        break;
                    case 6:
                        this.lan.HOME.CONTENT3.push(JSON.parse(JSON.stringify(this.formAddD.formAddData6)));
                        break;
                    case 7:
                        this.lan.HOME.FOOTER.push(JSON.parse(JSON.stringify(this.formAddD.formAddData7)));
                        break;
                }
            },
            confirmErrData(){
                this.lan.HOME.ERRMSG.push(JSON.parse(JSON.stringify(this.addMsgData)));
                this.errMsgBool=!this.errMsgBool;
            },
            getMsg () {
                var d = this.lanType;
                this.getLan({d}).then(res => {
                    if (res.data.errcode === '0') {
                        this.lan = res.data.data;
                        // this.lan.HOME.ERRMSG = [
                        //     {code:10001,msg:'签名校验失败'},
                        //     {code:10002,msg:'非法用户'},
                        //     {code:10003,msg:'请求失败'},
                        //
                        //
                        //     {code:20001,msg:'登录邮箱必填'},
                        //     {code:20002,msg:'登录邮箱格式错误'},
                        //     {code:20003,msg:'登录邮箱已经占用'},
                        //     {code:20004,msg:'登录密码必填'},
                        //     {code:20011,msg:'登录密码至少8位'},
                        //     {code:20005,msg:'邮箱验证码必填'},
                        //     {code:20006,msg:'手机号必填'},
                        //     {code:20007,msg:'手机号已经占用'},
                        //     {code:20008,msg:'验证码校验失败'},
                        //     {code:20009,msg:'非法注册入口'},
                        //     {code:20010,msg:'注册成功'},
                        //
                        //
                        //
                        //     {code:30001,msg:'用户不存在'},
                        //     {code:30002,msg:'您已经开启了谷歌二次验证,请填写二次验证码'},
                        //     {code:30003,msg:'二次验证检验失败'},
                        //     {code:30004,msg:'密码错误'},
                        //     {code:30005,msg:'登陆成功'},
                        //     {code:30006,msg:'登陆成功,其他客户端登陆失效'},
                        //
                        //
                        //
                        //
                        //     {code:40001,msg:'请选择用户'},
                        //     {code:40002,msg:'新密码不能为空'},
                        //     {code:40003,msg:'修改密码成功'},
                        //
                        //
                        //     {code:50001,msg:'旧密码错误'},
                        //     {code:50002,msg:'修改基本信息成功'},
                        //
                        //
                        //     {code:60001,msg:'账户不存在'},
                        //
                        //
                        //     {code:70001,msg:'用户没有绑定钱包地址'},
                        //
                        //
                        //     {code:80001,msg:'请选择提币用户'},
                        //     {code:80002,msg:'请选择提币类型'},
                        //     {code:80003,msg:'请填写提币地址'},
                        //     {code:80004,msg:'请填写提币数量'},
                        //     {code:80005,msg:'无效的提币类型'},
                        //     {code:80006,msg:'提币失败,您的余额不够支出手续费'},
                        //     {code:80007,msg:'提币限制'},
                        //     {code:80008,msg:'提币申请失败,请重试'},
                        //     {code:80009,msg:'提币申请成功,请等待审核'},
                        //
                        //
                        //     {code:90001,msg:'资产不足,无法下单'},
                        //     {code:90002,msg:'交易成功'},
                        //
                        //
                        //     {code:11001,msg:'请填写邮箱/手机号'},
                        //     {code:11002,msg:'未知的场景'},
                        //     {code:11003,msg:'请输入正确手机号'},
                        //     {code:11004,msg:'发送失败,请重试'},
                        //     {code:11005,msg:'验证码已经发送,请注意查收'},
                        //
                        //
                        //     {code:12001,msg:'验证码不能为空'},
                        //     {code:12002,msg:'验证码校验失败'},
                        //     {code:12003,msg:'校验成功'},
                        //
                        //     {code:13001,msg:'请选择设置止损/盈的平仓订单'},
                        //     {code:13002,msg:'请填写止损/止盈价位'},
                        //     {code:13003,msg:'请求类型不能为空'},
                        //     {code:13004,msg:'止损价格非法'},
                        //     {code:13005,msg:'止盈价格非法'},
                        //     {code:13006,msg:'设置成功'},
                        //
                        //
                        //     {code:14001,msg:'请选择平仓订单'},
                        //     {code:14002,msg:'平仓成功'},
                        //
                        //
                        //     {code:15001,msg:'您尚未绑定二次验证'},
                        //
                        //
                        //     {code:16001,msg:'请选择问题类型'},
                        //     {code:16002,msg:'请填写问题内容'},
                        //     {code:16003,msg:'反馈成功'},
                        //     {code:16004,msg:'反馈失败'},
                        //
                        // ];
                        // console.log(this.lan)

                    }
                });
            },
            gotoFront () {
                window.open('http://test.bex500.com')
            }
        }
    };
</script>
<style>
    .input-css {
        width: 230px;
        margin: 10px;
    }
</style>
