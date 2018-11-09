<template>
    <div>
        <p>Header</p>
        <Input v-for="(item, index) in lan.HOME.HEADER" :key="index+'HEADER'" v-model="lan.HOME.HEADER[index]"
               class="input-css"></Input>
        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>TOPAREA.LEFT</p>
        <Input v-for="(item, index) in lan.HOME.TOPAREA.LEFT" :key="index+'TOPAREA.LEFT'"
               v-model="lan.HOME.TOPAREA.LEFT[index]" class="input-css"></Input>

        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>TOPAREA.RIGHT</p>
        <Input v-for="(item, index) in lan.HOME.TOPAREA.RIGHT" :key="index+'TOPAREA.RIGHT'"
               v-model="lan.HOME.TOPAREA.RIGHT[index]" class="input-css"></Input>

        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>CONTENT1</p>
        <Input v-for="(item, index) in lan.HOME.CONTENT1" :key="index+'CONTENT1'"
               v-model="lan.HOME.CONTENT1[index]" class="input-css"></Input>

        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>CONTENT2</p>
        <Input v-for="(item, index) in lan.HOME.CONTENT2" :key="index+'CONTENT2'"
               v-model="lan.HOME.CONTENT2[index]" class="input-css"></Input>

        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>CONTENT3</p>
        <Input v-for="(item, index) in lan.HOME.CONTENT3" :key="index+'CONTENT3'"
               v-model="lan.HOME.CONTENT3[index]" class="input-css"></Input>

        <p>————————————————————————————————————————分割线——————————————————————————————————————</p>
        <p>FOOTER</p>
        <Input v-for="(item, index) in lan.HOME.FOOTER" :key="index+'FOOTER'"
               v-model="lan.HOME.FOOTER[index]" class="input-css"></Input>

        <div style="display: flex;justify-content:flex-end">
            <Button type="primary" @click="submitLan(lan)">提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</Button>
            <Button type="primary" style="margin-left: 100px" @click="gotoFront()">查看前台</Button>
        </div>
    </div>

</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'japan',
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
                        'FOOTER': {}
                    }
                }
            };
        },
        mounted () {
            this.getMsg();
        },
        methods: {
            ...mapActions([
                'handleLogin',
                'getUserInfo',
                'getLan',
                'setLan'
            ]),
            submitLan (val) {
                var type = 'ja';
                var content = this.lan;
                this.setLan({type, content}).then(res => {
                    if (res.data.code === '0') {
                        this.$Message.success('submit success');
                    } else {
                        this.$Message.success('submit error');
                    }
                });
            },
            getMsg () {
                var d = 'ja';
                this.getLan({d}).then(res => {
                    if (res.data.code === '0') {
                        this.lan = res.data.data;
                    }
                });
            },
            gotoFront () {
                window.open('http://65.49.227.65')
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
