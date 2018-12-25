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
        // name: 'russia',
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
                }
            };
        },
        mounted () {
            this.getMsg();
        },
        watch:{
            $route(to,from){
                console.log(to.name);
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
                var type = 'ru';
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
                var d = 'ru';
                this.getLan({d}).then(res => {
                    if (res.data.errcode === '0') {
                        this.lan = res.data.data;

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
